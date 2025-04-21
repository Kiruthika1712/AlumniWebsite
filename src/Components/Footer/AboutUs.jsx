import React from "react";

const leaders = [
  {
    name: "Dr. T. Vengattaraman",
    role: "President",
    img: "/images/vengattaraman.jpg",
  },
  {
    name: "Dr. K. S. Kuppusamy",
    role: "Vice President",
    img: "/images/kuppusamy.jpg",
  },
  {
    name: "Mr. Dinesh Sinnarasse",
    role: "Vice President",
    img: "/images/dinesh.jpg",
  },
  {
    name: "Mr. R. Jayaprakash",
    role: "Vice President",
    img: "/images/jayaprakash.jpg",
  },
  {
    name: "Prof. P. Sujatha",
    role: "Treasurer",
    img: "/images/sujatha.jpg",
  },
  {
    name: "Ms. P. Nithya",
    role: "General Secretary",
    img: "/images/nithya.jpg",
  },
  {
    name: "Dr. G. Krishnapriya",
    role: "Faculty Coordinator",
    img: "/images/krishnapriya.jpg",
  },
  {
    name: "Mr. R. Sridhar",
    role: "Student Coordinator",
    img: "/images/sridhar.jpg",
  },
];

const AboutUs = () => {
  return (
    <div className="px-6 md:px-10 py-10 bg-LightBlue text-DarkBlue font-poppins">
      {/* Heading */}
      <h1 className="text-event-title md:text-title-mobile font-bold mb-10 text-center pt-12 font-outfit">
        About Us
      </h1>

      {/* Intro */}
      <p className="text-event-description mb-12 max-w-4xl mx-auto text-center leading-relaxed">
        The Footprints Alumni Association serves as a vital link between the Department of Computer Science at Pondicherry University and its proud alumni. We aim to nurture a lifelong connection, promote collaboration, and celebrate alumni achievements.
      </p>

      {/* Objectives */}
      <div className="mb-16 max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-center font-outfit">
          Our Objectives
        </h2>
        <ul className="list-disc list-inside text-event-description space-y-3 pl-5 leading-relaxed">
          <li>Strengthen alumni-student relationships</li>
          <li>Encourage mentorship and professional guidance</li>
          <li>Host reunions, talks, and networking events</li>
          <li>Support departmental development through active participation</li>
        </ul>
      </div>

      {/* Leadership Grid */}
      <div className="mb-16">
        <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-center font-outfit">
          Our Leadership
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {leaders.map((leader, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg transition-shadow"
            >
              <img
                src={leader.img}
                alt={leader.name}
                className="w-28 h-28 rounded-full object-cover mb-4 border-4 border-LightRed"
              />
              <h3 className="text-lg md:text-xl font-semibold mb-1 font-outfit">
                {leader.name}
              </h3>
              <p className="text-event-info">{leader.role}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Get Involved */}
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4 font-outfit">
          Get Involved
        </h2>
        <p className="text-event-description mb-6">
          Be part of something meaningful. Join our events, share your story,
          mentor students, or support our initiatives.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
