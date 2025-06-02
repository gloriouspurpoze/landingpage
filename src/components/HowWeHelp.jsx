// Finalized HowWeHelp component, redesigned for better spacing and clarity

export default function HowWeHelp() {
    return (
        <section className="w-full bg-primary text-background px-6 lg:px-20 pt-[300px] pb-24 font-poppins">
            <div className="max-w-[80%] mx-auto grid lg:grid-cols-3 gap-16 items-start">

                {/* Right Side - Heading */}
                <div className="lg:col-start-3 lg:row-start-1 order-1 lg:order-none">
                    <h1 className="text-3xl md:text-5xl font-sans font-bold tracking-tight leading-snug">
                        <img src="/media/help.svg" className="mb-4 w-12 h-12" alt="Help Icon" />
                        <div className="mb-2">Here's How</div>
                        <div className="mb-2">We Help</div>
                    </h1>
                </div>

                {/* Left Side - Paragraph */}
                <div className="lg:col-span-2 order-2 lg:order-none">
                    <p className="text-lg md:text-2xl text-background/90 tracking-wide leading-relaxed md:pl-8">
                        We specialize in AI-driven web and mobile app development, helping businesses resolve inefficiencies and stuck projects. Clients see 40% faster workflows and 25% revenue growth through clean architecture and seamless API integrations. With a 48-hour bug-fix guarantee, Techora turns chaotic tech stacks into scalable assets.
                    </p>
                </div>
            </div>
        </section>
    );
}
