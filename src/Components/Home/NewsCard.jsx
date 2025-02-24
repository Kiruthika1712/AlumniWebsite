import { useState } from "react";

const NewsCard = ({ title, category, date, image, shortDesc, fullDesc }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className={`news-card ${isExpanded ? "expanded" : ""}`}>
      <img src={image} alt={title} className="news-image" />
      <div className="news-content">
        <p className="news-category">{category}</p>
        <h3 className="news-title">{title}</h3>

        <p className="news-date">{date}</p>

        {isExpanded ? (
          <>
            <p className="news-full-description">{fullDesc}</p>
            <a href="#" className="read-more">READ ARTICLE →</a>
          </>
        ) : (
          <p className="news-short-description">{shortDesc}</p>
        )}

        {/* Toggle button changes between three dots and close button */}
        <button
          className={isExpanded ? "close-button" : "expand-button"}
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? "✖" : "⋯"}
        </button>
      </div>
    </div>
  );
};

export default NewsCard;
