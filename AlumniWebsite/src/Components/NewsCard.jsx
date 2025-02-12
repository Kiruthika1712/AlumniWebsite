import React from 'react';
import { Link } from 'react-router-dom';

const NewsCard = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0); // Scroll to top
  };
  // Array of card data
  const cardData = [
    {
      title: 'Alumni Achievement',
      description: 'John Doe received the National Innovation Award for renewable energy.',
      image: 'https://res.cloudinary.com/ddnis6cuk/image/upload/f_auto,q_auto/v1/Alumni/gfsk4xmnoemzlv9iuewo',
    },
    {
      title: 'Department Achievement',
      description: 'The Computer Science department inaugurated new research facilities.',
      image: 'https://res.cloudinary.com/ddnis6cuk/image/upload/f_auto,q_auto/v1/Alumni/gfsk4xmnoemzlv9iuewo',
    },
    {
      title: 'Student Success',
      description: 'Sridhar became an Executive Member of the Students Council.',
      image: 'https://res.cloudinary.com/ddnis6cuk/image/upload/f_auto,q_auto/v1/Alumni/hqfa496yodn595lj11yg',
    },
    {
      title: 'University Ranking',
      description: 'Our university secured the third position among Central Universities.',
      image: 'https://res.cloudinary.com/ddnis6cuk/image/upload/f_auto,q_auto/v1/Alumni/gfsk4xmnoemzlv9iuewo',
    },
  ];

  return (
    <div className="bg-white py-16">
      <section className="w-full px-16 py-6">
        {/* Heading Section */}
        <div className="flex flex-wrap items-center justify-between w-full mb-6 py-2">
          <h2 className="text-2xl font-bold leading-none text-gray-800 font-playfair">News</h2>
          <Link onClick={scrollToTop}
                      to="/News"
                      className="text-sm font-semibold text-dark uppercase hover:underline"
                    >
              View All
            </Link>
        </div>

        {/* Card Grid Section */}
        <div className="grid w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 font-lora">
          {cardData.map((card, index) => (
            <div
              key={index}
              className="flex flex-col bg-gray-200 rounded-lg shadow-md hover:scale-105"
            >
              {/* Image Section */}
              <div
                className="w-full"
                style={{ width: '100%', height: '250px', overflow: 'hidden' }}
              >
                <img
                  src={card.image}
                  alt={`Image for ${card.title}`}
                  className="w-full h-full object-cover"
                  style={{ height: '100%' }}
                />
              </div>

              {/* Content Section */}
              <div className="flex flex-col items-start px-4 py-3">
                <h4 className="font-semibold text-gray-800 text-2xl">{card.title}</h4>
                <p className="text-lg text-gray-600 mt-2 line-clamp-2">
                  {card.description}
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
