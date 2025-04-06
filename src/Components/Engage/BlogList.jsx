import React from "react";
import { Link } from "react-router-dom";
import SectionHeader from "./SectionHeader"; 

const blogs = [
  {
    id: 1,
    title: "Seeing Their Gifts in Action",
    date: "March 14, 2025",
    imageUrl: "https://your-image-url.com/blog1.jpg",
  },
  {
    id: 2,
    title: "Leading with Heart",
    date: "March 12, 2025",
    imageUrl: "https://your-image-url.com/blog2.jpg",
  },
];

const BlogList = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Section Header */}
      <SectionHeader title="Blogs" subtitle="Share your stories and experiences" />

      <div className="max-w-6xl mx-auto py-12 px-4 sm:px-8 lg:px-16">
        <div className="grid md:grid-cols-2 gap-8">
          {blogs.map((blog) => (
            <div key={blog.id} className="relative group">
              {/* Blog Image with Red Bottom Border */}
              <div className="overflow-hidden border-b-[6px] border-LightRed rounded-md">
                <Link to={`/blogs/${blog.id}`}>
                  <img
                    src={blog.imageUrl}
                    alt={blog.title}
                    className="w-full h-72 object-cover group-hover:scale-105 transition-transform"
                  />
                </Link>
              </div>

              {/* Floating Arrow Button */}
              <Link
                to={`/blogs/${blog.id}`}
                className="absolute right-4 bottom-4 bg-white p-2 rounded-full shadow-lg group-hover:bg-LightRed transition"
              >
                ➝
              </Link>

              {/* Title & Date */}
              <div className="mt-4 text-center">
                <p className="text-gray-600 text-sm">{blog.date}</p>
                <h2 className="text-xl font-bold text-gray-800 mt-2">{blog.title}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogList;
