import { motion } from "framer-motion";
import "./Hero.css"; // Keep for background or overlay customization

const Hero = () => {
  return (
    <div className="relative h-[60vh] bg-gradient-to-br from-blue-100 via-blue-200 to-white overflow-hidden">
      {/* Optional background image or particles can be added here */}

      {/* Overlay (optional dark/light blur layer) */}
      <motion.div
        className="absolute inset-0 bg-black bg-opacity-10 backdrop-blur-sm z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      ></motion.div>

      {/* Hero Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full px-6 text-center">
        <motion.h1
          className="text-4xl sm:text-5xl lg:text-6xl font-bold text-blue-900 font-outfit drop-shadow-md"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Reconnect. Engage. Inspire.
        </motion.h1>

        <motion.p
          className="mt-6 text-lg sm:text-xl max-w-2xl text-gray-700"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          A dynamic platform uniting alumni, students, and faculty to explore ideas, share experiences, and celebrate success together.
        </motion.p>

        <motion.div
          className="mt-10 flex flex-wrap justify-center gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <motion.a
            href="/auth"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-full shadow-lg transition-all duration-300"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            Join Now
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
