import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero">
      {/* Background Overlay */}
      <div className="hero-overlay"></div>

      {/* Hero Content */}
      <div className="hero-content">
        <h1 className="hero-title">Reconnect. Engage. Inspire.</h1>
        <p className="hero-subtitle">
          A platform to unite alumni, students, and faculty. Explore opportunities, share experiences, and celebrate achievements.
        </p>
        <div className="hero-buttons">
          <a href="/register" className="hero-btn primary">Join Now</a>
          <a href="/explore" className="hero-btn secondary">Explore</a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
