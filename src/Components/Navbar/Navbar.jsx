import { useState, useEffect, useRef } from "react";
import "./Navbar.css";
import AuthForm from "../Forms/AuthForm";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [showAuthForm, setShowAuthForm] = useState(false);
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

  const openAuthForm = () => setShowAuthForm(true);
  const closeAuthForm = () => setShowAuthForm(false);

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
                      <li>
                        <Link to={`/${item}`}>{item} Page 1</Link>
                      </li>
                      <li>
                        <Link to={`/${item}/more`}>{item} Page 2</Link>
                      </li>
                    </ul>
                  )}
                </>
              )}
            </li>
          ))}
          <li className="alumni-login" onClick={openAuthForm}>
            Alumni Login
          </li>
          <li className="alumni-login" onClick={openAuthForm}>
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
                    <ul className="mobile-dropdown">
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
                    </ul>
                  )}
                </>
              )}
              <hr />
            </li>
          ))}
          <li className="alumni-login" onClick={openAuthForm}>
            Alumni Login
          </li>
          <li className="alumni-login" onClick={openAuthForm}>
            Admin Login
          </li>
        </ul>
      </div>

      {/* AuthForm (Login Popup) */}
      {showAuthForm && <AuthForm closeForm={closeAuthForm} />}
    </>
  );
};

export default Navbar;
