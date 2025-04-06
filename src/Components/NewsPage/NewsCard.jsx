// components/NewsCard.jsx
import React from "react";
import { Link } from "react-router-dom";

const NewsCard = ({ imageUrl, date, category, title, description, slug }) => {
  return (
    <div className="flex flex-col md:flex-row items-start gap-8 py-8 border-t border-gray-300">
      {/* Image Section */}
      <div className="w-full md:w-1/3">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-auto rounded-lg shadow-md"
        />
      </div>

      {/* Content Section */}
      <div className="flex-1">
        <p className="text-sm uppercase tracking-wide text-gray-500 mb-2">
          {new Date(date).toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
          })}{" "}
          — <span className="text-red-600 font-semibold">{category}</span>
        </p>

        <h2 className="text-title-mobile md:text-event-title font-playfair mb-4 leading-tight">
          <Link to={`/news/${slug}`} className="hover:underline">
            {title}
          </Link>
        </h2>


        <p className="text-event-description text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default NewsCard;
