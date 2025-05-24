// src/Navbar.jsx
import React, { use } from "react";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(useGSAP);



const Navbar = () => {
  useGSAP(() => {
  gsap.from('nav', {
    duration: 1,
    y: -30,
    opacity: 0,
    // ease: 'power2.out',
  });
});
  return (
    <nav className="flex justify-between items-center py-6 px-6 md:px-20 bg-background shadow-sm rounded-xl">
      {/* Left: Logo */}
      <div className="text-2xl font-bold">
        <span className=" w-8 h-8 rounded-full bg-black text-accent flex items-center justify-center">TECHORA</span>
      </div>

      {/* Center: Menu */}
      <div className="hidden md:flex gap-8 text-sm font-medium text-primary">
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
