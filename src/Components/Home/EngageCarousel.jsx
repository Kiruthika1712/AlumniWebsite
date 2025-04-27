import React, { useState, useEffect } from "react";
import "./EngageCarousel.css";
import { Link } from "react-router-dom";

const EngageCarousel = () => {
  const [current, setCurrent] = useState(0);

  const slides = [
    {
      title: "Unlock Your Dream Job",
      description: "Explore exclusive internships and job opportunities tailored to elevate your career. Don’t miss out on your next big role!",
      linkText: "DISCOVER OPPORTUNITIES",
      link: "/engage/opportunities",
      image:
        "https://res.cloudinary.com/ddnis6cuk/image/upload/f_auto,q_auto/v1/Alumni/ussvosucoaso0kl9pcrx",
    },
    {
      title: "Become a Guiding Star",
      description: "Shape the future by mentoring budding professionals. Share your expertise and make an impact on someone’s career path.",
      linkText: "START MENTORING NOW",
      link: "/engage/mentorship",
      image:
        "https://res.cloudinary.com/ddnis6cuk/image/upload/f_auto,q_auto/v1/Alumni/eognqjlbv3znzw1nywze",
    },
    {
      title: "Request Your Personalized LOR",
      description: "Ready to take the next step? Request a glowing Letter of Recommendation from alumni, and watch your application soar!",
      linkText: "REQUEST A RECOMMENDATION",
      link: "/engage/lor",
      image:
        "https://res.cloudinary.com/ddnis6cuk/image/upload/f_auto,q_auto/v1/Alumni/k1cqvnajwbd6vvp6s64m",
    },
    {
      title: "Share Your Story, Inspire Others",
      description: "Write and read blogs that inspire and connect the alumni community. Be a beacon of knowledge for the PUDoCS pioneers.",
      linkText: "START BLOGGING TODAY",
      link: "/engage/blogs",
      image:
        "https://res.cloudinary.com/ddnis6cuk/image/upload/f_auto,q_auto/v1/Alumni/k1cqvnajwbd6vvp6s64m",
    },
    {
      title: "Make a Difference Today",
      description: "Contribute to a cause that matters. Whether through donations or volunteering, your actions can create lasting change.",
      linkText: "JOIN THE CAUSE",
      link: "/engage/contributions",
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
