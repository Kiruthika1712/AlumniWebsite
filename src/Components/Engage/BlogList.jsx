import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import SectionHeader from "./SectionHeader";

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); // Added error state
  const { id } = useParams();

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch("http://127.0.0.1:8000/api/blogs");
        if (!res.ok) {
          throw new Error("Failed to fetch blogs.");
        }
        const data = await res.json();
        setBlogs(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching blogs:", error);
        setError(error.message); // Set error message
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) {
    return (
      <div className="text-center py-10">
        <p>Loading...</p>
        {/* Optionally, you could add a spinner here */}
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-10">
        <p>Error: {error}</p>
      </div>
    );
  }

  // ------------------ Blog Details View ------------------
  if (id) {
    const blog = blogs.find((b) => b.id === parseInt(id));

    if (!blog) return <p className="text-center py-10">Blog not found.</p>;

    return (
      <div className="min-h-screen bg-white text-gray-800">
        {/* Back Button */}
        <div className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-16 py-6">
          <Link
            to="/engage/blogs"
            className="text-DarkBlue hover:underline inline-flex items-center gap-2"
          >
            ← Back to Blogs
          </Link>
        </div>

        {/* Blog Content */}
        <div className="max-w-5xl mx-auto px-4 sm:px-8 lg:px-16 py-12 grid md:grid-cols-2 gap-10 items-center">
          <img
            src={blog.image_url}
            alt={blog.title}
            className="w-full h-auto rounded-md shadow-md"
          />
          <div>
            <h1 className="text-3xl font-bold text-gray-900">{blog.description}</h1>
            <p className="text-red-400 italic font-semibold mt-2">
              {blog.username ? `- ${blog.username}` : "Author Unknown"}
            </p>
            <p className="text-gray-600 text-sm mt-1">
              {new Date(blog.created_at).toLocaleDateString()}
            </p>
            <p className="text-gray-800 mt-6 leading-relaxed whitespace-pre-line text-justify">{blog.content}</p>
          </div>
        </div>
      </div>
    );
  }

  // ------------------ Blog List View ------------------
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <SectionHeader title="Blogs" subtitle="Share your stories and experiences" />
      <div className="max-w-6xl mx-auto py-12 px-4 sm:px-8 lg:px-16">
        <div className="grid md:grid-cols-2 gap-8">
          {blogs.map((blog) => (
            <div key={blog.id} className="relative group">
              <div className="overflow-hidden border-b-[6px] border-red-400 rounded-md">
                <Link to={`/engage/blogs/${blog.id}`}>
                  <img
                    src={blog.image_url}
                    alt={blog.title}
                    className="w-full h-72 object-cover group-hover:scale-105 transition-transform"
                  />
                </Link>
              </div>
              <Link
                to={`/engage/blogs/${blog.id}`}
                className="absolute right-4 bottom-4 bg-white p-2 rounded-full shadow-lg group-hover:bg-red-400 transition"
              >
                ➝
              </Link>
              <div className="mt-4 text-center">
                <p className="text-gray-600 text-sm">
                  {new Date(blog.created_at).toLocaleDateString()}
                </p>
                <h2 className="text-xl font-bold text-gray-800 mt-2">{blog.description}</h2>
                {/* Add author username to the list view */}
                <p className="text-gray-600 text-sm mt-1">{blog.username ? `By: ${blog.username}` : "Author Unknown"}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogList;
