import React, { useState } from "react";
import RecommendationsList from "./RecommendationsList";
import AddRecommendation from "./AddRecommendationForm";
import SectionHeader from "./SectionHeader";

const RecommendationsPage = () => {
  const [recommendations, setRecommendations] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [filterTag, setFilterTag] = useState("");
  const [showBookmarked, setShowBookmarked] = useState(false);

  const handleAddRecommendation = (newRecommendation) => {
    setRecommendations([newRecommendation, ...recommendations]);
    setShowForm(false); // Hide form after submission
  };

  // Filtered recommendations based on tags or bookmarked
  const filteredRecommendations = recommendations.filter((rec) => {
    if (showBookmarked) return rec.bookmarked; // Show only bookmarked
    if (filterTag) return rec.tags.includes(filterTag); // Show by tag
    return true;
  });

  return (
    <div>
      <SectionHeader title="Recommendations" />

      {/* Toggle Form Button */}
      <div className="text-center my-6">
        <button
          className="px-4 py-2 bg-blue-600 text-white rounded-md"
          onClick={() => setShowForm(!showForm)}
        >
          {showForm ? "Close Form" : "Add Recommendation"}
        </button>
      </div>

      {showForm && <AddRecommendation onAdd={handleAddRecommendation} />}

      {/* Filter Options */}
      <div className="flex justify-center gap-4 my-4">
        <button
          className={`px-4 py-2 rounded-md ${showBookmarked ? "bg-blue-500 text-white" : "bg-gray-200"}`}
          onClick={() => setShowBookmarked(!showBookmarked)}
        >
          {showBookmarked ? "Show All" : "View Bookmarked"}
        </button>

        {/* Tag Filter Dropdown */}
        <select
          className="px-4 py-2 border rounded-md"
          onChange={(e) => setFilterTag(e.target.value)}
        >
          <option value="">Filter by Tag</option>
          {Array.from(new Set(recommendations.flatMap((rec) => rec.tags))).map((tag, index) => (
            <option key={index} value={tag}>
              {tag}
            </option>
          ))}
        </select>
      </div>

      <RecommendationsList recommendations={filteredRecommendations} />
    </div>
  );
};

export default RecommendationsPage;
