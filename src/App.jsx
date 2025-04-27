import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout"; // Import Layout for shared structure
import Home from "./Components/Home/Home"; // Import the Home component
import "./App.css";
import Gallery from "./Components/Gallery/Gallery.jsx";
import AuthForm from "./Components/Forms/AuthForm";
import ClassNotesForm from "./Components/Engage/ClassNotesForm.jsx";
import BlogList from "./Components/Engage/BlogList.jsx";
import RecommendationsPage from "./Components/Engage/RecommendationsPage.jsx";
import EventsByCategory from "./Components/EventsPage/EventsByCategory.jsx";
import NewsByCategory from "./Components/NewsPage/NewsByCategory.jsx";
import Mentorship from "./Components/Engage/Mentorship.jsx";
import ScrollToTop from "./ScrollToTop.jsx";
import OpportunitiesPage from "./Components/Engage/OpportunitiesPage.jsx";
import AboutUs from "./Components/Footer/AboutUs.jsx";
import Contributions from "./Components/Engage/Contributions.jsx";
import LOR from "./Components/Engage/LOR.jsx";


function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<AuthForm />} /> 
          <Route path="/Gallery" element={<Gallery />} />
          <Route path="/engage/classnotes" element={<ClassNotesForm />} />
          <Route path="/engage/recommendation" element={<RecommendationsPage />} />
          <Route path="/events/category/:categoryId" element={<EventsByCategory />} />
          <Route path="/news/category/:categoryId" element={<NewsByCategory />} />
          <Route path="/engage/blogs" element={<BlogList />} />
          <Route path="/engage/blogs/:id" element={<BlogList />} />
          <Route path="/engage/mentorship" element={<Mentorship />} />
          <Route path="/engage/opportunities" element={<OpportunitiesPage />} />
          <Route path="/engage/contributions" element={<Contributions />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/engage/lor" element={<LOR />} />
          
        </Route>
      </Routes>
    </Router>
  );
};
 
export default App;
