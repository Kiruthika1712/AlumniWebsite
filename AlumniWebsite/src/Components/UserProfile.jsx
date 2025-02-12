import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const UserProfile = () => {
  const [isEditing, setIsEditing] = useState(false); // State to toggle edit mode
  const [formData, setFormData] = useState({
    firstName: "John",
    lastName: "Doe",
    position: "Software Engineer",
    assignedTo: "Alice",
    company: "Tech Corp",
    address: "123 Tech St.",
    city: "Tech City",
    state: "Tech State",
    zipCode: "12345",
    phone: "123-456-7890",
    email: "john.doe@techcorp.com",
  });
  const [loading, setLoading] = useState(false); // Set loading state to false for mock data
  const [error, setError] = useState(null); // Error state (not needed for mock data)

  // Temporary mock data (since the backend is not configured)
  useEffect(() => {
    setLoading(false); // No need to wait for API call, we're using mock data
  }, []);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission (does nothing for now)
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsEditing(false);
  };

  return (
    <div className="max-w-4xl mx-auto mt-16 p-8 bg-white shadow-lg rounded-lg dark:bg-gray-800">
      {/* Back Button */}
      <Link
        to="/"
        className="text-blue-500 hover:underline mb-6 inline-block text-lg font-medium"
      >
        &larr; Back
      </Link>

      {/* Profile Header */}
      <div className="flex flex-col md:flex-row items-center mb-8">
        <img
          src="https://via.placeholder.com/150"
          alt="User"
          className="h-32 w-32 rounded-full mb-4 md:mb-0 md:mr-6"
        />
        <div className="text-center md:text-left">
          <h1 className="text-2xl font-semibold dark:text-white">
            {formData.firstName} {formData.lastName}
          </h1>
          <span className="text-green-600 font-medium text-lg">Alumni</span>
        </div>
        <button
          className="ml-auto mt-4 md:mt-0 bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 focus:outline-none"
          onClick={() => setIsEditing(!isEditing)} // Toggle edit mode
        >
          {isEditing ? "Cancel" : "Edit"}
        </button>
      </div>

      {/* User Details */}
      <div className="mb-8">
        <h2 className="font-medium text-lg text-gray-700 dark:text-gray-300 mb-4">
          Details
        </h2>
        {isEditing ? (
          <form onSubmit={handleSubmit} className="grid gap-4">
            <div>
              <label className="block font-medium dark:text-gray-300">
                First Name:
              </label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full p-3 border rounded-md dark:bg-gray-700 dark:text-white"
              />
            </div>
            <div>
              <label className="block font-medium dark:text-gray-300">
                Last Name:
              </label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full p-3 border rounded-md dark:bg-gray-700 dark:text-white"
              />
            </div>
            <div>
              <label className="block font-medium dark:text-gray-300">
                Position:
              </label>
              <input
                type="text"
                name="position"
                value={formData.position}
                onChange={handleChange}
                className="w-full p-3 border rounded-md dark:bg-gray-700 dark:text-white"
              />
            </div>
            <div>
              <label className="block font-medium dark:text-gray-300">
                Assigned To:
              </label>
              <input
                type="text"
                name="assignedTo"
                value={formData.assignedTo}
                onChange={handleChange}
                className="w-full p-3 border rounded-md dark:bg-gray-700 dark:text-white"
              />
            </div>
            <div>
              <label className="block font-medium dark:text-gray-300">
                Company:
              </label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full p-3 border rounded-md dark:bg-gray-700 dark:text-white"
              />
            </div>
            <button
              type="submit"
              className="bg-green-500 text-white px-6 py-3 rounded-md hover:bg-green-600 focus:outline-none"
            >
              Save
            </button>
          </form>
        ) : (
          <>
            <p className="dark:text-white text-lg">
              <strong>First Name:</strong> {formData.firstName}
            </p>
            <p className="dark:text-white text-lg">
              <strong>Last Name:</strong> {formData.lastName}
            </p>
            <p className="dark:text-white text-lg">
              <strong>Position:</strong> {formData.position}
            </p>
            <p className="dark:text-white text-lg">
              <strong>Assigned to:</strong>{" "}
              <Link
                to="/AssignedUser"
                className="text-blue-500 hover:underline"
              >
                {formData.assignedTo}
              </Link>
            </p>
            <p className="dark:text-white text-lg">
              <strong>Company:</strong> {formData.company}
            </p>
          </>
        )}
      </div>

      {/* Contact Information */}
      <div>
        <h2 className="font-medium text-lg text-gray-700 dark:text-gray-300 mb-4">
          Contacts
        </h2>
        {isEditing ? (
          <div className="grid gap-4">
            <div>
              <label className="block font-medium dark:text-gray-300">
                Phone:
              </label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-3 border rounded-md dark:bg-gray-700 dark:text-white"
              />
            </div>
            <div>
              <label className="block font-medium dark:text-gray-300">
                Email:
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border rounded-md dark:bg-gray-700 dark:text-white"
              />
            </div>
          </div>
        ) : (
          <>
            <p className="dark:text-white text-lg">
              <strong>Phone:</strong> {formData.phone}
            </p>
            <p className="dark:text-white text-lg">
              <strong>Email:</strong> {formData.email}
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default UserProfile;
