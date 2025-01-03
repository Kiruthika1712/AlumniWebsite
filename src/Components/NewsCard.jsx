import React from 'react';

const NewsCard = () => {
  return (
    <div className="bg-white py-16">
      <section className="w-full px-16 py-6">
        {/* Heading Section */}
        <div className="flex flex-wrap items-center justify-between w-full mb-6 py-2">
          <h2 className="text-2xl font-bold leading-none text-gray-800">News</h2>
          <a
            href="#"
            className="text-sm font-semibold text-dark uppercase hover:underline"
          >
            View All
          </a>
        </div>

        {/* Card Grid Section */}
        <div className="grid w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card */}
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="flex flex-col bg-gray-200 rounded-lg shadow-md"
            >
              {/* Image Section */}
              <div className="w-full aspect-video">
                <img
                  src="https://www.manipal.edu/content/dam/manipal/mu/mcph/MCOH-gallery-4.jpg"
                  alt="Card Image"
                  className="w-full h-full object-cover rounded-t-lg"
                />
              </div>

              {/* Content Section */}
              <div className="flex flex-col items-start px-4 py-3">
                <h4 className="text-lg font-semibold text-gray-800">Heading</h4>
                <p className="text-sm text-gray-600 mt-2">
                  Some text about the thing that goes over a few lines.
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default NewsCard;