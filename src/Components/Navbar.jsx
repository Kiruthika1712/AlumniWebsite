import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false); // Track submenu visibility
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
      : 'text-gray-700 dark:text-gray-400 hover:text-white';
  };

  return (
    <div>
      <nav className="font-playfair fixed bg-dark top-0 left-0 w-full shadow-md z-50 border-dark py-4 dark:bg-dark ">
        <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
          
        <a href="#" className="flex items-center">
          <img 
            src="https://res.cloudinary.com/ddnis6cuk/image/upload/f_auto,q_auto/v1/Alumni/vydb6bzd2vennrzyf2so" // Replace with the correct logo path
            alt="Logo" 
            className="h-10 w-10 mr-2 rounded-full" // Adjust the height, width, and spacing as needed
          />
          <span className="self-center font-playfair text-xl font-semibold whitespace-nowrap dark:text-white">
            FOOTPRINTS
          </span>
          
          
        </a>

          <div className="flex items-center lg:order-2">
            <div className="hidden mt-2 mr-4 sm:inline-block">
              <span></span>
            </div>
            <div className="font-playfair flex space-x-2">
              <Link
                to="/AdminLogin"
                onClick={scrollToTop}
                className="text-white  bg-primary hover:bg-primary-hover duration-200 focus:ring-4 focus:ring-primary font-medium rounded-lg text-xl px-4 lg:px-6 py-2 lg:py-2.5 sm:mr-2 lg:mr-0 dark:bg-primary dark:hover:bg-primary-hover focus:outline-none dark:focus:ring-primary"
              >
                Admin Login
              </Link>
              <Link
                to="/AlumniLogin"
                onClick={scrollToTop}

                className="text-white bg-primary duration-200 hover:bg-primary-hover focus:ring-4 focus:ring-primary  font-medium rounded-lg text-xl px-4 lg:px-6  py-2 lg:py-2.5 sm:mr-2 lg:mr-0 dark:bg-primary dark:hover:bg-primary-hover focus:outline-none dark:focus:ring-primary"
              >
                Alumni Login
              </Link>
            </div>
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
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
          </div>

          <div
            className={`items-center justify-between w-full lg:flex lg:w-auto lg:order-1 ${
              isOpen ? 'block' : 'hidden'
            }`}
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-semibold text-xl lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <Link to="/" onClick={scrollToTop} className={`block py-2 pl-3 pr-4 lg:p-0 ${getLinkClass('/')}`}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/Events" onClick={scrollToTop}  className={`block py-2 pl-3 pr-4 lg:p-0 ${getLinkClass('/Events')}`}>
                  Events
                </Link>
              </li>
              <li
                className="relative group"
                onMouseEnter={() => setIsSubmenuOpen(true)}
                onMouseLeave={() => setIsSubmenuOpen(false)}
              >
                <Link
                  to="/News" onClick={scrollToTop} 
                  className={`block py-2 pl-3 pr-4 lg:p-0 ${getLinkClass('/News')}`}
                >
                  News
                </Link>
                
              </li>
              <li>
                <Link to="/Engage" onClick={scrollToTop}  className={`block py-2 pl-3 pr-4 lg:p-0 ${getLinkClass('/Engage')}`}>
                  Engage
                </Link>
              </li>
              <li>
                <Link to="/About" onClick={scrollToTop}  className={`block py-2 pl-3 pr-4 lg:p-0 ${getLinkClass('/About')}`}>
                  About
                </Link>
              </li>
              <li>
                <Link to="/Gallery" onClick={scrollToTop}  className={`block py-2 pl-3 pr-4 lg:p-0 ${getLinkClass('/Gallery')}`}>
                  Gallery
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
