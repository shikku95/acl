import React from "react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const bgImages = [
  "https://img1.hscicdn.com/image/upload/f_auto,t_ds_w_960,q_50/lsci/db/PICTURES/CMS/405100/405190.jpg",
  "https://img1.hscicdn.com/image/upload/f_auto,t_ds_w_960,q_50/lsci/db/PICTURES/CMS/405100/405193.jpg",
  "https://img1.hscicdn.com/image/upload/f_auto,t_ds_w_960,q_50/lsci/db/PICTURES/CMS/405100/405187.jpg",
];

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative w-full flex-1 flex items-center justify-center overflow-hidden">
      {/* Carousel Background */}
      <div className="absolute inset-0 z-0">
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          loop={true}
          slidesPerView={1}
          className="w-full h-full"
        >
          {bgImages.map((img, idx) => (
            <SwiperSlide key={idx}>
              <img
                src={img}
                alt=""
                className="absolute inset-0 w-full h-full object-contain opacity-30"
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="absolute inset-0 bg-black opacity-50" />
      </div>
      {/* Content */}
      <div className="relative z-10 w-full max-w-3xl text-center px-6">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 drop-shadow-lg">
          Experience Cricket Like Never Before!
        </h1>
        <p className="text-lg md:text-xl text-white/90 mb-8 font-medium">
          Watch{" "}
          <span className="text-yellow-300 font-bold">Live Streaming</span> of
          Ananthapuri Cricket matches.
          <br />
          Don’t miss a single moment of the action!
        </p>
        <button
          onClick={() => navigate("/booking")}
          className="bg-yellow-400 hover:bg-yellow-500 text-slate-900 font-bold px-10 py-3 rounded-full shadow-xl transition duration-200 text-lg tracking-wide"
        >
          Book Now
        </button>
      </div>
    </section>
  );
};

export default Hero;
