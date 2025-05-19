const Hero = () => {
  return (
    <section className="text-center py-16 px-4 bg-white">
      {/* Top Update Buttons */}
      <div className="flex justify-center items-center gap-2 mb-4">
        <button className="bg-gray-100 text-sm px-4 py-1 rounded-full">Update</button>
        <button className="flex items-center gap-2 text-sm bg-gray-100 px-4 py-1 rounded-full">
          New version 2.0 available <span>➡️</span>
        </button>
      </div>

      {/* Main Heading */}
      <h1 className="text-4xl md:text-5xl font-bold mb-4">
        High Converting Heading <br /> Comes Here
      </h1>

      {/* Decorative Lines (can be replaced with actual styling later) */}
      <div className="max-w-md mx-auto mb-6">
        <div className="h-1 bg-gray-200 mb-2"></div>
        <div className="h-1 bg-gray-200 w-3/4 mx-auto"></div>
      </div>

      {/* CTAs */}
      <div className="flex justify-center gap-4">
        <button className="bg-black text-white px-6 py-2 rounded-lg font-medium">
          Primary CTA
        </button>
        <button className="border border-black px-6 py-2 rounded-lg font-medium">
          Secondary CTA
        </button>
      </div>

      {/* Image / Placeholder Box */}
      <div className="mt-12 bg-gray-100 w-full max-w-4xl h-64 mx-auto rounded-xl"></div>
    </section>
  );
};

export default Hero;
