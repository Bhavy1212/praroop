"use client";

import { motion } from "framer-motion";
import { Compass, Sparkles, Cpu, Users, ArrowUpRight, Zap } from "lucide-react";
import { WHY_US_PILLARS } from "@/lib/data";

const PILLAR_ICONS = [Compass, Sparkles, Cpu, Users];
const PILLAR_ACCENTS = ["#0080CB", "#D10B6A", "#0C9DA8", "#0080CB"];

export default function AboutPillarsGrid() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 sm:mb-10">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-xs font-mono font-bold uppercase tracking-wider text-[#0C9DA8] shadow-xs">
            <Zap className="w-3.5 h-3.5 text-[#0C9DA8]" />
            <span>Our Strategic DNA</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-[#0F172A] tracking-tight font-display">
            What Sets Us <span className="text-[#0080CB]">Apart</span>
          </h2>
        </div>
        <p className="text-sm text-[#334155] font-normal max-w-md">
          A client-focused philosophy ensuring precision execution, creative disruption, and measurable business growth.
        </p>
      </div>

      {/* 4-Pillars Matrix Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
        {WHY_US_PILLARS.map((pillar, idx) => {
          const Icon = PILLAR_ICONS[idx % PILLAR_ICONS.length];
          const accent = PILLAR_ACCENTS[idx % PILLAR_ACCENTS.length];
          const numStr = `0${idx + 1}`;

          return (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group relative h-full rounded-3xl p-6 sm:p-7 bg-white border border-slate-200/90 hover:border-[#0080CB]/50 transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_50px_rgba(0,128,203,0.12)] flex flex-col justify-between overflow-hidden hover:-translate-y-1.5"
            >
              {/* Background Big Number Watermark */}
              <div className="absolute -bottom-4 -right-2 text-7xl font-mono font-black text-slate-100 group-hover:text-slate-200 transition-colors pointer-events-none select-none">
                {numStr}
              </div>

              <div className="space-y-4 relative z-10">
                {/* Icon & Number Row */}
                <div className="flex items-center justify-between">
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300 shadow-xs group-hover:scale-110"
                    style={{
                      backgroundColor: `${accent}15`,
                      border: `1px solid ${accent}35`,
                      color: accent,
                    }}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-mono font-bold text-slate-400">
                    {numStr} / 04
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-[#0F172A] tracking-tight leading-snug font-display">
                  {pillar.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-[#334155] font-normal leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 mt-6 relative z-10 flex items-center justify-between">
                <span className="text-[11px] font-bold" style={{ color: accent }}>
                  Core Pillar
                </span>
                <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-[#0080CB] transition-colors" />
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
