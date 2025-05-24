import { useEffect, useRef, useState } from "react";

const phrases = ["Boost Sales", "Drive Growth", "Convert Visitors"];

export default function HeroHeading() {
  const [text, setText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];
    let timeout;

    if (!isDeleting && charIndex < currentPhrase.length) {
      timeout = setTimeout(() => {
        setText(prev => prev + currentPhrase[charIndex]);
        setCharIndex(charIndex + 1);
      }, 100);
    } else if (isDeleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setText(currentPhrase.slice(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      }, 50);
    } else {
      timeout = setTimeout(() => {
        setIsDeleting(!isDeleting);
        if (!isDeleting) {
          // pause before deleting
          setTimeout(() => setIsDeleting(true), 1000);
        } else {
          setPhraseIndex((phraseIndex + 1) % phrases.length);
        }
      }, 800);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, phraseIndex]);

  return (
    <section className="w-full bg-background text-primary px-6 lg:px-20 py-20 font-poppins">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-start gap-16">
        {/* Left Side - Heading */}
        <div className="lg:w-2/3">
          <h1 className="text-[2.5rem] md:text-[4.5rem] font-sans font-bold text-4xl tracking-widest leading-tight text-left">
            <div className="mb-2">We Create Digital</div>
            <div className="mb-2">Experiences That</div>
            <div className="text-[#3EB489]">
              {text}
              <span className="animate-pulse">|</span>
            </div>
          </h1>
        </div>

        {/* Right Side - Content */}
        <div className="lg:w-1/3 flex flex-col gap-6">
          <p className="text-lg text-primary/80 max-w-md md:mt-4 md:text-right tracking-wide leading-relaxed">
            Full-cycle web development & marketing solutions that deliver 3x ROI for ambitious businesses
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-start md:justify-end">
            <button className="bg-accent text-black font-medium sm:px-6 sm:py-3 rounded hover:bg-primary transition whitespace-nowrap">
              See Client Results →
            </button>
            <button className="border border-primary text-primary font-medium px-4 py-2 sm:px-6 sm:py-3 rounded hover:bg-primary hover:text-background transition whitespace-nowrap">
              Get Free Audit
            </button>
          </div>

          <div className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm text-white/60 pt-2 sm:pt-4 justify-start md:justify-end flex-wrap">
            <span>🏆</span>
            <span>🔒</span>
            <span>⏱️</span>
            <span>Trusted by 150+ businesses worldwide</span>
          </div>
        </div>
      </div>
    </section>
  );
}