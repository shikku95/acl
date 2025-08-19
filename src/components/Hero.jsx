import React from "react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <section className="w-full max-w-3xl text-center py-16 px-6 rounded-2xl shadow-2xl mt-12 mb-12 mx-auto">
      <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 drop-shadow-lg">
        Experience Cricket Like Never Before!
      </h1>
      <p className="text-lg md:text-xl text-white/90 mb-8 font-medium">
        Watch <span className="text-yellow-300 font-bold">Live Streaming</span>{" "}
        of Ananthapuri Cricket matches.
        <br />
        Don’t miss a single moment of the action!
      </p>
      <button
        onClick={() => navigate("/booking")}
        className="bg-yellow-400 hover:bg-yellow-500 text-slate-900 font-bold px-10 py-3 rounded-full shadow-xl transition duration-200 text-lg tracking-wide"
      >
        Book Now
      </button>
    </section>
  );
};

export default Hero;
