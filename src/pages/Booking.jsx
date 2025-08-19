import React, { useState } from "react";

const servicesList = [
  "Live Streaming",
  "DRS for Cricket",
  "Videography & Photography",
  "LED Screen for Ground",
  "Brand Promotion",
];

const Booking = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    tournament: "",
    dates: "",
    time: "",
    location: "",
    services: [],
    message: "",
  });

  const handleChange = (e) => {
    const { name, value, type, selectedOptions } = e.target;
    if (type === "select-multiple") {
      const values = Array.from(selectedOptions, (option) => option.value);
      setForm((prev) => ({ ...prev, [name]: values }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Format the message
    const message = `
*New Booking Request*
Name: ${form.name}
Phone/WhatsApp: ${form.phone}
Tournament: ${form.tournament}
Dates: ${form.dates}
Time: ${form.time}
Location: ${form.location}
Services Needed: ${form.services.join(", ")}
Message: ${form.message}
    `;

    // WhatsApp number (with country code, no + or spaces)
    const whatsappNumber = "917994111654"; // 91 for India

    // Encode the message for URL
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;

    // Open WhatsApp
    window.open(url, "_blank");
    // Reset the form fields
    setForm({
      name: "",
      phone: "",
      tournament: "",
      dates: "",
      time: "",
      location: "",
      services: [],
      message: "",
    });
  };

  return (
    <section className="w-full flex justify-center items-center min-h-[80vh] bg-gradient-to-br from-black via-slate-900 to-gray-900 py-16">
      <div className="w-full max-w-2xl md:max-w-3xl bg-white/90 rounded-3xl shadow-2xl p-10 md:p-16 border border-violet-200">
        <h2 className="text-4xl font-extrabold text-center text-violet-700 mb-10 drop-shadow">
          Book Our Services
        </h2>
        <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
          <div className="grid md:grid-cols-2 gap-6">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
              className="px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-violet-400 bg-white/80 shadow"
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone / WhatsApp Number"
              value={form.phone}
              onChange={handleChange}
              required
              className="px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-violet-400 bg-white/80 shadow"
            />
            <input
              type="text"
              name="tournament"
              placeholder="Tournament Name"
              value={form.tournament}
              onChange={handleChange}
              required
              className="px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-violet-400 bg-white/80 shadow"
            />
            <input
              type="text"
              name="dates"
              placeholder="Dates (e.g., 12-14 Sep 2025)"
              value={form.dates}
              onChange={handleChange}
              required
              className="px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-violet-400 bg-white/80 shadow"
            />
            <input
              type="text"
              name="time"
              placeholder="Time (e.g., 9:00 AM - 6:00 PM)"
              value={form.time}
              onChange={handleChange}
              required
              className="px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-violet-400 bg-white/80 shadow"
            />
            <input
              type="text"
              name="location"
              placeholder="Location / Ground Name"
              value={form.location}
              onChange={handleChange}
              required
              className="px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-violet-400 bg-white/80 shadow"
            />
          </div>
          <div>
            <label className="block text-slate-700 font-semibold mb-2">
              Services Needed
            </label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {servicesList.map((service) => (
                <label
                  key={service}
                  className="flex items-center gap-2 bg-white/70 rounded-lg px-3 py-2 shadow cursor-pointer"
                >
                  <input
                    type="checkbox"
                    name="services"
                    value={service}
                    checked={form.services.includes(service)}
                    onChange={(e) => {
                      if (e.target.checked) {
                        setForm((prev) => ({
                          ...prev,
                          services: [...prev.services, service],
                        }));
                      } else {
                        setForm((prev) => ({
                          ...prev,
                          services: prev.services.filter((s) => s !== service),
                        }));
                      }
                    }}
                    className="accent-violet-600"
                  />
                  <span className="text-slate-700">{service}</span>
                </label>
              ))}
            </div>
          </div>
          <textarea
            name="message"
            placeholder="Message"
            value={form.message}
            onChange={handleChange}
            rows={4}
            className="px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-violet-400 bg-white/80 shadow"
          />
          <button
            type="submit"
            className="bg-gradient-to-r from-red-500 via-pink-500 to-violet-600 text-white font-bold py-3 rounded-xl shadow-lg hover:scale-105 transition-transform text-lg mt-2"
          >
            Submit Booking
          </button>
        </form>
      </div>
    </section>
  );
};

export default Booking;
