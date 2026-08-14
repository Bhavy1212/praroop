"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, MessageSquare, Target, Megaphone, Globe, Vote, PenTool, Share2, Star, CheckCircle2, TrendingUp } from "lucide-react";
import { BRAND } from "@/lib/data";

const SERVICE_BADGES = [
  { label: "Brand Strategy", icon: Target, color: "#0080CB", desc: "Positioning & Growth" },
  { label: "Digital Marketing", icon: Megaphone, color: "#0C9DA8", desc: "Social & Performance" },
  { label: "Website Dev", icon: Globe, color: "#D10B6A", desc: "Modern Interactive UX" },
  { label: "Political Campaigns", icon: Vote, color: "#0080CB", desc: "Narrative & PR" },
  { label: "Content Creation", icon: PenTool, color: "#0C9DA8", desc: "Visuals & Copy" },
  { label: "Influencer Marketing", icon: Share2, color: "#D10B6A", desc: "Regional Creators" },
];

export default function Hero() {
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    setIsTouchDevice(window.matchMedia("(pointer: coarse)").matches);
    setReducedMotion(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  return (
    <section className="relative min-h-[95vh] flex flex-col justify-center pt-28 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-white">
      {/* Subtle Background Radial Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#0080CB]/10 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto text-center relative z-10 space-y-10">
        {/* Eyebrow Tag */}
        <motion.div
          initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-slate-100/80 border border-slate-200 shadow-sm backdrop-blur-md"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-[#0C9DA8] animate-pulse" />
          <span className="text-xs sm:text-sm font-bold text-[#0B1220] tracking-wide uppercase">
            360° Marketing & Branding Agency • Udaipur, India
          </span>
        </motion.div>

        {/* Banner Headline (Appinventiv Style) */}
        <motion.h1
          initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tight text-[#0B1220] leading-[1.05] max-w-6xl mx-auto"
        >
          <span className="block text-[#0B1220] mb-2">Shaping Relevance With</span>
          <span className="text-gradient-tri block">360° Marketing Innovation</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg sm:text-xl lg:text-2xl text-slate-600 max-w-3xl mx-auto font-normal leading-relaxed"
        >
          Delivering innovative branding strategies, outdoor media, political narratives, and high-conversion digital campaigns across Rajasthan & India.
        </motion.p>

        {/* CTA Actions */}
        <motion.div
          initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2"
        >
          <a
            href={BRAND.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className={`relative inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[#0080CB] via-[#0C9DA8] to-[#D10B6A] text-white text-base font-extrabold px-9 py-4 rounded-full transition-all duration-300 shadow-[0_10px_30px_rgba(0,128,203,0.35)] hover:shadow-[0_15px_40px_rgba(12,157,168,0.5)] ${
              isTouchDevice ? "" : "hover:scale-105"
            }`}
          >
            <MessageSquare className="w-5 h-5 text-white" />
            <span>Get In Touch On WhatsApp</span>
            <ArrowRight className="w-5 h-5" />
          </a>

          <a
            href="#services"
            className="inline-flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 border border-slate-200 text-[#0B1220] text-base font-bold px-8 py-4 rounded-full transition-all duration-300"
          >
            <span>Explore 360° Services</span>
          </a>
        </motion.div>

        {/* Rating Trust Bar */}
        <motion.div
          initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="flex items-center justify-center gap-4 pt-2"
        >
          <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-700 bg-slate-50 px-4 py-2 rounded-full border border-slate-200 shadow-xs">
            <div className="flex items-center text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
              ))}
            </div>
            <span className="font-extrabold text-[#0B1220]">4.9 / 5.0 Rating</span>
            <span className="text-slate-400">•</span>
            <span>200+ Successful Campaigns</span>
            <span className="text-slate-400">•</span>
            <span>100+ Satisfied Clients</span>
          </div>
        </motion.div>

        {/* Interactive Appinventiv Banner Showcase Grid */}
        <motion.div
          initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="pt-10"
        >
          {/* Main Showcase Showcase Box */}
          <div className="relative max-w-5xl mx-auto rounded-3xl bg-gradient-to-br from-slate-50 via-white to-slate-100 border border-slate-200 p-8 sm:p-12 shadow-[0_20px_60px_rgba(0,128,203,0.12)]">
            
            {/* Top Badge */}
            <div className="flex items-center justify-between border-b border-slate-200 pb-6 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-[#0080CB] to-[#0C9DA8] flex items-center justify-center text-white font-black text-sm shadow-md">
                  PM
                </div>
                <div className="text-left">
                  <h4 className="text-base font-extrabold text-[#0B1220]">Praaroop Media Showcase</h4>
                  <p className="text-xs font-medium text-slate-500">Full 360° Campaign Execution</p>
                </div>
              </div>

              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#0080CB] bg-[#0080CB]/10 px-3.5 py-1.5 rounded-full border border-[#0080CB]/20">
                <TrendingUp className="w-3.5 h-3.5" />
                <span>High Performance Agency</span>
              </div>
            </div>

            {/* 6 Core Service Cards in Banner Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {SERVICE_BADGES.map((service, index) => {
                const IconComp = service.icon;
                return (
                  <motion.div
                    key={service.label}
                    whileHover={isTouchDevice || reducedMotion ? {} : { y: -5, scale: 1.03 }}
                    className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-sm text-left flex flex-col justify-between transition-all duration-300 hover:border-slate-300 hover:shadow-md group"
                  >
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center mb-3 transition-transform group-hover:scale-110"
                      style={{ backgroundColor: `${service.color}15`, color: service.color }}
                    >
                      <IconComp className="w-5 h-5" />
                    </div>

                    <div>
                      <h4 className="text-xs sm:text-sm font-extrabold text-[#0B1220] group-hover:text-[#0080CB] transition-colors leading-snug">
                        {service.label}
                      </h4>
                      <p className="text-[10px] font-medium text-slate-500 mt-1">
                        {service.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Banner Bottom Accent Line */}
            <div className="mt-8 pt-6 border-t border-slate-200 flex flex-wrap items-center justify-between text-xs text-slate-600 gap-4">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#0C9DA8]" />
                <span className="font-semibold">Outdoor Hoardings & Airport Placements</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#0080CB]" />
                <span className="font-semibold">Digital Marketing & Web Development</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#D10B6A]" />
                <span className="font-semibold">Political & Event Activations</span>
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
