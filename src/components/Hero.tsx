import React from "react";
import { motion } from "framer-motion";
import video from "./Assets/hero.mp4";

const Hero: React.FC = () => (
  <section
    id="hero"
    className="relative h-screen flex items-center justify-center text-center"
  >
    <video
      src= { video }
      className="absolute inset-0 w-full h-full object-cover"
      autoPlay
      loop
      muted
      playsInline
    />
    <span className="absolute inset-0 bg-sage-400/30 mix-blend-multiply"></span>
    <motion.div
      className="relative max-w-3xl px-4"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h1 className="font-heading text-beige-100 text-5xl md:text-7xl drop-shadow-lg">
        Find Your Flow at <br />
        <span className="text-accent">YogaDojo</span>
      </h1>
      <p className="mt-6 text-beige-100 text-lg">
        A sanctuary for mind, body & soul
      </p>
      <a
        href="#booking"
        className="inline-block mt-10 px-8 py-3 bg-accent text-charcoal-800 rounded-full font-semibold hover:opacity-90 transition"
      >
        Book Your First Class
      </a>
    </motion.div>
  </section>
);

export default Hero;
