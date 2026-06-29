import { Outlet } from "react-router-dom";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const MainLayout = () => {
  return (
    <div className="min-h-screen bg-[#F8FAF8] overflow-x-hidden">

      <Navbar />

      <main className="w-full">
        <Outlet />
      </main>

      <Footer />

    </div>
  );
};

export default MainLayout;