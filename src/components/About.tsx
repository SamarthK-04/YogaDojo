import React from "react";
//import studioImg from "../assets/studio.jpg";
import { motion } from "framer-motion";

const About: React.FC = () => (
  <section id="about" className="py-20 container mx-auto px-4">
    <div className="grid md:grid-cols-2 gap-10 items-center">
      <motion.img
        src="https://images.unsplash.com/photo-1579016749257-3f5205b5e5ae?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGNvenklMjB5b2dhJTIwc3R1ZGlvfGVufDB8fDB8fHww"
        alt="Studio interior"
        className="rounded-2xl shadow-lg"
        loading="lazy"
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      />
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="font-heading text-4xl mb-4">Our Mission</h2>
        <p className="text-lg leading-relaxed">
          We believe yoga is for every body. Our mission is to create a
          welcoming space where you can explore movement, mindfulness, and inner
          peace — guided by experienced instructors who care about your unique
          journey.
        </p>
      </motion.div>
    </div>
  </section>
);

export default About;
