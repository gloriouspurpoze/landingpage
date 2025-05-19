// src/Navbar.jsx
import React from "react";
import Navbar from "./components/Navbar"; 
import Hero from "./components/Hero";
import Partners from "./components/Partners";
import FeaturesSection from "./components/FeaturesSection";
const App = () => {
  return (
    <>
    <Navbar />
    <Hero />
    <Partners />
    <FeaturesSection/>
    {/* Add more components as needed */}
    </>
  );
};

export default App;
// src/App.jsx