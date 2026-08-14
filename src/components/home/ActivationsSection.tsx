"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ShoppingBag, Store, Building, GraduationCap, ArrowUpRight, Sparkles } from "lucide-react";
import { ACTIVATIONS_ITEMS } from "@/lib/data";

const ACTIVATIONS_DATA = [
  {
    title: ACTIVATIONS_ITEMS[0],
    subtitle: "Mall Activations & Kiosk Displays",
    desc: "Interactive brand pop-ups, footfall engagement kiosks, and experiential zones inside Udaipur's premier shopping centers.",
    icon: ShoppingBag,
    color: "#0080CB",
  },
  {
    title: ACTIVATIONS_ITEMS[1],
    subtitle: "Point of Sale & In-Store Experience",
    desc: "Strategic POS visual merchandising, window graphics, and retail promotional setups that convert shoppers at final purchase.",
    icon: Store,
    color: "#0C9DA8",
  },
  {
    title: ACTIVATIONS_ITEMS[2],
    subtitle: "Executive Summits & B2B Events",
    desc: "End-to-end corporate event design, stage setups, VIP lounge branding, and executive networking activations.",
    icon: Building,
    color: "#D10B6A",
  },
  {
    title: ACTIVATIONS_ITEMS[3],
    subtitle: "Youth & Campus Engagements",
    desc: "Targeted youth outreach campaigns, campus ambassador activations, and fest sponsorships across major educational institutions.",
    icon: GraduationCap,
    color: "#0080CB",
  },
];

export default function ActivationsSection() {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    setReducedMotion(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  return (
    <section id="activations" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#0A0A0A] overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-wider text-[#D10B6A]">
            <Sparkles className="w-3.5 h-3.5 text-[#D10B6A]" />
            <span>On-Ground B2C & B2B Engagements</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Brand <span className="text-gradient-tri">Activations</span>
          </h2>
          <p className="text-base sm:text-lg text-[#CBD5E1] font-normal">
            Immersive physical experiences designed to bridge offline touchpoints with digital brand affinity.
          </p>
        </motion.div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {ACTIVATIONS_DATA.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: idx * 0.12 }}
                className="group relative rounded-3xl bg-[#111111] border border-white/10 p-8 sm:p-10 flex flex-col justify-between transition-all duration-300 hover:border-white/30 hover:bg-[#141414] hover:shadow-[0_15px_35px_-10px_rgba(209,11,106,0.25)] border-gradient-glow"
              >
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <div
                      className="w-16 h-16 rounded-2xl flex items-center justify-center border border-white/10 bg-white/5 transition-transform duration-300 group-hover:scale-110"
                      style={{ boxShadow: `0 0 25px ${item.color}25` }}
                    >
                      <IconComp className="w-8 h-8" style={{ color: item.color }} />
                    </div>
                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/50 group-hover:text-white group-hover:bg-white/10 transition-colors">
                      <ArrowUpRight className="w-5 h-5" />
                    </div>
                  </div>

                  <span className="text-xs font-bold uppercase tracking-wider text-[#0C9DA8] block mb-1">
                    {item.title}
                  </span>

                  <h3 className="text-2xl font-bold text-white mb-4 leading-tight">
                    {item.subtitle}
                  </h3>

                  <p className="text-sm sm:text-base text-[#CBD5E1] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
