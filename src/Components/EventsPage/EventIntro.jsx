// components/EventIntro.jsx
import React from "react";

const EventIntro = ({ pageName, tagline, imageUrl }) => (
  <div className="relative w-full bg-[#EB6F63] text-white py-20 px-8 shadow-lg">
    <div className="flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-12 animate-fadeIn">

      {/* Left Section - Text Content */}
      <div className="text-center md:text-left flex-1 space-y-6">
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight leading-tight">
          {pageName || ""}
        </h1>

        <p className="text-lg md:text-xl font-medium leading-relaxed max-w-2xl">
          {tagline || ""}
          <span className="inline-flex items-center ml-2 animate-bounce">
            ↓
          </span>
        </p>
      </div>

      {/* Right Section - Image */}
      {imageUrl && (
        <div className="w-full md:w-1/2">
          <img
            src={imageUrl}
            alt="Department"
            className="rounded-lg shadow-xl object-cover w-full h-auto"
          />
        </div>
      )}
    </div>
  </div>
);

export default EventIntro;
