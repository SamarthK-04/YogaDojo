import React, { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { motion, useAnimation } from "framer-motion";

const sections = [
  { to: "about", label: "About" },
  { to: "classes", label: "Classes" },
  { to: "instructors", label: "Instructors" },
  { to: "testimonials", label: "Testimonials" },
  { to: "contact", label: "Contact" }
];

const NavBar: React.FC = () => {
  const controls = useAnimation();
  const [prevScrollY, setPrevScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const current = window.scrollY;
      controls.start({ y: current > prevScrollY ? -80 : 0 });
      setPrevScrollY(current);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [controls, prevScrollY]);

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm bg-white/60 shadow-md"
      initial={{ y: -80 }}
      animate={controls}
      transition={{ duration: 0.3 }}
    >
      <ul className="flex justify-center gap-6 py-4 font-heading font-semibold">
        {sections.map((s) => (
          <li key={s.to}>
            <ScrollLink
              to={s.to}
              smooth
              duration={500}
              offset={-70}
              className="cursor-pointer hover:text-rose-300"
            >
              {s.label}
            </ScrollLink>
          </li>
        ))}
      </ul>
    </motion.nav>
  );
};

export default NavBar;
