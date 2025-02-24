import { useState } from "react";
import "./Background.css";

const Background = ({ playStatus }) => {
  const [heroCount, setHeroCount] = useState(0);

  const backgrounds = [
    "src/assets/cs2.jpg",
    "src/assets/cs1.jpg",
    "https://res.cloudinary.com/ddnis6cuk/image/upload/f_auto,q_auto/v1/Alumni/lxmkrrloj1akzd9u5eeg"
  ];

  return (
    <div className="background-container">
      {/* Background Image or Video */}
      {playStatus ? (
        <video className="background" autoPlay loop muted>
          <source src={"src/assets/video1.mp4"} type="video/mp4" />
        </video>
      ) : (
        <img src={backgrounds[heroCount]} alt="Background" className="background" />
      )}

      {/* Hero Dots for Navigation */}
      <div className="hero-dot-play">
        <ul className="hero-dots">
          {backgrounds.map((_, index) => (
            <li
              key={index}
              onClick={() => setHeroCount(index)}
              className={heroCount === index ? "hero-dot blue" : "hero-dot"}
            ></li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Background;
