import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Newscard.css";

const NewsSection = () => {
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [expandedIndex, setExpandedIndex] = useState(null); // Track which card is expanded

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/api/news");
        if (!response.ok) throw new Error("Failed to fetch news");
        const data = await response.json();

        const sortedNews = data
          .sort((a, b) => new Date(b.news_date) - new Date(a.news_date))
          .slice(0, 4);

        setNewsData(sortedNews);
      } catch (err) {
        console.error(err);
        setError("Could not load news.");
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  };

  const handleToggle = (index) => {
    setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="news-section">
      <h2 className="section-title">Latest News</h2>

      {loading && <p>Loading news...</p>}
      {error && <p>{error}</p>}

      <div className="news-list">
        {newsData.map((news, index) => {
          const isExpanded = expandedIndex === index;
          return (
            <div
              key={news.id}
              className={`news-card ${isExpanded ? "expanded" : ""}`}
            >
              <img
                src={news.image_url}
                alt={news.title}
                className="news-image"
              />
              <div className="news-content">
                {news.category && (
                  <p className="news-category">{news.category.name}</p>
                )}
                <h3 className="news-title">{news.title}</h3>
                <p className="news-date">{formatDate(news.news_date)}</p>

                {isExpanded ? (
                  <>
                    <p className="news-full-description">{news.content}</p>
                    <Link
                      to={`/news/category/${news.news_category}?highlight=${news.id}`}
                      className="read-more"
                    >
                      READ ARTICLE →
                    </Link>
                  </>
                ) : (
                  <p className="news-short-description">{news.description}</p>
                )}

                <button
                  className={isExpanded ? "close-button" : "expand-button"}
                  onClick={() => handleToggle(index)}
                >
                  {isExpanded ? "✖" : "⋯"}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default NewsSection;
