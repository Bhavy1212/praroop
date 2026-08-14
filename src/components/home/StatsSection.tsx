"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Trophy, Users, Coffee } from "lucide-react";
import { STATS } from "@/lib/data";

const STAT_ICONS = [Trophy, Users, Coffee];
const STAT_COLORS = ["#0080CB", "#0C9DA8", "#D10B6A"];

function CountUpNumber({ target, suffix, reducedMotion }: { target: number; suffix: string; reducedMotion: boolean }) {
  const [count, setCount] = useState(reducedMotion ? target : 0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (reducedMotion) {
      setCount(target);
      return;
    }

    if (!isInView) return;

    let start = 0;
    const duration = 2000; // 2s
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
  }, [isInView, target, reducedMotion]);

  return (
    <span ref={ref} className="font-black">
      {count.toLocaleString()}
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
    <section id="stats" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-slate-50/50 overflow-hidden border-t border-b border-slate-100">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {STATS.map((stat, idx) => {
            const IconComp = STAT_ICONS[idx % STAT_ICONS.length];
            const color = STAT_COLORS[idx % STAT_COLORS.length];

            return (
              <motion.div
                key={stat.label}
                initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative rounded-3xl bg-white border border-slate-200/80 p-8 text-center flex flex-col items-center justify-center space-y-4 shadow-sm hover:shadow-md hover:border-slate-300 transition-all duration-300"
              >
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center border border-slate-100 transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundColor: `${color}12` }}
                >
                  <IconComp className="w-8 h-8" style={{ color }} />
                </div>

                <div className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#0B1220] tracking-tight">
                  <CountUpNumber target={stat.value} suffix={stat.suffix} reducedMotion={reducedMotion} />
                </div>

                <p className="text-base font-bold text-slate-600 uppercase tracking-wider">
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
