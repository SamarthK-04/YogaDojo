import React, { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { motion, useAnimation } from "framer-motion";
import { Menu, X } from "lucide-react";
import logo from "./assets/download.png";

const sections = [
  { to: "about",        label: "About" },
  { to: "classes",      label: "Classes" },
  { to: "testimonials", label: "Testimonials" },
  { to: "contact",      label: "Contact" },
];

const NavBar: React.FC = () => {
  const controls = useAnimation();
  const [prevY, setPrevY] = useState(0);
  const [open,  setOpen] = useState(false);

  /* slide nav away / reveal on scroll */
  useEffect(() => {
    const onScroll = () => {
      const cur = window.scrollY;
      controls.start({ y: cur > prevY ? -80 : 0 });
      setPrevY(cur);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [controls, prevY]);

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 bg-grey/80 backdrop-blur-sm shadow-md"
      initial={{ y: -80 }}
      animate={controls}
      transition={{ duration: 0.3 }}
    >
      {/* ────────────────── Flex row ────────────────── */}
      <div className="mx-auto max-w-7xl px-4 flex items-center justify-between py-1">
        {/* Logo always LEFT */}
        <ScrollLink
          to="hero"
          smooth
          duration={500}
          offset={-70}
          className="flex items-center gap-2 cursor-pointer select-none"
        >
          <img src={logo} alt="Yoga logo"
            className="h-14 w-14 md:h-16 md:w-16 select-none" />
        </ScrollLink>

        {/* Links (desktop) & hamburger (mobile) on RIGHT */}
        <div className="flex items-center gap-4">
          {/* desktop links */}
          <ul className="hidden md:flex gap-8 font-heading font-semibold">
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

          {/* mobile hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-rose-300"
            aria-label="Toggle menu"
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* mobile dropdown */}
      {open && (
        <motion.ul
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
          className="md:hidden absolute top-full right-4 mt-2 w-36 bg-white/70 backdrop-blur-md rounded-xl shadow-lg py-4 px-6 flex flex-col font-heading font-semibold divide-y divide-gray-800 text-center"
        >
          {sections.map((s) => (
            <li key={s.to}
            className="py-2 flex items-center justify-center first:pt-0 last:pb-0">
              <ScrollLink
                to={s.to}
                smooth
                duration={500}
                offset={-70}
                onClick={() => setOpen(false)}
                className="block cursor-pointer hover:text-rose-300"
              >
                {s.label}
              </ScrollLink>
            </li>
          ))}
        </motion.ul>
      )}
    </motion.nav>
  );
};

export default NavBar;
