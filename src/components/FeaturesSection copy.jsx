import React from "react";

const features = [
  { title: "Feature 1", description: "Short feature description here." },
  { title: "Feature 2", description: "Short feature description here." },
  { title: "Feature 3", description: "Short feature description here." },
  { title: "Feature 4", description: "Short feature description here." },
  { title: "Feature 5", description: "Short feature description here." },
  { title: "Feature 6", description: "Short feature description here." },
];

const stats = [
  { value: "55%", label: "Data 1" },
  { value: "55%", label: "Data 2" },
  { value: "55%", label: "Data 3" },
  { value: "55%", label: "Data 4" },
];

const FeaturesSection = () => {
  return (
    <section className="py-16 px-4 md:px-10 bg-primary/90 text-background">
      {/* Section Heading */}
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-accent">Features Section</h2>
        <div className="mt-2 h-1 w-16 mx-auto bg-accent rounded-full" />
      </div>

      {/* Features Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className="bg-background rounded-2xl p-5 shadow-sm hover:shadow-lg transition-all duration-300"
          >
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-sm text-gray-600 mb-4">{feature.description}</p>
            <div className="h-24 bg-white rounded-md mb-4" /> {/* Placeholder */}
          </div>
        ))}
      </div>

      {/* Divider */}
      <div className="border-t mt-16 mb-8" />

      {/* Stats Row */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
        {stats.map((stat, idx) => (
          <div key={idx}>
            <div className="text-2xl font-bold">{stat.value}</div>
            <div className="text-sm text-gray-500">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
