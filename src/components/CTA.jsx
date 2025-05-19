const CTASection = () => {
  return (
    <section className="bg-gray-100 py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex-1">
          <h2 className="text-2xl font-bold mb-4">CTA Heading</h2>
          <p className="text-gray-600 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod.
          </p>
          <button className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition">
            Primary CTA
          </button>
        </div>

        <div className="flex-1 h-48 bg-white rounded-lg shadow-inner">
          {/* Put an image, form, or embed here */}
        </div>
      </div>

      <footer className="mt-12 text-center text-sm text-gray-500">
        © 2025 Company Name. All Rights Reserved.
        <div className="mt-2 space-x-4">
          <a href="#" className="hover:underline">LinkedIn</a>
          <a href="#" className="hover:underline">Instagram</a>
          <a href="#" className="hover:underline">Facebook</a>
          <a href="#" className="hover:underline">Twitter</a>
        </div>
      </footer>
    </section>
  );
};

export default CTASection;
