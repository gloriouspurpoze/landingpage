// src/Navbar.jsx
import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Partners from "./components/Partners";
import FeaturesSection from "./components/FeaturesSection";
import LiveDemoAndIntegrations from "./components/DemoAndIntegrations";
import ReviewsSection from "./components/Reviews";
import PricingSection from "./components/Pricing";
import FAQSection from "./components/Faq";
import CTASection from "./components/CTA";
import AnimatedHeadline from "./components/AnimatedHeadline";
// import CircularImageSection from "./components/Hro";
import WaveImage from "./components/WaveImage";
import HowWeHelp from "./components/HowWeHelp";

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(useGSAP);


const App = () => {

  return (
    <>
      <Navbar />
      <AnimatedHeadline />
      <WaveImage />
      
      <HowWeHelp />
      <div className="relative ">
        
      </div>
      
      {/* <Hero /> */}

      {/* <CircularImageSection /> */}
      <Partners />
      <FeaturesSection />
      <LiveDemoAndIntegrations />
      <ReviewsSection />
      <PricingSection />
      <FAQSection />
      <CTASection />
      {/* Add more components as needed */}
    </>
  );
};

export default App;
// src/App.jsx