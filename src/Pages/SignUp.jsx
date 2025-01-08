import React, { useState } from "react";

const SignUp = () => {
  const [role, setRole] = useState(""); // Selected role
  const [formData, setFormData] = useState({

    course: '',
    startYear: '',
    graduationYear: '',
  }); // Form data
  const [errors, setErrors] = useState({}); // Form validation errors

  // Handle form data changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  // Handle form submission
// Handle form submission
const handleSubmit = async (e) => {
  e.preventDefault();

  // Validate form before submission
  if (validateForm()) {
    try {
      const response = await fetch("http://127.0.0.1:8000/api/signup/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, role }),
      });

      if (response.ok) {
        // Show a success message
        alert("Submission successful!");
        
        // Optionally reset the form
        setFormData({});
        setRole(""); // Reset role to initial state
        setErrors({}); // Reset errors
      } else {
        // If API response is not OK, show error
        const errorData = await response.json();
        alert(errorData.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error submitting the form. Please try again later.");
    }
  }
};



  // Validate form inputs
  const validateForm = () => {
    const newErrors = {};
  
    // Common validation for all roles
    if (!formData.fullName) newErrors.fullName = "Full Name is required.";
    if (!formData.registrationNumber) newErrors.registrationNumber = "Registration Number is required.";
    if (!formData.course) newErrors.course = "Course is required.";
    if (!formData.startYear) newErrors.startYear = "Start Year is required.";
    if (!formData.graduationYear) newErrors.graduationYear = "Graduation Year is required.";
  
    // Check if graduation year is greater than start year
    if (formData.startYear && formData.graduationYear && formData.graduationYear <= formData.startYear) {
      newErrors.graduationYear = "Graduation Year must be greater than Start Year.";
    }
  
    // Mobile Number Validation (10 digits)
    if (formData.mobileNumber && !/^\d{10}$/.test(formData.mobileNumber)) {
      newErrors.mobileNumber = "Mobile Number must be 10 digits.";
    }
  
    // Email Validation (basic email regex)
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format.";
    }
  
    // Role-specific validations
    if (role === "Alumni") {
      // Alumni specific validation
      if (!formData.mobileNumber) newErrors.mobileNumber = "Mobile Number is required.";
      if (!formData.email) newErrors.email = "Email is required.";
    }
  
    if (role === "Student") {
      // Student specific validation
      if (!formData.mobileNumber) newErrors.mobileNumber = "Mobile Number is required.";
      if (!formData.institutionEmail) newErrors.institutionEmail = "Institution Email is required.";
      if (formData.institutionEmail && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.institutionEmail)) {
        newErrors.institutionEmail = "Invalid institution email format.";
      }
    }
  
    if (role === "Faculty") {
      // Faculty specific validation
      if (!formData.mobileNumber) newErrors.mobileNumber = "Mobile Number is required.";
      if (!formData.institutionalEmail) newErrors.institutionalEmail = "Institutional Email is required.";
      if (formData.institutionalEmail && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.institutionalEmail)) {
        newErrors.institutionalEmail = "Invalid institutional email format.";
      }
    }
  
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  return (
    <div className="flex flex-col items-center py-44 pb-28 justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-2xl px-6 py-8 bg-white shadow-md rounded-lg mx-auto"
      >
        <h2 className="mb-6 text-2xl font-bold text-center text-primary">
          Sign Up
        </h2>

        {/* Role Selection */}
        <div className="mb-4">
          <label className="block mb-2 font-semibold text-gray-700">
            Select Role
          </label>
          <select
            name="role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="w-full px-3 py-2 border rounded-md shadow-sm focus:ring-primary focus:border-primary"
            required
          >
            <option value="" disabled>
              Select Role
            </option>
            <option value="Alumni">Alumni</option>
            <option value="Student">Student</option>
            <option value="Faculty">Faculty</option>
          </select>
        </div>

        {/* Dynamic Fields */}
        {role === "Alumni" && (
          <>
            <InputField name="fullName" label="Full Name" value={formData.fullName} handleChange={handleChange} error={errors.fullName} />
            <InputField name="registrationNumber" label="Registration Number" value={formData.registrationNumber} handleChange={handleChange} error={errors.registrationNumber} />
            <DropdownField name="course" label="Course" value={formData.course} options={["M.Sc Integrated", "M.Sc", "MCA", "M.Tech", "B.Tech"]} handleChange={handleChange} error={errors.course} placeholder="Select Course" />
            <DropdownField name="startYear" label="Start Year" value={formData.startYear} options={generateYears()} handleChange={handleChange} error={errors.startYear} placeholder="Select Start Year" />
            <DropdownField name="graduationYear" label="Graduation Year" value={formData.graduationYear} options={generateYears()} handleChange={handleChange} error={errors.graduationYear} placeholder="Select Graduation Year" />
            <InputField name="mobileNumber" label="Mobile Number" value={formData.mobileNumber} handleChange={handleChange} error={errors.mobileNumber} />
            <InputField name="email" label="Email" value={formData.email} handleChange={handleChange} error={errors.email} />
          </>
        )}

        {role === "Student" && (
          <>
            <InputField name="fullName" label="Full Name" value={formData.fullName} handleChange={handleChange} error={errors.fullName} />
            <InputField name="registrationNumber" label="Registration Number" value={formData.registrationNumber} handleChange={handleChange} error={errors.registrationNumber} />
            <DropdownField name="course" label="Course" value={formData.course} options={["M.Sc Integrated", "M.Sc", "MCA", "M.Tech", "B.Tech"]} handleChange={handleChange} error={errors.course} placeholder="Select Course" />
            <DropdownField name="startYear" label="Start Year" value={formData.startYear} options={generateYears()} handleChange={handleChange} error={errors.startYear} placeholder="Select Start Year" />
            <DropdownField name="graduationYear" label="Graduation Year" value={formData.graduationYear} options={generateYears()} handleChange={handleChange} error={errors.graduationYear} placeholder="Select Graduation Year" />
            <InputField name="mobileNumber" label="Mobile Number" value={formData.mobileNumber} handleChange={handleChange} error={errors.mobileNumber} />
            <InputField name="institutionEmail" label="Institution Email" value={formData.institutionEmail} handleChange={handleChange} error={errors.institutionEmail} />
          </>
        )}

        {role === "Faculty" && (
          <>
            <InputField name="fullName" label="Full Name" value={formData.fullName} handleChange={handleChange} error={errors.fullName} />
            <InputField name="facultyID" label="Faculty ID" value={formData.facultyID} handleChange={handleChange} error={errors.facultyID} />
            <InputField name="mobileNumber" label="Mobile Number" value={formData.mobileNumber} handleChange={handleChange} error={errors.mobileNumber} />
            <InputField name="institutionalEmail" label="Institutional Email" value={formData.institutionalEmail} handleChange={handleChange} error={errors.institutionalEmail} />
          </>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full px-4 py-2 mt-4 text-white bg-primary rounded-md hover:bg-primary-hover"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

// Reusable Input Field Component
const InputField = ({ name, label, value, handleChange, error }) => (
  <div className="mb-4">
    <label className="block mb-2 font-semibold text-gray-700">{label}</label>
    <input
      type="text"
      name={name}
      value={value}
      onChange={handleChange}
      className="w-full px-3 py-2 border rounded-md shadow-sm focus:ring-primary focus:border-primary"
      required
    />
    {error && <p className="text-red-500 text-sm">{error}</p>}
  </div>
);

// Dropdown Field Component with Validation
const DropdownField = ({ name, label, value, options, handleChange, error, placeholder }) => (
  <div className="mb-4">
    <label className="block mb-2 font-semibold text-gray-700">{label}</label>
    <select
      name={name}
      value={value}
      onChange={handleChange}
      className="w-full px-3 py-2 border rounded-md shadow-sm focus:ring-primary focus:border-primary"
      required
    >
      <option value="" disabled>
        {placeholder}
      </option>
      {options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
    {error && <p className="text-red-500 text-sm">{error}</p>}
  </div>
);

// Function to generate year options (1980 to current year + 5)
const generateYears = () => {
  const currentYear = new Date().getFullYear();
  const years = [];
  // Generate years from 1980 to current year + 5
  for (let i = 1980; i <= currentYear + 5; i++) {
    years.push(i.toString());
  }
  return years;
};

export default SignUp;
