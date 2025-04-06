// pages/NewsDetails.jsx
import React from "react";
import { useParams, useNavigate } from "react-router-dom";

// Helper function to parse "DD-MM-YYYY" to a valid Date object
const parseDate = (dateStr) => {
  const [day, month, year] = dateStr.split("-");
  return new Date(`${year}-${month}-${day}`);
};

// Mock Data (replace with API in real apps)
const newsData = [
  {
    slug: "inauguration-new-labs",
    title:
      "Inauguration of State-of-the-Art Facilities at the Department of Computer Science",
    date: "25-01-2025", // DD-MM-YYYY format
    category: "Department News",
    imageUrl: "https://your-image-url.com/inauguration.jpg",
    content: `
      <p>Prof. K. Tharanikkarasu, Vice-Chancellor (i/c), inaugurated three advanced facilities in the Department of Computer Science, enhancing research and innovation capabilities.</p>

      <h3>Facilities Inaugurated:</h3>
      <ul>
        <li><strong>High Performance Computing (HPC) Lab:</strong> Advanced computing clusters for machine learning, data analysis, and scientific simulations.</li>
        <li><strong>Internet of Things (IoT) Lab:</strong> Smart device prototyping, real-time monitoring, and IoT development.</li>
        <li><strong>Drone Lab:</strong> Drone technology research, aerial surveillance, and autonomous navigation.</li>
        <li><strong>Renovated Computer Labs:</strong> Upgraded with modern systems, high-speed internet, and advanced software tools.</li>
      </ul>

      <h3>Remarks by the Vice-Chancellor:</h3>
      <p>“With the rapid advancement in AI, IoT, and drone technologies, these facilities will provide our students with hands-on experience and strengthen our research capabilities,” said Prof. K. Tharanikkarasu.</p>

      <h3>Contact Information:</h3>
      <p>Email: <a href="mailto:csdept@pondiuni.edu.in">csdept@pondiuni.edu.in</a></p>
    `,
  },
];

const NewsDetails = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  // Find the news item by slug
  const newsItem = newsData.find((item) => item.slug === slug);

  // Redirect if the news item is not found
  if (!newsItem) {
    navigate("/news/department");
    return null;
  }

  return (
    <div className="min-h-screen bg-white text-gray-800 pt-20 px-4 md:px-8">
      <div className="max-w-4xl mx-auto py-12">
        {/* News Date & Category */}
        <p className="text-sm text-gray-500 mb-4">
          {parseDate(newsItem.date).toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
          })}{" "}
          — <span className="text-red-600 font-semibold">{newsItem.category}</span>
        </p>

        {/* News Title */}
        <h1 className="text-title-mobile md:text-event-title font-extrabold mb-8 leading-snug text-DarkBlue">
          {newsItem.title}
        </h1>

        {/* News Image */}
        <div className="mb-8">
          <img
            src={newsItem.imageUrl}
            alt={newsItem.title}
            className="w-full rounded-lg shadow-lg object-cover"
          />
        </div>

        {/* News Content */}
        <div
          className="prose max-w-none text-gray-700 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: newsItem.content }}
        />

        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="mt-12 px-6 py-3 bg-DarkBlue text-white rounded-lg hover:bg-opacity-80 transition"
        >
          ← Back to News
        </button>
      </div>
    </div>
  );
};

export default NewsDetails;
