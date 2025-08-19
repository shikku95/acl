import React from "react";

// Replace these with your actual YouTube video IDs
const liveStreams = [
  { id: "ZqSdQLL7dy0", title: "Royals cup 2025" },
  { id: "7KskjjIkWic", title: "InApp Champions League 2025" },
  { id: "zXMQZ6XKdMg", title: "Technopark Premier League 2025" },
];

const Live = () => {
  return (
    <section className="max-w-6xl mx-auto mt-16 mb-16 px-6 py-10 bg-white/80 rounded-2xl shadow-xl">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-violet-700 mb-10">
        Recent Live Streams
      </h2>
      <div className="grid gap-8 md:grid-cols-3">
        {liveStreams.map((stream) => (
          <div
            key={stream.id}
            className="rounded-xl overflow-hidden shadow-lg bg-gradient-to-br from-pink-100 via-yellow-100 to-violet-100 hover:scale-105 transition-transform"
          >
            <div className="aspect-w-16 aspect-h-9 w-full">
              <iframe
                src={`https://www.youtube.com/embed/${stream.id}`}
                title={stream.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-56 md:h-48"
              ></iframe>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-slate-800 text-center">
                {stream.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Live;
