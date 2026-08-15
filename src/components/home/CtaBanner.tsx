"use client";

import { motion } from "framer-motion";
import { MessageSquare, ArrowRight, HelpCircle, Sparkles } from "lucide-react";
import { BRAND, CTA_BANNER } from "@/lib/data";

export default function CtaBanner() {
  return (
    <section id="growth" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-slate-950 overflow-hidden">
      <div className="max-w-7xl mx-auto relative">
        {/* Glowing Container with Animated Video Backdrop */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl p-8 sm:p-14 overflow-hidden border border-white/15 text-white shadow-[0_20px_60px_rgba(0,128,203,0.35)]"
        >
          {/* Background Animated Looping Video */}
          <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
            <video
              src="/services/videos/political-campaign.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover filter brightness-[0.45] contrast-125 saturate-150 scale-105"
            />
            {/* Vibrant Tri-Color Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#070D18]/90 via-[#0080CB]/60 to-[#D10B6A]/70 mix-blend-multiply" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#070D18] via-transparent to-[#070D18]/40" />
          </div>

          {/* Inner Decorative Glow Orbs */}
          <div className="absolute -top-24 -left-24 w-80 h-80 rounded-full bg-[#0C9DA8]/30 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-80 h-80 rounded-full bg-[#D10B6A]/30 blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
            <div className="space-y-4 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 border border-white/25 text-xs font-bold text-white uppercase tracking-wider backdrop-blur-md">
                <HelpCircle className="w-4 h-4 text-[#38BDF8]" />
                <span>Expert Media Planning</span>
                <span className="text-white/40">•</span>
                <Sparkles className="w-3.5 h-3.5 text-[#0C9DA8]" />
                <span className="text-[#0C9DA8]">Live Strategy</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
                {CTA_BANNER.title}{" "}
                <span className="text-[#D10B6A] underline decoration-[#D10B6A]/60 decoration-4 underline-offset-8">
                  {CTA_BANNER.subhead}
                </span>
              </h2>

              <p className="text-base sm:text-lg text-white/90 font-medium leading-relaxed">
                {CTA_BANNER.body}
              </p>
            </div>

            {/* Action CTA */}
            <div className="shrink-0">
              <a
                href={BRAND.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-white text-[#0B1220] hover:bg-[#0C9DA8] hover:text-white text-base font-black px-9 py-4.5 rounded-full transition-all duration-300 shadow-[0_10px_35px_rgba(0,0,0,0.3)] hover:scale-105"
              >
                <MessageSquare className="w-5 h-5 text-[#0080CB]" />
                <span>{CTA_BANNER.buttonText}</span>
                <ArrowRight className="w-5 h-5 text-[#0080CB]" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

