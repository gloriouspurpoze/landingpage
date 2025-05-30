import { useEffect, useRef, useState } from "react";

const phrases = ["Boost Sales", "Drive Growth", "Convert Visitors"];

export default function HowWeHelp() {
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
        <section className="w-full pt-[320px] bg-primary text-background px-6 lg:px-20 py-20 font-poppins">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-start gap-16">


                {/* Left Side - Heading */}
                <div className="lg:w-2/3 order-2 lg:order-2">
                    <p className=" text-xl md:text-2xl md:pl-[15%] text-background/80 max-w-xl md:mt-4 text-left tracking-wider leading-relaxed">
                        We specialize in AI-driven web and mobile app development, helping businesses resolve inefficiencies and stuck projects. Clients see 40% faster workflows and 25% revenue growth through clean architecture and seamless API integrations. With a 48-hour bug-fix guarantee, Techora turns chaotic tech stacks into scalable assets.
                    </p>
                </div>

                {/* Right Side - Content */}
                <div className="lg:w-1/3 flex flex-col gap-6 order-1 lg:order-2">
                    <h1 className="text-[1.5rem] md:text-[3.5rem] font-sans font-bold text-4xl tracking-widest leading-tight text-left">
                        <img src="media/help.svg" className="m-0" alt="" />
                        <div className="mb-2">Here's How</div>
                        <div className="mb-2">We Help</div>
                    </h1>
                </div>
            </div>


        </section>
    );
}