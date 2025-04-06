import React from "react";
import { Link } from "react-router-dom";

const EventsPageCard = ({ date, time, title, location, description, imageUrl, slug }) => (
  <div className="flex flex-col md:flex-row items-start gap-6 my-20">
    {/* Content Section */}
    <div className="flex-1">
      <p className="text-sm text-gray-500">{date} @ {time}</p>
      <h2 className="text-3xl md:text-4xl font-bold mb-2 text-DarkBlue font-playfair">
        {title}
      </h2>
      <p className="text-base md:text-lg font-outfit">{location}</p>
      <p className="text-gray-600 mb-4 max-w-3xl text-xl">{description}</p>
      <Link to={`/events/${slug}`} className="text-LightRed text-lg">
        Continue Reading 🔗
      </Link> 
    </div>

    {/* Image Section */}
    <img
      src={imageUrl}
      alt={title}
      className="w-full md:w-64 lg:w-80 h-48 md:h-40 object-cover rounded-lg shadow-lg"
    />
  </div>
);

export default EventsPageCard;
