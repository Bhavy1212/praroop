"use client";

import { motion } from "framer-motion";
import { Compass, Sparkles, Cpu, Users, ArrowUpRight, Zap } from "lucide-react";
import { WHY_US_PILLARS } from "@/lib/data";

const PILLAR_ICONS = [Compass, Sparkles, Cpu, Users];
const PILLAR_ACCENTS = ["#0080CB", "#D10B6A", "#0C9DA8", "#0080CB"];

export default function AboutPillarsGrid() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-mono font-bold uppercase tracking-wider text-[#0C9DA8] backdrop-blur-xl">
            <Zap className="w-3.5 h-3.5 text-[#0C9DA8]" />
            <span>Our Strategic DNA</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            What Sets Us <span className="text-[#0080CB]">Apart</span>
          </h2>
        </div>
        <p className="text-sm text-slate-300 font-normal max-w-md">
          A client-focused philosophy ensuring precision execution, creative disruption, and measurable business growth.
        </p>
      </div>

      {/* 4-Pillars Matrix Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
              className="group relative rounded-3xl p-6 sm:p-7 bg-white/[0.05] hover:bg-white/[0.10] border border-white/15 hover:border-white/30 transition-all duration-300 shadow-xl backdrop-blur-2xl flex flex-col justify-between overflow-hidden hover:-translate-y-1.5"
            >
              {/* Background Big Number Watermark */}
              <div className="absolute -bottom-4 -right-2 text-7xl font-mono font-black text-white/[0.04] group-hover:text-white/[0.08] transition-colors pointer-events-none select-none">
                {numStr}
              </div>

              <div className="space-y-4 relative z-10">
                {/* Icon & Number Row */}
                <div className="flex items-center justify-between">
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300 shadow-md group-hover:scale-110"
                    style={{
                      backgroundColor: `${accent}25`,
                      border: `1px solid ${accent}60`,
                      color: accent,
                    }}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-mono font-bold text-white/40">
                    {numStr}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-black text-white tracking-tight group-hover:text-[#38BDF8] transition-colors leading-snug">
                  {pillar.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-300 font-normal leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              {/* Bottom Feature Accent */}
              <div className="pt-6 border-t border-white/10 mt-6 relative z-10 flex items-center justify-between">
                <span className="text-[11px] font-mono text-white/50 group-hover:text-white transition-colors">
                  Praaroop Standard
                </span>
                <div className="w-6 h-6 rounded-full bg-white/10 group-hover:bg-white/20 text-white flex items-center justify-center transition-colors">
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
