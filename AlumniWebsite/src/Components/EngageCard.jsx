import React, { useState } from "react";
import Discussion from "./Discussion";
import AlumniRecommendations from "./AlumniRecommendations";
import InternJobOpp from "./InternJobOpp";  // Import the InternJobOpp component

const EngageCard = () => {
  const [showDiscussion, setShowDiscussion] = useState(false);
  const [showAlumniRecommendations, setShowAlumniRecommendations] = useState(false);
  const [showInternJobOpp, setShowInternJobOpp] = useState(false);

  const engageOpportunities = [
    {
      title: "Discussion Forum",
      description: "Participate in live Q&A sessions and share your expertise.",
      image:
        "https://res.cloudinary.com/ddnis6cuk/image/upload/f_auto,q_auto/v1/Alumni/t7ddagekkyvay0j1aigk",
      onClick: () => setShowDiscussion(true),
    },
    {
      title: "Internship & Job Opportunities",
      description: "Explore opportunities for internships and job offers.",
      image:
        "https://res.cloudinary.com/ddnis6cuk/image/upload/f_auto,q_auto/v1/Alumni/ussvosucoaso0kl9pcrx",
      onClick: () => setShowInternJobOpp(true),  // Set to show InternJobOpp when clicked
    },
    {
      title: "Alumni Recommendations",
      description: "Share your recommendations to guide others.",
      image:
        "https://res.cloudinary.com/ddnis6cuk/image/upload/f_auto,q_auto/v1/Alumni/eognqjlbv3znzw1nywze",
      onClick: () => setShowAlumniRecommendations(true),
    },
  ];

  const homeComingEvents = [
    {
      title: "Reunion 2023",
      description:
        "Join the annual Home Coming event and reconnect with old friends. Celebrate the memories and make new ones!",
      image:
        "https://res.cloudinary.com/ddnis6cuk/image/upload/f_auto,q_auto/v1/Alumni/k1cqvnajwbd6vvp6s64m",
      buttonText: "Register Now",
    },
    {
      title: "Event Schedule",
      description:
        "Check out the full schedule of activities including keynote speeches, workshops, and networking sessions.",
      image:
        "https://res.cloudinary.com/ddnis6cuk/image/upload/f_auto,q_auto/v1/Alumni/v0haamgummobdju6thsa",
      buttonText: "View Schedule",
    },
  ];

  return (
    <div>
      {/* Conditionally Render Components */}
      {!showDiscussion && !showAlumniRecommendations && !showInternJobOpp ? (
        <section className="p-8 max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-6 font-playfair text-gray-800">Engage Opportunities</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {engageOpportunities.map((opportunity, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-lg shadow-lg p-4 bg-white hover:bg-slate-200 transition-all duration-300 hover:rotate-1 hover:shadow-xl flex flex-col items-center"
                onClick={opportunity.onClick}
              >
                <img
                  src={opportunity.image}
                  alt={`${opportunity.title} Image`}
                  className="w-full h-48 object-cover rounded-md"
                />
                <div className="mt-4 text-center">
                  <h2 className="text-2xl font-bold font-playfair text-gray-800">{opportunity.title}</h2>
                  <p className="font-lora text-xl text-gray-600 mt-2">{opportunity.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Home Coming Section */}
          <h1 className="font-playfair text-4xl font-bold text-gray-800 text-center mt-12 mb-8">
            Home Coming
          </h1>
          <div className="flex justify-center mb-20">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-screen-md">
              {homeComingEvents.map((event, index) => (
                <div
                  key={index}
                  className="relative overflow-hidden rounded-lg shadow-lg p-4 bg-white hover:bg-slate-200 transition-all duration-300 hover:rotate-1 hover:shadow-xl flex flex-col items-center"
                >
                  <div className="w-full h-48">
                    <img
                      src={event.image}
                      alt={`${event.title} Image`}
                      className="object-cover w-full h-full rounded-md"
                    />
                  </div>
                  <div className="mt-4 text-center">
                    <h2 className="font-playfair text-2xl font-bold text-gray-800 flex items-center justify-center gap-2">
                      {event.title} <span className="text-pink-500">🎉</span>
                    </h2>
                    <p className="font-lora text-xl text-gray-600 mt-2">{event.description}</p>
                    {event.buttonText && (
                      <button className="font-lora mt-4 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-hover transition text-sm">
                        {event.buttonText}
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : showDiscussion ? (
        <Discussion setShowDiscussion={setShowDiscussion} />
      ) : showAlumniRecommendations ? (
        <AlumniRecommendations setShowAlumniRecommendations={setShowAlumniRecommendations} />
      ) : (
        <InternJobOpp setShowInternJobOpp={setShowInternJobOpp} />
      )}
    </div>
  );
};

export default EngageCard;
