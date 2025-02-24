import { useState } from "react";
import "./Navbar.css";
import AuthForm from "../Forms/AuthForm";  // Import your AuthForm component

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [showAuthForm, setShowAuthForm] = useState(false); // ✅ State to show AuthForm

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    setActiveDropdown(null); // Close dropdowns
    document.body.style.overflow = menuOpen ? "auto" : "hidden";
  };

  const toggleDropdown = (menu, event) => {
    event.stopPropagation();
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  const openAuthForm = () => {
    setShowAuthForm(true);  // ✅ Open AuthForm
  };

  const closeAuthForm = () => {
    setShowAuthForm(false); // ✅ Close AuthForm
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
          <li className="alumni-login" onClick={openAuthForm}>Alumni Login</li>
          <li className="alumni-login" onClick={openAuthForm}>Admin Login</li>
        </ul>

        {/* Hamburger Menu */}
        <div className={`hamburger ${menuOpen ? "active" : ""}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>

      {/* Overlay when menu is open */}
      {menuOpen && <div className="body-overlay" onClick={toggleMenu}></div>}

      {/* Mobile Menu */}
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
          <li className="alumni-login" onClick={openAuthForm}>Login</li>
          <li className="alumni-login" onClick={openAuthForm}>Admin Login</li>
        </ul>
      </div>

      {/* Show AuthForm when Login is clicked */}
      {showAuthForm && <AuthForm closeForm={closeAuthForm} />}
    </>
  );
};

export default Navbar;
