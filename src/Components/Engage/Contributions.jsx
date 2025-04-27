import React, { useState } from "react";
import PayPalDonateDemo from "./PayPalDonateDemo";
import SectionHeader from "./SectionHeader";  // Assuming you have this component

const Contributions = () => {
  // Set donation details
  const donationAmount = "50.00";
  const donationDescription = "Donate to support student scholarships";

  // Form state for non-monetary contributions (session offering)
  const [sessionFormData, setSessionFormData] = useState({
    name: "",
    date: "",
    time: "",
    topic: "",
  });

  // Handle form data changes
  const handleSessionFormChange = (e) => {
    const { name, value } = e.target;
    setSessionFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission for non-monetary contribution
  const handleSessionFormSubmit = (e) => {
    e.preventDefault();
    // Process session offering logic here (e.g., API request)
    alert("Session offering submitted!");
  };

  return (
    <div className="contributions-container min-h-screen bg-gray-50">
      {/* Section Header */}
      <SectionHeader
        title="Contribute to your Network"
        subtitle="Your generosity paves the way for lasting opportunities and growth."
      />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 mt-6 mb-6">
        {/* Monetary Donation Section */}
        <div className="bg-white rounded-2xl shadow-xl p-10 flex flex-col justify-between hover:shadow-2xl transition-shadow">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-DarkBlue text-center mb-4">
              Support Our Cause
            </h2>
            <p className="text-gray-600 text-center mb-8 leading-relaxed">
              Your donation can make a meaningful difference!
            </p>

            {/* Passing donationAmount and donationDescription as props to PayPalDonateDemo */}
            <PayPalDonateDemo
              donationAmount={donationAmount}
              donationDescription={donationDescription}
            />
          </div>
        </div>

        {/* Non-Monetary Contribution Section */}
        <div className="bg-white rounded-2xl shadow-xl p-10 hover:shadow-2xl transition-shadow">
          <h2 className="text-2xl md:text-3xl font-bold text-DarkBlue text-center mb-4">
            Lead a Workshop
          </h2>
          <p className="text-gray-600 text-center mb-8 leading-relaxed">
            Share your knowledge and empower others!
          </p>

          <form onSubmit={handleSessionFormSubmit} className="space-y-6">
            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-DarkBlue mb-2">Your Name</label>
              <input
                type="text"
                name="name"
                value={sessionFormData.name}
                onChange={handleSessionFormChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-LightRed focus:border-LightRed transition"
                placeholder="Enter your full name"
                required
              />
            </div>

            {/* Date and Time */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-DarkBlue mb-2">Session Date</label>
                <input
                  type="date"
                  name="date"
                  value={sessionFormData.date}
                  onChange={handleSessionFormChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-LightRed focus:border-LightRed transition"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-DarkBlue mb-2">
                  Session Time (10:00 AM - 5:00 PM)
                </label>
                <input
                  type="time"
                  name="time"
                  value={sessionFormData.time}
                  onChange={handleSessionFormChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-LightRed focus:border-LightRed transition"
                  min="10:00"
                  max="17:00"
                  required
                />
              </div>
            </div>

            {/* Topic */}
            <div>
              <label className="block text-sm font-medium text-DarkBlue mb-2">Session Topic</label>
              <input
                type="text"
                name="topic"
                value={sessionFormData.topic}
                onChange={handleSessionFormChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-LightRed focus:border-LightRed transition"
                placeholder="Describe your session topic"
                required
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-LightRed text-white font-semibold py-3 rounded-lg hover:bg-opacity-90 transition"
            >
              Submit Session Offering
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contributions;
