import React from "react";
import { motion } from "framer-motion";

const leaders = [
  { name: "Dr. T. Vengattaraman", role: "President", img: "https://via.placeholder.com/150" },
  { name: "Dr. K. S. Kuppusamy", role: "Vice President", img: "https://via.placeholder.com/150" },
  { name: "Mr. Dinesh Sinnarasse", role: "Vice President", img: "https://via.placeholder.com/150" },
  { name: "Mr. R. Jayaprakash", role: "Vice President", img: "https://via.placeholder.com/150" },
  { name: "Prof. P. Sujatha", role: "Treasurer", img: "https://via.placeholder.com/150" },
  { name: "Ms. P. Nithya", role: "General Secretary", img: "https://via.placeholder.com/150" },
  { name: "Dr. G. Krishnapriya", role: "Faculty Coordinator", img: "https://via.placeholder.com/150" },
  { name: "Mr. R. Sridhar", role: "Student Coordinator", img: "https://via.placeholder.com/150" },
];

const AboutUs = () => {
  return (
    <div className="px-6 md:px-12 lg:px-16 py-12 bg-gradient-to-b from-blue-50 via-white to-blue-100 text-gray-800 font-poppins min-h-screen">
      {/* Heading */}
      <motion.h1
        className="text-4xl md:text-5xl font-bold mb-12 text-center pt-16 font-outfit text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-900 to-purple-700"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Meet the Pulse Behind Footprints
      </motion.h1>

      {/* Intro */}
      <motion.p
        className="text-lg md:text-xl mb-16 max-w-3xl mx-auto text-center leading-relaxed text-gray-700"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        The <span className="font-semibold text-blue-800">Footprints Alumni Association</span> bridges the legacy of the <strong>Department of Computer Science, Pondicherry University</strong> with its trailblazing alumni. We're here to celebrate achievements, spark connections, and grow together—beyond the campus.
      </motion.p>

      {/* Objectives */}
      <motion.div
        className="mb-20 max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-center font-outfit text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-purple-700">
          What Drives Us
        </h2>
        <ul className="list-disc list-inside text-lg space-y-4 pl-6 leading-relaxed text-gray-700">
          <li>Build strong bridges between alumni and students</li>
          <li>Encourage mentorship, career advice & real-world wisdom</li>
          <li>Create meaningful reunions, events & learning sessions</li>
          <li>Empower our department with resources & expertise</li>
        </ul>
      </motion.div>

      {/* Leadership Grid */}
      <div className="mb-20">
        <h2 className="text-3xl md:text-4xl font-semibold mb-10 text-center font-outfit text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-purple-700">
          Our Leadership Team
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {leaders.map((leader, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-[1.02]"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <img
                src={leader.img}
                alt={leader.name}
                className="w-28 h-28 rounded-full object-cover mb-4 border-4 border-blue-200 transition-transform duration-300 hover:scale-105 shadow-sm"
                loading="lazy"
              />
              <h3 className="text-lg md:text-xl font-semibold mb-1 font-outfit text-gray-800">
                {leader.name}
              </h3>
              <p className="text-sm text-gray-500">{leader.role}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Get Involved */}
      <motion.div
        className="max-w-3xl mx-auto text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-semibold mb-6 font-outfit text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-purple-700">
          Be Part of the Story
        </h2>
        <p className="text-lg mb-8 text-gray-700">
          Whether you're a proud alum or a passionate student — contribute your energy. <br />
          Share your journey. Inspire the next. Together, we shape what’s next.
        </p>
        <a
          href="#contact"
          className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-md"
        >
          Join Us Today
        </a>
      </motion.div>
    </div>
  );
};

export default AboutUs;
