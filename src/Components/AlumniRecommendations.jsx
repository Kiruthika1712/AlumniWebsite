import { useState } from "react";
import { FaStar, FaRegStar } from "react-icons/fa";

const AlumniRecommendations = ({ setShowEngagePage }) => {
  const [recommendations, setRecommendations] = useState([]);
  const [newRecommendation, setNewRecommendation] = useState("");
  const [username, setUsername] = useState("");
  const [tags, setTags] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);
  const [selectedSortOption, setSelectedSortOption] = useState("newest");
  const [showBookmarks, setShowBookmarks] = useState(false);
  const tagOptions = ["Books", "Courses", "Tools", "Open Source", "Career Advice"];

  const handleAddRecommendation = () => {
    if (newRecommendation.trim() !== "" && username.trim() !== "") {
      const timestamp = new Date().toLocaleString();
      const recommendationData = {
        id: Date.now(),
        username,
        text: newRecommendation,
        tags: tags.length > 0 ? tags : ["General"],
        rating: 0, // Initial rating set to 0
        timestamp,
        bookmarked: false,
      };
      setRecommendations([recommendationData, ...recommendations]);
      setNewRecommendation("");
      setUsername("");
      setTags([]);
    } else {
      alert("Please provide both your name and a recommendation.");
    }
  };

  const handleSearch = () => {
    if (searchText.trim() !== "") {
      const searchWords = searchText.trim().toLowerCase().split(/\s+/);
      const results = recommendations.filter((rec) =>
        searchWords.every(
          (word) =>
            rec.text.toLowerCase().includes(word) ||
            rec.username.toLowerCase().includes(word)
        )
      );
      setFilteredResults(results);
    } else {
      setFilteredResults(recommendations);
    }
  };

  const handleClearSearch = () => {
    setSearchText("");
    setFilteredResults([]);
  };

  const handleTagChange = (tag) => {
    if (tags.includes(tag)) {
      setTags(tags.filter((t) => t !== tag));
    } else {
      setTags([...tags, tag]);
    }
  };

  const handleFilterByTags = (tag) => {
    if (tag === "All Tags") {
      setSelectedTags([]); // Reset the filters
    } else {
      setSelectedTags((prevTags) =>
        prevTags.includes(tag)
          ? prevTags.filter((t) => t !== tag)
          : [...prevTags, tag]
      );
    }
  };

  const handleSortChange = (option) => {
    setSelectedSortOption(option);
  };

  const toggleBookmark = (id) => {
    setRecommendations((prev) =>
      prev.map((rec) =>
        rec.id === id ? { ...rec, bookmarked: !rec.bookmarked } : rec
      )
    );
  };

  const toggleShowBookmarks = () => {
    setShowBookmarks(!showBookmarks); // Toggle between showing all and bookmarked
  };

  const handleRatingClick = (id, rating) => {
    setRecommendations((prev) =>
      prev.map((rec) =>
        rec.id === id ? { ...rec, rating } : rec
      )
    );
  };

  // Filter recommendations by tags
  const displayedRecommendations =
    filteredResults.length > 0 ? filteredResults : recommendations;

  // Apply tag filters
  const filteredByTags = displayedRecommendations.filter((rec) =>
    selectedTags.length === 0 || selectedTags.includes("All Tags")
      ? true
      : rec.tags.some((tag) => selectedTags.includes(tag))
  );

  // Sort recommendations based on the selected option
  const sortedRecommendations = filteredByTags.sort((a, b) => {
    if (selectedSortOption === "newest") {
      return new Date(b.timestamp) - new Date(a.timestamp);
    }
    if (selectedSortOption === "oldest") {
      return new Date(a.timestamp) - new Date(b.timestamp);
    }
    if (selectedSortOption === "mostStars") {
      return b.rating - a.rating;
    }
    return 0;
  });

  const hasRecommendations = sortedRecommendations.length > 0;

  // If showing bookmarks, filter only the bookmarked ones
  const recommendationsToDisplay = showBookmarks
    ? sortedRecommendations.filter((rec) => rec.bookmarked)
    : sortedRecommendations;

  return (
    <section className="p-8 max-w-7xl mx-auto flex flex-col items-center">
      {/* Title Centered */}
      <h1 className="text-3xl font-bold mb-6 text-center">Alumni Recommendations</h1>

      {/* Left and Right Sections */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full">
        {/* Left Section */}
        <div className="w-full flex flex-col">
          {/* Navigation to Engage Page */}
          <button
            onClick={() => setShowEngagePage(true)}
            className="w-[200px] mb-6 px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600"
          >
            Go to Engage Page
          </button>

          {/* Tags Filter */}
          <div className="mb-6 flex flex-wrap justify-center gap-4">
            {["All Tags", ...tagOptions].map((tag) => (
              <button
                key={tag}
                onClick={() => handleFilterByTags(tag)}
                className={`w-[160px] px-4 py-2 border rounded-lg text-lg ${
                  selectedTags.includes(tag)
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 text-gray-700"
                } hover:bg-blue-300 focus:bg-blue-500 focus:text-white`}
              >
                {tag}
              </button>
            ))}
          </div>

          {/* Sort Options Dropdown */}
          <div className="mb-6 flex justify-center gap-4">
            <label htmlFor="sortOptions" className="font-semibold text-lg mr-4">
              Sort By:
            </label>
            <select
              id="sortOptions"
              className="px-4 py-2 border rounded-lg text-lg bg-white"
              value={selectedSortOption}
              onChange={(e) => handleSortChange(e.target.value)}
            >
              <option value="newest">Newest First</option>
              <option value="oldest">Oldest First</option>
              <option value="mostStars">Most Stars</option>
            </select>
          </div>

          {/* Search */}
          <div className="flex items-center space-x-4 mb-6 justify-center">
            <input
              type="text"
              className="p-3 border rounded-lg w-full sm:w-1/2"
              placeholder="Search by username or recommendation..."
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
            <button
              onClick={handleSearch}
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            >
              Search
            </button>
            <button
              onClick={handleClearSearch}
              className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
            >
              Clear Search
            </button>
          </div>

          {/* Add Recommendation */}
          <div className="bg-white shadow p-6 rounded-lg mb-6">
            <h2 className="text-xl font-semibold mb-4">Add a Recommendation</h2>
            <input
              type="text"
              className="w-full p-3 mb-4 border rounded-lg"
              placeholder="Your name..."
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <textarea
              className="w-full p-4 border rounded-lg mb-4"
              rows="3"
              placeholder="Share your recommendation..."
              value={newRecommendation}
              onChange={(e) => setNewRecommendation(e.target.value)}
            ></textarea>

            <div className="mb-4">
              <label className="mr-4 font-semibold">Select Tags:</label>
              <div className="flex flex-wrap gap-4">
                {tagOptions.map((tag) => (
                  <button
                    key={tag}
                    onClick={() => handleTagChange(tag)}
                    className={`w-[160px] px-4 py-2 border rounded-lg text-lg ${
                      tags.includes(tag)
                        ? "bg-blue-500 text-white"
                        : "bg-gray-200 text-gray-700"
                    } hover:bg-blue-300`}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={handleAddRecommendation}
              className="w-full py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            >
              Add Recommendation
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full flex flex-col">
          {/* Show Bookmarks */}
          <div className="flex justify-between mb-6">
            <button
              onClick={toggleShowBookmarks}
              className="w-[200px] px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
            >
              {showBookmarks ? "Show All" : "Show Bookmarked"}
            </button>
          </div>

          {/* Recommendations List */}
          {hasRecommendations ? (
            recommendationsToDisplay.map((rec) => (
              <div key={rec.id} className="relative bg-white shadow p-6 rounded-lg mb-4">
                {/* Star Bookmark Icon on Top-Right */}
                <button
                  onClick={() => toggleBookmark(rec.id)}
                  className="absolute top-4 right-4 text-2xl text-yellow-500"
                >
                  {rec.bookmarked ? <FaStar /> : <FaRegStar />}
                </button>
                <h3 className="font-bold">{rec.username}</h3>
                <p className="text-gray-600">{rec.text}</p>
                <span className="text-gray-400 text-sm">{rec.timestamp}</span>

                <div className="mt-2">
                  {rec.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-block px-4 py-1 text-sm bg-gray-200 text-gray-700 rounded-full mr-2"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Clickable Rating */}
                <div className="mt-2 flex gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      onClick={() => handleRatingClick(rec.id, star)}
                      className={`text-xl ${star <= rec.rating ? "text-yellow-500" : "text-gray-300"}`}
                    >
                      <FaStar />
                    </button>
                  ))}
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-600 text-center">No recommendations available</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default AlumniRecommendations;
