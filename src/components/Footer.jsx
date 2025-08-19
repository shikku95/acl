import React from "react";

const Footer = () => {
  return (
    <footer
      className="bg-gradient-to-r from-red-500 via-pink-500 to-violet-600
 text-white text-center py-2   shadow-md"
    >
      &copy; {new Date().getFullYear()} Ananthapuri Live. All rights reserved.
    </footer>
  );
};

export default Footer;
