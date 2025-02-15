import { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    setActiveDropdown(null); // Close dropdowns when menu is toggled
    document.body.style.overflow = menuOpen ? "auto" : "hidden"; // Prevent scrolling
  };

  const toggleDropdown = (menu, event) => {
    event.stopPropagation(); // Prevent clicks from bubbling up and closing dropdown
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  return (
    <>
      <nav className="nav">
        <div className="nav-logo">AlumniWebsite</div>

        {/* Desktop Menu */}
        <ul className="nav-menu">
          {["Home", "Events", "News", "Engage", "Gallery"].map((item) => (
            <li
              key={item}
              className={`nav-item ${activeDropdown === item ? "active" : ""}`}
              onClick={(e) => toggleDropdown(item, e)}
            >
              {item}
              <span className={`arrow ${activeDropdown === item ? "rotate" : ""}`}>
                {activeDropdown === item ? "▲" : "▼"}
              </span>
              {activeDropdown === item && (
                <ul className="dropdown">
                  <li onClick={(e) => e.stopPropagation()}>{item} Submenu 1</li>
                  <li onClick={(e) => e.stopPropagation()}>{item} Submenu 2</li>
                </ul>
              )}
            </li>
          ))}
          <li className="alumni-login">Alumni Login</li>
          <li className="alumni-login">Admin Login</li>
        </ul>

        {/* Hamburger Menu Icon */}
        <div className={`hamburger ${menuOpen ? "active" : ""}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>

      {/* Overlay when menu is open */}
      {menuOpen && <div className="body-overlay" onClick={toggleMenu}></div>}

      {/* Full-Screen Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <ul>
          {["Home", "Events", "News", "Engage", "Gallery"].map((item) => (
            <li key={item}>
              <div
                className={`menu-item ${activeDropdown === item ? "active" : ""}`}
                onClick={(e) => toggleDropdown(item, e)}
              >
                {item}
                {["Events", "News", "Engage", "Gallery"].includes(item) && (
                  <span className={`arrow ${activeDropdown === item ? "rotate" : ""}`}>
                    {activeDropdown === item ? "▲" : "▼"}
                  </span>
                )}
              </div>
              {activeDropdown === item && (
                <ul className="mobile-dropdown">
                  <li onClick={(e) => e.stopPropagation()}>{item} Submenu 1</li>
                  <li onClick={(e) => e.stopPropagation()}>{item} Submenu 2</li>
                </ul>
              )}
              <hr />
            </li>
          ))}
          <li className="alumni-login" onClick={toggleMenu}>Alumni Login</li>
          <li className="alumni-login" onClick={toggleMenu}>Admin Login</li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
