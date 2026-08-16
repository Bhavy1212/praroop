"use client";

import { motion } from "framer-motion";
import { Eye, Target, CheckCircle2, Compass, ArrowUpRight } from "lucide-react";
import { ABOUT_US_PAGE } from "@/lib/data";

export default function AboutVisionMission() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-mono font-bold uppercase tracking-wider text-[#38BDF8] backdrop-blur-xl">
          <Compass className="w-3.5 h-3.5 text-[#0080CB]" />
          <span>Core Direction & Guiding Star</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
          Our Vision & <span className="text-[#0080CB]">Mission</span>
        </h2>
        <p className="text-sm sm:text-base text-slate-300 font-normal">
          Defining new standards in media, strategy, and brand participation across India.
        </p>
      </div>

      {/* Dual Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
        
        {/* Card 1: Our Vision (Solid Blue Accent) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="group relative rounded-3xl p-8 sm:p-10 bg-white/[0.05] border border-white/15 hover:border-[#0080CB]/60 transition-all duration-300 shadow-2xl backdrop-blur-2xl flex flex-col justify-between overflow-hidden"
        >
          {/* Top Solid Blue Accent Line */}
          <div className="absolute top-0 inset-x-0 h-1.5 bg-[#0080CB]" />

          <div className="space-y-6 relative z-10">
            {/* Header with Glowing Icon Pod */}
            <div className="flex items-center justify-between">
              <div className="w-14 h-14 rounded-2xl bg-[#0080CB]/20 border border-[#0080CB]/40 text-[#38BDF8] flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-300">
                <Eye className="w-7 h-7" />
              </div>
              <span className="text-xs font-mono font-bold text-white/50 uppercase tracking-widest bg-white/5 px-3 py-1 rounded-full border border-white/10">
                Aspiration
              </span>
            </div>

            {/* Title */}
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight group-hover:text-[#38BDF8] transition-colors">
              {ABOUT_US_PAGE.visionH2}
            </h3>

            {/* Vision Body Statement */}
            <p className="text-sm sm:text-base text-slate-300 font-normal leading-relaxed">
              {ABOUT_US_PAGE.visionBody}
            </p>
          </div>

          {/* Bottom Highlight Feature Pill */}
          <div className="pt-8 border-t border-white/10 mt-6 relative z-10 flex items-center justify-between">
            <span className="text-xs font-mono font-semibold text-[#38BDF8]">
              Redefining Brand Connections
            </span>
            <div className="w-8 h-8 rounded-full bg-white/10 group-hover:bg-[#0080CB] text-white flex items-center justify-center transition-colors shadow-xs">
              <ArrowUpRight className="w-4 h-4" />
            </div>
          </div>
        </motion.div>

        {/* Card 2: Our Mission (Solid Pink/Teal Accent) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="group relative rounded-3xl p-8 sm:p-10 bg-white/[0.05] border border-white/15 hover:border-[#D10B6A]/60 transition-all duration-300 shadow-2xl backdrop-blur-2xl flex flex-col justify-between overflow-hidden"
        >
          {/* Top Solid Pink Accent Line */}
          <div className="absolute top-0 inset-x-0 h-1.5 bg-[#D10B6A]" />

          <div className="space-y-6 relative z-10">
            {/* Header with Glowing Icon Pod */}
            <div className="flex items-center justify-between">
              <div className="w-14 h-14 rounded-2xl bg-[#0C9DA8]/20 border border-[#0C9DA8]/40 text-[#0C9DA8] flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-300">
                <Target className="w-7 h-7" />
              </div>
              <span className="text-xs font-mono font-bold text-white/50 uppercase tracking-widest bg-white/5 px-3 py-1 rounded-full border border-white/10">
                Execution
              </span>
            </div>

            {/* Title */}
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight group-hover:text-[#D10B6A] transition-colors">
              {ABOUT_US_PAGE.missionH2}
            </h3>

            {/* Mission Intro */}
            <p className="text-xs sm:text-sm font-semibold text-white/90">
              {ABOUT_US_PAGE.missionIntro}
            </p>

            {/* Interactive Mission Checklist */}
            <ul className="space-y-2.5 pt-1">
              {ABOUT_US_PAGE.missionPoints.map((point, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 p-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/5 transition-all"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#0C9DA8] shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-slate-300 font-normal leading-snug">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Bottom Highlight Feature Pill */}
          <div className="pt-6 border-t border-white/10 mt-6 relative z-10 flex items-center justify-between">
            <span className="text-xs font-mono font-semibold text-[#D10B6A]">
              Impact Beyond Expectations
            </span>
            <div className="w-8 h-8 rounded-full bg-white/10 group-hover:bg-[#D10B6A] text-white flex items-center justify-center transition-colors shadow-xs">
              <ArrowUpRight className="w-4 h-4" />
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
