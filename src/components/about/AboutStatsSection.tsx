"use client";

import { motion } from "framer-motion";
import { STATS } from "@/lib/data";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import { Trophy, HeartHandshake, Coffee } from "lucide-react";

const STATS_ICONS = [Trophy, HeartHandshake, Coffee];
const STATS_COLORS = ["#0080CB", "#0C9DA8", "#D10B6A"];

export default function AboutStatsSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
      <div className="rounded-3xl bg-white border border-slate-200/90 p-8 sm:p-12 shadow-[0_15px_45px_rgba(0,0,0,0.06)] relative overflow-hidden">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-10 relative z-10">
          {STATS.map((stat, idx) => {
            const Icon = STATS_ICONS[idx % STATS_ICONS.length];
            const color = STATS_COLORS[idx % STATS_COLORS.length];

            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="flex flex-col items-center text-center space-y-3 p-4 rounded-2xl bg-slate-50 border border-slate-200/80 hover:shadow-md transition-all"
              >
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center shadow-xs"
                  style={{
                    backgroundColor: `${color}15`,
                    border: `1px solid ${color}35`,
                    color: color,
                  }}
                >
                  <Icon className="w-6 h-6" />
                </div>

                <div className="text-4xl sm:text-6xl font-black text-[#0F172A] tracking-tight font-display">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>

                <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-600 font-mono">
                  {stat.label}
                </p>

                <div
                  className="w-12 h-1 rounded-full"
                  style={{ backgroundColor: color }}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
