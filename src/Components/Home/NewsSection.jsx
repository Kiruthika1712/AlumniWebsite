import NewsCard from "./NewsCard";
import "./Newscard.css";

const newsData = [
  {
    title: "Alumni Achievement",
    category: "ALUMNI & FRIENDS",
    date: "January 15, 2025",
    image: "https://res.cloudinary.com/ddnis6cuk/image/upload/f_auto,q_auto/v1/Alumni/lxmkrrloj1akzd9u5eeg",
    shortDesc: "John Doe received the National Innovation Award for renewable energy.",
    fullDesc: "John Doe, an esteemed alumnus, has been honored with the National Innovation Award for his groundbreaking work in renewable energy solutions, showcasing excellence and leadership in the field.",
  },
  {
    title: "Student Success",
    category: "STUDENT SPOTLIGHT",
    date: "February 5, 2025",
    image: "https://res.cloudinary.com/ddnis6cuk/image/upload/f_auto,q_auto/v1/Alumni/hqfa496yodn595lj11yg",
    shortDesc: "Sridhar became an Executive Member of the Students Council.",
    fullDesc: "Congratulations to Sridhar for being elected as an Executive Member of the Students Council, representing the voice of students and contributing to the university's growth.",
  },
  {
    title: "Department Achievement",
    category: "DEPARTMENT NEWS",
    date: "January 25, 2025",
    image: "src/assets/Dept.JPG",
    shortDesc: "The Computer Science department inaugurated new research facilities.",
    fullDesc: "Our Computer Science department marked a new milestone by inaugurating state-of-the-art research facilities, aimed at fostering innovation and advanced learning.",
  },
  {
    title: "University Ranking",
    category: "UNIVERSITY NEWS",
    date: "February 15, 2025",
    image: "https://res.cloudinary.com/ddnis6cuk/image/upload/f_auto,q_auto/v1/Alumni/gfsk4xmnoemzlv9iuewo",
    shortDesc: "Our university secured the third position among Central Universities.",
    fullDesc: "We are proud to announce that our university has been ranked third among Central Universities, a testament to our commitment to academic excellence and research.",
  },
];

const NewsSection = () => {
  return (
    <div className="news-section">
      <h2 className="section-title">Latest News</h2>
      <div className="news-list">
        {newsData.map((news, index) => (
          <NewsCard key={index} {...news} />
        ))}
      </div>
    </div>
  );
};

export default NewsSection;
