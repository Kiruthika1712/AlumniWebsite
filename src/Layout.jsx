import { Outlet } from "react-router-dom";  
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

const Layout = () => {
  return (
    <div>
      <Navbar/>
     
      <main>
        <Outlet/>
      </main>

      <Footer/>
    </div>
  );
};

export default Layout;
