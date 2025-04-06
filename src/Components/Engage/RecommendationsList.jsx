import React from "react";

const RecommendationsList = ({ recommendations, toggleLike, toggleBookmark }) => {
  return (
    <div className="max-w-4xl mx-auto py-6 px-4">
      <div className="grid gap-6">
        {recommendations.length === 0 ? (
          <p className="text-center text-gray-500">No recommendations found.</p>
        ) : (
          recommendations.map((rec) => (
            <div key={rec.id} className="p-4 bg-white shadow rounded-lg flex items-start">
              {rec.profileImage && (
                <img
                  src={rec.profileImage}
                  alt={rec.profileName}
                  className="w-12 h-12 rounded-full mr-4"
                />
              )}
              <div className="flex-1">
                <h2 className="text-lg font-semibold">{rec.profileName}</h2>
                <p className="text-gray-700">{rec.content}</p>
                {rec.tags.length > 0 && (
                  <div className="mt-2">
                    {rec.tags.map((tag, index) => (
                      <span key={index} className="text-sm bg-gray-200 px-2 py-1 rounded-full mr-2">
                        #{tag}
                      </span>
                    ))}
                  </div>
                )}
                <div className="flex items-center mt-3">
                  <button onClick={() => toggleLike(rec.id)} className="mr-4">
                    ❤️ {rec.likes}
                  </button>
                  <button onClick={() => toggleBookmark(rec.id)}>
                    {rec.bookmarked ? "🔖 Bookmarked" : "🔖 Bookmark"}
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default RecommendationsList;
