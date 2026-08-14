"use client";

import { motion } from "framer-motion";
import { SECTION_INTRO } from "@/lib/data";

export default function SectionIntro() {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden border-t border-b border-slate-100">
      {/* Background Subtle Gradient Glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0080CB]/5 via-[#0C9DA8]/5 to-[#D10B6A]/5 opacity-60 pointer-events-none" />

      <div className="max-w-5xl mx-auto text-center relative z-10 space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-xs font-bold uppercase tracking-widest text-[#0C9DA8]"
        >
          {SECTION_INTRO.eyebrow}
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#0B1220] tracking-tight leading-tight"
        >
          {SECTION_INTRO.h1}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-4xl mx-auto font-normal"
        >
          {SECTION_INTRO.body}
        </motion.p>
      </div>
    </section>
  );
}
