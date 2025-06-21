import { useRef, useLayoutEffect } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

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
      "Boost your brand's reach with powerful cross-platform apps. We deliver function-rich mobile experiences with intuitive design and seamless integration.",
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

const OurExpertise = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Animate the heading first
      gsap.fromTo(".section-heading", 
        {
          y: -30,
          opacity: 0
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          }
        }
      );

      // Then animate the cards with stagger
      gsap.fromTo(".feature-card", 
        {
          y: 80,
          opacity: 0,
          scale: 0.95
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: {
            amount: 0.6, // Total time for all cards to animate
            from: "start"
          },
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".cards-container",
            start: "top 80%",
            toggleActions: "play none none reverse",
          }
        }
      );

      // Add a subtle hover animation
      gsap.set(".feature-card", {
        transformOrigin: "center center"
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full bg-primary/80 text-white px-6 lg:px-20 py-20 font-sans">
      {/* Section Heading */}
      <div className="text-center mb-16 section-heading">
        <h2 className="text-4xl font-bold text-accent mb-4">Our Expertise</h2>
        <div className="mt-2 h-1 w-20 mx-auto bg-accent rounded-full" />
      </div>
      
      <div className="max-w-6xl mx-auto">
        {/* Features Grid */}
        <div className="cards-container grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="feature-card bg-primary rounded-2xl p-6 shadow-xl hover:shadow-2xl hover:scale-105 hover:bg-slate-750 transition-all duration-300 hover:border-2 hover:border-accent/50"
            >
              <h3 className="text-xl font-semibold mb-3 text-accent">{feature.title}</h3>
              <p className="text-sm text-gray-700 mb-4 leading-relaxed">{feature.description}</p>

              <ul className="text-sm text-gray-600 mb-6 space-y-1">
                {feature.bullets.map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-gray-600 mr-2 mt-0.5">✔</span>
                    <span>{item.replace('✔ ', '')}</span>
                  </li>
                ))}
              </ul>

              <div className="text-xs text-gray-500 pt-4">
                <p className="font-semibold mb-2 text-accent">Free Bonuses:</p>
                <ul className="space-y-1">
                  {feature.bonuses.map((bonus, i) => (
                    <li key={i} className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-accent rounded-full mr-2"></span>
                      {bonus}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurExpertise;