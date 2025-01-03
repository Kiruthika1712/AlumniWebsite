import React, { useRef } from 'react';

// Card Component for Featured Events
const EventCard = ({ title, description, date, extraInfo, image, onViewMore }) => {
  return (
    <div className="font-lora flex items-center bg-white shadow-md rounded-lg p-4">
      <div className="flex-1">
        <h2 className="text-2xl font-bold text-gray-800 font-playfair">{title}</h2>
        <p className="text-xl text-gray-600 mt-2 font-lora">{description}</p>
        <p className="text-sm text-gray-500 mt-2">
          <span className="font-medium">Date:</span> {date} {extraInfo && `| ${extraInfo}`}
        </p>
        {onViewMore && (
          <button
            onClick={onViewMore}
            className="mt-4 px-4 py-2 bg-primary text-white text-sm rounded-lg hover:bg-primary-hover"
          >
            View More
          </button>
        )}
      </div>
      <div className="w-40 h-40 ml-4">
        <img
          src={image}
          alt={`${title} Image`}
          className="rounded-lg object-cover w-full h-full"
        />
      </div>
    </div>
  );
};

// Card Component for Newly Added Events (Modified to Match EventCard)
const SimpleEventCard = ({ title, description, date, image }) => {
  return (
    <div className="font-lora flex items-center bg-white shadow-md rounded-lg p-4">
      <div className="flex-1">
        <h3 className="font-playfair text-2xl font-bold text-gray-800">{title}</h3>
        <p className="text-lg text-gray-600 mt-2">{description}</p>
        <p className="text-sm text-gray-500 mt-2">
          <span className="font-medium">Date:</span> {date}
        </p>
      </div>
      <div className="w-40 h-40 ml-4">
        <img
          src={image}
          alt={`${title} Image`}
          className="rounded-lg object-cover w-full h-full"
        />
      </div>
    </div>
  );
};

const Events = () => {
  // Define refs for each type of event section
  const alumniRef = useRef(null);
  const careerRef = useRef(null);
  const studentRef = useRef(null);
  const universityRef = useRef(null);

  const featuredEvents = [
    {
      title: 'Alumni Events',
      description: 'The Alumni Association of the Department of Computer Science cordially invites you to reunite and cherish the joys and relive wonderful moments spent together.',
      date: 'Jan 26, 2025',
      extraInfo: '1 day',
      image: 'https://res.cloudinary.com/ddnis6cuk/image/upload/f_auto,q_auto/v1/Alumni/bx3q9sodgmxsheffckok',
      onViewMore: () => alumniRef.current.scrollIntoView({ behavior: 'smooth' }),
    },
    {
      title: 'Career Events',
      description: 'All the students who have applied for the Outlook company are requested to attend the online screening test.',
      date: 'Dec 30, 2024',
      extraInfo: '40 mins',
      image: 'https://res.cloudinary.com/ddnis6cuk/image/upload/f_auto,q_auto/v1/Alumni/h3bovposixi4wudfu733',
      onViewMore: () => careerRef.current.scrollIntoView({ behavior: 'smooth' }),
    },
    {
      title: 'Student Events',
      description: 'Experience live performances by top artists at the Winter Music Festival.',
      date: 'Jan 15, 2025',
      extraInfo: '3 days',
      image: 'https://res.cloudinary.com/ddnis6cuk/image/upload/f_auto,q_auto/v1/Alumni/vwarhcdjpnlsy8ue08mz',
      onViewMore: () => studentRef.current.scrollIntoView({ behavior: 'smooth' }),
    },
    {
      title: 'University Events',
      description: 'Join our Wellness Retreat for a day of yoga and mindfulness in nature.',
      date: 'Feb 20, 2025',
      extraInfo: '1 day',
      image: 'https://res.cloudinary.com/ddnis6cuk/image/upload/f_auto,q_auto/v1/Alumni/fouylmherfb626dtyudk',
      onViewMore: () => universityRef.current.scrollIntoView({ behavior: 'smooth' }),
    },
  ];

  const alumniEvents = [
    {
      title: 'Alumni Meet 2025',
      description: 'The Alumni Association of the Department of Computer Science cordially invites you to reunite and cherish the joys and relive wonderful moments spent together.',
      date: 'Jan 26, 2025',
      image: 'https://res.cloudinary.com/ddnis6cuk/image/upload/f_auto,q_auto/v1/Alumni/bx3q9sodgmxsheffckok',
    },
  ];

  const careerEvents = [
    {
      title: 'Outlook Screening Test',
      description: 'All the students who have applied for the Outlook company are requested to attend the online screening test.',
      date: 'Dec 30, 2024',
      image: 'https://res.cloudinary.com/ddnis6cuk/image/upload/f_auto,q_auto/v1/Alumni/h3bovposixi4wudfu733',
    },
  ];

  const studentEvents = [
    {
      title: 'Winter Music Festival',
      description: 'Experience live performances by top artists at the Winter Music Festival.',
      date: 'Jan 15, 2025',
      image: 'https://res.cloudinary.com/ddnis6cuk/image/upload/f_auto,q_auto/v1/Alumni/vwarhcdjpnlsy8ue08mz',
    },
  ];

  const universityEvents = [
    {
      title: 'Wellness Retreat',
      description: 'Join our Wellness Retreat for a day of yoga and mindfulness in nature.',
      date: 'Feb 20, 2025',
      image: 'https://res.cloudinary.com/ddnis6cuk/image/upload/f_auto,q_auto/v1/Alumni/fouylmherfb626dtyudk',
    },
  ];

  const renderEventCards = (events, isSimple = false) =>
    events.map((event, index) =>
      isSimple ? (
        <SimpleEventCard
          key={index}
          title={event.title}
          description={event.description}
          date={event.date}
          image={event.image}
        />
      ) : (
        <EventCard
          key={index}
          title={event.title}
          description={event.description}
          date={event.date}
          extraInfo={event.extraInfo}
          image={event.image}
          onViewMore={event.onViewMore || null}
        />
      )
    );

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-12">
      {/* Featured Events Section */}
      <section>
        <h1 className="font-playfair text-4xl font-bold text-gray-800 text-center mb-8">
          Featured Events
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {renderEventCards(featuredEvents)}
        </div>
      </section>

      {/* Alumni Events Section */}
      <section ref={alumniRef}>
        <h2 className="font-playfair text-4xl font-bold text-gray-800 mb-4 text-center">
          All Alumni Events
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 font-lora gap-6">
          {renderEventCards(alumniEvents, true)}
        </div>
      </section>

      {/* Career Events Section */}
      <section ref={careerRef}>
        <h2 className="font-playfair text-4xl font-bold text-gray-800 mb-4 text-center">
          All Career Events
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 font-lora gap-6">
          {renderEventCards(careerEvents, true)}
        </div>
      </section>

      {/* Student Events Section */}
      <section ref={studentRef}>
        <h2 className="font-playfair text-4xl font-bold text-gray-800 mb-4 text-center">
          All Student Events
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 font-lora gap-6">
          {renderEventCards(studentEvents, true)}
        </div>
      </section>

      {/* University Events Section */}
      <section ref={universityRef}>
        <h2 className="font-playfair text-4xl font-bold text-gray-800 mb-4 text-center">
          All University Events
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 font-lora gap-6">
          {renderEventCards(universityEvents, true)}
        </div>
      </section>
    </div>
  );
};

export default Events;

