import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track login status
  const location = useLocation();

  const scrollToTop = () => {
    window.scrollTo(0, 0); // Scroll to top
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const getLinkClass = (path) => {
    return location.pathname === path
      ? 'text-white'
      : 'hover:text-white';
  };

  // Close the menu after clicking a link
  const handleLinkClick = () => {
    setIsOpen(false);
    scrollToTop();
  };

  return (
    <div>
      <nav className="fixed font-sans top-0 left-0 w-full z-50 py-4"
       style={{ backgroundColor: "#B4D5DE" }}>
        <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
          {/* Logo and FOOTPRINTS */}
          <a href="#" className="flex items-center">
            <img
              src="https://res.cloudinary.com/ddnis6cuk/image/upload/f_auto,q_auto/v1/Alumni/vydb6bzd2vennrzyf2so"
              alt="Logo"
              className="h-10 w-10 mr-2 rounded-full"
            />
            <span className="self-center font-poppins text-xl whitespace-nowrap dark:text-[#294D89]">
              FOOTPRINTS
            </span>
          </a>

          {/* Hamburger Menu Button */}
          <button
            onClick={toggleMenu}
            type="button"
            className="inline-flex items-center p-2 ml-1 text-sm  rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="mobile-menu-2"
            aria-expanded={isOpen ? 'true' : 'false'}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className={`w-6 h-6 ${isOpen ? 'hidden' : 'block'}`}
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
            <svg
              className={`w-6 h-6 ${isOpen ? 'block' : 'hidden'}`}
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>

          {/* Collapsible Menu */}
          <div
            className={`items-center justify-between w-full lg:flex lg:w-auto lg:order-1 ${
              isOpen ? 'block' : 'hidden'
            }`}
            id="mobile-menu-2"
          >
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between w-full">
              {/* Left-Aligned Navigation Links */}
              <ul className="flex flex-col lg:flex-row lg:space-x-8 text-xl lg:ml-0">
                <li>
                  <Link
                    to="/"
                    onClick={handleLinkClick}
                    className={`block py-2 pl-3 pr-4 lg:p-0 ${getLinkClass('/')}`}
                    style={{ color: location.pathname === '/' ? '#FFFFFF' : '#294D89' }}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/Events"
                    onClick={handleLinkClick}
                    className={`block py-2 pl-3 pr-4 lg:p-0 ${getLinkClass('/Events')}`}
                    style={{ color: location.pathname === '/Events' ? '#FFFFFF' : '#294D89' }}
                  >
                    Events
                  </Link>
                </li>
                <li>
                  <Link
                    to="/News"
                    onClick={handleLinkClick}
                    className={`block py-2 pl-3 pr-4 lg:p-0 ${getLinkClass('/News')}`}
                    style={{ color: location.pathname === '/News' ? '#FFFFFF' : '#294D89' }}
                  >
                    News
                  </Link>
                </li>
                <li>
                  <Link
                    to="/Engage"
                    onClick={handleLinkClick}
                    className={`block py-2 pl-3 pr-4 lg:p-0 ${getLinkClass('/Engage')}`}
                    style={{ color: location.pathname === '/Engage' ? '#FFFFFF' : '#294D89' }}
                  >
                    Engage
                  </Link>
                </li>
                <li>
                  <Link
                    to="/About"
                    onClick={handleLinkClick}
                    className={`block py-2 pl-3 pr-4 lg:p-0 ${getLinkClass('/About')}`}
                    style={{ color: location.pathname === '/About' ? '#FFFFFF' : '#294D89' }}
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="/Gallery"
                    onClick={handleLinkClick}
                    className={`block py-2 pl-3 pr-4 lg:p-0 ${getLinkClass('/Gallery')}`}
                    style={{ color: location.pathname === '/Gallery' ? '#FFFFFF' : '#294D89' }}
                  >
                    Gallery
                  </Link>
                </li>
              </ul>

              {/* Right-Aligned Admin and Alumni Login/User Profile */}
              <div className="flex flex-col lg:flex-row lg:space-x-8 mt-4 lg:mt-0 lg:ml-8">
                <Link
                  to="/AdminLogin"
                  onClick={handleLinkClick}
                  className="text-white  bg-[#EB6F63] hover:bg-[#8A9EA0] duration-200 focus:ring-4 focus:ring-primary rounded-lg text-xl px-4 py-2  focus:outline-none"
                >
                  Admin Login
                </Link>
                {isLoggedIn ? (
                  <Link
                    to="/Profile"
                    onClick={handleLinkClick}
                    className="text-white bg-[#EB6F63] hover:bg-[#8A9EA0] duration-200 focus:ring-4  rounded-lg text-xl px-4 py-2 mt-4 lg:mt-0 lg:ml-4"
                  >
                    User Profile
                  </Link>
                ) : (
                  <Link
                    to="/AlumniLogin"
                    onClick={() => {
                      handleLinkClick();
                      setIsLoggedIn(true); // Simulate login
                    }}
                    className="text-white bg-[#EB6F63] hover:bg-[#8A9EA0] duration-200 focus:ring-4 focus:ring-primary rounded-lg text-xl px-4 py-2  focus:outline-none  mt-4 lg:mt-0 lg:ml-4"
                  >
                    Alumni Login
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
