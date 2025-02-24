import EventCard from "./EventCard";
import "./UpcomingEvents.css";

const events = [
  {
    title: "Alumni Meet 2025",
    description:
      "The Alumni Association of the Department of Computer Science cordially invites you to reunite and cherish the joys and relive wonderful moments spent together.",
    date: "Jan 26, 2025",
    image:
      "https://res.cloudinary.com/ddnis6cuk/image/upload/f_auto,q_auto/v1/Alumni/bx3q9sodgmxsheffckok",
  },
  {
    title: "Outlook Screening Test",
    description:
      "All the students who have applied for the Outlook company are requested to attend the online screening test.",
    date: "Dec 30, 2024",
    image:
      "https://res.cloudinary.com/ddnis6cuk/image/upload/f_auto,q_auto/v1/Alumni/h3bovposixi4wudfu733",
  },
  {
    title: "Winter Music Festival",
    description:
      "Experience live performances by top artists at the Winter Music Festival.",
    date: "Jan 15, 2025",
    image:
      "https://res.cloudinary.com/ddnis6cuk/image/upload/f_auto,q_auto/v1/Alumni/vwarhcdjpnlsy8ue08mz",
  },
];

const UpcomingEvents = () => {
  return (
    <div className="upcoming-events">
      <h2 className="section-title">Upcoming Events</h2>
      <div className="event-list">
        {events.map((event, index) => (
          <div key={index} className="event-wrapper">
            <EventCard
              title={event.title}
              description={event.description}
              date={event.date}
              image={event.image}
            />
            {index !== events.length - 1 && <div className="vertical-divider" />}
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingEvents;
