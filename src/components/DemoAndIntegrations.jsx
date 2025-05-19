import React from "react";

const logos = [
  "/logos/logo-ipsum.svg",
  "/logos/logo-logoname.svg",
  "/logos/logo-connected.svg",
  "/logos/logo-mastercard.svg",
  "/logos/logo-jump.svg",
];

const LiveDemoAndIntegrations = () => {
  return (
    <section className="py-16 px-4 md:px-10 bg-white text-gray-800">
      {/* Live Demo / Interactive Section */}
      <div className="text-center mb-12">
        <h2 className="text-2xl font-bold">Interactive Elements Or Live Demo (Optional)</h2>
        <div className="mt-2 h-1 w-16 mx-auto bg-gray-300 rounded-full" />
        <div className="mt-8 bg-gray-100 h-64 rounded-2xl shadow-inner flex items-center justify-center">
          <p className="text-gray-400 italic">Your live demo or interactive component goes here</p>
        </div>
      </div>

      {/* Integrations */}
      <div className="text-center mt-16">
        <h3 className="text-xl font-semibold">Integrations Section (If Any)</h3>
        <div className="mt-2 h-1 w-12 mx-auto bg-gray-200 rounded-full" />

        <div className="flex flex-wrap justify-center items-center gap-6 mt-8">
          {logos.map((logo, idx) => (
            <img
              key={idx}
              src={logo}
              alt={`Integration ${idx + 1}`}
              className="h-10 w-auto grayscale hover:grayscale-0 transition"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LiveDemoAndIntegrations;
