import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout"; // Import Layout for shared structure
import Home from "./Components/Home/Home"; // Import the Home component
import "./App.css";
import Gallery from "./Components/Gallery/Gallery.jsx";
import AuthForm from "./Components/Forms/AuthForm";
import Department from "./Components/EventsPage/Department.jsx"
import EventDetails from "./Components/EventsPage/EventDetails.jsx"
import DepartmentNews from "./Components/NewsPage/DepartmentNews.jsx"
import NewsDetails from "./Components/NewsPage/NewsDetails.jsx"
import ClassNotesForm from "./Components/NewsPage/ClassNotesForm.jsx";
import Alumni from "./Components/EventsPage/Alumni.jsx";
import Student from "./Components/EventsPage/Student.jsx";
import University from "./Components/EventsPage/University.jsx";
import BlogList from "./Components/Engage/BlogList.jsx";
import RecommendationsPage from "./Components/Engage/RecommendationsPage.jsx";
import EventsByCategory from "./Components/EventsPage/EventsByCategory.jsx";
import NewsByCategory from "./Components/NewsPage/NewsByCategory.jsx";
import Mentorship from "./Components/Engage/Mentorship.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<AuthForm />} /> 
          <Route path="/Gallery" element={<Gallery />} />
          <Route path="/events/department" element={<Department />} />
          <Route path="/events/student" element={<Student />} />
          <Route path="/events/university" element={<University />} />
          <Route path="/news/department" element={<DepartmentNews />} />
          <Route path="/news/classnotes" element={<ClassNotesForm />} />
          <Route path="/events/:slug" element={<EventDetails />} />
          <Route path="/news/:slug" element={<NewsDetails />} />
          <Route path="/engage/recommendation" element={<RecommendationsPage />} />
          <Route path="/events/category/:categoryId" element={<EventsByCategory />} />
          <Route path="/news/category/:categoryId" element={<NewsByCategory />} />
          <Route path="/engage/blogs" element={<BlogList />} />
          <Route path="/engage/blogs/:id" element={<BlogList />} />
          <Route path="/engage/mentorship" element={<Mentorship />} />
        </Route>
      </Routes>
    </Router>
  );
};
 
export default App;
