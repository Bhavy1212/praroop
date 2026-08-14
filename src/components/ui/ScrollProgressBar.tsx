"use client";

import { motion, useScroll } from "framer-motion";

export default function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0080CB] via-[#0C9DA8] to-[#D10B6A] z-50 origin-left shadow-[0_0_10px_#0080CB]"
      style={{ scaleX: scrollYProgress }}
      aria-hidden="true"
    />
  );
}
