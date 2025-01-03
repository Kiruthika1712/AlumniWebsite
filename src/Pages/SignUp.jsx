import React from 'react';
import {Link} from 'react-router-dom' 

const SignUp = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      {/* Main Container */}
      <div className="max-w-2xl w-full font-lora bg-white shadow-lg rounded-lg overflow-hidden">
        
        {/* Header */}
        <header className="p-6 bg-primary text-white text-center">
        
          <h1 className="text-2xl font-lora font-bold">Create Your Account</h1>
          <p className="text-sm mt-2">Join our alumni network to stay connected!</p>
        </header>

        {/* Form Section */}
        <form className="p-6 space-y-6">
          {/* Name Fields */}
          <div className="flex flex-col md:flex-row gap-4">
            <div className="w-full">
              <label className="block text-sm font-medium text-gray-700" htmlFor="first-name">
                First Name
              </label>
              <input
                type="text"
                id="first-name"
                placeholder="Enter your first name"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
            </div>
            <div className="w-full">
              <label className="block text-sm font-medium text-gray-700" htmlFor="last-name">
                Last Name
              </label>
              <input
                type="text"
                id="last-name"
                placeholder="Enter your last name"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
            </div>
          </div>

          {/* Email Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="email">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
          </div>

          {/* Password Fields */}
          <div className="flex flex-col md:flex-row gap-4">
            <div className="w-full">
              <label className="block text-sm font-medium text-gray-700" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Create a password"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
            </div>
            <div className="w-full">
              <label className="block text-sm font-medium text-gray-700" htmlFor="confirm-password">
                Confirm Password
              </label>
              <input
                type="password"
                id="confirm-password"
                placeholder="Re-enter your password"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-primary text-white py-2 px-4 rounded-lg hover:bg-primary-hover duration-200 transition"
          >
            Sign Up
          </button>
        </form>

        {/* Footer */}
        <footer className="p-6 text-sm text-gray-500 text-center border-t">
          Already have an account?{' '}
          <Link to="/AlumniLogin" className="text-primary hover:underline">
            Login here
          </Link>
        </footer>
      </div>
    </div>
  );
};

export default SignUp;
