import React, { useState } from "react";

const SignUpPage = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Username validation - only alphabets, numbers, and underscore
  const validateUsername = (username) => {
    const regex = /^[a-zA-Z09_]+$/;
    return regex.test(username);
  };

  // Password validation
  const validatePassword = (password) => {
    const regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/;
    return regex.test(password);
  };

  // Password strength check
  const getPasswordStrength = (password) => {
    let strength = "Weak";
    if (password.length >= 8 && /[A-Z]/.test(password) && /\d/.test(password) && /[!@#$%^&*]/.test(password)) {
      strength = "Strong";
    } else if (password.length >= 6) {
      strength = "Medium";
    }
    return strength;
  };

  // Form validation
  const validateForm = () => {
    const newErrors = {};

    if (!formData.username) newErrors.username = "Username is required.";
    else if (!validateUsername(formData.username))
      newErrors.username = "Username can only contain alphabets, numbers, and underscores.";

    if (!formData.password) newErrors.password = "Password is required.";
    else if (!validatePassword(formData.password))
      newErrors.password =
        "Password must be at least 8 characters long, contain an uppercase letter, a number, and a special character.";

    if (!formData.confirmPassword) newErrors.confirmPassword = "Confirm Password is required.";
    else if (formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = "Passwords do not match.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      alert("Form Submitted!");
      // Handle the form submission, like making an API call.
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 py-6 px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md px-6 py-8 bg-white shadow-md rounded-lg mx-auto"
      >
        <h2 className="mb-6 text-2xl font-bold text-center text-primary">
          Sign Up
        </h2>

        {/* Username Field */}
        <div className="mb-4">
          <label className="block mb-2 font-semibold text-gray-700">Username</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md shadow-sm focus:ring-primary focus:border-primary"
            required
          />
          {errors.username && <p className="text-red-500 text-sm">{errors.username}</p>}
        </div>

        {/* Password Field */}
        <div className="mb-4">
          <label className="block mb-2 font-semibold text-gray-700">Password</label>
          <div className="relative">
            <input
              type={passwordVisible ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md shadow-sm focus:ring-primary focus:border-primary"
              required
            />
            <button
              type="button"
              onClick={() => setPasswordVisible(!passwordVisible)}
              className="absolute right-2 top-2 text-gray-500"
            >
              {passwordVisible ? "Hide" : "Show"}
            </button>
          </div>
          {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
          {formData.password && (
            <p className="mt-2 text-gray-600 text-sm">Strength: {getPasswordStrength(formData.password)}</p>
          )}
        </div>

        {/* Confirm Password Field */}
        <div className="mb-4">
          <label className="block mb-2 font-semibold text-gray-700">Confirm Password</label>
          <div className="relative">
            <input
              type={confirmPasswordVisible ? "text" : "password"}
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md shadow-sm focus:ring-primary focus:border-primary"
              required
            />
            <button
              type="button"
              onClick={() => setConfirmPasswordVisible(!confirmPasswordVisible)}
              className="absolute right-2 top-2 text-gray-500"
            >
              {confirmPasswordVisible ? "Hide" : "Show"}
            </button>
          </div>
          {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword}</p>}
        </div>

        {/* Sign-up Button */}
        <button
          type="submit"
          className="w-full px-4 py-2 mt-4 text-white bg-primary rounded-md hover:bg-primary-hover focus:outline-none"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUpPage;
