import React from "react";

const plans = [
  {
    title: "Starter",
    price: "Free Trial For 7 Days",
    features: ["Basic features", "1 project", "Email support"],
    cta: "Secondary CTA",
    isPrimary: false,
  },
  {
    title: "Pro",
    price: "$69/month",
    features: ["All Starter features", "5 projects", "Priority support"],
    cta: "Primary CTA",
    isPrimary: true,
    tag: "Most Popular",
  },
  {
    title: "Pro +",
    price: "$99/month",
    features: ["Everything in Pro", "Unlimited projects", "Dedicated support"],
    cta: "Secondary CTA",
    isPrimary: false,
  },
];

const PricingSection = () => {
  return (
    <section className="py-20 px-4 md:px-10 bg-white text-gray-800">
      <h2 className="text-3xl font-bold text-center mb-2">Pricing Section</h2>
      <div className="h-1 w-16 bg-gray-300 rounded-full mx-auto mb-12" />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {plans.map((plan, idx) => (
          <div
            key={idx}
            className={`rounded-xl border ${
              plan.isPrimary ? "border-black" : "border-gray-200"
            } p-8 flex flex-col justify-between shadow-md`}
          >
            <div>
              <h3 className="text-xl font-semibold">{plan.title}</h3>
              {plan.tag && (
                <span className="text-xs bg-gray-200 text-gray-600 px-2 py-1 rounded-full ml-2">
                  {plan.tag}
                </span>
              )}
              <p className="mt-4 text-2xl font-bold">{plan.price}</p>
              <ul className="mt-6 space-y-2 text-sm text-gray-600">
                {plan.features.map((f, i) => (
                  <li key={i}>✓ {f}</li>
                ))}
              </ul>
            </div>
            <button
              className={`mt-6 py-2 px-4 rounded-full ${
                plan.isPrimary
                  ? "bg-black text-white"
                  : "border border-gray-600 text-gray-700"
              }`}
            >
              {plan.cta}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PricingSection;
