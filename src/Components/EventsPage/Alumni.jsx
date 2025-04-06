import React from "react";
import EventIntro from "./EventIntro.jsx";
import EventsPageCard from "./EventsPageCard.jsx";

const Alumni = () => {
  const events = [
    {
        date: "June 10, 2025", // 🔹 Latest event FIRST
        time: "3:00 PM",
        title: "Alumni Guest Lecture",
        location: "Seminar Hall-III, PU",
        description:
          "An interactive session where distinguished alumni will share insights on industry trends, career growth, and academic excellence.",
        imageUrl: "https://your-image-url.com/alumni-lecture.jpg",
        slug: "career-guidance-session",
      },
      {
        date: "May 15, 2025",
        time: "5:00 PM",
        title: "Alumni Meet 2025",
        location: "PU Convention Hall",
        description:
          "The Alumni Association of the Department of Computer Science cordially invites you to reunite, cherish old memories, and relive the wonderful moments spent together.",
        imageUrl: "https://your-image-url.com/alumni-meet.jpg",
        slug: "alumni-meet-2025",
      },
  ];

  return (
    <div className="pt-20">
      {/* Intro Section - Full Width */}
      <EventIntro
        pageName="Alumni Events"
        tagline="Reconnect, Share, and Inspire!"
        imageUrl="https://your-image-link.com/alumni.jpg"
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

export default Alumni;
