// pages/DepartmentEvents.jsx
import React from "react";
import EventIntro from "./EventIntro.jsx";
import EventsPageCard from "./EventsPageCard.jsx";

const Department = () => {
  const events = [
    {
      date: "March 10th, 2025",
      time: "10:30 AM",
      title: "Industry Academia Conclave",
      location: "Seminar Hall-II, Department of Computer Science",
      description: "A synergy of PUDoCS Research Forum and AICTE Margdarshan Scheme, bringing together industry experts and academia for insightful discussions.",
      imageUrl: "https://your-image-url.com/comedy.jpg",
      slug: "industry-academia-conclave"
    },
    {
      date: "Dec 30, 2024",
      time: "4:30 PM",
      title: "Outlook Screening Test",
      location: "MTech lab",
      description: "All the students who have applied for the Outlook company are requested to attend the online screening test",
      imageUrl: "https://your-image-url.com/sxsw.jpg",
      slug: "outlook-screening-test"
    },
  ];

  return (
    <div className="pt-20">
      {/* Intro Section - Full Width */}
      <EventIntro
        pageName="Department Events"
        tagline="Discover, Participate, and Celebrate with Us!"
        imageUrl="https://your-image-link.com/department.jpg"
      />

      {/* Event Cards - With Padding */}
      <div className="container mx-auto px-20 pt-18">
        {events.map((event, index) => (
          <EventsPageCard key={index} {...event} />
        ))}
      </div>
    </div>
  );  
};

export default Department;
