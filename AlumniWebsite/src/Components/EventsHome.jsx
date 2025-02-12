import React from 'react';
import { Link } from 'react-router-dom';

const EventsHome = () => {
    const scrollToTop = () => {
        window.scrollTo(0, 0); // Scroll to top
    };
  // Array of card data
  const cardData = [
    {
      title: 'Alumni Meet 2025',
      description: 'The Alumni Association of the Department of Computer Science cordially invites you to reunite and cherish the joys and relive wonderful moments spent together.',
      image: 'https://res.cloudinary.com/ddnis6cuk/image/upload/f_auto,q_auto/v1/Alumni/bx3q9sodgmxsheffckok',
    },
    {
      title: 'Outlook Screening Test',
      description: 'All the students who have applied for the Outlook company are requested to attend the online screening test.',
      image: 'https://res.cloudinary.com/ddnis6cuk/image/upload/f_auto,q_auto/v1/Alumni/h3bovposixi4wudfu733',
    },
    {
      title: 'Winter Music Festival',
      description: 'Experience live performances by top artists at the Winter Music Festival.',
      image: 'https://res.cloudinary.com/ddnis6cuk/image/upload/f_auto,q_auto/v1/Alumni/vwarhcdjpnlsy8ue08mz',
    },
    {
      title: 'Wellness Retreat',
      description: 'Join our Wellness Retreat for a day of yoga and mindfulness in nature.',
      image: 'https://res.cloudinary.com/ddnis6cuk/image/upload/f_auto,q_auto/v1/Alumni/fouylmherfb626dtyudk',
    },
  ];

  return (
    <div className="bg-white py-16">
      <section className="w-full px-16 py-6">
        {/* Heading Section */}
        <div className="flex flex-wrap items-center justify-between w-full mb-6 py-2">
          <h2 className="text-2xl font-bold leading-none text-gray-800 font-playfair">Events</h2>
          <Link onClick={scrollToTop}
            to="/Events"
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

export default EventsHome;
