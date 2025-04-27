import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const NewsByCategory = () => {
  const { categoryId } = useParams();
  const location = useLocation();
  const [news, setNews] = useState([]);
  const [selectedNews, setSelectedNews] = useState(null);
  const [categoryName, setCategoryName] = useState("");
  const [loading, setLoading] = useState(true);

  // Extract 'highlight' query parameter to know which news is selected
  const queryParams = new URLSearchParams(location.search);
  const highlightNewsId = queryParams.get("highlight");

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`http://127.0.0.1:8000/api/news-categories/${categoryId}`);
        setNews(response.data);

        if (response.data.length > 0) {
          setCategoryName(response.data[0].category);
        }
      } catch (error) {
        console.error("Error fetching news:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, [categoryId]);

  useEffect(() => {
    // Find the selected news item from the list based on the highlight parameter
    if (highlightNewsId) {
      const foundNews = news.find((item) => item.id.toString() === highlightNewsId);
      setSelectedNews(foundNews || null);
    }
  }, [highlightNewsId, news]);

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  return (
    <div className="py-20 px-3 sm:px-8 lg:px-16">
      {/* Hero Section */}
      <div className="relative w-full bg-[#EB6F63] text-white py-20 px-8 shadow-lg mb-16">
        <div className="flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-12 animate-fadeIn">
          <div className="text-center md:text-left flex-1 space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight leading-tight">
              {categoryName || "News"}
            </h1>
            <p className="text-lg md:text-xl font-medium leading-relaxed max-w-2xl">
              {categoryName === "Department News"
                ? "Explore the latest updates and milestones from our academic departments! ↓"
                : "Stay updated with the latest news and updates ↓"}
            </p>
          </div>
        </div>
      </div>

      {/* News Section */}
      <AnimatePresence mode="wait">
        {loading ? (
          <motion.div
            key="loader"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex justify-center items-center py-32"
          >
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
          </motion.div>
        ) : !selectedNews ? (
          <motion.div
  key="list"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  exit={{ opacity: 0 }}
  className="space-y-16"
>
  {news.map((item, index) => (
    <div key={item.id} className={`px-10 flex flex-col md:flex-row gap-10 items-start ${index < news.length - 1 ? 'pb-8 border-b border-gray-300' : ''}`}>
      {/* Image */}
      <img
        src={item.image_url}
        alt={item.title || "News image"}
        className="w-full md:w-1/3 h-auto rounded-lg shadow-md object-cover aspect-video"
      />
      {/* Text content */}
      <div className="flex-1 space-y-3">
        <p className="text-sm text-LightRed">{formatDate(item.news_date)}</p>
        <h2
          onClick={() => setSelectedNews(item)}
          className="text-3xl md:text-4xl font-bold text-DarkBlue font-playfair cursor-pointer hover:underline outline-none"
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === "Enter" && setSelectedNews(item)}
        >
          {item.title}
        </h2>

        <p className="text-gray-600 text-lg max-w-3xl line-clamp-4">
          {item.description}
        </p>
      </div>
    </div>
  ))}
</motion.div>

        ) : (
          <motion.div
            key="detail"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="min-h-screen bg-white text-gray-800 pt-20"
          >
            <div className="max-w-6xl mx-auto py-12 px-4 sm:px-8 lg:px-16">
              {/* Breadcrumb */}
              <p
                className="text-sm text-gray-400 mb-2 cursor-pointer hover:underline"
                onClick={() => setSelectedNews(null)}
                onKeyDown={(e) => e.key === "Enter" && setSelectedNews(null)}
                role="button"
                tabIndex={0}
              >
                ← Back to {categoryName}
              </p>

              <p className="text-sm text-LightRed mb-4">
                {formatDate(selectedNews.news_date)} {" "}
                <span className="text-LightRed font-semibold">{categoryName}</span>
              </p>

              <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-DarkBlue leading-tight">
                {selectedNews.title}
              </h1>

              <div className="mb-8 rounded-xl overflow-hidden">
                <img
                  src={selectedNews.image_url}
                  alt={selectedNews.title || "Detailed news image"}
                  className="w-full max-h-[500px] object-cover rounded-lg shadow-md"
                />
              </div>

              <div
                className="prose text-lg"
                dangerouslySetInnerHTML={{ __html: selectedNews.content }}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default NewsByCategory;
