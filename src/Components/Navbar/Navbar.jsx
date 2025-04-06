import { useState, useEffect, useRef } from "react";
import "./Navbar.css";
import axios from "axios"; 
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [eventCategories, setEventCategories] = useState([]); 
  const [newsCategories, setNewsCategories] = useState([]);
  const menuRef = useRef(null);
  const location = useLocation();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    setActiveDropdown(null);
    document.body.style.overflow = menuOpen ? "auto" : "hidden";
  };

  const fetchEventCategories = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:8000/api/event-categories");
      const categories = Array.isArray(response.data) ? response.data : response.data.eventCategories;
      const titles = categories.map(category => category.title);
      setEventCategories(titles);
    } catch (error) {
      console.error("Error fetching event categories:", error);
    }
  };
  
  const fetchNewsCategories = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:8000/api/news-categories");
      const categories = Array.isArray(response.data) ? response.data : response.data.newsCategories;
      const titles = categories.map(category => category.title);
      setNewsCategories(titles);
    } catch (error) {
      console.error("Error fetching news categories:", error);
    }
  };
  
  const toggleDropdown = (menu, event) => {
    event.stopPropagation();
    if (activeDropdown === menu) {
      setActiveDropdown(null);
    } else if (!activeDropdown) {
      setActiveDropdown(menu);
      if (menu === "Events") fetchEventCategories();
      if (menu === "News") fetchNewsCategories();
    }
  };

  useEffect(() => {
    const closeDropdown = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("click", closeDropdown);
    return () => document.removeEventListener("click", closeDropdown);
  }, []);  

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        document.querySelector(".nav").classList.add("scrolled");
      } else {
        document.querySelector(".nav").classList.remove("scrolled");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = ["Home", "Events", "News", "Engage", "Gallery"];

  const isActive = (item) => {
    if (item === "Home" && location.pathname === "/") return true;
    return location.pathname.startsWith(`/${item}`);
  };

  return (
    <>
      <nav className="nav" ref={menuRef}>
        <div className="nav-logo">AlumniWebsite</div>

        <ul className="nav-menu">
          {menuItems.map((item) => (
            <li
              key={item}
              className={`nav-item ${activeDropdown === item ? "active" : ""} ${
                isActive(item) ? "active-page" : ""
              }`}
              onClick={(e) => {
                e.stopPropagation();
                if (item !== "Home" && item !== "Gallery") {
                  toggleDropdown(item, e);
                }
              }}
            >
              {item === "Home" || item === "Gallery" ? (
                <Link
                  to={item === "Home" ? "/" : "/Gallery"}
                  className="block py-2 pl-3 pr-4 lg:p-0"
                >
                  {item}
                </Link>
              ) : (
                <>
                  {item}
                  <span className={`arrow ${activeDropdown === item ? "rotate" : ""}`}>
                    {activeDropdown === item ? "▲" : "▼"}
                  </span>

                  {/* Animated Dropdowns */}
                  <AnimatePresence>
                    {activeDropdown === item && (
                      <motion.ul
                        className="dropdown"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                      >
                        {item === "Events" &&
                          (eventCategories.length > 0 ? (
                            eventCategories.map((title, index) => (
                              <li key={index}>
                                <Link to={`/events/category/${index + 3}`}>{title}</Link>
                              </li>
                            ))
                          ) : (
                            <li>No categories found</li>
                          ))}
                        {item === "News" &&
                          (newsCategories.length > 0 ? (
                            newsCategories.map((title, index) => (
                              <li key={index}>
                                <Link to={`/news/category/${index + 9}`}>{title}</Link>
                              </li>
                            ))
                          ) : (
                            <li>No categories found</li>
                          ))}
                        {item === "Engage" && (
                          <>
                            <li><Link to="/Engage/discussion">Discussion Forum</Link></li>
                            <hr />
                            <li><Link to="/Engage/internship">Internship/Job Opportunities</Link></li>
                            <hr />
                            <li><Link to="/Engage/recommendation">Recommendation</Link></li>
                            <hr />
                            <li><Link to="/Engage/blogs">Blogs</Link></li>
                            <hr />
                            <li><Link to="/Engage/contributions">Contributions</Link></li>
                          </>
                        )}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </>
              )}
            </li>
          ))}
          <li className="alumni-login">
            <Link to="/auth">Alumni Login</Link>
          </li>
          <li className="alumni-login">Admin Login</li>
        </ul>

        {/* Hamburger Menu */}
        <div
          className={`hamburger ${menuOpen ? "active" : ""}`}
          onClick={toggleMenu}
        >
          <span></span><span></span><span></span>
        </div>
      </nav>

      {/* Overlay */}
      {menuOpen && <div className="body-overlay" onClick={toggleMenu}></div>}

      {/* Animated Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="mobile-menu open"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
          >
            <ul>
              {menuItems.map((item) => (
                <li key={item}>
                  {item === "Home" || item === "Gallery" ? (
                    <Link
                      to={item === "Home" ? "/" : "/Gallery"}
                      className={`menu-item ${isActive(item) ? "active-page" : ""}`}
                      onClick={toggleMenu}
                    >
                      {item}
                    </Link>
                  ) : (
                    <>
                      <div
                        className={`menu-item ${activeDropdown === item ? "active" : ""} ${isActive(item) ? "active-page" : ""}`}
                        onClick={(e) => toggleDropdown(item, e)}
                      >
                        {item}
                        <span className={`arrow ${activeDropdown === item ? "rotate" : ""}`}>
                          {activeDropdown === item ? "▲" : "▼"}
                        </span>
                      </div>

                      <AnimatePresence>
                        {activeDropdown === item && (
                          <motion.ul
                            className="mobile-dropdown open"
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            {item === "Events" &&
  (eventCategories.length > 0 ? (
    eventCategories.map((title, index) => (
      <li key={index}>
        <Link
          to={`/events/category/${index + 3}`}
          onClick={toggleMenu}
        >
          {title}
        </Link>
      </li>
    ))
  ) : (
    <li>No categories found</li>
  ))}

                            {item === "News" &&
  (newsCategories.length > 0 ? (
    newsCategories.map((title, index) => (
      <li key={index}>
        <Link
          to={`/news/category/${index + 9}`}
          onClick={toggleMenu}
        >
          {title}
        </Link>
      </li>
    ))
  ) : (
    <li>No categories found</li>
  ))}

                            {item === "Engage" && (
                              <>
                                <li><Link to="/Engage/discussion" onClick={toggleMenu}>Discussion Forum</Link></li>
                                <li><Link to="/Engage/internship" onClick={toggleMenu}>Internship/Job Opportunities</Link></li>
                                <li><Link to="/Engage/recommendation" onClick={toggleMenu}>Recommendation</Link></li>
                                <li><Link to="/Engage/contributions" onClick={toggleMenu}>Contributions</Link></li>
                              </>
                            )}
                          </motion.ul>
                        )}
                      </AnimatePresence>
                    </>
                  )}
                  <hr />
                </li>
              ))}
              <li className="alumni-login"><Link to="/auth">Alumni Login</Link></li>
              <li className="alumni-login">Admin Login</li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
