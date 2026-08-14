"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Compass, Lightbulb, Cpu, HeartHandshake, CheckCircle2 } from "lucide-react";
import { WHY_CHOOSE_US } from "@/lib/data";

const PILLAR_ICONS = [Compass, Lightbulb, Cpu, HeartHandshake];
const PILLAR_COLORS = ["#0080CB", "#0C9DA8", "#D10B6A", "#0080CB"];

export default function WhyUs() {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    setReducedMotion(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  return (
    <section id="why-us" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-slate-50/50 overflow-hidden border-t border-slate-100">
      <div className="max-w-7xl mx-auto relative z-10 space-y-16">
        {/* Section Intro */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-xs font-bold uppercase tracking-wider text-[#0080CB] shadow-xs">
            {WHY_CHOOSE_US.label}
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0B1220] tracking-tight">
            Why Choose <span className="text-gradient-tri">Praaroop Media</span>?
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            {WHY_CHOOSE_US.body}
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_CHOOSE_US.pillars.map((pillar, idx) => {
            const IconComp = PILLAR_ICONS[idx % PILLAR_ICONS.length];
            const color = PILLAR_COLORS[idx % PILLAR_COLORS.length];

            return (
              <motion.div
                key={pillar.title}
                initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative rounded-3xl bg-white border border-slate-200/80 p-8 flex flex-col justify-between transition-all duration-300 hover:border-slate-300 hover:shadow-[0_15px_30px_-10px_rgba(0,128,203,0.12)] hover:-translate-y-1"
              >
                <div>
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center border border-slate-100 mb-6 transition-transform duration-300 group-hover:scale-110"
                    style={{ backgroundColor: `${color}12` }}
                  >
                    <IconComp className="w-7 h-7" style={{ color }} />
                  </div>

                  <h3 className="text-xl font-bold text-[#0B1220] mb-3 leading-snug group-hover:text-[#0080CB] transition-colors">
                    {pillar.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* About Us Featured Card */}
        <motion.div
          initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl bg-white border border-slate-200/80 p-8 sm:p-12 overflow-hidden shadow-md"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0C9DA8] bg-slate-100 border border-slate-200 px-3.5 py-1.5 rounded-full">
                <CheckCircle2 className="w-4 h-4 text-[#0C9DA8]" />
                <span>{WHY_CHOOSE_US.aboutCard.label}</span>
              </span>

              <h3 className="text-2xl sm:text-4xl font-extrabold text-[#0B1220] leading-tight">
                Transforming Ideas into <span className="text-gradient-tri">Impactful Stories</span>
              </h3>

              <p className="text-base text-slate-600 leading-relaxed">
                {WHY_CHOOSE_US.aboutCard.body}
              </p>
            </div>

            <div className="lg:col-span-5 relative h-64 sm:h-80 rounded-2xl overflow-hidden border border-slate-200">
              <Image
                src={WHY_CHOOSE_US.aboutCard.image}
                alt="Praaroop Media Agency Team Udaipur"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
