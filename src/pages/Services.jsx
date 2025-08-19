import React from "react";

const services = [
  {
    title: "Live Streaming",
    description:
      "High-quality live streaming for all cricket events and matches, so you never miss a moment.",
    icon: "🎥",
  },
  {
    title: "DRS for Cricket",
    description:
      "Decision Review System (DRS) support for fair and transparent match decisions.",
    icon: "🧐",
  },
  {
    title: "Videography & Photography",
    description:
      "Professional videography and photography services to capture every exciting moment on the field.",
    icon: "📸",
  },
  {
    title: "LED Screen for Ground",
    description:
      "Large LED screens for live display of scores, replays, and promotions at the ground.",
    icon: "🖥️",
  },
  {
    title: "Brand Promotion",
    description:
      "Opportunities for brands to promote their products and services during live events.",
    icon: "🚀",
  },
];

const Services = () => {
  return (
    <section className="max-w-5xl mx-auto mt-16 mb-16 px-6 py-10 bg-white/80 rounded-2xl shadow-xl">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-violet-700 mb-10">
        Our Services
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        {services.map((service) => (
          <div
            key={service.title}
            className="flex items-start gap-4 bg-gradient-to-r from-pink-100 via-yellow-100 to-violet-100 rounded-xl p-6 shadow hover:scale-105 transition-transform"
          >
            <span className="text-4xl">{service.icon}</span>
            <div>
              <h3 className="text-xl font-semibold text-pink-700 mb-2">
                {service.title}
              </h3>
              <p className="text-slate-700">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
