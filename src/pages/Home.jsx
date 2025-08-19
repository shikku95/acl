import React from "react";
import Navbar from "../components/Navbar";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import Hero from "../components/Hero";

const Home = () => {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 flex flex-col items-center justify-center bg-gradient-to-br from-black via-slate-900 to-gray-900">
        {location.pathname === "/" && <Hero />}
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
