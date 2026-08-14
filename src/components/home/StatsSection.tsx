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
    // If reduced motion is requested, display final number immediately
    if (reducedMotion) {
      setCount(target);
      return;
    }

    if (isInView && !hasAnimatedRef.current) {
      hasAnimatedRef.current = true;
      let start = 0;
      const duration = 2000; // 2 seconds
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

    // Safety fallback: if not in view after 1.5s, set target number so it's never stuck at 0
    const fallbackTimer = setTimeout(() => {
      if (!hasAnimatedRef.current) {
        setCount(target);
      }
    }, 1500);

    return () => clearTimeout(fallbackTimer);
  }, [isInView, target, reducedMotion]);

  return (
    <span ref={containerRef} className="font-black">
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
    <section id="stats" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#0A0A0A] overflow-hidden border-t border-b border-white/10">
      {/* Subtle Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0080CB]/10 via-[#0C9DA8]/10 to-[#D10B6A]/10 opacity-40 pointer-events-none" />

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
                className="group relative rounded-3xl bg-[#111111] border border-white/10 p-8 sm:p-10 text-center flex flex-col items-center justify-center space-y-4 hover:border-white/30 hover:bg-[#141414] hover:shadow-[0_15px_35px_-10px_rgba(0,128,203,0.25)] transition-all duration-300"
              >
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center border border-white/10 bg-white/5 transition-transform duration-300 group-hover:scale-110"
                  style={{ boxShadow: `0 0 25px ${color}30` }}
                >
                  <IconComp className="w-8 h-8" style={{ color }} />
                </div>

                <div className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight">
                  <CountUpNumber target={stat.value} suffix={stat.suffix} reducedMotion={reducedMotion} />
                </div>

                <p className="text-sm sm:text-base font-bold text-[#CBD5E1] uppercase tracking-wider">
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
