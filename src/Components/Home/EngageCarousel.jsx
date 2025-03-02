import React, { useState, useEffect } from "react";
import "./EngageCarousel.css";

const EngageCarousel = () => {
  const [current, setCurrent] = useState(0);

  const slides = [
    {
      title: "Discussion Forum",
      description: "Participate in live Q&A sessions and share your expertise.",
      linkText: "START NOW",
      image:
        "https://res.cloudinary.com/ddnis6cuk/image/upload/f_auto,q_auto/v1/Alumni/t7ddagekkyvay0j1aigk",
    },
    {
      title: "Internship & Job Opportunities",
      description:
        "Support students by sharing your professional experiences.",
      linkText: "BECOME A MENTOR",
      image:
        "https://res.cloudinary.com/ddnis6cuk/image/upload/f_auto,q_auto/v1/Alumni/ussvosucoaso0kl9pcrx",
    },
    {
      title: "Alumni Recommendations",
      description: "Share your recommendations to guide others.",
      linkText: "EXPLORE NOW",
      image:
        "https://res.cloudinary.com/ddnis6cuk/image/upload/f_auto,q_auto/v1/Alumni/eognqjlbv3znzw1nywze",
    },
    {
      title: "CAREER OPPORTUNITIES",
      description:
        "Access exclusive job openings and internship opportunities for alumni.",
      linkText: "EXPLORE NOW",
      image:
        "https://res.cloudinary.com/ddnis6cuk/image/upload/f_auto,q_auto/v1/Alumni/k1cqvnajwbd6vvp6s64m",
    },
    {
      title: "Reunion 2023",
      description: "Celebrate the memories and make new ones!",
      linkText: "JOIN THE NETWORK",
      image:
        "https://res.cloudinary.com/ddnis6cuk/image/upload/f_auto,q_auto/v1/Alumni/v0haamgummobdju6thsa",
    },
  ];

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel-container">
      <div className="carousel-wrapper">
        {/* Left Image */}
        <img
          src={slides[(current - 1 + slides.length) % slides.length].image}
          className="carousel-side-image left"
          alt="Previous slide"
        />

        <div className="carousel-main">
          <img
            src={slides[current].image}
            className="carousel-image"
            alt={slides[current].title}
          />

          {/* Indicator + Arrow + Counter Section */}
          <div className="carousel-nav-container">
            {/* Indicator */}
            <div className="carousel-indicator">
              {slides.map((_, index) => (
                <span
                  key={index}
                  className={`indicator-dot ${
                    index === current ? "active" : ""
                  }`}
                  onClick={() => setCurrent(index)}
                />
              ))}
            </div>

            {/* Arrows and Counter */}
            <div className="carousel-nav">
              <button onClick={prevSlide} className="nav-arrow left">
                &#10094;
              </button>
              <div className="carousel-counter">
                {String(current + 1).padStart(2, "0")} /{" "}
                {String(slides.length).padStart(2, "0")}
              </div>
              <button onClick={nextSlide} className="nav-arrow right">
                &#10095;
              </button>
            </div>
          </div>

          {/* Title + Content + Link Section */}
          <div className="carousel-content">
            <div className="carousel-left">
              <h2 className="carousel-title">{slides[current].title}</h2>
              <a href="#" className="carousel-link">
                {slides[current].linkText}
              </a>
            </div>
            <div className="carousel-right">
              <p>{slides[current].description}</p>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <img
          src={slides[(current + 1) % slides.length].image}
          className="carousel-side-image right"
          alt="Next slide"
        />
      </div>
    </div>
  );
};

export default EngageCarousel;
