// src/Navbar.jsx
import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Partners from "./components/Partners";
import OurExpertise from "./components/FeaturesSection";
import LiveDemoAndIntegrations from "./components/DemoAndIntegrations";
import ReviewsSection from "./components/Reviews";
import PricingTable from "./components/Pricing";
import PricingSplitView from "./components/Pricing2";
import FAQSection from "./components/Faq";
import CTASection from "./components/CTA";
import AnimatedHeadline from "./components/AnimatedHeadline";
// import CircularImageSection from "./components/Hro";
import WaveImage from "./components/WaveImage";
import HowWeHelp from "./components/HowWeHelp";
import Works from "./components/Works";
import WhyChooseUs from "./components/WhyChooseUs";

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
      {/* <Partners /> */}
      <OurExpertise />
      <Partners /> 
      <Works />
      {/* <PricingTable /> */}
      <PricingSplitView/>
      <WhyChooseUs />

      {/* <LiveDemoAndIntegrations /> */}
      {/* <ReviewsSection /> */}
      
      <FAQSection />
      <CTASection />
      {/* Add more components as needed */}
    </>
  );
};

export default App;
// src/App.jsx