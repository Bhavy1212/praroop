"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function OversizedTypographyHero() {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    setReducedMotion(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  return (
    <section className="relative h-screen min-h-[650px] flex flex-col justify-center items-center py-20 px-4 sm:px-6 lg:px-8 bg-[#0A0A0A] bg-noise overflow-hidden border-t border-white/5">
      {/* Background Radial Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#0080CB]/15 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto text-center relative z-10 space-y-8 flex flex-col items-center justify-center h-full">
        
        {/* Giant Headline Block with Script Accent Overlaid */}
        <div className="relative inline-block text-center max-w-full px-2">
          
          {/* Script Accent Flourish (Core Digital Capabilities) */}
          <motion.span
            initial={reducedMotion ? { opacity: 1 } : { opacity: 0, scale: 0.8, rotate: -12 }}
            whileInView={{ opacity: 1, scale: 1, rotate: -6 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="absolute -top-6 sm:-top-10 md:-top-14 left-2 sm:left-6 md:left-12 z-20 font-script text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-[#0C9DA8] drop-shadow-[0_2px_12px_rgba(12,157,168,0.5)] whitespace-nowrap pointer-events-none select-none"
          >
            Core Digital Capabilities
          </motion.span>

          {/* Oversized Typography Headline */}
          <motion.h2
            initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-[clamp(2.5rem,10.5vw,10.5rem)] font-black uppercase tracking-tighter text-white leading-[0.88] drop-shadow-2xl font-display select-none"
          >
            Digital Marketing <br />
            <span className="text-gradient-tri">Solutions</span>
          </motion.h2>
        </div>

        {/* Subhead */}
        <motion.p
          initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-base sm:text-xl text-[#CBD5E1] max-w-[640px] font-normal leading-relaxed text-center px-4"
        >
          Strategic digital capabilities engineered to elevate your brand presence and deliver measurable growth across every channel.
        </motion.p>

      </div>
    </section>
  );
}
