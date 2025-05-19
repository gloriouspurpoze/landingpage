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
const App = () => {
  return (
    <>
    <Navbar />
    <Hero />
    <Partners />
    <FeaturesSection/>
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