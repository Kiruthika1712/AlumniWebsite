import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./UpcomingEvents.css";

const UpcomingEvents = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/api/events");
        if (!response.ok) throw new Error("Failed to fetch events");
        const data = await response.json();

        const sortedEvents = data
          .sort((a, b) => new Date(b.event_date) - new Date(a.event_date))
          .slice(0, 3);

        setEvents(sortedEvents);
      } catch (err) {
        console.error(err);
        setError("Could not load events.");
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <div className="upcoming-events">
      <h2 className="section-title">Upcoming Events</h2>

      {loading && <p>Loading events...</p>}
      {error && <p>{error}</p>}

      <div className="event-list">
        {events.map((event, index) => (
          <div key={event.id} className="event-wrapper">
            <div className="event-card">
            <Link
  to={`/events/category/${event.event_category}`}
  state={{ selectedEventSlug: event.event_slug }}
>
  <img
    src={event.image_url}
    alt={event.title}
    className="event-image cursor-pointer"
  />
</Link>

              <div className="event-content">
                <h3 className="event-title">{event.title}</h3>
                <p className="event-description">{event.description}</p>
                <p className="event-date">{formatDate(event.event_date)}</p>
                <button className="register-button">REGISTER</button>
              </div>
            </div>
            {index !== events.length - 1 && <div className="vertical-divider" />}
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingEvents;
