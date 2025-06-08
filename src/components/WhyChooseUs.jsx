const reasons = [
  {
    title: "Expertise in Startups & SMBs",
    description:
      "We get the hustle! Our solutions are tailored for startups and small businesses with tight budgets and big dreams.",
    emoji: "🚀",
  },
  {
    title: "MVP Development Pros",
    description:
      "Launch fast, learn faster. We build lean, scalable MVPs focused on core features and real user value.",
    emoji: "🛠️",
  },
  {
    title: "SaaS Development Specialists",
    description:
      "Need a SaaS platform? We design cloud-ready architectures that evolve with your product and scale with your growth.",
    emoji: "☁️",
  },
  {
    title: "AI-Powered Innovation",
    description:
      "From chatbots to predictive magic — we embed AI into your apps to give you that futuristic edge.",
    emoji: "🤖",
  },
  {
    title: "End-to-End Support",
    description:
      "From idea to launch (and beyond), we walk with you. No ghosting. No jargon. Just reliable tech partners.",
    emoji: "🤝",
  },
  {
    title: "Transparent & Collaborative",
    description:
      "Clear pricing, honest timelines, and open collaboration. You’ll always know where your project stands.",
    emoji: "🔍",
  },
];

import React from "react";

const WhyChooseUs = () => {
  

  return (
    <section className="bg-[#0D1310] text-[#EEE7DC] py-16 px-6 md:px-20 md:max-w-[80">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold text-[#3EB489]">Why Choose Us</h2>
        <p className="text-[#EEE7DC]/70 mt-2">
          It’s not just what we build — it’s how we build it. 🚧✨
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {reasons.map((item, idx) => (
          <div
            key={idx}
            className="bg-[#1A1F1D] border border-[#3EB489]/30 rounded-2xl p-6 text-left hover:shadow-md transition duration-300"
          >
            <div className="text-3xl mb-3">{item.emoji}</div>
            <h4 className="text-xl font-semibold text-[#3EB489] mb-2">
              {item.title}
            </h4>
            <p className="text-[#EEE7DC]/80 text-sm leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
