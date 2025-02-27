import { useEffect, useState } from "react";
import Background from "../Background/Background";
import Navbar from "../Navbar/Navbar"; // Ensure correct path
import Hero from "../Hero/Hero"; // Ensure correct path
import UpcomingEvents from "./UpcomingEvent";
import NewsSection from "./NewsSection";
import EngageCarousel from "./EngageCarousel";

const Home = () => {
  const [heroCount, setHeroCount] = useState(0); // Start from 0 for better cycle
  const [playStatus, setPlayStatus] = useState(false);

  // Automatically update heroCount every 3 seconds
  useEffect(() => {
    const timeout = setTimeout(() => {
      setHeroCount((prevCount) => (prevCount === 2 ? 0 : prevCount + 1));
    }, 3000);

    return () => clearTimeout(timeout); // Clear previous timeout before setting a new one
  }, [heroCount]); // Dependency ensures update on heroCount change

  return (
    <div>
      <Background playStatus={playStatus} heroCount={heroCount} />
      <Navbar />
      <Hero
        heroCount={heroCount}
        setHeroCount={setHeroCount}
        setPlayStatus={setPlayStatus}
      />
      <UpcomingEvents />
      <NewsSection />
      <EngageCarousel />
    </div>
  );
};

export default Home;
