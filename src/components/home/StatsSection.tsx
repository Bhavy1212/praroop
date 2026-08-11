"use client";

import AnimatedCounter from "@/components/ui/AnimatedCounter";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { STATS } from "@/lib/data";

export default function StatsSection() {
  return (
    <section className="py-16 sm:py-20 bg-brand text-white relative overflow-hidden">
      <div className="absolute -left-12 -top-12 w-64 h-64 rounded-full bg-white/5 blur-2xl" />
      <div className="absolute -right-12 -bottom-12 w-64 h-64 rounded-full bg-white/5 blur-2xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 text-center divider-y md:divider-y-0 md:divider-x divider-white/10">
          {STATS.map((stat, i) => (
            <ScrollReveal
              key={stat.label}
              delay={i * 0.15}
              className="py-4 space-y-2"
            >
              <div className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white flex items-center justify-center">
                <AnimatedCounter
                  value={stat.value}
                  suffix={stat.suffix}
                  duration={2.5}
                />
              </div>
              <p className="text-white/85 text-base sm:text-lg font-medium tracking-wide uppercase">
                {stat.label}
              </p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
