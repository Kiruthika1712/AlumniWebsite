import React from "react";
import EventIntro from "./EventIntro.jsx";
import EventsPageCard from "./EventsPageCard.jsx";

const Student = () => {
  const events = [
    {
        date: "Feb 5, 2025",
        time: "10:00 AM",
        title: "TechXpo 2025",
        location: "Main Auditorium",
        description: "Showcasing innovative student projects, research, and new technology trends.",
        imageUrl: "https://your-image-url.com/techxpo.jpg",
        slug: "techxpo-2025"
      },
    {
      date: "Jan 15, 2025",
      time: "16:00 PM",
      title: "Winter Music Festival",
      location: "University Grounds",
      description: "Experience live performances by top artists at the Winter Music Festival.",
      imageUrl: "https://your-image-url.com/music-festival.jpg",
      slug: "winter-music-festival"
    },
  ];

  return (
    <div className="pt-20">
      {/* Intro Section - Full Width */}
      <EventIntro
        pageName="Student Events"
        tagline="Explore, Learn, and Engage!"
        imageUrl="https://your-image-link.com/student-events.jpg"
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

export default Student;
