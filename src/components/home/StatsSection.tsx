"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Trophy, Users, Coffee } from "lucide-react";
import { STATS } from "@/lib/data";

const STAT_ICONS = [Trophy, Users, Coffee];
const STAT_COLORS = ["#0080CB", "#0C9DA8", "#D10B6A"];

function CountUpNumber({
  target,
  suffix,
  reducedMotion,
}: {
  target: number;
  suffix: string;
  reducedMotion: boolean;
}) {
  const [count, setCount] = useState(0);
  const containerRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.3 });
  const hasAnimatedRef = useRef(false);

  useEffect(() => {
    if (reducedMotion) {
      setCount(target);
      return;
    }

    if (isInView && !hasAnimatedRef.current) {
      hasAnimatedRef.current = true;
      let start = 0;
      const duration = 2000;
      const steps = 60;
      const increment = target / steps;
      const stepTime = duration / steps;

      const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
          setCount(target);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, stepTime);

      return () => clearInterval(timer);
    }

    const fallbackTimer = setTimeout(() => {
      if (!hasAnimatedRef.current) {
        setCount(target);
      }
    }, 1500);

    return () => clearTimeout(fallbackTimer);
  }, [isInView, target, reducedMotion]);

  return (
    <span ref={containerRef} className="font-display">
      {count > 0 ? count.toLocaleString() : target}
      {suffix}
    </span>
  );
}

export default function StatsSection() {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    setReducedMotion(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  return (
    <section id="stats" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#FAFAFC] overflow-hidden border-t border-b border-slate-200/80">
      {/* Subtle Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0080CB]/5 via-[#0C9DA8]/5 to-[#D10B6A]/5 opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {STATS.map((stat, idx) => {
            const IconComp = STAT_ICONS[idx % STAT_ICONS.length];
            const color = STAT_COLORS[idx % STAT_COLORS.length];

            return (
              <motion.div
                key={stat.label}
                initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="group relative rounded-3xl bg-white border border-slate-200/90 p-8 sm:p-10 text-center flex flex-col items-center justify-center space-y-4 hover:shadow-2xl transition-all duration-300 shadow-md"
              >
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center border border-slate-200 bg-slate-50 transition-transform duration-300 group-hover:scale-110"
                  style={{ boxShadow: `0 0 25px ${color}20` }}
                >
                  <IconComp className="w-8 h-8" style={{ color }} />
                </div>

                <div className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight">
                  <CountUpNumber target={stat.value} suffix={stat.suffix} reducedMotion={reducedMotion} />
                </div>

                <p className="text-sm sm:text-base font-bold text-slate-600 uppercase tracking-wider">
                  {stat.label}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
