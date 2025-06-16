import React from "react";
// Importing more professional, outlined icons
import { HiOutlineEnvelope, HiOutlinePhone } from "react-icons/hi2";
import { AiOutlineInstagram } from "react-icons/ai";
import { BiLink } from "react-icons/bi"; // Adding a link icon from the screenshot

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-charcoal-800 text-beige-100 py-8">
      <div className="container mx-auto px-4 flex flex-col items-center gap-6">
        {/* Social and Contact Icons with Hover Effect */}
        <div className="flex justify-center items-center gap-4 group">
          <a
            href="tel:+1234567890" // Opens the phone app
            aria-label="Call Us"
            className="rounded-full bg-beige-100 text-charcoal-800 h-10 w-10 flex items-center justify-center transition-all duration-300 group-hover:bg-gray-300 hover:!bg-accent hover:!text-beige-100"
          >
            <HiOutlinePhone className="text-xl" />
          </a>
          <a
            href="mailto:info@yogadojo.com" // Opens the email app
            aria-label="Email Us"
            className="rounded-full bg-beige-100 text-charcoal-800 h-10 w-10 flex items-center justify-center transition-all duration-300 group-hover:bg-gray-300 hover:!bg-accent hover:!text-beige-100"
          >
            <HiOutlineEnvelope className="text-xl" />
          </a>
          <a
            href="#" // Placeholder for another link
            aria-label="Other Link"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-beige-100 text-charcoal-800 h-10 w-10 flex items-center justify-center transition-all duration-300 group-hover:bg-gray-300 hover:!bg-accent hover:!text-beige-100"
          >
            <BiLink className="text-xl" />
          </a>
          <a
            href="YOUR_INSTAGRAM_LINK_HERE" // Opens Instagram
            aria-label="Instagram"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-beige-100 text-charcoal-800 h-10 w-10 flex items-center justify-center transition-all duration-300 group-hover:bg-gray-300 hover:!bg-accent hover:!text-beige-100"
          >
            <AiOutlineInstagram className="text-xl" />
          </a>
        </div>

        {/* Contact Link */}
        <div>
          <a
            href="mailto:info@yogadojo.com"
            className="uppercase tracking-widest text-sm hover:text-accent transition-colors duration-300"
          >
            Contact Us
          </a>
        </div>

        {/* Copyright */}
        <div className="text-center text-xs text-gray-400">
          <p>© {new Date().getFullYear()} YogaDojo Studio. All Rights Reserved.</p>
          <p>123 Serenity Lane, Wellness City</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;