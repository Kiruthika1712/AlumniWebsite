import React, { useRef } from 'react';

// Card for Featured Events and Achievements
const EventCard = ({ title, description, date, extraInfo, image, buttonText, onClick }) => {
  return (
    <div className="flex flex-col items-center bg-white shadow-md rounded-lg p-4 space-y-4 mb-20">
      <div className="w-full h-48">
        <img
          src={image}
          alt={`${title} Image`}
          className="object-cover w-full h-full rounded-md"
        />
      </div>
      <div className="font-lora flex-1 px-4">
        <h2 className="text-2xl font-bold text-gray-800 font-playfair text-center">
          {title}
        </h2>
        <p className="text-xl text-gray-600 mt-2 text-justify">{description}</p>
        <p className="text-base text-gray-500 mt-2">
          <span className="font-medium">Date:</span> {date} {extraInfo && `| ${extraInfo}`}
        </p>
        {buttonText && (
          <button
            onClick={onClick}
            className="mt-4 border border-primary text-primary font-medium py-2 px-6 rounded-full hover:bg-primary-hover duration-200 hover:text-white transition"
          >
            {buttonText}
          </button>
        )}
      </div>
    </div>
  );
};

// Achievements Data
const achievements = [
  {
    title: 'Alumni Achievement',
    description: 'John Doe, 2015 graduate, received the National Innovation Award for his groundbreaking work in renewable energy.',
    date: 'March 15, 2021',
    extraInfo: '',
    image: 'https://via.placeholder.com/150',
    buttonText: 'Read More',
    ref: 'alumni',
  },
  {
    title: 'Department Achievement',
    description:
      'The Department of Computer Science at Pondicherry University has recently inaugurated three state-of-the-art facilities to enhance learning and research opportunities for students and faculty.',
    date: 'December 22, 2024',
    extraInfo: '',
    image: 'https://via.placeholder.com/150',
    buttonText: 'Learn More',
    ref: 'department',
  },
  {
    title: 'Student Achievement',
    description:
      'Sridhar, an Integrated MSc. final-year student, has been honored with the prestigious position of Executive Member (Male) in the Students Council for the academic year 2024-2025.',
    date: 'December 22, 2024',
    extraInfo: '',
    image: 'https://res.cloudinary.com/ddnis6cuk/image/upload/f_auto,q_auto/v1/Alumni/hqfa496yodn595lj11yg',
    buttonText: 'Discover More',
    ref: 'student',
  },
  {
    title: 'University Achievement',
    description:
      'Our university has proudly secured the third position among Central Universities, with an outstanding overall score of 910.11 out of 1000 points.',
    date: 'May 10, 2024',
    extraInfo: '',
    image: 'https://res.cloudinary.com/ddnis6cuk/image/upload/f_auto,q_auto/v1/Alumni/gfsk4xmnoemzlv9iuewo',
    buttonText: 'Explore More',
    ref: 'university',
  },
];

// Contributions Data (Updated for Alumni Contributions)
const contributions = [
  {
    title: 'Alumni Donation to Department',
    description:
      'Alumni of the Computer Science Department, led by Rajesh Kumar, have generously donated ₹10 Lakhs for the development of new lab facilities.',
    date: 'November 15, 2024',
    extraInfo: '',
    image: 'https://res.cloudinary.com/ddnis6cuk/image/upload/f_auto,q_auto/v1/Alumni/ioyrbawf9n4bjnsez5t7',
    buttonText: 'Learn More',
  },
  {
    title: 'Career Guidance by Alumni',
    description:
      'Alumni Shalini Patel conducted a series of career development workshops for final-year students.',
    date: 'December 5, 2024',
    extraInfo: '',
    image: 'https://res.cloudinary.com/ddnis6cuk/image/upload/f_auto,q_auto/v1/Alumni/ljowpeux83b1ztmoyfst',
    buttonText: 'Get Involved',
  },
];

// News Component
const News = () => {
  // Create refs for each achievement section
  const alumniRef = useRef(null);
  const departmentRef = useRef(null);
  const studentRef = useRef(null);
  const universityRef = useRef(null);

  const handleScroll = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="max-w-5xl mx-auto p-4 space-y-12">
      {/* Achievements Section */}
      <section>
        <h1 className="text-4xl font-bold text-gray-800 text-center mb-8 font-playfair">Achievements</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 ">
          {achievements.map((achievement, index) => (
            <EventCard
              key={index}
              title={achievement.title}
              description={achievement.description}
              date={achievement.date}
              extraInfo={achievement.extraInfo}
              image={achievement.image}
              buttonText={achievement.buttonText}
              onClick={() => {
                // Scroll to corresponding section
                if (achievement.ref === 'alumni') {
                  handleScroll(alumniRef);
                } else if (achievement.ref === 'department') {
                  handleScroll(departmentRef);
                } else if (achievement.ref === 'student') {
                  handleScroll(studentRef);
                } else if (achievement.ref === 'university') {
                  handleScroll(universityRef);
                }
              }}
            />
          ))}
        </div>
      </section>

      {/* New Sections for Achievements */}
      <section ref={alumniRef}>
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-4 font-playfair">Alumni Achievements</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <EventCard
            title="Alumni"
            description="John Doe, 2015 graduate, received the National Innovation Award for his groundbreaking work in renewable energy."
            date="March 15, 2021"
            image=""
            buttonText="Read More"
          />
        </div>
      </section>

      <section ref={departmentRef}>
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-4 font-playfair">Department Achievements</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <EventCard
            title="New HPC Lab Inauguration"
            description="The Department of Computer Science at Pondicherry University has recently inaugurated three state-of-the-art facilities to enhance learning and research opportunities for students and faculty."
            date="Dec 22, 2024"
            image=""
            buttonText="Learn More"
          />
        </div>
      </section>

      <section ref={studentRef}>
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-4 font-playfair">Student Achievements</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <EventCard
            title="Sridhar's Appointment as Executive Member"
            description="Sridhar, an Integrated MSc. final-year student, has been honored with the prestigious position of Executive Member (Male) in the Students Council for the academic year 2024-2025."
            date="Dec 22, 2024"
            image="https://res.cloudinary.com/ddnis6cuk/image/upload/f_auto,q_auto/v1/Alumni/hqfa496yodn595lj11yg"
            buttonText="Discover More"
          />
        </div>
      </section>

      <section ref={universityRef}>
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-4 font-playfair">University Achievements</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <EventCard
            title="University Ranking"
            description="Our university has proudly secured the third position among Central Universities, with an outstanding overall score of 910.11 out of 1000 points."
            date="May 10, 2024"
            image="https://res.cloudinary.com/ddnis6cuk/image/upload/f_auto,q_auto/v1/Alumni/gfsk4xmnoemzlv9iuewo"
            buttonText="Explore More"
          />
        </div>
      </section>

      {/* Contributions Section */}
      <section>
        <h1 className="text-4xl font-playfair font-bold text-gray-800 text-center mb-8">Contributions</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {contributions.map((contribution, index) => (
            <EventCard
              key={index}
              title={contribution.title}
              description={contribution.description}
              date={contribution.date}
              extraInfo={contribution.extraInfo}
              image={contribution.image}
              buttonText={contribution.buttonText}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default News;
