"use client";

import { motion } from "framer-motion";
import { STATS } from "@/lib/data";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import { Trophy, HeartHandshake, Coffee } from "lucide-react";

const STATS_ICONS = [Trophy, HeartHandshake, Coffee];
const STATS_COLORS = ["#0080CB", "#0C9DA8", "#D10B6A"];

export default function AboutStatsSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <div className="rounded-3xl bg-white/[0.05] border border-white/15 p-8 sm:p-12 shadow-2xl backdrop-blur-2xl relative overflow-hidden">
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
                className="flex flex-col items-center text-center space-y-3 p-4 rounded-2xl bg-white/[0.03] border border-white/10 hover:bg-white/[0.08] transition-all"
              >
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg"
                  style={{
                    backgroundColor: `${color}25`,
                    border: `1px solid ${color}50`,
                    color: color,
                  }}
                >
                  <Icon className="w-6 h-6" />
                </div>

                <div className="text-4xl sm:text-6xl font-black text-white tracking-tight">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>

                <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-300 font-mono">
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
