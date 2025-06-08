import { useState } from "react";

const FAQItem = ({ question, answer }) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="bg-bckground text-primary rounded-xl p-4 mb-4 cursor-pointer border border-accent/30 hover:border-accent transition-all duration-300 hover:shadow-md"
      onClick={() => setOpen(!open)}
    >
      <div className="flex justify-between items-center font-semibold text-lg text-[#3EB489]">
        <span>{question}</span>
        <span className="text-2xl">{open ? "−" : "+"}</span>
      </div>
      {open && <p className="mt-3 text-primary/80 text-sm">{answer}</p>}
    </div>
  );
};

const FAQSection = () => {
  const faqs = [
    { question: "What services do you offer?", answer: "We offer MVP development, SaaS solutions, mobile & web app development, and more!" },
    { question: "How long does it take to build an MVP?", answer: "Depending on complexity, it usually takes 4-8 weeks for a fully functional MVP." },
    { question: "Do you work with early-stage startups?", answer: "Absolutely! We specialize in helping startups launch quickly and affordably." },
    { question: "What tech stacks do you use?", answer: "We primarily use React, Next.js, Django, Node.js, and cloud platforms like AWS." },
  ];

  return (
    <section className="py-16 px-6 text-primary">
      <h2 className="text-3xl font-bold mb-10 text-center text-accent">Frequently Asked Questions</h2>
      <div className="max-w-2xl mx-auto">
        {faqs.map((faq, index) => (
          <FAQItem key={index} {...faq} />
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
