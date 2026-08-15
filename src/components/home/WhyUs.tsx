"use client";

import { Compass, Lightbulb, Cpu, HeartHandshake, CheckCircle2, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { WHY_CHOOSE_US } from "@/lib/data";
import ScrollCardCarousel, { CarouselCard } from "@/components/ui/ScrollCardCarousel";

const PILLAR_ICONS  = [Compass, Lightbulb, Cpu, HeartHandshake];
const PILLAR_COLORS = ["#0080CB", "#0C9DA8", "#D10B6A", "#0080CB"];

export default function WhyUs() {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    setReducedMotion(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  // Map existing pillar data → CarouselCard shape
  const cards: CarouselCard[] = WHY_CHOOSE_US.pillars.map((pillar, idx) => {
    const IconComp   = PILLAR_ICONS[idx % PILLAR_ICONS.length];
    const color      = PILLAR_COLORS[idx % PILLAR_COLORS.length];

    return {
      id:          `pillar-${idx}`,
      icon:        <IconComp className="w-7 h-7" />,
      title:       pillar.title,
      description: pillar.description,
      accentColor: color,
      footer: (
        <div className="flex items-center gap-2 text-xs font-semibold text-[#0080CB]">
          <CheckCircle2 className="w-4 h-4 text-[#0C9DA8]" />
          <span>Proven Performance Strategy</span>
        </div>
      ),
    };
  });

  return (
    <section
      id="why-us"
      className="relative bg-[#FAFAFC] border-t border-slate-200/80 overflow-hidden"
    >
      {/* Section Intro — stays above the pinned carousel */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-8 text-center space-y-4 relative z-10">
        <motion.div
          initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55 }}
          className="space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm text-xs font-bold uppercase tracking-wider text-[#0080CB]">
            <Sparkles className="w-3.5 h-3.5 text-[#0080CB]" />
            <span>{WHY_CHOOSE_US.label}</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Why Choose{" "}
            <span className="text-gradient-tri">Praaroop Media</span>?
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal max-w-3xl mx-auto">
            {WHY_CHOOSE_US.body}
          </p>
        </motion.div>
      </div>

      {/* 3D Flip Card Carousel (desktop) / stagger-fade stack (mobile) */}
      <div className="px-4 sm:px-6 lg:px-8 pb-24 md:pb-0">
        <ScrollCardCarousel cards={cards} theme="light" />
      </div>
    </section>
  );
}
