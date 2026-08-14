"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, MessageSquare, Target, Megaphone, Globe, Vote, PenTool, Share2, Star, CheckCircle2, TrendingUp } from "lucide-react";
import { BRAND } from "@/lib/data";

const SERVICE_BADGES = [
  { label: "Brand Strategy", icon: Target, color: "#0080CB", desc: "Positioning & Growth" },
  { label: "Digital Marketing", icon: Megaphone, color: "#0C9DA8", desc: "Social & Performance" },
  { label: "Website Dev", icon: Globe, color: "#D10B6A", desc: "Modern Interactive UX" },
  { label: "Political Campaigns", icon: Vote, color: "#0080CB", desc: "Narrative & PR" },
  { label: "Content Creation", icon: PenTool, color: "#0C9DA8", desc: "Visuals & Copy" },
  { label: "Influencer Network", icon: Share2, color: "#D10B6A", desc: "Regional Creators" },
];

export default function Hero() {
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    setIsTouchDevice(window.matchMedia("(pointer: coarse)").matches);
    setReducedMotion(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  return (
    <section className="relative min-h-[96vh] flex flex-col justify-center pt-28 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#0A0A0A]">
      {/* 1. Full-Bleed Media Background (High-Res Agency / Newspaper Visual Depth) */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <Image
          src="/hero-newspaper.png"
          alt="Praaroop Media Outdoor Billboard & Print Advertising Agency"
          fill
          priority
          className="object-cover object-center filter brightness-50 contrast-125 scale-105"
        />
        
        {/* Dark Gradient Overlay (70% opacity at bottom to 30% at top for high legibility) */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/40 via-[#0A0A0A]/75 to-[#0A0A0A]" />
        
        {/* Subtle Radial Gradient Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#0080CB]/20 via-transparent to-transparent opacity-80" />
      </div>

      <div className="max-w-7xl mx-auto text-center relative z-10 space-y-10">
        {/* Eyebrow Tag */}
        <motion.div
          initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/10 border border-white/20 shadow-[0_0_25px_rgba(0,128,203,0.3)] backdrop-blur-md"
        >
          <Sparkles className="w-4 h-4 text-[#0C9DA8]" />
          <span className="text-xs sm:text-sm font-bold text-white tracking-wide uppercase">
            360° Marketing & Branding Agency • Udaipur, India
          </span>
        </motion.div>

        {/* Headline sitting on top of visual depth */}
        <motion.h1
          initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tight text-white leading-[1.05] max-w-6xl mx-auto drop-shadow-2xl"
        >
          <span className="block text-white mb-2">Shaping Relevance With</span>
          <span className="text-gradient-tri block">360° Marketing Innovation</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg sm:text-xl lg:text-2xl text-[#CBD5E1] max-w-3xl mx-auto font-normal leading-relaxed drop-shadow-md"
        >
          Delivering innovative branding strategies, outdoor hoardings, airport media, political narratives, and high-conversion digital campaigns.
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
            className={`relative inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[#0080CB] via-[#0C9DA8] to-[#D10B6A] text-white text-base font-extrabold px-9 py-4 rounded-full transition-all duration-300 shadow-[0_0_35px_rgba(0,128,203,0.6)] hover:shadow-[0_0_55px_rgba(12,157,168,0.8)] ${
              isTouchDevice ? "" : "hover:scale-105"
            }`}
          >
            <MessageSquare className="w-5 h-5 text-white" />
            <span>Get In Touch On WhatsApp</span>
            <ArrowRight className="w-5 h-5" />
          </a>

          <a
            href="#outdoor"
            className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white text-base font-bold px-8 py-4 rounded-full transition-all duration-300 backdrop-blur-md"
          >
            <span>Explore 360° Media Engine</span>
          </a>
        </motion.div>

        {/* Rating Trust Bar */}
        <motion.div
          initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="flex items-center justify-center gap-4 pt-2"
        >
          <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-white/90 bg-white/10 px-5 py-2.5 rounded-full border border-white/15 backdrop-blur-md shadow-lg">
            <div className="flex items-center text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="font-extrabold text-white">4.9 / 5.0 Rating</span>
            <span className="text-white/40">•</span>
            <span>200+ Campaigns</span>
            <span className="text-white/40">•</span>
            <span>100+ Clients</span>
          </div>
        </motion.div>

        {/* Interactive Appinventiv-Style Showcase Grid */}
        <motion.div
          initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="pt-8"
        >
          <div className="relative max-w-5xl mx-auto rounded-3xl bg-[#111111]/85 border border-white/15 p-8 sm:p-12 backdrop-blur-2xl shadow-[0_25px_60px_rgba(0,0,0,0.8)] border-gradient-glow">
            
            {/* Top Showcase Header */}
            <div className="flex items-center justify-between border-b border-white/10 pb-6 mb-8">
              <div className="flex items-center gap-3 text-left">
                <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-[#0080CB] to-[#0C9DA8] flex items-center justify-center text-white font-black text-sm shadow-[0_0_15px_rgba(0,128,203,0.5)]">
                  PM
                </div>
                <div>
                  <h4 className="text-base font-extrabold text-white">Praaroop Media 360° Showcase</h4>
                  <p className="text-xs font-medium text-[#CBD5E1]">Full Media Placement & Brand Execution</p>
                </div>
              </div>

              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#0C9DA8] bg-white/5 px-3.5 py-1.5 rounded-full border border-white/10">
                <TrendingUp className="w-3.5 h-3.5" />
                <span>High Performance Agency</span>
              </div>
            </div>

            {/* 6 Core Service Cards in Banner Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {SERVICE_BADGES.map((service) => {
                const IconComp = service.icon;
                return (
                  <motion.div
                    key={service.label}
                    whileHover={isTouchDevice || reducedMotion ? {} : { y: -5, scale: 1.03 }}
                    className="p-4 rounded-2xl bg-white/[0.04] border border-white/10 text-left flex flex-col justify-between transition-all duration-300 hover:border-white/30 hover:bg-white/[0.08] group"
                  >
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center mb-3 transition-transform group-hover:scale-110 border border-white/10"
                      style={{ backgroundColor: `${service.color}20`, color: service.color }}
                    >
                      <IconComp className="w-5 h-5" />
                    </div>

                    <div>
                      <h4 className="text-xs sm:text-sm font-extrabold text-white group-hover:text-[#0C9DA8] transition-colors leading-snug">
                        {service.label}
                      </h4>
                      <p className="text-[10px] font-medium text-[#CBD5E1] mt-1">
                        {service.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Banner Bottom Accent Line */}
            <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between text-xs text-[#CBD5E1] gap-4">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#0C9DA8]" />
                <span className="font-semibold">Outdoor Hoardings & Airport Placements</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#0080CB]" />
                <span className="font-semibold">Digital Marketing & Web Platforms</span>
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
