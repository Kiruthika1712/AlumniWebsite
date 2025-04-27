import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Background from "../Background/Background";
import Navbar from "../Navbar/Navbar";
import Hero from "../Hero/Hero";
import UpcomingEvents from "./UpcomingEvent";
import NewsSection from "./NewsSection";
import EngageCarousel from "./EngageCarousel";

const Home = () => {
  const [heroCount, setHeroCount] = useState(0);
  const [playStatus, setPlayStatus] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setHeroCount((prevCount) => (prevCount === 2 ? 0 : prevCount + 1));
    }, 3000);

    return () => clearTimeout(timeout);
  }, [heroCount]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: "easeInOut" }} // Smooth fade in
    >
      <Background playStatus={playStatus} heroCount={heroCount} />
      <Navbar />
      <Hero
        heroCount={heroCount}
        setHeroCount={setHeroCount}
        setPlayStatus={setPlayStatus}
      />

      {/* Upcoming Events - Fade from Left with staggered effect */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.3, ease: "easeInOut" }} // Slight delay for smooth entrance
        viewport={{ once: true }}
      >
        <UpcomingEvents />
      </motion.div>

      {/* News Section - Fade from Right with smoother transition */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.5, ease: "easeInOut" }} // Delay and easing
        viewport={{ once: true }}
      >
        <NewsSection />
      </motion.div>

      {/* Engage Carousel - Zoom in with delay */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.7, ease: "easeInOut" }} // Zoom effect with delay
        viewport={{ once: true }}
      >
        <EngageCarousel />
      </motion.div>
    </motion.div>
  );
};

export default Home;
