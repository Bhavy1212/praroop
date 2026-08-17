"use client";

import { motion } from "framer-motion";
import { Star, Quote, Sparkles, TrendingUp, ShieldCheck } from "lucide-react";
import { TESTIMONIALS } from "@/lib/data";

const AVATAR_GRADIENTS = [
  "from-[#0080CB] to-[#0C9DA8]",
  "from-[#D10B6A] to-[#0080CB]",
  "from-[#0C9DA8] to-[#10B981]",
  "from-[#0080CB] to-[#6366F1]",
];

const TESTIMONIAL_CARDS = [
  {
    ...TESTIMONIALS[0],
    score: "5.0",
    metric: "+240%",
    metricLabel: "Ticket Sales Growth",
    category: "Cinema & Theater",
    clientTag: "Entertainment Partner",
  },
  {
    ...TESTIMONIALS[1],
    score: "4.9",
    metric: "+180%",
    metricLabel: "Brand Recall Boost",
    category: "Outdoor Hoardings",
    clientTag: "Retail Network",
  },
  {
    ...TESTIMONIALS[2],
    score: "5.0",
    metric: "+350%",
    metricLabel: "Airport Footfall Reach",
    category: "Airport & LED Vans",
    clientTag: "Corporate Summit",
  },
  {
    ...TESTIMONIALS[3],
    score: "5.0",
    metric: "+400%",
    metricLabel: "Citywide Transit Reach",
    category: "Bus & Transit Ads",
    clientTag: "Consumer Brand",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#FAFAFC] border-t border-slate-200/80 text-slate-900 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto space-y-12 sm:space-y-16 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 select-none">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-xs font-bold uppercase tracking-wider text-[#0080CB] shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#0080CB]" />
            <span>Verified Client Stories</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight font-display">
            What Our <span className="text-[#0080CB]">Clients</span> <span className="text-[#D10B6A]">Say</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto font-normal leading-relaxed">
            Real results and verified testimonials from leading brands, healthcare networks, and corporate partners elevated by Praaroop Media in Udaipur.
          </p>
        </div>

        {/* ── Equal-Size Testimonial Cards Grid (4 Equal Columns) ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {TESTIMONIAL_CARDS.map((item, idx) => {
            const gradient = AVATAR_GRADIENTS[idx % AVATAR_GRADIENTS.length];

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="group relative h-full rounded-3xl p-6 sm:p-7 bg-white border border-slate-200/90 shadow-[0_10px_30px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_50px_rgba(0,128,203,0.12)] hover:border-[#0080CB]/50 transition-all duration-300 flex flex-col justify-between overflow-hidden hover:-translate-y-1.5"
              >
                {/* Top Row: Category Tag & 5-Star Rating */}
                <div className="space-y-3.5">
                  <div className="flex items-center justify-between gap-2 border-b border-slate-100 pb-3">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#0080CB] bg-slate-100 px-2.5 py-1 rounded-md">
                      {item.category}
                    </span>
                    <div className="flex items-center text-[#0C9DA8] gap-0.5">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-[#0C9DA8] text-[#0C9DA8]" />
                      ))}
                    </div>
                  </div>

                  {/* Quote Icon & Content */}
                  <div className="space-y-2">
                    <Quote className="w-6 h-6 text-[#0080CB]/25 group-hover:text-[#0080CB]/60 transition-colors" />
                    <p className="text-sm text-slate-700 font-normal leading-relaxed italic">
                      &ldquo;{item.content}&rdquo;
                    </p>
                  </div>
                </div>

                {/* Bottom Row: Impact Metric & Client Details */}
                <div className="space-y-3 pt-4 mt-4 border-t border-slate-100">
                  {/* Metric Box */}
                  <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-3 flex items-center justify-between">
                    <div>
                      <span className="text-[11px] text-slate-500 font-medium block">
                        {item.metricLabel}
                      </span>
                      <span className="text-xs font-bold text-slate-800 flex items-center gap-1">
                        <ShieldCheck className="w-3 h-3 text-[#0C9DA8]" />
                        {item.clientTag}
                      </span>
                    </div>
                    <span className="text-base font-black text-[#0080CB] font-mono flex items-center gap-0.5">
                      <TrendingUp className="w-3.5 h-3.5" />
                      {item.metric}
                    </span>
                  </div>

                  {/* Author Profile */}
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-10 h-10 rounded-full bg-gradient-to-tr ${gradient} flex items-center justify-center text-white font-black text-xs shadow-xs shrink-0`}
                    >
                      {item.avatar}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900 leading-snug">
                        {item.name}
                      </h4>
                      <p className="text-[11px] text-slate-500 font-medium">Verified Partner Client</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
