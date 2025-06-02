import React from "react";

const features = [
  {
    title: "Web Development",
    description:
      "Need a sleek website, web app, or employee portal? Our custom web devs have your back — fully responsive, user-friendly, and built to grow your business.",
    bullets: [
      "✔ Fully responsive, modern website tailored to your brand.",
      "✔ User-friendly design optimized for seamless navigation.",
      "✔ Integration with essential tools (contact forms, social media, etc.)",
    ],
    bonuses: [
      "SEO Analysis & Report",
      "Basic SEO Setup",
      "Social Media Integration",
      "1-Hour Consultation",
    ],
  },
  {
    title: "Mobile Apps",
    description:
      "Boost your brand’s reach with powerful cross-platform apps. We deliver function-rich mobile experiences with intuitive design and seamless integration.",
    bullets: [
      "✔ Cross-platform mobile app development (iOS & Android).",
      "✔ Intuitive UI/UX design to enhance user engagement.",
      "✔ Integration with your existing systems (CRM, payment gateways).",
    ],
    bonuses: [
      "SEO Analysis & Report",
      "Basic SEO Setup",
      "Social Media Integration",
      "1-Hour Consultation",
    ],
  },
  {
    title: "Ecommerce",
    description:
      "Win more customers with an online store that's built to convert — beautiful, secure, and easy to manage.",
    bullets: [
      "✔ Visually stunning, conversion-focused online store.",
      "✔ Secure payment gateway integration.",
      "✔ Product catalog setup and inventory management.",
    ],
    bonuses: [
      "SEO Analysis & Report",
      "Basic SEO Setup",
      "Social Media Integration",
      "1-Hour Consultation",
    ],
  },
];


const stats = [
  { value: "55%", label: "Data 1" },
  { value: "55%", label: "Data 2" },
  { value: "55%", label: "Data 3" },
  { value: "55%", label: "Data 4" },
];

const OurExpertise = () => {
  return (
    <section className="py-16 px-4 md:px-10 bg-primary/90 text-background border ">
      {/* <div className="md:max-w-[80%] max-w-[90%] relative border m-auto border-red-500">
        <h2 className="text-3xl font-bold text-accent">Our Expertise</h2>
      </div> */}
      {/* Section Heading */}
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-accent">Our Expertise</h2>
        {/* <div className="mt-2 h-1 w-16 mx-auto bg-accent rounded-full" /> */}
      </div>

      {/* Features Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, idx) => (
          <div
  key={idx}
  className="bg-primary rounded-2xl p-5 shadow-sm hover:shadow-lg transition-all duration-300"
>
  <h3 className="text-xl font-semibold mb-2 text-accent">{feature.title}</h3>
  <p className="text-sm text-gray-700 mb-3">{feature.description}</p>

  <ul className="text-sm list-disc list-inside text-gray-600 mb-4">
    {feature.bullets.map((item, i) => (
      <li key={i}>{item}</li>
    ))}
  </ul>

  <div className="text-xs text-gray-500">
    <p className="font-semibold mb-1">Free Bonuses:</p>
    <ul className="list-disc list-inside">
      {feature.bonuses.map((bonus, i) => (
        <li key={i}>{bonus}</li>
      ))}
    </ul>
  </div>
</div>

        ))}
      </div>

      {/* Divider */}
      {/* <div className="border-t mt-16 mb-8" /> */}

      {/* Stats Row */}
      {/* <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
        {stats.map((stat, idx) => (
          <div key={idx}>
            <div className="text-2xl font-bold">{stat.value}</div>
            <div className="text-sm text-gray-500">{stat.label}</div>
          </div>
        ))}
      </div> */}
    </section>
  );
};

export default OurExpertise;
