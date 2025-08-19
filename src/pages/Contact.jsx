import React from "react";
import {
  FaEnvelope,
  FaWhatsapp,
  FaInstagram,
  FaYoutube,
  FaFacebook,
} from "react-icons/fa";

const Contact = () => {
  return (
    <section className="max-w-2xl mx-auto mt-16 mb-16 px-6 py-10 bg-white/80 rounded-2xl shadow-xl">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-violet-700 mb-8">
        Contact Us
      </h2>
      <div className="flex flex-col gap-6 text-lg">
        <div className="flex items-center gap-4">
          <FaEnvelope className="text-pink-600 text-2xl" />
          <a
            href="mailto:ananthapuricricketlive@gmail.com"
            className="text-slate-700 hover:text-pink-600 transition"
          >
            ananthapuricricketlive@gmail.com
          </a>
        </div>
        <div className="flex items-center gap-4">
          <FaWhatsapp className="text-green-500 text-2xl" />
          <a
            href="https://wa.me/7994111654"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-700 hover:text-green-600 transition"
          >
            +91 79941 11654
          </a>
        </div>
        <div className="flex items-center gap-4">
          <FaInstagram className="text-pink-500 text-2xl" />
          <a
            href="https://www.instagram.com/ananthapuricricketlive/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-700 hover:text-pink-500 transition"
          >
            instagram.com/ananthapuricricketlive
          </a>
        </div>
        <div className="flex items-center gap-4">
          <FaYoutube className="text-red-600 text-2xl" />
          <a
            href="https://www.youtube.com/@AnanthapuriCricketLive/streams"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-700 hover:text-red-600 transition"
          >
            youtube.com/@AnanthapuriCricketLive/streams
          </a>
        </div>
        <div className="flex items-center gap-4">
          <FaFacebook className="text-blue-600 text-2xl" />
          <a
            href="https://www.facebook.com/AnanthapuriLive"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-700 hover:text-blue-600 transition"
          >
            facebook.com/AnanthapuriLive
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
