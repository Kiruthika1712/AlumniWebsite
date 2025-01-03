import React from 'react';
import { Link } from 'react-router-dom';

const AlumniLogin = () => {
  return (
    <div className="min-h-screen font-lora flex flex-col items-center justify-center bg-gray-100">
      {/* Main Container */}
      <div className="max-w-4xl w-full bg-white shadow-lg rounded-lg overflow-hidden flex flex-col md:flex-row">
        
        {/* Left Panel - Login Section */}
        <div className="w-full md:w-1/2 p-8">
          <header className="text-center mb-6">
          <a href="#" className="flex items-center">
          <img 
            src="https://res.cloudinary.com/ddnis6cuk/image/upload/f_auto,q_auto/v1/Alumni/vydb6bzd2vennrzyf2so" // Replace with the correct logo path
            alt="Logo" 
            className="h-10 w-10 mr-2 rounded-full border-2 border-dark" // Adjust the height, width, and spacing as needed
          />
          <span className="self-center text-black font-playfair text-xl font-semibold whitespace-nowrap">
            FOOTPRINTS
          </span>
          
          
        </a>            <h1 className="text-2xl pt-4 font-playfair font-bold text-gray-800">Welcome Back, Alumni!</h1>
          </header>
          <form className="login-form">
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700" htmlFor="email">
                Email or Username
              </label>
              <input
                type="text"
                id="email"
                placeholder="Enter your email or username"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
            </div>
            <div className="flex items-center justify-between mb-6">
              <label className="flex items-center">
                <input type="checkbox" className="form-checkbox text-primary" />
                <span className="ml-2 text-gray-700 text-sm">Remember Me</span>
              </label>
              <Link to="/forgot-password" className="text-sm text-primary hover:underline">
                Forgot Password?
              </Link>
            </div>
            <button
              type="submit"
              className="w-full bg-primary text-white py-2 px-4 rounded-lg hover:bg-primary-hover duration-200 transition"
            >
              Login
            </button>
          </form>
        </div>

        {/* Right Panel - Sign-Up Section */}
        <div className="w-full md:w-1/2 bg-primary text-white p-8 flex flex-col justify-center items-center">
          <h2 className="text-2xl font-playfair font-bold mb-4">New Here?</h2>
          <p className="text-center mb-6">
            Create an account to reconnect with your alma mater and network with fellow alumni.
          </p>
          {/* Corrected to use 'to' instead of 'href' */}
          <Link
            to="/SignUp"
            className="bg-white text-primary font-medium py-2 px-6 rounded-full hover:shadow-lg duration-200 transition"
          >
            Sign Up
          </Link>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="mt-6 text-gray-500 text-sm text-center">
        <Link to="/privacy-policy" className="hover:underline">Privacy Policy</Link> | 
        <Link to="/terms" className="hover:underline ml-2">Terms of Use</Link>
      </footer>
    </div>
  );
};

export default AlumniLogin;
