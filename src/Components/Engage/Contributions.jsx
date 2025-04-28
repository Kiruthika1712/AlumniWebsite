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

  const today = new Date().toISOString().split("T")[0];

  const validateDate = (date) => {
    const regex = /^\d{4}-\d{2}-\d{2}$/; // Ensure it's in the YYYY-MM-DD format
    return regex.test(date);
  };

  const validateName = (name) => {
    const regex = /^[A-Za-z\s]+$/;  // Only letters and spaces allowed
    return regex.test(name);
  };  
  
  const [error, setError] = useState({
    name: "",
    date: "",
  });

  const handleSessionFormSubmit = async (e) => {
    e.preventDefault();
  
    let isValid = true;

    // Validate name
    if (!validateName(sessionFormData.name)) {
      setError((prevError) => ({ ...prevError, name: "Please enter a valid name with only letters." }));
      isValid = false;
    } else {
      setError((prevError) => ({ ...prevError, name: "" }));
    }

    // Validate date format
    if (!validateDate(sessionFormData.date)) {
      setError((prevError) => ({ ...prevError, date: "Please enter a valid date." }));
      isValid = false;
    } else {
      setError((prevError) => ({ ...prevError, date: "" }));
    }

    if (!isValid) {
      return;
    }
    
    try {
      const response = await fetch("http://127.0.0.1:8000/api/non-monetary-contribution/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          full_name: sessionFormData.name,
          session_date: sessionFormData.date,
          session_time: sessionFormData.time,
          session_topic: sessionFormData.topic,
        }),
      });
  
      if (response.ok) {
        const data = await response.json();
        console.log("Session offering submitted successfully:", data);
        alert("Session offering submitted successfully!");
        // Clear the form after successful submission
        setSessionFormData({
          name: "",
          date: "",
          time: "",
          topic: "",
        });
      } else {
        const errorData = await response.json();
        console.error("Error submitting session offering:", errorData);
        alert("Failed to submit session offering. Please try again.");
      }
    } catch (error) {
      console.error("Network error:", error);
      alert("Network error. Please try again later.");
    }
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
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-400 focus:border-red-400 transition"
                placeholder="Enter your full name"
                required
              />
              {error.name && <p className="text-red-500 text-sm mt-2">{error.name}</p>}
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-400 focus:border-red-400 transition"
                  min={today}  
                  required
                />
                {error.date && <p className="text-red-500 text-sm mt-2">{error.date}</p>}
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-400 focus:border-red-400 transition"
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
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-400 focus:border-red-400 transition"
                placeholder="Describe your session topic"
                required
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-red-400 text-white font-semibold py-3 rounded-lg hover:bg-opacity-90 transition"
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
