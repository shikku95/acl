import React from "react";
import { NavLink } from "react-router-dom";

const menuItems = [
  { name: "Home", to: "/" },
  { name: "About", to: "/about" },
  { name: "Services", to: "/services" },
  { name: "Booking", to: "/booking" },
  { name: "Live", to: "/live" },
  { name: "Contact", to: "/contact" },
];

const Navbar = () => {
  return (
    <nav
      className="bg-gradient-to-r from-red-500 via-pink-500 to-violet-600

 px-6 py-4 flex items-center justify-between  shadow-md"
    >
      <div className="text-2xl font-bold text-white">Ananthapuri Live</div>
      <ul className="flex space-x-8">
        {menuItems.map((item) => (
          <li key={item.name}>
            <NavLink
              to={item.to}
              className={({ isActive }) =>
                `text-white hover:text-yellow-400 transition ${
                  isActive
                    ? "border-b-2 border-yellow-400 pb-1 font-semibold"
                    : ""
                }`
              }
            >
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
