import { FaEnvelope, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-background text-primary px-6 py-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo / Company Info */}
        <div>
          <h3 className="text-2xl font-bold text-accent mb-2">Techora</h3>
          <p className="text-sm text-primary/70">
            Building scalable tech for startups, dreamers, and doers. Let’s innovate, iterate, and elevate — together.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-xl font-semibold text-accent mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm text-primary/80">
            <li><a href="#expertise" className="hover:text-accent">Our Expertise</a></li>
            <li><a href="#projects" className="hover:text-accent">Projects</a></li>
            <li><a href="#pricing" className="hover:text-accent">Pricing</a></li>
            <li><a href="#contact" className="hover:text-accent">Contact Us</a></li>
          </ul>
        </div>

        {/* Contact & Socials */}
        <div>
          <h4 className="text-xl font-semibold text-accent mb-3">Connect with Us</h4>
          <p className="flex items-center gap-2 mb-2 text-primary/80">
            <FaEnvelope className="text-accent" />
            <a href="mailto:techaora@gmail.com">techaora@gmail.com</a>
          </p>
          <div className="flex gap-4 text-accent mt-4">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="hover:scale-110 transition-transform duration-300" size={20} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="hover:scale-110 transition-transform duration-300" size={20} />
            </a>
            {/* Add more if needed */}
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="mt-10 border-t border-primary/20 pt-6 text-sm text-center text-primary/50">
        © {new Date().getFullYear()} Techora. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
