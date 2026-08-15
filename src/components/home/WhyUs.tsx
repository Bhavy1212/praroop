"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Compass, Lightbulb, Cpu, HeartHandshake, CheckCircle2, Sparkles } from "lucide-react";
import { WHY_CHOOSE_US } from "@/lib/data";

const PILLAR_ICONS = [Compass, Lightbulb, Cpu, HeartHandshake];
const PILLAR_COLORS = ["#0080CB", "#0C9DA8", "#D10B6A", "#0080CB"];

export default function WhyUs() {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    setReducedMotion(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  return (
    <section id="why-us" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#FAFAFC] overflow-hidden border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto relative z-10 space-y-16">
        {/* Section Intro */}
        <motion.div
          initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm text-xs font-bold uppercase tracking-wider text-[#0080CB]">
            <Sparkles className="w-3.5 h-3.5 text-[#0080CB]" />
            <span>{WHY_CHOOSE_US.label}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Why Choose <span className="text-gradient-tri">Praaroop Media</span>?
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            {WHY_CHOOSE_US.body}
          </p>
        </motion.div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_CHOOSE_US.pillars.map((pillar, idx) => {
            const IconComp = PILLAR_ICONS[idx % PILLAR_ICONS.length];
            const color = PILLAR_COLORS[idx % PILLAR_COLORS.length];

            return (
              <motion.div
                key={pillar.title}
                initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative rounded-3xl bg-white border border-slate-200/90 p-8 flex flex-col justify-between shadow-md hover:shadow-2xl transition-all duration-300"
              >
                <div>
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center border border-slate-200 bg-slate-50 mb-6 transition-transform duration-300 group-hover:scale-110"
                    style={{ boxShadow: `0 0 20px ${color}25` }}
                  >
                    <IconComp className="w-7 h-7" style={{ color }} />
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#0080CB] transition-colors duration-200 font-display">
                    {pillar.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed font-normal">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-6 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-[#0080CB]">
                  <CheckCircle2 className="w-4 h-4 text-[#0C9DA8]" />
                  <span>Proven Performance Strategy</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
