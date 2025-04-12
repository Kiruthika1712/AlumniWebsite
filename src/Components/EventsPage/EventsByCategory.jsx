import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useLocation } from "react-router-dom";

const EventsByCategory = () => {
  const { categoryId } = useParams();
  const location = useLocation();
  const selectedSlugFromState = location.state?.selectedEventSlug;

  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/api/event-categories/${categoryId}`);
        setEvents(response.data);

        // Auto-open selected event if navigated from home page
        if (selectedSlugFromState) {
          const matchedEvent = response.data.find(event => event.event_slug === selectedSlugFromState);
          if (matchedEvent) setSelectedEvent(matchedEvent);
        }
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    fetchEvents();
  }, [categoryId, selectedSlugFromState]);

  const handleEventClick = (eventSlug) => {
    const clickedEvent = events.find((event) => event.event_slug === eventSlug);
    setSelectedEvent(clickedEvent);
  };

  return (
    <div className="py-20 px-3 sm:px-8 lg:px-16">
      {/* Header Section */}
      <div className="relative w-full bg-[#EB6F63] text-white py-20 px-8 shadow-lg">
        <div className="flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-12 animate-fadeIn">
          <div className="text-center md:text-left flex-1 space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight leading-tight">
              Events
            </h1>
            <p className="text-lg md:text-xl font-medium leading-relaxed max-w-2xl">
              Explore upcoming events in your category
              <span className="inline-flex items-center ml-2 animate-bounce"> ↓ </span>
            </p>
          </div>
        </div>
      </div>

      {/* Event List or Selected Event Detail */}
      {!selectedEvent ? (
        <div>
          {events.map((event) => (
            <div className="flex flex-col md:flex-row items-start gap-6 my-20" key={event.id}>
              <div className="flex-1">
                <p className="text-sm text-gray-500">{event.event_date} @ {event.event_time}</p>
                <h2 className="text-3xl md:text-4xl font-bold mb-2 text-DarkBlue font-playfair">
                  {event.title}
                </h2>
                <p className="text-base md:text-lg font-outfit">{event.location}</p>
                <p className="text-gray-600 mb-4 max-w-3xl text-xl text-justify">{event.description}</p>
                <button
                  onClick={() => handleEventClick(event.event_slug)}
                  className="text-LightRed text-lg"
                >
                  Continue Reading 🔗
                </button>
              </div>
              <img
                src={event.image_url}
                alt={event.title}
                className="w-full md:w-64 lg:w-80 h-48 md:h-40 object-cover rounded-lg shadow-lg cursor-pointer"
                onClick={() => handleEventClick(event.event_slug)}
              />
            </div>
          ))}
        </div>
      ) : (
        <div className="min-h-screen bg-white text-gray-800 pt-20">
          <div className="max-w-6xl mx-auto py-12 px-4 sm:px-8 lg:px-16">
            <div className="flex flex-col-reverse md:flex-row items-start md:gap-16">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <h1 className="text-4xl font-extrabold mb-6 text-DarkBlue leading-tight">
                  {selectedEvent.title}
                </h1>
                <p className="text-lg mb-6 leading-relaxed text-justify">{selectedEvent.description}</p>
                <p className="text-lg mb-6 leading-relaxed text-justify">{selectedEvent.content}</p>
                <div className="bg-LightRed text-white p-6 rounded-lg shadow-lg mb-8">
                  <p>📅 <strong>Date:</strong> {selectedEvent.event_date}</p>
                  <p>⏰ <strong>Time:</strong> {selectedEvent.event_time}</p>
                  <p>📍 <strong>Location:</strong> {selectedEvent.location}</p>
                </div>
                <button
                  onClick={() => setSelectedEvent(null)}
                  className="mt-8 px-6 py-3 bg-DarkBlue text-white rounded-lg hover:bg-opacity-80 transition"
                >
                  ← Back to Events
                </button>
              </div>
              <div className="md:w-1/2">
                <img
                  src={selectedEvent.image_url}
                  alt={selectedEvent.title}
                  className="w-full max-h-[500px] object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EventsByCategory;
