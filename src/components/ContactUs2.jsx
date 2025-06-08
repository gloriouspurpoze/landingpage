import { FaEnvelope, FaPaperPlane } from "react-icons/fa";

const ContactSection = () => {
  return (
    <section className="bg-[#0D1310] text-[#EEE7DC] py-16 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div className="bg-[#1a1f1c] rounded-xl p-6 shadow-lg border border-[#3EB489]/30">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-[#EEE7DC]">
            <span role="img" aria-label="envelope">📨</span> Contact Information
          </h2>
          <div className="flex items-center gap-2 text-[#3EB489] font-medium mb-2">
            {/* <FaEnvelope /> */}
            <span>techaora@gmail.com</span>
          </div>
          <p className="text-[#EEE7DC]/80 mt-4 leading-relaxed">
            Got a project in mind? Curious to know how Techora can help? Drop us a message and we’ll get back faster than your coffee brews ☕.
          </p>
        </div>

        {/* Form */}
        <form className="space-y-5">
          <div className="grid md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 bg-[#1a1f1c] border border-[#3EB489]/40 rounded-md text-[#EEE7DC] focus:outline-none focus:ring-2 focus:ring-[#3EB489]"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 bg-[#1a1f1c] border border-[#3EB489]/40 rounded-md text-[#EEE7DC] focus:outline-none focus:ring-2 focus:ring-[#3EB489]"
            />
          </div>
          <textarea
            rows="5"
            placeholder="Your Message"
            className="w-full p-3 bg-[#1a1f1c] border border-[#3EB489]/40 rounded-md text-[#EEE7DC] focus:outline-none focus:ring-2 focus:ring-[#3EB489]"
          />
          <button
            type="submit"
            className="bg-[#3EB489] hover:bg-[#2e9774] text-[#0D1310] font-semibold px-6 py-3 rounded-md flex items-center gap-2 transition-all duration-200"
          >
            <FaPaperPlane className="text-lg" /> 
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
