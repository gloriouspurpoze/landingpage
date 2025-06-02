const logos = [
    "/logos/vite.svg",
    "/logos/react.svg",
    "/logos/vite.svg",
    "/logos/react.svg",
    "/logos/vite.svg",
    "/logos/react.svg",
    
];

const Partners = () => {
return (
    <section className="bg-accent/80 py-8 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Left text */}
            <div className="md:w-1/3 text-center md:text-left">
                <p className="text-primary text-sm md:text-base font-medium">
                    WE ARE PARTNERED WITH MORE THAN 50+ COMPANIES AROUND THE GLOBE.
                </p>
            </div>

            {/* Scrolling logos with gradient overlay */}
            <div className="md:w-2/3 relative overflow-hidden">
                <div className="flex animate-scroll gap-10 w-max">
                    {logos.concat(logos).map((src, i) => (
                        <img
                            key={i}
                            src={src}
                            alt={`Partner ${i}`}
                            className="h-10 object-contain opacity-60 hover:opacity-100 transition duration-300"
                        />
                    ))}
                </div>
                {/* Left gradient */}
                {/* <div
                    className="pointer-events-none absolute top-0 left-0 h-full"
                    style={{
                        width: "70px",
                        background: "linear-gradient(to right, rgba(62, 180, 137, 0.8) , rgba(13, 19, 16,0) 100%)",
                    }}
                /> */}
                {/* Right gradient */}
                {/* <div
                    className="pointer-events-none absolute top-0 right-0 h-full"
                    style={{
                        width: "70px",
                        background: "linear-gradient(to left, rgba(13, 19, 16,1) 70%, rgba(13, 19, 16,0) 100%)",
                    }}
                /> */}
            </div>
        </div>
    </section>
);
};

export default Partners;
