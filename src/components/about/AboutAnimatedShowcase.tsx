"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, Sparkles, Award, TrendingUp, CheckCircle2 } from "lucide-react";
import { ABOUT_US_PAGE } from "@/lib/data";

export default function AboutAnimatedShowcase() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Column: Agency Story */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7 space-y-6"
        >
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-mono font-bold uppercase tracking-wider text-[#0C9DA8] shadow-sm backdrop-blur-xl">
            <Sparkles className="w-3.5 h-3.5 text-[#0C9DA8]" />
            <span>Transforming Ideas Into Impact</span>
          </div>

          {/* Lead Heading / Statement */}
          <h2 className="text-2xl sm:text-4xl font-black text-white leading-snug tracking-tight">
            We don&apos;t just tell stories —{" "}
            <span className="text-[#0080CB]">
              we create experiences that inspire & leave a lasting mark.
            </span>
          </h2>

          {/* Body Paragraphs with Frosted Glass Cards */}
          <div className="space-y-4 text-sm sm:text-base text-slate-300 font-normal leading-relaxed">
            <p className="p-5 rounded-2xl bg-white/[0.05] border border-white/15 hover:border-white/25 transition-all shadow-xl backdrop-blur-xl">
              {ABOUT_US_PAGE.body1}
            </p>
            <p className="p-5 rounded-2xl bg-white/[0.05] border border-white/15 hover:border-white/25 transition-all shadow-xl backdrop-blur-xl">
              {ABOUT_US_PAGE.body2}
            </p>
            <p className="p-5 rounded-2xl bg-[#0080CB]/15 border border-[#0080CB]/40 text-white font-medium shadow-xl backdrop-blur-xl">
              {ABOUT_US_PAGE.body3}
            </p>
          </div>

          {/* Micro Proof Points */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
            <div className="flex items-center gap-2 text-xs font-mono text-white/90">
              <CheckCircle2 className="w-4 h-4 text-[#0C9DA8] shrink-0" />
              <span>360° Media Reach</span>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono text-white/90">
              <CheckCircle2 className="w-4 h-4 text-[#0080CB] shrink-0" />
              <span>Data-Driven ROI</span>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono text-white/90">
              <CheckCircle2 className="w-4 h-4 text-[#D10B6A] shrink-0" />
              <span>Creator Ecosystem</span>
            </div>
          </div>
        </motion.div>

        {/* Right Column: 3D Studio Photo Showcase */}
        <motion.div
          initial={{ opacity: 0, x: 30, scale: 0.95 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 relative"
        >
          {/* Main Photo Frame */}
          <div className="relative h-[380px] sm:h-[460px] rounded-3xl overflow-hidden border border-white/20 shadow-2xl bg-slate-900 group">
            <Image
              src={ABOUT_US_PAGE.image}
              alt="Praaroop Media Team & Studio in Udaipur"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              sizes="(max-width: 1024px) 100vw, 40vw"
              priority
            />

            {/* Gradient Vignette for Badges */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#060B16]/85 via-transparent to-black/30 pointer-events-none" />

            {/* Floating Badge 1: Udaipur Creative HQ (Top Right) */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-4 right-4 z-20 flex items-center gap-2 px-3.5 py-2 rounded-2xl bg-black/75 backdrop-blur-xl border border-white/20 shadow-xl text-white"
            >
              <div className="w-6 h-6 rounded-full bg-[#0080CB]/30 border border-[#0080CB] flex items-center justify-center text-sky-400">
                <MapPin className="w-3.5 h-3.5" />
              </div>
              <div>
                <span className="text-[10px] font-bold block leading-tight">Udaipur HQ</span>
                <span className="text-[9px] font-mono text-white/70">City Centre, Rajasthan</span>
              </div>
            </motion.div>

            {/* Floating Badge 2: 200+ Campaigns (Bottom Left) */}
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute bottom-4 left-4 z-20 flex items-center gap-2.5 px-4 py-2.5 rounded-2xl bg-black/75 backdrop-blur-xl border border-white/20 shadow-xl text-white"
            >
              <div className="w-7 h-7 rounded-full bg-[#0C9DA8]/30 border border-[#0C9DA8] flex items-center justify-center text-[#0C9DA8]">
                <TrendingUp className="w-4 h-4" />
              </div>
              <div>
                <span className="text-xs font-black block leading-tight">200+ Campaigns</span>
                <span className="text-[9px] font-mono text-teal-300">100% Proven Delivery</span>
              </div>
            </motion.div>

            {/* Floating Badge 3: 5.0 Star Agency (Bottom Right) */}
            <motion.div
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-4 right-4 z-20 hidden sm:flex items-center gap-2 px-3 py-2 rounded-2xl bg-black/75 backdrop-blur-xl border border-white/20 shadow-xl text-white"
            >
              <Award className="w-4 h-4 text-amber-400" />
              <span className="text-[10px] font-bold">5.0 Rated</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
