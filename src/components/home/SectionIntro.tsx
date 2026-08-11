"use client";

import ScrollReveal from "@/components/ui/ScrollReveal";
import { SECTION_INTRO } from "@/lib/data";

export default function SectionIntro() {
  return (
    <section className="py-16 sm:py-20 bg-brand text-white relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 relative z-10">
        
        <ScrollReveal className="space-y-4">
          <span className="inline-block px-3.5 py-1 rounded-full bg-white/10 text-brand-light text-xs font-bold uppercase tracking-wider">
            {SECTION_INTRO.eyebrow}
          </span>
          <p className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-white/95 leading-tight">
            {SECTION_INTRO.heading}
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.15} className="space-y-4 pt-4 border-t border-white/10 max-w-4xl mx-auto">
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            {SECTION_INTRO.h1}
          </h1>
          <p className="text-white/80 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto">
            {SECTION_INTRO.body}
          </p>
        </ScrollReveal>

      </div>
    </section>
  );
}
