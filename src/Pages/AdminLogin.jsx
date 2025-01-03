import React, { useState } from 'react';

const AdminLogin = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({ email: '', password: '' });

  // Input change handler
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Password validation regex
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/;

  // Form validation function
  const validateForm = () => {
    let valid = true;
    const newErrors = { email: '', password: '' };

    if (!formData.email) {
      newErrors.email = 'Email or username is required.';
      valid = false;
    } else if (
      formData.email.includes('@') &&
      !/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData.email)
    ) {
      newErrors.email = 'Invalid email format.';
      valid = false;
    }

    if (!formData.password) {
      newErrors.password = 'Password is required.';
      valid = false;
    } else if (!passwordRegex.test(formData.password)) {
      newErrors.password =
        'Password must be at least 8 characters long, include a lowercase letter, an uppercase letter, a number, and a special character.';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  // Form submit handler
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form Submitted:', formData);
      alert('Login successful!');
      // Add login logic here (e.g., API request)
    }
  };

  return (
    <div className="min-h-screen pt-18 bg-gray-100 flex justify-center items-center px-4 font-lora">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
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
          
          
        </a>

          <h1 className="text-2xl pt-4 font-bold font-playfair text-gray-800">Admin Login</h1>
          <p className="text-sm text-gray-600">Access restricted to administrators.</p>
        </header>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email or Username
            </label>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Enter your email or username"
              value={formData.email}
              onChange={handleInputChange}
              className={`w-full mt-1 p-3 border ${
                errors.email ? 'border-red-500' : 'border-gray-300'
              } rounded-lg focus:ring-2 focus:ring-primary focus:outline-none`}
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-500">{errors.email}</p>
            )}
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleInputChange}
              className={`w-full mt-1 p-3 border ${
                errors.password ? 'border-red-500' : 'border-gray-300'
              } rounded-lg focus:ring-2 focus:ring-primary focus:outline-none`}
            />
            {errors.password && (
              <p className="mt-1 text-sm text-red-500">{errors.password}</p>
            )}
          </div>
          <div className="flex justify-between items-center">
            <label htmlFor="remember-me" className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="remember-me"
                className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
              />
              <span className="text-sm text-gray-700">Remember Me</span>
            </label>
            <a
              href="/admin/forgot-password"
              className="text-sm text-primary hover:underline"
            >
              Forgot Password?
            </a>
          </div>
          <button
            type="submit"
            className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-primary-hover duration-200 transition"
          >
            Login
          </button>
        </form>
        <footer className="mt-6 text-center text-sm text-gray-600">
          <p>
            <a href="/privacy-policy" className="hover:underline">
              Privacy Policy
            </a>{' '}
            |{' '}
            <a href="/terms" className="hover:underline">
              Terms of Use
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
};

export default AdminLogin;
