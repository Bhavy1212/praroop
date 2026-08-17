"use client";

import { motion } from "framer-motion";
import { Eye, Target, CheckCircle2, Compass, ArrowUpRight } from "lucide-react";
import { ABOUT_US_PAGE } from "@/lib/data";

export default function AboutVisionMission() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto space-y-2.5 mb-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-xs font-mono font-bold uppercase tracking-wider text-[#0080CB] shadow-xs">
          <Compass className="w-3.5 h-3.5 text-[#0080CB]" />
          <span>Core Direction & Guiding Star</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black text-[#0F172A] tracking-tight font-display">
          Our Vision & <span className="text-[#0080CB]">Mission</span>
        </h2>
        <p className="text-sm sm:text-base text-[#334155] font-normal">
          Defining new standards in media, strategy, and brand participation across India.
        </p>
      </div>

      {/* Dual Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-stretch">
        {/* Card 1: Our Vision (Solid Blue Accent) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="group relative h-full rounded-3xl p-8 sm:p-10 bg-white border border-slate-200/90 hover:border-[#0080CB]/60 transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_50px_rgba(0,128,203,0.12)] flex flex-col justify-between overflow-hidden"
        >
          {/* Top Solid Blue Accent Line */}
          <div className="absolute top-0 inset-x-0 h-1.5 bg-[#0080CB]" />

          <div className="space-y-5 relative z-10">
            {/* Header with Icon Pod */}
            <div className="flex items-center justify-between">
              <div className="w-14 h-14 rounded-2xl bg-[#0080CB]/10 border border-[#0080CB]/25 text-[#0080CB] flex items-center justify-center shadow-xs group-hover:scale-110 transition-all duration-300">
                <Eye className="w-7 h-7" />
              </div>
              <span className="text-xs font-mono font-bold text-slate-500 uppercase tracking-widest bg-slate-100 px-3 py-1 rounded-full border border-slate-200">
                Aspiration
              </span>
            </div>

            {/* Title */}
            <h3 className="text-2xl sm:text-3xl font-black text-[#0F172A] tracking-tight group-hover:text-[#0080CB] transition-colors font-display">
              {ABOUT_US_PAGE.visionH2}
            </h3>

            {/* Vision Body Statement */}
            <p className="text-sm sm:text-base text-[#334155] font-normal leading-relaxed">
              {ABOUT_US_PAGE.visionBody}
            </p>
          </div>

          {/* Bottom Highlight Feature Pill */}
          <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs font-bold text-slate-700">
              <CheckCircle2 className="w-4 h-4 text-[#0080CB]" />
              <span>Cultural & Commercial Dominance</span>
            </div>
            <div className="w-7 h-7 rounded-full bg-slate-100 group-hover:bg-[#0080CB] text-slate-600 group-hover:text-white flex items-center justify-center transition-colors">
              <ArrowUpRight className="w-4 h-4" />
            </div>
          </div>
        </motion.div>

        {/* Card 2: Our Mission (Solid Teal Accent) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="group relative h-full rounded-3xl p-8 sm:p-10 bg-white border border-slate-200/90 hover:border-[#0C9DA8]/60 transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_50px_rgba(12,157,168,0.12)] flex flex-col justify-between overflow-hidden"
        >
          {/* Top Solid Teal Accent Line */}
          <div className="absolute top-0 inset-x-0 h-1.5 bg-[#0C9DA8]" />

          <div className="space-y-5 relative z-10">
            {/* Header with Icon Pod */}
            <div className="flex items-center justify-between">
              <div className="w-14 h-14 rounded-2xl bg-[#0C9DA8]/10 border border-[#0C9DA8]/25 text-[#0C9DA8] flex items-center justify-center shadow-xs group-hover:scale-110 transition-all duration-300">
                <Target className="w-7 h-7" />
              </div>
              <span className="text-xs font-mono font-bold text-slate-500 uppercase tracking-widest bg-slate-100 px-3 py-1 rounded-full border border-slate-200">
                Execution
              </span>
            </div>

            {/* Title */}
            <h3 className="text-2xl sm:text-3xl font-black text-[#0F172A] tracking-tight group-hover:text-[#0C9DA8] transition-colors font-display">
              {ABOUT_US_PAGE.missionH2}
            </h3>

            {/* Mission Intro & Points */}
            <div className="space-y-2.5">
              <p className="text-sm sm:text-base text-[#334155] font-normal leading-relaxed">
                {ABOUT_US_PAGE.missionIntro}
              </p>
              <ul className="space-y-1.5 pt-1">
                {ABOUT_US_PAGE.missionPoints.slice(0, 3).map((pt, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-[#334155]">
                    <CheckCircle2 className="w-4 h-4 text-[#0C9DA8] shrink-0 mt-0.5" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Highlight Feature Pill */}
          <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs font-bold text-slate-700">
              <CheckCircle2 className="w-4 h-4 text-[#0C9DA8]" />
              <span>Full-Funnel Measurement & ROI</span>
            </div>
            <div className="w-7 h-7 rounded-full bg-slate-100 group-hover:bg-[#0C9DA8] text-slate-600 group-hover:text-white flex items-center justify-center transition-colors">
              <ArrowUpRight className="w-4 h-4" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
