import React, { useState, useEffect } from "react";
import "./EngageCarousel.css";
import { Link } from "react-router-dom";

const EngageCarousel = () => {
  const [current, setCurrent] = useState(0);

  const slides = [
    {
      title: "Discussion Forum",
      description: "Join live Q&A sessions and share your insights with the community.",
      linkText: "JOIN THE DISCUSSION",
      image:
        "https://res.cloudinary.com/ddnis6cuk/image/upload/f_auto,q_auto/v1/Alumni/t7ddagekkyvay0j1aigk",
    },
    {
      title: "Internship & Job Opportunities",
      description:"Share your expertise and mentor students in their professional journey.",
      linkText: "BECOME A MENTOR TODAY",
      link: "/engage/opportunities",
      image:
        "https://res.cloudinary.com/ddnis6cuk/image/upload/f_auto,q_auto/v1/Alumni/ussvosucoaso0kl9pcrx",
    },
    {
      title: "Mentorship",
      description: "Guide the next generation with your wisdom and professional experience.",
      linkText: "START MENTORING NOW",
      link: "/engage/mentorship",
      image:
        "https://res.cloudinary.com/ddnis6cuk/image/upload/f_auto,q_auto/v1/Alumni/eognqjlbv3znzw1nywze",
    },
    {
      title: "Blogs",
      description:
        "Inspire and be inspired by sharing your knowledge and stories.",
      linkText: "EXPLORE THE BLOGS",
      link: "/engage/blogs",
      image:
        "https://res.cloudinary.com/ddnis6cuk/image/upload/f_auto,q_auto/v1/Alumni/k1cqvnajwbd6vvp6s64m",
    },
    {
      title: "Contributions",
      description: "Support noble causes and contribute to making a positive impact.",
      linkText: "MAKE A DIFFERENCE",
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
              <Link to={slides[current].link} className="carousel-link">
                {slides[current].linkText}
              </Link>

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
