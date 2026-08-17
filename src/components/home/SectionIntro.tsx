"use client";

import { motion } from "framer-motion";
import { MapPin, Zap, ShieldCheck, ArrowRight } from "lucide-react";
import { BRAND, SECTION_INTRO } from "@/lib/data";

export default function SectionIntro() {
  return (
    <section
      id="about"
      className="relative min-h-[85vh] flex flex-col items-center justify-center py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#FAFAFC] bg-noise overflow-hidden border-t border-b border-slate-200/80 text-[#0F172A]"
    >
      {/* Background Accent Glow */}
      <div className="absolute top-1/4 right-10 w-96 h-96 rounded-full bg-[#0080CB]/5 blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto text-center relative z-10 space-y-7 my-auto">
        {/* Eyebrow Tag */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-white border border-slate-200 shadow-sm text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#0C9DA8]"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-[#0C9DA8] animate-ping" />
          <span>{SECTION_INTRO.eyebrow}</span>
        </motion.div>

        {/* Full-Page Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.1] font-display"
        >
          {SECTION_INTRO.h1}
        </motion.h2>

        {/* Body Copy */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-sm sm:text-lg lg:text-xl text-slate-600 leading-relaxed max-w-4xl mx-auto font-medium"
        >
          {SECTION_INTRO.body}
        </motion.p>

        {/* 3 Core Value Highlight Cards */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 max-w-4xl mx-auto text-left"
        >
          <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md transition-all duration-300 group">
            <div className="w-10 h-10 rounded-xl bg-[#0080CB]/10 text-[#0080CB] flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
              <MapPin className="w-5 h-5" />
            </div>
            <h4 className="text-base font-bold text-slate-900">Outdoor Dominance</h4>
            <p className="text-xs sm:text-sm text-slate-500 mt-1 leading-snug">
              Billboards, transit media & high-visibility hoardings across Rajasthan & India.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md transition-all duration-300 group">
            <div className="w-10 h-10 rounded-xl bg-[#0C9DA8]/10 text-[#0C9DA8] flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
              <Zap className="w-5 h-5" />
            </div>
            <h4 className="text-base font-bold text-slate-900">Digital & Performance</h4>
            <p className="text-xs sm:text-sm text-slate-500 mt-1 leading-snug">
              Targeted Meta & Google ads, viral content marketing, SEO and web development.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md transition-all duration-300 group">
            <div className="w-10 h-10 rounded-xl bg-[#D10B6A]/10 text-[#D10B6A] flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h4 className="text-base font-bold text-slate-900">Turnkey Activations</h4>
            <p className="text-xs sm:text-sm text-slate-500 mt-1 leading-snug">
              Malls, colleges, corporate hubs & experiential brand engagement roadshows.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
