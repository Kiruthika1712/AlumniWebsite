import React, { useState } from "react";

const AddRecommendation = ({ onAdd }) => {
  const [content, setContent] = useState("");
  const [tags, setTags] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!content.trim()) return alert("Content is required!");

    const newRecommendation = {
      id: Date.now(),
      content,
      tags: tags.split(",").map((tag) => tag.trim()),
      imageUrl: image,
      likes: 0,
      bookmarked: false,
      profileName: "Current User",
      profileImage: "https://your-profile-url.com/current-user.jpg",
    };

    onAdd(newRecommendation);
    setContent("");
    setTags("");
    setImage("");
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Add a Recommendation</h2>

      <textarea
        className="w-full p-2 border rounded-md mb-4"
        rows="4"
        placeholder="Write your recommendation..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
      />

      <input
        type="text"
        className="w-full p-2 border rounded-md mb-4"
        placeholder="Tags (comma separated)"
        value={tags}
        onChange={(e) => setTags(e.target.value)}
      />

      <input
        type="text"
        className="w-full p-2 border rounded-md mb-4"
        placeholder="Image URL (optional)"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />

      <button type="submit" className="px-6 py-2 bg-blue-500 text-white rounded-md">
        Submit Recommendation
      </button>
    </form>
  );
};

export default AddRecommendation;
