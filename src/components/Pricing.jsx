import React, { useState } from "react";

const pricingPlans = [
  {
    title: "MVP Development",
    price: "₹1,00,000+",
    features: [
      "Rapid Prototyping",
      "Core Feature Development",
      "Scalable Architecture",
      "User Feedback Integration",
    ],
    isPopular: true,
  },
  {
    title: "Web App Revamp",
    price: "₹80,000+",
    features: [
      "UI/UX Overhaul",
      "Performance Optimization",
      "API Integration",
      "Responsive Design",
    ],
  },
  {
    title: "Mobile App",
    price: "₹1,50,000+",
    features: [
      "Cross-platform Build",
      "App Store Publishing",
      "Payment Integration",
      "Push Notifications",
    ],
  },
  {
    title: "Ecommerce Store",
    price: "₹1,20,000+",
    features: [
      "Product Management",
      "Secure Checkout",
      "SEO-Friendly Pages",
      "Third-Party Plugins",
    ],
  },
  {
    title: "API Development",
    price: "₹60,000+",
    features: [
      "REST/GraphQL APIs",
      "Secure Auth",
      "Rate Limiting",
      "Docs Included",
    ],
  },
  {
    title: "Ongoing Support",
    price: "₹15,000/mo",
    features: [
      "Bug Fixes",
      "Performance Monitoring",
      "Security Patches",
      "Monthly Reports",
    ],
  },
];

export default function PricingTable() {
  const [selectedPlan, setSelectedPlan] = useState(0);

  return (
    <section className="bg-[#0D1310] text-[#EEE7DC] py-20 px-6 lg:px-24">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-[#3EB489] mb-2">Simple, Transparent Pricing</h2>
        <p className="text-md text-[#EEE7DC]/70">No contracts. No hidden fees.</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {pricingPlans.map((plan, idx) => (
          <div
            key={idx}
            className={`rounded-xl border-2 p-6 transition-all duration-300 cursor-pointer ${
              selectedPlan === idx
                ? "border-[#3EB489] bg-[#1A1F1D]"
                : "border-transparent bg-[#1A1F1D]/80 hover:border-[#3EB489]/50"
            }`}
            onClick={() => setSelectedPlan(idx)}
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold">{plan.title}</h3>
              {plan.isPopular && (
                <span className="text-sm bg-[#3EB489] text-[#0D1310] px-2 py-1 rounded-full font-medium">
                  Most Popular
                </span>
              )}
            </div>

            <p className="text-2xl font-bold mb-4">{plan.price}</p>

            <ul className="text-sm space-y-2 text-[#EEE7DC]/80 mb-6">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="text-[#3EB489]">✔</span> {feature}
                </li>
              ))}
            </ul>

            <button className="w-full bg-[#3EB489] text-[#0D1310] py-2 rounded-lg font-semibold hover:bg-[#35a178] transition-all">
              Choose Plan
            </button>
          </div>
        ))}
      </div>

      <div className="mt-10 text-center">
        <p className="text-sm text-[#EEE7DC]/70">
          🎁 All plans include a free consultation and SEO setup.
        </p>
      </div>
    </section>
  );
}
