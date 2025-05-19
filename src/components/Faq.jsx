import { useState } from "react";

const FAQItem = ({ question, answer }) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="bg-gray-100 rounded-lg p-4 mb-3 cursor-pointer"
      onClick={() => setOpen(!open)}
    >
      <div className="flex justify-between items-center font-semibold text-lg">
        <span>{question}</span>
        <span className="text-xl">{open ? "−" : "+"}</span>
      </div>
      {open && <p className="mt-2 text-gray-600">{answer}</p>}
    </div>
  );
};

const FAQSection = () => {
  const faqs = [
    { question: "Question 1", answer: "Answer to question 1." },
    { question: "Question 2", answer: "Answer to question 2." },
    { question: "Question 3", answer: "Answer to question 3." },
    { question: "Question 4", answer: "Answer to question 4." },
  ];

  return (
    <section className="py-12 px-6">
      <h2 className="text-3xl font-bold mb-8 text-center">FAQ Section</h2>
      <div className="max-w-2xl mx-auto">
        {faqs.map((faq, index) => (
          <FAQItem key={index} {...faq} />
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
