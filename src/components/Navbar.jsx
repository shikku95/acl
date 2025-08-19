import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";
import logo from "../assets/acl-live.png"; // Adjust the path if needed

const menuItems = [
  { name: "Home", to: "/" },
  { name: "About", to: "/about" },
  { name: "Services", to: "/services" },
  { name: "Booking", to: "/booking" },
  { name: "Live", to: "/live" },
  { name: "Contact", to: "/contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-red-500 via-pink-500 to-violet-600 px-4 py-3 flex items-center justify-between shadow-md relative">
      <div className="flex items-center">
        <img
          src={logo}
          alt="Ananthapuri Live Logo"
          className="h-14 w-auto drop-shadow-lg"
        />
      </div>
      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-8">
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
      {/* Burger Icon */}
      <button
        className="md:hidden text-white text-3xl focus:outline-none"
        onClick={() => setMenuOpen((prev) => !prev)}
        aria-label="Toggle menu"
      >
        {menuOpen ? <HiX /> : <HiMenu />}
      </button>
      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-gradient-to-r from-red-500 via-pink-500 to-violet-600 shadow-lg z-50 md:hidden animate-fade-in">
          <ul className="flex flex-col items-center py-4 space-y-2">
            {menuItems.map((item) => (
              <li key={item.name}>
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    `block px-4 py-2 text-white hover:text-yellow-400 transition text-lg ${
                      isActive
                        ? "border-b-2 border-yellow-400 pb-1 font-semibold"
                        : ""
                    }`
                  }
                  onClick={() => setMenuOpen(false)}
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
