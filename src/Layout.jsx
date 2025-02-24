import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar"; // Ensure the correct import
import Footer from "./Components/Footer/Footer"; // Ensure the correct import

const Layout = () => {
  return (
    <div>
      <Navbar />

      <main>
        <Outlet /> {/* This is where routed content like Home will appear */}
      </main>
      
      <Footer />
    </div>
  );
};

export default Layout;
