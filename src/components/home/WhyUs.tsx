"use client";

import { Compass, Lightbulb, Cpu, HeartHandshake, Sparkles, CheckCircle2 } from "lucide-react";
import { WHY_CHOOSE_US } from "@/lib/data";

const PILLARS_CONFIG = [
  {
    title:       WHY_CHOOSE_US.pillars[0].title,
    desc:        WHY_CHOOSE_US.pillars[0].description,
    Icon:        Compass,
    badge:       "TAILORED STRATEGY",
    year:        "PILLAR 01",
    bg:          "bg-[#991B1B] text-white border-red-700/60 shadow-[0_20px_50px_rgba(153,27,27,0.35)]",
    iconBg:      "bg-white/20 text-white",
    duration:    "8.2s",
    delay:       "0s",
    // Organic scattered desktop positioning (around center text)
    desktopPos:  "top-[12%] left-[4%] lg:left-[7%] max-w-[290px] lg:max-w-[310px]",
  },
  {
    title:       WHY_CHOOSE_US.pillars[1].title,
    desc:        WHY_CHOOSE_US.pillars[1].description,
    Icon:        Lightbulb,
    badge:       "CREATIVE BOUNDARIES",
    year:        "PILLAR 02",
    bg:          "bg-[#FACC15] text-black border-yellow-300 shadow-[0_20px_50px_rgba(250,204,21,0.3)]",
    iconBg:      "bg-black/10 text-black",
    duration:    "10.8s",
    delay:       "-3.6s",
    desktopPos:  "top-[15%] right-[4%] lg:right-[7%] max-w-[290px] lg:max-w-[310px]",
  },
  {
    title:       WHY_CHOOSE_US.pillars[2].title,
    desc:        WHY_CHOOSE_US.pillars[2].description,
    Icon:        Cpu,
    badge:       "FUTURE-READY TECH",
    year:        "PILLAR 03",
    bg:          "bg-[#0C9DA8] text-white border-teal-300/50 shadow-[0_20px_50px_rgba(12,157,168,0.35)]",
    iconBg:      "bg-white/20 text-white",
    duration:    "9.4s",
    delay:       "-6.2s",
    desktopPos:  "bottom-[12%] right-[5%] lg:right-[8%] max-w-[290px] lg:max-w-[320px]",
  },
  {
    title:       WHY_CHOOSE_US.pillars[3].title,
    desc:        WHY_CHOOSE_US.pillars[3].description,
    Icon:        HeartHandshake,
    badge:       "TRANSPARENT TRUST",
    year:        "PILLAR 04",
    bg:          "bg-[#E6DCBA] text-[#1E293B] border-[#CFC39B] shadow-[0_20px_50px_rgba(0,0,0,0.5)]",
    iconBg:      "bg-slate-900/10 text-amber-950",
    duration:    "11.6s",
    delay:       "-1.8s",
    desktopPos:  "bottom-[10%] left-[5%] lg:left-[8%] max-w-[290px] lg:max-w-[320px]",
  },
];

export default function WhyUs() {
  return (
    <section
      id="why-us"
      className="relative bg-[#000000] text-white min-h-screen py-24 md:py-36 overflow-hidden flex items-center justify-center border-t border-b border-white/5 select-none"
      style={{ perspective: "1200px" }}
    >
      {/* ── 6 Subtle Vertical Grid Lines (Signature Benchmark Aesthetic) ── */}
      <div className="absolute inset-0 pointer-events-none flex justify-between px-4 sm:px-12 md:px-24 opacity-15 z-0">
        <div className="w-[1px] h-full bg-white/20" />
        <div className="w-[1px] h-full bg-white/20" />
        <div className="w-[1px] h-full bg-white/20" />
        <div className="w-[1px] h-full bg-white/20" />
        <div className="w-[1px] h-full bg-white/20" />
        <div className="w-[1px] h-full bg-white/20" />
      </div>

      {/* ── Center Content: Heading + Description (Layered with z-10) ── */}
      <div className="relative z-10 text-center max-w-2xl lg:max-w-3xl px-6 pointer-events-none space-y-5">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-widest text-[#FACC15]">
          <Sparkles className="w-3.5 h-3.5 text-[#FACC15]" />
          <span>{WHY_CHOOSE_US.label}</span>
        </div>

        <h2 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.05] uppercase font-display text-white">
          Why Choose <br />
          <span className="text-[#FACC15] drop-shadow-[0_0_35px_rgba(250,204,21,0.35)]">
            Praaroop Media
          </span>{" "}
          in Udaipur?
        </h2>

        <p className="text-sm sm:text-base text-slate-300 font-normal leading-relaxed tracking-wide max-w-xl mx-auto">
          {WHY_CHOOSE_US.body}
        </p>

        <div className="pt-2 flex items-center justify-center gap-2 text-xs font-semibold text-[#0C9DA8]">
          <CheckCircle2 className="w-4 h-4 text-[#FACC15]" />
          <span className="tracking-wider uppercase text-slate-200">What Sets Us Apart</span>
        </div>
      </div>

      {/* ── Desktop: Organic Scattered Living Trust-Badge 3D Flip Wall ── */}
      <div
        className="hidden md:block absolute inset-0 pointer-events-none z-20"
        style={{ transformStyle: "preserve-3d" }}
      >
        {PILLARS_CONFIG.map((card) => {
          const IconComp = card.Icon;
          return (
            <div
              key={card.title}
              className={`absolute ${card.desktopPos} living-badge-3d p-6 rounded-2xl border ${card.bg} pointer-events-auto`}
              style={
                {
                  "--duration": card.duration,
                  "--delay":    card.delay,
                  transformStyle: "preserve-3d",
                  backfaceVisibility: "visible", // shows mirrored back on 3D rotation
                } as React.CSSProperties
              }
            >
              {/* Card Top Pill Tag */}
              <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-wider opacity-85 mb-3 border-b border-current/20 pb-1.5">
                <span className="font-semibold">{card.badge}</span>
                <span>{card.year}</span>
              </div>

              {/* Icon */}
              <div className="my-2.5 flex items-center">
                <div className={`w-11 h-11 rounded-xl ${card.iconBg} flex items-center justify-center shadow-sm`}>
                  <IconComp className="w-6 h-6" />
                </div>
              </div>

              {/* Title & Desc */}
              <div className="mt-2 space-y-1.5">
                <h3 className="text-lg font-bold font-display leading-snug">
                  {card.title}
                </h3>
                <p className="text-xs opacity-90 leading-relaxed font-normal">
                  {card.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* ── Mobile View: Fluid 2-column or stack with lightweight 3D rotation ── */}
      <div className="md:hidden w-full px-4 pt-10 grid grid-cols-1 sm:grid-cols-2 gap-4 relative z-20">
        {PILLARS_CONFIG.map((card) => {
          const IconComp = card.Icon;
          return (
            <div
              key={`mob-${card.title}`}
              className={`p-5 rounded-xl border ${card.bg} living-badge-3d flex flex-col justify-between`}
              style={
                {
                  "--duration": card.duration,
                  "--delay":    card.delay,
                  transformStyle: "preserve-3d",
                  backfaceVisibility: "visible",
                } as React.CSSProperties
              }
            >
              <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-wider opacity-80 mb-2">
                <span>{card.badge}</span>
                <span>{card.year}</span>
              </div>
              <div className={`w-9 h-9 rounded-lg ${card.iconBg} flex items-center justify-center my-2`}>
                <IconComp className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold font-display my-1">{card.title}</h3>
              <p className="text-xs opacity-90 leading-relaxed">{card.desc}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
