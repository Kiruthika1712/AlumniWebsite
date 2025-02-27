import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout"; // Import Layout for shared structure
import Home from "./Components/Home/Home"; // Import the Home component
import "./App.css";
import Gallery from "./Components/Gallery/Gallery.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} /> {/* Home will now contain the main content */}
          <Route path="/Gallery" element={<Gallery />} />
        </Route>
      </Routes>
    </Router>
  );
};
 
export default App;
