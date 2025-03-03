import { useState, useEffect, useRef } from "react";
import "./Navbar.css";

import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  
  const menuRef = useRef(null);
  const location = useLocation(); // Get the current path

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    setActiveDropdown(null);
    document.body.style.overflow = menuOpen ? "auto" : "hidden";
  };

  const toggleDropdown = (menu, event) => {
    event.stopPropagation();
    
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);



  // Menu items
  const menuItems = ["Home", "Events", "News", "Engage", "Gallery"];

  // Helper function to check if the menu item is active
  const isActive = (item) => {
    if (item === "Home" && location.pathname === "/") return true;
    return location.pathname.startsWith(`/${item}`);
  };

  return (
    <>
      <nav className="nav" ref={menuRef}>
        <div className="nav-logo">AlumniWebsite</div>

        {/* Desktop Menu */}
        <ul className="nav-menu">
          {menuItems.map((item) => (
            <li
              key={item}
              className={`nav-item ${activeDropdown === item ? "active" : ""} ${
                isActive(item) ? "active-page" : ""
              }`}
              onClick={(e) =>
                item === "Home" || item === "Gallery"
                  ? null
                  : toggleDropdown(item, e)
              }
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
                  <span
                    className={`arrow ${
                      activeDropdown === item ? "rotate" : ""
                    }`}
                  >
                    {activeDropdown === item ? "▲" : "▼"}
                  </span>
                  {activeDropdown === item && (
                    <ul className="dropdown">
                      {item === "Events" ? (
                        <>
                          <li>
                            <Link to="/Events/alumni">Alumni Events</Link>
                          </li>
                          <hr />
                          <li>
                            <Link to="/Events/students">Student Events</Link>
                          </li>
                          <hr />
                          <li>
                            <Link to="/Events/department">Department Events</Link>
                          </li>
                          <hr />
                          <li>
                            <Link to="/Events/university">University Events</Link>
                          </li>
                        </>
                      ) : item === "News" ? (
                        <>
                          <li>
                            <Link to="/News/alumni">Alumni Achievements</Link>
                          </li>
                          <hr />
                          <li>
                            <Link to="/News/students">Student Achievements</Link>
                          </li>
                          <hr />
                          <li>
                            <Link to="/News/department">Department Achievements</Link>
                          </li>
                          <hr />
                          <li>
                            <Link to="/News/university">University Achievements</Link>
                          </li>
                        </>
                      ) : item === "Engage" ? (
                        <>
                          <li>
                            <Link to="/Engage/discussion">Discussion Forum</Link>
                          </li>
                          <hr />
                          <li>
                            <Link to="/Engage/internship">Internship/Job Opportunities</Link>
                          </li>
                          <hr />
                          <li>
                            <Link to="/Engage/recommendation">Recommendation</Link>
                          </li>
                          <hr />
                          <li>
                            <Link to="/Engage/contributions">Contributions</Link>
                          </li>
                        </>
                      ) : (
                        <>
                          <li>
                            <Link to={`/${item}`}>{item} Page 1</Link>
                          </li>
                          <li>
                            <Link to={`/${item}/more`}>{item} Page 2</Link>
                          </li>
                        </>
                      )}
                    </ul>
                  )}

                </>
              )}
            </li>
          ))}
          <li className="alumni-login">
            <Link to="/auth">Alumni Login</Link>
          </li>
          <li className="alumni-login">
            Admin Login
          </li>
        </ul>

        {/* Hamburger Menu (Mobile) */}
        <div
          className={`hamburger ${menuOpen ? "active" : ""}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>

      {/* Overlay to close mobile menu */}
      {menuOpen && <div className="body-overlay" onClick={toggleMenu}></div>}

      {/* Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
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
                    className={`menu-item ${
                      activeDropdown === item ? "active" : ""
                    } ${isActive(item) ? "active-page" : ""}`}
                    onClick={(e) => toggleDropdown(item, e)}
                  >
                    {item}
                    <span
                      className={`arrow ${
                        activeDropdown === item ? "rotate" : ""
                      }`}
                    >
                      {activeDropdown === item ? "▲" : "▼"}
                    </span>
                  </div>
                  {activeDropdown === item && (
                    <ul className={`mobile-dropdown ${activeDropdown === item ? "open" : ""}`}>
                      {item === "Events" ? (
                        <>
                          <li>
                            <Link to="/Events/alumni" onClick={toggleMenu}>
                              Alumni Events
                            </Link>
                          </li>
                          <li>
                            <Link to="/Events/students" onClick={toggleMenu}>
                              Student Events
                            </Link>
                          </li>
                          <li>
                            <Link to="/Events/department" onClick={toggleMenu}>
                              Department Events
                            </Link>
                          </li>
                          <li>
                            <Link to="/Events/university" onClick={toggleMenu}>
                              University Events
                            </Link>
                          </li>
                        </>
                      ) : item === "News" ? (
                        <>
                          <li>
                            <Link to="/News/alumni" onClick={toggleMenu}>
                              Alumni Achievement
                            </Link>
                          </li>
                          <li>
                            <Link to="/News/students" onClick={toggleMenu}>
                              Student Achievement
                            </Link>
                          </li>
                          <li>
                            <Link to="/News/department" onClick={toggleMenu}>
                              Department Achievement
                            </Link>
                          </li>
                          <li>
                            <Link to="/News/university" onClick={toggleMenu}>
                              University Achievement
                            </Link>
                          </li>
                        </>
                      ) : item === "Engage" ? (
                        <>
                          <li>
                            <Link to="/Engage/discussion" onClick={toggleMenu}>
                              Discussion Forum
                            </Link>
                          </li>
                          <li>
                            <Link to="/Engage/internship" onClick={toggleMenu}>
                              Internship/Job Opportunities
                            </Link>
                          </li>
                          <li>
                            <Link to="/Engage/recommendation" onClick={toggleMenu}>
                              Recommendation
                            </Link>
                          </li>
                          <li>
                            <Link to="/Engage/contributions" onClick={toggleMenu}>
                              Contributions
                            </Link>
                          </li>
                        </>
                      ) : (
                        <>
                          <li>
                            <Link to={`/${item}`} onClick={toggleMenu}>
                              {item} Submenu 1
                            </Link>
                          </li>
                          <li>
                            <Link to={`/${item}/more`} onClick={toggleMenu}>
                              {item} Submenu 2
                            </Link>
                          </li>
                        </>
                      )}
                    </ul>
                  )}

                </>
              )}
              <hr />
            </li>
          ))}
          <li className="alumni-login">
            <Link to="/auth">Alumni Login</Link>
          </li>
          <li className="alumni-login">
            Admin Login
          </li>
        </ul>
      </div>

      
    </>
  );
};

export default Navbar;
