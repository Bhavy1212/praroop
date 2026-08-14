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
    <section id="activations" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#FAFAFC] overflow-hidden border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm text-xs font-bold uppercase tracking-wider text-[#D10B6A]">
            <Sparkles className="w-3.5 h-3.5 text-[#D10B6A]" />
            <span>On-Ground B2C & B2B Engagements</span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-black text-slate-900 tracking-tight">
            Brand <span className="text-gradient-tri">Activations</span> & Events
          </h2>
          <p className="text-base sm:text-xl text-slate-600">
            Immersive physical brand experiences that create memorable connections and drive immediate customer action.
          </p>
        </motion.div>

        {/* 4 Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {ACTIVATIONS_DATA.map((item, index) => {
            const IconComp = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative rounded-3xl bg-white border border-slate-200/90 p-8 flex flex-col justify-between shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
                <div className="relative z-10 space-y-4">
                  <div className="flex items-center justify-between">
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center border border-slate-200 bg-slate-50 group-hover:scale-110 transition-transform duration-300"
                      style={{ boxShadow: `0 0 25px ${item.color}20` }}
                    >
                      <IconComp className="w-7 h-7" style={{ color: item.color }} />
                    </div>
                    <span className="text-xs font-mono font-bold text-slate-400">
                      0{index + 1} / 04
                    </span>
                  </div>

                  <div>
                    <h3 className="text-2xl font-black text-slate-900 group-hover:text-[#0080CB] transition-colors duration-200 font-display">
                      {item.title}
                    </h3>
                    <p className="text-xs font-bold uppercase tracking-wider text-[#0C9DA8] pt-1">
                      {item.subtitle}
                    </p>
                  </div>

                  <p className="text-sm text-slate-600 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>

                <div className="relative z-10 pt-6 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#0080CB]">
                  <span>Explore Activation Strategy</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
