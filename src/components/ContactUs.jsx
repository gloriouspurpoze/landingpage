const ContactUs = () => {
  return (
    <section className="py-16 px-6 bg-background text-[#EEE7DC]">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#3EB489] mb-6">
          Let’s Connect 🚀
        </h2>
        <p className="text-center text-[#EEE7DC]/80 mb-10 max-w-xl mx-auto">
          Got a project in mind? Curious to know how Techora can help? Drop us a message and we’ll get back faster than your coffee brews ☕.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="space-y-4 text-[#EEE7DC]/90">
            <div>
              <h4 className="text-xl font-semibold text-[#3EB489]">Email</h4>
              <p>hello@techora.dev</p>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-[#3EB489]">Phone</h4>
              <p>+91-9876543210</p>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-[#3EB489]">Location</h4>
              <p>Remote-first, India 🌍</p>
            </div>
          </div>

          {/* Contact Form */}
          <form className="bg-[#EEE7DC] rounded-xl p-6 space-y-4 text-[#0D1310] shadow-lg">
            <div>
              <label className="block text-sm font-medium mb-1">Name</label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#3EB489]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#3EB489]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Message</label>
              <textarea
                placeholder="Tell us a bit about your idea..."
                rows={4}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#3EB489]"
              />
            </div>
            <button
              type="submit"
              className="bg-[#3EB489] text-white px-6 py-2 rounded-md font-semibold hover:bg-[#35a17c] transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
