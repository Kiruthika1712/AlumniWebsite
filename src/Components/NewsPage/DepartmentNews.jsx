// pages/DepartmentNews.jsx
import React from "react";
import EventIntro from "../EventsPage/EventIntro.jsx";
import NewsCard from "./NewsCard";

// Helper function to parse different date formats
const parseDate = (dateStr) => {
  const [part1, part2, part3] = dateStr.split("-");
  return part1.length === 4
    ? new Date(`${part1}-${part2}-${part3}`) // YYYY-MM-DD format
    : new Date(`${part3}-${part2}-${part1}`); // DD-MM-YYYY format
};

const DepartmentNews = () => {
  const newsData = [
    {
      date: "2025-01-28", // YYYY-MM-DD format
      category: "Department News",
      title: "Three Brown seniors awarded prestigious fellowships",
      description:
        "Through various scholarships, students of the Class of 2025 will pursue international studies and careers.",
      imageUrl: "https://your-image-url.com/image1.jpg",
      slug: "brown-seniors-fellowships",
    },
    {
      date: "25-01-2025", // DD-MM-YYYY format
      category: "Department News",
      title:
        "Inauguration of State-of-the-Art Facilities at the Department of Computer Science",
      description: "The Computer Science department inaugurated new research facilities.",
      imageUrl: "https://your-image-url.com/image2.jpg",
      slug: "inauguration-new-labs",
    },
  ];

  return (
    <div className="min-h-screen bg-white pt-20">
      <EventIntro
        pageName="Department News"
        tagline="Explore the latest updates and milestones from our academic departments!"
        imageUrl="https://your-image-url.com/news-banner.jpg"
      />

      <div className="max-w-6xl mx-auto px-8 py-12">
        {newsData.map((news, index) => (
          <NewsCard
            key={index}
            {...news}
            date={parseDate(news.date).toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          />
        ))}
      </div>
    </div>
  );
};

export default DepartmentNews;
