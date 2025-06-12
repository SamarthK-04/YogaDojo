import React from "react";

const Footer: React.FC = () => (
  <footer id="contact" className="py-10 bg-charcoal-800 text-beige-100">
    <div className="container mx-auto px-4 text-center grid gap-4">
      <p>[Studio Address] • [City]</p>
      <p>
        <a href="tel:+123456789" className="hover:text-rose-300">
          +1 (234) 567‑89
        </a>{" "}
        •{" "}
        <a href="mailto:info@studio.com" className="hover:text-rose-300">
          info@studio.com
        </a>
      </p>
      <p className="text-sm">© {new Date().getFullYear()} [Studio Name]</p>
    </div>
  </footer>
);

export default Footer;
