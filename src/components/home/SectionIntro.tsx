"use client";

import { motion } from "framer-motion";
import { SECTION_INTRO } from "@/lib/data";

export default function SectionIntro() {
  return (
    <section className="relative min-h-[85vh] flex flex-col items-center justify-center py-28 px-4 sm:px-6 lg:px-8 bg-[#FAFAFC] bg-noise overflow-hidden border-t border-b border-slate-200/80">
      <div className="max-w-5xl mx-auto text-center relative z-10 space-y-8 my-auto">
        {/* Eyebrow Tag */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-white border border-slate-200 shadow-sm text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#0C9DA8]"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-[#0C9DA8] animate-ping" />
          <span>{SECTION_INTRO.eyebrow}</span>
        </motion.div>

        {/* Full-Page Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl sm:text-6xl lg:text-7xl font-black text-slate-900 tracking-tight leading-tight font-display"
        >
          {SECTION_INTRO.h1}
        </motion.h2>

        {/* Body Copy */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-lg sm:text-2xl text-slate-600 leading-relaxed max-w-4xl mx-auto font-medium"
        >
          {SECTION_INTRO.body}
        </motion.p>
      </div>
    </section>
  );
}
