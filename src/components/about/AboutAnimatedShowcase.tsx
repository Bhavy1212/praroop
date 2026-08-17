"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, Sparkles, Award, TrendingUp, CheckCircle2 } from "lucide-react";
import { ABOUT_US_PAGE } from "@/lib/data";

export default function AboutAnimatedShowcase() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        {/* Left Column: Agency Story */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7 space-y-6"
        >
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-xs font-mono font-bold uppercase tracking-wider text-[#0C9DA8] shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#0C9DA8]" />
            <span>Transforming Ideas Into Impact</span>
          </div>

          {/* Lead Heading / Statement */}
          <h2 className="text-2xl sm:text-4xl font-black text-[#0F172A] leading-snug tracking-tight font-display">
            We don&apos;t just tell stories —{" "}
            <span className="text-[#0080CB]">
              we create experiences that inspire & leave a lasting mark.
            </span>
          </h2>

          {/* Body Paragraphs with Clean White Cards */}
          <div className="space-y-3.5 text-sm sm:text-base text-[#334155] font-normal leading-relaxed">
            <p className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs">
              {ABOUT_US_PAGE.body1}
            </p>
            <p className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs">
              {ABOUT_US_PAGE.body2}
            </p>
            <p className="p-5 rounded-2xl bg-teal-50/70 border border-teal-200 text-[#0F172A] font-medium shadow-2xs">
              {ABOUT_US_PAGE.body3}
            </p>
          </div>

          {/* Micro Proof Points */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
            <div className="flex items-center gap-2 text-xs font-mono text-[#0F172A] font-bold">
              <CheckCircle2 className="w-4 h-4 text-[#0C9DA8] shrink-0" />
              <span>360° Media Reach</span>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#0F172A] font-bold">
              <CheckCircle2 className="w-4 h-4 text-[#0080CB] shrink-0" />
              <span>Data-Driven ROI</span>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#0F172A] font-bold">
              <CheckCircle2 className="w-4 h-4 text-[#D10B6A] shrink-0" />
              <span>Creator Ecosystem</span>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Visual Studio Card */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 relative"
        >
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-slate-200/80 bg-white group">
            {/* Real Agency Image */}
            <div className="relative h-[380px] sm:h-[440px] w-full">
              <Image
                src="/IMG_1116.jpg"
                alt="Praaroop Media Agency Headquarters & Studio"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
            </div>

            {/* Bottom Floating Badge inside image */}
            <div className="absolute bottom-5 inset-x-5 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-white/80 shadow-lg flex items-center justify-between text-[#0F172A]">
              <div className="space-y-0.5">
                <div className="flex items-center gap-1.5 text-xs font-bold text-[#0080CB]">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Udaipur Headquarters</span>
                </div>
                <div className="text-xs text-slate-600 font-medium">
                  360° Creative Studio & Media Hub
                </div>
              </div>
              <div className="w-9 h-9 rounded-xl bg-[#0080CB]/10 text-[#0080CB] flex items-center justify-center font-bold text-xs">
                HQ
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
