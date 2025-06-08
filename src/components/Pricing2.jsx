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
        bonuses: [
            "🎁 Free Initial Consultation",
            "🎁 1-Hour Post-Launch Support",
            "🎁 Basic SEO Setup",
        ],
    },
    {
        title: "Mobile Apps",
        price: "₹1,50,000+",
        features: [
            "Cross-platform App (iOS & Android)",
            "Intuitive UI/UX",
            "CRM / Payment Gateway Integration",
        ],
        bonuses: [
            "🎁 SEO Analysis & Report",
            "🎁 Social Media Integration",
            "🎁 1-Hour Consultation",
        ],
    },
    {
        title: "Ecommerce",
        price: "₹1,20,000+",
        features: [
            "Visually Stunning Storefront",
            "Secure Checkout Integration",
            "Inventory Management",
        ],
        bonuses: [
            "🎁 SEO Analysis & Report",
            "🎁 Social Media Integration",
            "🎁 1-Hour Consultation",
        ],
    },
    {
        title: "Ecommerce",
        price: "₹1,20,000+",
        features: [
            "Visually Stunning Storefront",
            "Secure Checkout Integration",
            "Inventory Management",
        ],
        bonuses: [
            "🎁 SEO Analysis & Report",
            "🎁 Social Media Integration",
            "🎁 1-Hour Consultation",
        ],
    },
    {
        title: "Ecommerce",
        price: "₹1,20,000+",
        features: [
            "Visually Stunning Storefront",
            "Secure Checkout Integration",
            "Inventory Management",
        ],
        bonuses: [
            "🎁 SEO Analysis & Report",
            "🎁 Social Media Integration",
            "🎁 1-Hour Consultation",
        ],
    },
    {
        title: "Ecommerce",
        price: "₹1,20,000+",
        features: [
            "Visually Stunning Storefront",
            "Secure Checkout Integration",
            "Inventory Management",
        ],
        bonuses: [
            "🎁 SEO Analysis & Report",
            "🎁 Social Media Integration",
            "🎁 1-Hour Consultation",
        ],
    },
];

export default function PricingSplitView() {
    const [selected, setSelected] = useState(0);
    const activePlan = pricingPlans[selected];

    return (
        <section className="bg-[#0D1310] text-[#EEE7DC] py-16 px-6 md:px-20">
            <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-accent mb-2">Simple, Transparent Pricing</h2>
                <p className="text-md text-[#EEE7DC]/70">No contracts. No hidden fees.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-12 max-w-7xl mx-auto">


                {/* Left: Details */}
                <div className="bg-[#1A1F1D] p-8 rounded-2xl shadow-lg border border-accent/20">
                    <h2 className="text-3xl font-bold text-accent mb-4">{activePlan.title}</h2>
                    <p className="text-2xl font-semibold mb-6">{activePlan.price}</p>

                    <div className="mb-6">
                        <h4 className="text-lg font-semibold mb-2">What You Get:</h4>
                        <ul className="space-y-2 list-disc list-inside text-[#EEE7DC]/80">
                            {activePlan.features.map((f, i) => (
                                <li key={i}>{f}</li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold mb-2">Free Bonuses:</h4>
                        <ul className="space-y-1 text-accent font-medium">
                            {activePlan.bonuses.map((b, i) => (
                                <li key={i}>{b}</li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Right: Plan Selector */}
                {/* <div className="bg-[#1A1F1D] p-8 rounded-2xl shadow-lg border border-accent/20"> */}
                <div className=" rounded-2xl shadow-lg ">
                    {/* <h3 className="text-xl font-bold mb-6 text-center text-[#EEE7DC]">Choose Your Plan</h3> */}

                    <div className="space-y-4">
                        {pricingPlans.map((plan, idx) => (
                            <div
                                key={idx}
                                onClick={() => setSelected(idx)}
                                className={`cursor-pointer rounded-lg px-4 py-3 border transition-all duration-300 ${selected === idx
                                        ? "border-accent bg-[#0D1310]"
                                        : "border-accent/30 hover:border-accent"
                                    }`}
                            >
                                <div className="flex justify-between items-center">
                                    <h4 className="text-lg font-semibold">{plan.title}</h4>
                                    <p className="text-accent font-bold">{plan.price}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <button className="mt-8 w-full bg-accent text-[#0D1310] font-semibold py-3 rounded-lg hover:bg-[#35a178] transition">
                        Proceed with {activePlan.title}
                    </button>
                </div>
            </div>
        </section>
    );
}
