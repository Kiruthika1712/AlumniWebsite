import './App.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom'; // Corrected import
import Home from './Pages/Home';
import Events from './Pages/Events';
import News from './Pages/News';
import Engage from './Pages/Engage';
import About from './Pages/About';
import Gallery from './Pages/Gallery';
import AlumniLogin from './Pages/AlumniLogin';
import AdminLogin from './Pages/AdminLogin';
import Layout from './Layout';  
import SignUp from './Pages/SignUp';
import UserProfile from './Components/UserProfile';

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/Events" element={<Events />} />
          <Route path="/News" element={<News />} />
          <Route path="/Engage" element={<Engage />} />
          <Route path="/About" element={<About />} />
          <Route path="/Gallery" element={<Gallery />} />
          <Route path="/AlumniLogin" element={<AlumniLogin />} />
          <Route path="/AdminLogin" element={<AdminLogin />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/Profile" element={<UserProfile />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
