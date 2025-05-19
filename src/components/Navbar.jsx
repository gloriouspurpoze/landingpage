// src/Navbar.jsx
import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center py-6 px-6 md:px-20 bg-white shadow-sm rounded-xl">
      {/* Left: Logo */}
      <div className="text-2xl font-bold">
        <span className="inline-block w-8 h-8 rounded-full bg-black text-white flex items-center justify-center">▶️</span>
      </div>

      {/* Center: Menu */}
      <div className="hidden md:flex gap-8 text-sm font-medium text-gray-800">
        <a href="#">Features</a>
        <a href="#">How It Works</a>
        <a href="#">Pricing</a>
        <a href="#">Reviews</a>
        <a href="#">FAQs</a>
      </div>

      {/* Right: CTA Button */}
      <button className="bg-black text-white px-5 py-2 rounded-full text-sm font-semibold">
        CTA Title
      </button>
    </nav>
  );
};

export default Navbar;
