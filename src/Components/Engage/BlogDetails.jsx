import React from "react";
import { useParams, Link } from "react-router-dom";

const blogs = [
  {
    id: 1,
    title: "Seeing Their Gifts in Action",
    date: "March 14, 2025",
    imageUrl: "https://your-image-url.com/blog1.jpg",
    author: "John Doe",
    content: `“We first met through the South Asian Student Association at Brown. A few years later, 
               when we were both living in New York, Shaily sent out an email inviting everyone 
               to her birthday party. I thought it would be hilarious to reply-all with "Unsubscribe," 
               but she didn’t find it nearly as funny. Months passed, and we both independently joined 
               the Brown Alumni Softball team. Initially, Shaily gave me the cold shoulder, still 
               holding a grudge over the birthday email incident. However, over time, her icy reception 
               began to thaw—fueled by plenty of left-field/third-base banter. Fast forward to today: 
               we’re happily married with two children, and we even work together!”`,
  },
  {
    id: 2,
    title: "Leading with Heart",
    date: "March 12, 2025",
    imageUrl: "https://your-image-url.com/blog2.jpg",
    author: "Jane Smith",
    content: `“Leadership is not just about leading but about inspiring. As an alumni mentor, 
               I have always believed in guiding students by sharing my real-life experiences. 
               From struggles to success, the journey has been filled with lessons. The ability 
               to give back to the community that shaped me is a privilege I deeply cherish.”`,
  },
];

const BlogDetails = () => {
  const { id } = useParams();
  const blog = blogs.find((b) => b.id === parseInt(id));

  if (!blog) return <p className="text-center py-10">Blog not found.</p>;

  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Back to Blogs Button */}
      <div className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-16 py-6">
        <Link
          to="/blogs"
          className="text-DarkBlue hover:underline inline-flex items-center gap-2"
        >
          ← Back to Blogs
        </Link>
      </div>

      {/* Blog Content Layout */}
      <div className="max-w-5xl mx-auto px-4 sm:px-8 lg:px-16 py-12 grid md:grid-cols-2 gap-10 items-center">
        {/* Image on Left */}
        <img
          src={blog.imageUrl}
          alt={blog.title}
          className="w-full h-auto rounded-md shadow-md"
        />

        {/* Text Content on Right */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900">{blog.title}</h1>
          <p className="text-LightRed italic font-semibold mt-2">{blog.author}</p>
          <p className="text-gray-600 text-sm mt-1">{blog.date}</p>
          <p className="text-gray-800 mt-6 leading-relaxed">{blog.content}</p>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
