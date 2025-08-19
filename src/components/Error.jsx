import React from "react";
import { useNavigate } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center bg-gradient-to-br from-pink-500 via-yellow-200 to-violet-400 rounded-2xl shadow-xl m-8">
      <div className="text-8xl mb-4 animate-bounce">😅</div>
      <h1 className="text-4xl font-extrabold text-violet-800 mb-2">
        Oops! Lost in the Pavilion?
      </h1>
      <p className="text-lg text-slate-700 mb-8 text-center max-w-md">
        Looks like you’ve hit a page that’s out of the stadium! Don’t worry,
        even the best get bowled sometimes.
      </p>
      <button
        onClick={() => navigate("/")}
        className="bg-gradient-to-r from-red-500 via-pink-500 to-violet-600 text-white font-bold px-8 py-3 rounded-full shadow-lg hover:scale-105 transition-transform text-lg"
      >
        Go Back Home
      </button>
    </div>
  );
};

export default Error;
