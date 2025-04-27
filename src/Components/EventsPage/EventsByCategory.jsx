import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useLocation } from "react-router-dom";

// Function to format the date
const formatDate = (dateString) => {
  const date = new Date(dateString);
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return date.toLocaleDateString(undefined, options); // Example: "April 27, 2025"
};

// Function to format the time
const formatTime = (timeString) => {
  const [hours, minutes] = timeString.split(":");
  const date = new Date();
  date.setHours(hours);
  date.setMinutes(minutes);
  const options = { hour: 'numeric', minute: 'numeric', hour12: true };
  return date.toLocaleTimeString(undefined, options); // Example: "2:30 PM"
};

const EventsByCategory = () => {
  const { categoryId } = useParams();
  const location = useLocation();
  const selectedSlugFromState = location.state?.selectedEventSlug;

  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true); // Start loading
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
      } finally {
        setLoading(false); // End loading
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
      <div className="relative w-full bg-[#EB6F63] text-white py-20 px-8 shadow-lg rounded-xl mb-16">
        <div className="text-center md:text-left flex flex-col items-center md:flex-row justify-between animate-fadeIn">
          <div className="space-y-6">
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight text-DarkBlue">
              Upcoming Events
            </h1>
            <p className="text-lg sm:text-xl font-medium leading-relaxed max-w-2xl text-white">
              Explore the exciting events in your category.
              <span className="inline-flex items-center ml-2 animate-bounce"> ↓ </span>
            </p>
          </div>
        </div>
      </div>

      {/* Event List or Selected Event Detail */}
      {loading ? (
        <div className="flex justify-center items-center my-20">
          {/* Loading Spinner or Placeholder */}
        </div>
      ) : !selectedEvent ? (
        <div className="animate-fadeIn">
          {events.map((event) => (
            <div
              className="flex flex-col md:flex-row items-start gap-6 my-12 hover:shadow-xl rounded-lg transition-all duration-300 bg-white p-6"
              key={event.id}
            >
              <div className="flex-1">
                <p className="text-lg text-gray-500 mb-2">
                  {formatDate(event.event_date)} @ {formatTime(event.event_time)}
                </p>
                <h2 className="text-3xl sm:text-5xl font-bold text-DarkBlue mb-2 hover:text-LightRed transition-all duration-300">
                  {event.title}
                </h2>
                <p className="text-lg sm:text-xl font-medium mb-4 text-gray-600">{event.location}</p>
                <p className="text-xl mb-6 text-gray-700 text-justify">{event.description}</p>
                <button
                  onClick={() => handleEventClick(event.event_slug)}
                  className="px-6 py-3 bg-LightRed text-white rounded-lg hover:bg-DarkBlue transition duration-300"
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
                  <p>📅 <strong>Date:</strong> {formatDate(selectedEvent.event_date)}</p>
                  <p>⏰ <strong>Time:</strong> {formatTime(selectedEvent.event_time)}</p>
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
