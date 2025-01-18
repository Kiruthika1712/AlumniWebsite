import React, { useState } from "react";

const SignUp1 = () => {
  const [role, setRole] = useState(""); // To store selected role
  const [registrationNumber, setRegistrationNumber] = useState(""); // To store Registration Number or Faculty ID
  const [name, setName] = useState(""); // To store Name
  const [dob, setDob] = useState(""); // To store Date of Birth
  const [mobile, setMobile] = useState(""); // To store Mobile (optional)

  const [errors, setErrors] = useState({}); // To store error messages

  // Simple validation function
  const validateForm = () => {
    const validationErrors = {};
    let isValid = true;

    if (!role) {
      validationErrors.role = "Please select a role.";
      isValid = false;
    }

    if (!registrationNumber) {
      validationErrors.registrationNumber = "Registration Number / Faculty ID is required.";
      isValid = false;
    }

    if (!name) {
      validationErrors.name = "Name is required.";
      isValid = false;
    }

    if (!dob) {
      validationErrors.dob = "Date of Birth is required.";
      isValid = false;
    }

    const mobilePattern = /^[0-9]{10}$/;
    if (mobile && !mobilePattern.test(mobile)) {
      validationErrors.mobile = "Please enter a valid 10-digit mobile number.";
      isValid = false;
    }

    setErrors(validationErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      alert("Form Submitted!");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white shadow-md rounded-lg">
        <h2 className="mb-6 text-2xl font-bold text-center text-primary">Sign Up</h2>

        {/* Role Selection Dropdown */}
        <div className="mb-4">
          <label className="block mb-2 font-semibold text-gray-700">Select Role</label>
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="w-full px-3 py-2 border rounded-md shadow-sm focus:ring-primary focus:border-primary"
            required
          >
            <option value="">--Select Role--</option>
            <option value="Alumni">Alumni</option>
            <option value="Student">Student</option>
            <option value="Faculty">Faculty</option>
          </select>
          {errors.role && <p className="text-red-500 text-sm">{errors.role}</p>}
        </div>

        {/* Registration Number or Faculty ID */}
        <div className="mb-4">
          <label className="block mb-2 font-semibold text-gray-700">
            {role === "Faculty" ? "Faculty ID" : "Registration Number"}
          </label>
          <input
            type="text"
            value={registrationNumber}
            onChange={(e) => setRegistrationNumber(e.target.value)}
            className="w-full px-3 py-2 border rounded-md shadow-sm focus:ring-primary focus:border-primary"
            required
          />
          {errors.registrationNumber && <p className="text-red-500 text-sm">{errors.registrationNumber}</p>}
        </div>

        {/* Name */}
        <div className="mb-4">
          <label className="block mb-2 font-semibold text-gray-700">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-3 py-2 border rounded-md shadow-sm focus:ring-primary focus:border-primary"
            required
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
        </div>

        {/* Date of Birth */}
        <div className="mb-4">
          <label className="block mb-2 font-semibold text-gray-700">Date of Birth</label>
          <input
            type="date"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
            className="w-full px-3 py-2 border rounded-md shadow-sm focus:ring-primary focus:border-primary"
            required
          />
          {errors.dob && <p className="text-red-500 text-sm">{errors.dob}</p>}
        </div>

        {/* Mobile Number (Now shown for all roles) */}
        <div className="mb-4">
          <label className="block mb-2 font-semibold text-gray-700">Mobile (Optional)</label>
          <input
            type="text"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            className="w-full px-3 py-2 border rounded-md shadow-sm focus:ring-primary focus:border-primary"
          />
          {errors.mobile && <p className="text-red-500 text-sm">{errors.mobile}</p>}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          onClick={handleSubmit}
          className="w-full px-4 py-2 text-white bg-primary rounded-md hover:bg-primary-hover"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default SignUp1;
