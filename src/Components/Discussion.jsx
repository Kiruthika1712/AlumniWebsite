import React, { useState, useEffect } from "react";

const Discussion = ({ setShowDiscussion }) => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [username, setUsername] = useState("");
  const [searchText, setSearchText] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);
  const [sortOrder, setSortOrder] = useState("Newest");
  const [selectedTags, setSelectedTags] = useState([]);
  const [replyText, setReplyText] = useState("");
  const [replyMap, setReplyMap] = useState({});

  const tags = ["General", "Internship", "Job", "Career Advice", "Academic Discussions"];

  useEffect(() => {
    fetchComments(); // Fetch comments when the component is mounted
  }, []);

  // Fetch comments from the backend
  const fetchComments = () => {
    fetch("http://127.0.0.1:8000/api/comments/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => setComments(data))
      .catch((error) => console.error("Error fetching comments:", error));
  };

  // Add a new comment
  const handleAddComment = () => {
    if (newComment.trim() !== "" && username.trim() !== "") {
      const commentData = {
        username,
        text: newComment,
        timestamp: new Date().toLocaleString(),
        tags: selectedTags.length ? selectedTags : ["General"],
      };

      fetch("http://127.0.0.1:8000/api/comments/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(commentData),
      })
        .then((response) => response.json())
        .then((data) => {
          setComments([data, ...comments]);
          setNewComment("");
          setUsername("");
        })
        .catch((error) => console.error("Error adding comment:", error));
    } else {
      alert("Please enter both a username and a comment.");
    }
  };

  // Search for comments or users
  const handleSearch = () => {
    const searchWords = searchText.trim().split(/\s+/).map((word) => word.toLowerCase());

    const results = comments.filter((comment) => {
      const commentText = comment.text.toLowerCase();
      const usernameText = comment.username.toLowerCase();

      return searchWords.every((word) =>
        commentText.includes(word) || usernameText.includes(word)
      );
    });

    setFilteredResults(results);
  };

  // Clear search results
  const handleClearSearch = () => {
    setSearchText("");
    setFilteredResults([]);
  };

  // Handle replies to comments
  const handleReply = (parentId) => {
    if (replyText.trim() !== "") {
      const replyData = {
        text: replyText,
      };
      setReplyMap((prev) => ({
        ...prev,
        [parentId]: [...(prev[parentId] || []), replyData],
      }));
      setReplyText("");
    } else {
      alert("Please enter a reply.");
    }
  };

  // Handle tag selection
  const handleTagChange = (tag) => {
    if (tag === "All Tags") {
      setSelectedTags([]);
    } else {
      if (selectedTags.includes(tag)) {
        setSelectedTags(selectedTags.filter((t) => t !== tag));
      } else {
        setSelectedTags([...selectedTags, tag]);
      }
    }
  };

  // Sort comments by timestamp
  const displayedComments = filteredResults.length > 0 ? filteredResults : comments;

  const filteredByTags = displayedComments.filter((comment) =>
    selectedTags.length === 0 || selectedTags.includes("All Tags")
      ? true
      : comment.tags.some((tag) => selectedTags.includes(tag))
  );

  const hasDiscussions = filteredByTags.length > 0;

  return (
    <section className="p-8 max-w-5xl mx-auto">
      <button
        onClick={() => setShowDiscussion(false)}
        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
      >
        Back to Engage Opportunities
      </button>

      <h1 className="text-3xl font-bold mb-6">Discussion Forum</h1>

      <div className="mb-6 flex flex-wrap justify-center gap-4">
        {["All Tags", ...tags].map((tag) => (
          <button
            key={tag}
            onClick={() => handleTagChange(tag)}
            className={`px-4 py-2 border rounded-lg text-lg ${
              selectedTags.includes(tag)
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700"
            } hover:bg-blue-300`}
          >
            {tag}
          </button>
        ))}
      </div>

      <div className="flex items-center space-x-4 mb-6 justify-center">
        <input
          type="text"
          className="p-3 border rounded-lg w-1/2"
          placeholder="Search by username or comment..."
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
        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          className="p-3 border rounded-lg"
        >
          <option value="Newest">Newest</option>
          <option value="Oldest">Oldest</option>
        </select>
      </div>

      <div className="bg-white shadow p-6 rounded-lg mb-6">
        <h2 className="text-xl font-semibold mb-4">Start a Discussion</h2>
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
          placeholder="Share your thoughts..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        ></textarea>

        <div className="mb-4">
          <label className="mr-4 font-semibold">Select Tags:</label>
          <div className="flex flex-wrap gap-4">
            {tags.map((tag) => (
              <button
                key={tag}
                onClick={() => handleTagChange(tag)}
                className={`px-4 py-2 border rounded-lg text-lg ${
                  selectedTags.includes(tag)
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
          onClick={handleAddComment}
          className="w-full py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          Post
        </button>
      </div>

      {hasDiscussions ? (
        filteredByTags.map((comment) => (
          <div key={comment.id} className="bg-white shadow p-6 rounded-lg mb-4">
            <h3 className="font-bold">{comment.username}</h3>
            <p className="text-gray-600">{comment.text}</p>
            <span className="text-gray-400 text-sm">{comment.timestamp}</span>

            <div className="mt-2">
              {comment.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-block px-4 py-1 text-sm bg-gray-200 text-gray-700 rounded-full mr-2"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-4">
              <textarea
                className="w-full p-2 border rounded-lg"
                rows="2"
                placeholder="Write a reply..."
                value={replyText}
                onChange={(e) => setReplyText(e.target.value)}
              ></textarea>
              <button
                onClick={() => handleReply(comment.id)}
                className="mt-2 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
              >
                Reply
              </button>
            </div>

            {replyMap[comment.id] &&
              replyMap[comment.id].map((reply) => (
                <div key={reply.id} className="ml-6 mt-4 bg-gray-100 p-4 rounded-lg">
                  <p className="text-gray-700">{reply.text}</p>
                </div>
              ))}
          </div>
        ))
      ) : (
        <p className="text-gray-600">No Discussions available for these tags.</p>
      )}
    </section>
  );
};

export default Discussion;
