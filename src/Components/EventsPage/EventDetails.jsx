import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

// All Event Data (Department, Alumni, Student, University)
const eventData = [
  // 🔹 University Events
  {
    date: "July 10, 2025",
    time: "9:00 AM",
    title: "Convocation 2025",
    location: "University Auditorium",
    description:
      "Celebrate the achievements of the graduating class at the grand Convocation Ceremony.",
    content:
      "The **Convocation Ceremony 2025** will be a prestigious event celebrating the success of our graduating students. Distinguished guests, faculty members, and university administrators will deliver inspiring speeches. Degrees and special awards will be distributed to outstanding students. Parents and friends are invited to share in this momentous occasion.",
    imageUrl: "https://your-image-url.com/convocation.jpg",
    slug: "convocation-2025",
  },
  {
    date: "April 20, 2025",
    time: "10:00 AM",
    title: "Research Symposium 2025",
    location: "Central Seminar Hall",
    description:
      "An annual symposium showcasing groundbreaking research from students and faculty.",
    content:
      "The **Research Symposium 2025** will bring together researchers, students, and faculty to discuss innovative studies and advancements across disciplines. The event will include **paper presentations, expert talks, and panel discussions**, fostering collaboration between academia and industry.",
    imageUrl: "https://your-image-url.com/research-symposium.jpg",
    slug: "research-symposium-2025",
  },

  // 🔹 Alumni Events
  {
    date: "June 10, 2025",
    time: "3:00 PM",
    title: "Alumni Guest Lecture",
    location: "Seminar Hall-III, PU",
    description:
      "An interactive session where distinguished alumni will share insights on industry trends, career growth, and academic excellence.",
    content:
      "Our **Alumni Guest Lecture** invites accomplished alumni to discuss their professional experiences, industry trends, and provide guidance to students. This interactive session is designed to help students understand real-world challenges and gain career insights from professionals who once walked the same halls.",
    imageUrl: "https://your-image-url.com/alumni-lecture.jpg",
    slug: "career-guidance-session",
  },
  {
    date: "May 15, 2025",
    time: "5:00 PM",
    title: "Alumni Meet 2025",
    location: "PU Convention Hall",
    description:
      "Reconnect with old friends, cherish memories, and relive the wonderful moments spent together.",
    content:
      "The **Alumni Meet 2025** is a chance for former students to **reconnect with old friends and faculty**, share experiences, and discuss opportunities for alumni involvement in mentoring and university initiatives. The evening will feature speeches, networking sessions, and an alumni appreciation ceremony.",
    imageUrl: "https://your-image-url.com/alumni-meet.jpg",
    slug: "alumni-meet-2025",
  },

  // 🔹 Student Events
  {
    date: "Jan 15, 2025",
    time: "6:00 PM",
    title: "Winter Music Festival",
    location: "University Open Grounds",
    description:
      "Experience live performances by top artists at the Winter Music Festival.",
    content:
      "The **Winter Music Festival** will feature live performances by **renowned artists and student bands**. This highly anticipated annual event is a celebration of music, culture, and artistic talent. Enjoy an evening of electrifying performances and unforgettable entertainment.",
    imageUrl: "https://your-image-url.com/music-festival.jpg",
    slug: "winter-music-festival",
  },
  {
    date: "Feb 5, 2025",
    time: "10:00 AM",
    title: "TechXpo 2025",
    location: "Main Auditorium",
    description:
      "Showcasing innovative student projects, research, and new technology trends.",
    content:
      "The **TechXpo 2025** is an exhibition featuring student-driven **tech innovations, AI projects, and research breakthroughs**. Industry professionals and faculty members will evaluate and provide feedback on the presented projects. It's a fantastic platform for students to **showcase their technical skills and network with experts**.",
    imageUrl: "https://your-image-url.com/techxpo.jpg",
    slug: "techxpo-2025",
  },

  // 🔹 Department Events
  {
    date: "Dec 30, 2024",
    time: "4:30 PM",
    title: "Outlook Screening Test",
    location: "MTech Lab",
    description:
      "All students who have applied for the Outlook company are requested to attend the online screening test.",
    content:
      "The **Outlook Screening Test** is an online recruitment test for students shortlisted for Outlook company. This test will assess their **technical skills, problem-solving abilities, and aptitude**. All applicants are requested to bring their university ID and test credentials.",
    imageUrl: "https://your-image-url.com/outlook-test.jpg",
    slug: "outlook-screening-test",
  },
  {
    date: "March 10, 2025",
    time: "10:30 AM",
    title: "Industry Academia Conclave",
    location: "Seminar Hall-II, Department of Computer Science",
    description:
      "A synergy of PUDoCS Research Forum and AICTE Margdarshan Scheme, bringing together industry experts and academia for insightful discussions.",
    content:
      "The **Industry Academia Conclave** aims to bridge the gap between **academic research and industry practices**. Experts from leading industries will share insights on evolving trends, career opportunities, and collaborative research initiatives. The event will feature **guest lectures, interactive Q&A sessions, and networking opportunities**.",
    imageUrl: "https://your-image-url.com/industry-academia.jpg",
    slug: "industry-academia-conclave",
  },
];


const EventDetails = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [event, setEvent] = useState(null);

  useEffect(() => {
    const foundEvent = eventData.find((e) => e.slug === slug);
    if (foundEvent) {
      setEvent(foundEvent);
    } else {
      navigate("/"); // Redirect to home if event not found
    }
  }, [slug, navigate]);

  if (!event) return <p>Loading...</p>;

  return (
    <div className="min-h-screen bg-white text-gray-800 pt-20">
      <div className="max-w-6xl mx-auto py-12 px-4 sm:px-8 lg:px-16">
        <div className="flex flex-col-reverse md:flex-row items-start md:gap-16">
          {/* Left Content Section */}
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl font-extrabold mb-6 text-DarkBlue leading-tight">
              {event.title}
            </h1>
            <p className="text-lg mb-6 leading-relaxed">{event.description}</p>
            <p className="text-lg mb-6 leading-relaxed">{event.content}</p>

            {/* Event Info Box */}
            <div className="bg-LightRed text-white p-6 rounded-lg shadow-lg mb-8">
              <p>📅 <strong>Date:</strong> {event.date}</p>
              <p>⏰ <strong>Time:</strong> {event.time}</p>
              <p>📍 <strong>Location:</strong> {event.location}</p>
            </div>

            {/* Back Button */}
            <button
              onClick={() => navigate(-1)}
              className="mt-8 px-6 py-3 bg-DarkBlue text-white rounded-lg hover:bg-opacity-80 transition"
            >
              ← Back to Events
            </button>
          </div>

          {/* Right Image Section */}
          <div className="md:w-1/2">
            <img
              src={event.imageUrl}
              alt={event.title}
              className="w-full max-h-[500px] object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
