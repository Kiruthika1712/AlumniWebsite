import React from "react";
import EventIntro from "./EventIntro.jsx";
import EventsPageCard from "./EventsPageCard.jsx";

const University = () => {
  const events = [
    {
      date: "July 10, 2025",
      time: "9:00 AM",
      title: "Convocation 2025",
      location: "University Auditorium",
      description: "Celebrate the achievements of the graduating class at the grand Convocation Ceremony.",
      imageUrl: "https://your-image-url.com/convocation.jpg",
      slug: "convocation-2025",
    },
    {
      date: "April 20, 2025",
      time: "10:00 AM",
      title: "Research Symposium 2025",
      location: "Central Seminar Hall",
      description: "An annual symposium showcasing groundbreaking research from students and faculty.",
      imageUrl: "https://your-image-url.com/research-symposium.jpg",
      slug: "research-symposium-2025",
    },
  ];

  return (
    <div className="pt-20">
      {/* Intro Section */}
      <EventIntro
        pageName="University Events"
        tagline="Stay Updated with the Latest University Happenings!"
        imageUrl="https://your-image-link.com/university.jpg"
      />

      {/* Event Cards */}
      <div className="container mx-auto px-20 pt-18">
        {events.map((event, index) => (
          <EventsPageCard key={index} {...event} />
        ))}
      </div>
    </div>
  );
};

export default University;
