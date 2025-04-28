import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ClassNotesForm = () => {
  // Hardcoded user details (replace with real data when backend is ready)
  const user = {
    name: "John Doe",
    alumniID: "A12345",
    email: "john.doe@example.com",
  };

  // Form State
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    description: "",
    attachment: null,
  });

  const [submitted, setSubmitted] = useState(false);

  // Handle Input Change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle File Upload
  const handleFileChange = (e) => {
    setFormData({ ...formData, attachment: e.target.files[0] });
  };

  // Handle Form Submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title || !formData.category || !formData.description) {
      alert("Please fill all required fields.");
      return;
    }

    console.log("Submitted Data:", { ...formData, user });

    // Trigger submission animation
    setSubmitted(true);

    // Reset form after a delay
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        title: "",
        category: "",
        description: "",
        attachment: null,
      });
    }, 3000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen bg-gray-50 text-gray-800 flex justify-center items-center pt-28 pb-12 px-6"
    >
      <div className="w-full max-w-2xl bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl md:text-3xl font-semibold text-LightRed mb-6 text-center font-outfit">
          Post Your Note
        </h2>

        {/* Auto-filled User Details */}
        <div className="bg-gray-100 p-4 rounded-lg mb-6 text-sm">
          <p className="text-gray-600"><strong>Name:</strong> {user.name}</p>
          <p className="text-gray-600"><strong>ID:</strong> {user.alumniID}</p>
          <p className="text-gray-600"><strong>Email:</strong> {user.email}</p>
        </div>

        {/* Submission Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Title */}
          <motion.div whileFocus={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }}>
            <label className="block font-medium mb-2 text-DarkBlue">
              Title <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-DarkBlue transition"
              placeholder="Enter a title for your update"
              required
            />
          </motion.div>

          {/* Category */}
          <motion.div whileFocus={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }}>
            <label className="block text-DarkBlue font-medium mb-2">
              Category <span className="text-red-500">*</span>
            </label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-DarkBlue transition"
              required
            >
              <option value="">Select a category</option>
              <option value="Professional">Professional</option>
              <option value="Personal">Personal</option>
            </select>
          </motion.div>

          {/* Description */}
          <motion.div whileFocus={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }}>
            <label className="block text-DarkBlue font-medium mb-2">
              Description <span className="text-red-500">*</span>
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-DarkBlue h-32 resize-none transition"
              placeholder="Write your class note here..."
              required
              maxLength={1000}
            ></textarea>
            <span className="text-sm text-gray-600">
              {1000 - formData.description.length} characters remaining
            </span>
          </motion.div>

          {/* Attachment Upload (No animation here) */}
          <div>
            <label className="block text-DarkBlue font-medium mb-2">
              Upload an Image or Document (Optional)
            </label>
            <input
              type="file"
              onChange={handleFileChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-DarkBlue transition"
              accept=".jpg,.jpeg,.png,.pdf"
            />
          </div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="w-full bg-red-400 text-white font-semibold px-6 py-3 rounded-md hover:bg-opacity-80 transition"
          >
            Submit for Review
          </motion.button>
        </form>

        {/* Submission Success Message */}
        <AnimatePresence>
          {submitted && (
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="mt-6 text-center text-LightRed font-medium"
            >
              ✅ Your Class Note has been submitted for review!
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default ClassNotesForm;
