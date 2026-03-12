import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useLocation } from "react-router-dom";
import { siteSettings } from "../../content/site";

const StickyActionBar = () => {
  const { scrollY } = useScroll();
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation();
  const { defaultCtas } = siteSettings;

  // Show bar after scrolling down 400px
  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 400) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  });

  // Determine which CTA to show based on the current route
  let activeCta = defaultCtas.primary; // Register is the default
  let message = "Ready to step into the magic?";

  if (location.pathname.includes("/donate")) {
    activeCta = defaultCtas.secondary;
    message = "Give a child a world in color.";
  } else if (location.pathname.includes("/staff")) {
    activeCta = defaultCtas.tertiary;
    message = "Join the chosen family.";
  }

  return (
    <motion.div
      initial={{ y: 150 }}
      animate={{ y: isVisible ? 0 : 150 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md shadow-[0_-10px_40px_rgba(0,0,0,0.1)] border-t-4 border-[var(--color-camp-orange)] px-4 py-4 md:py-5 flex justify-center items-center"
    >
      <div className="max-w-7xl w-full flex flex-col sm:flex-row justify-between items-center gap-4 px-2 sm:px-6">
        <p className="font-serif font-bold text-lg text-[var(--color-camp-text)] hidden sm:block">
          {message}
        </p>
        <a
          href={activeCta.href}
          rel="noreferrer"
          target="_blank"
          className="inline-flex items-center justify-center px-8 py-3 font-bold rounded-full transition-all hover:-translate-y-0.5 bg-[var(--color-camp-orange)] text-white hover:bg-[#f08b3e] shadow-lg hover:shadow-xl hover:shadow-[var(--color-camp-orange)]/20 w-full sm:w-auto text-lg"
        >
          {activeCta.label}
        </a>
      </div>
    </motion.div>
  );
};

export default StickyActionBar;
