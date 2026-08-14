"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { TESTIMONIALS } from "@/lib/data";

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    setReducedMotion(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="testimonials" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10 space-y-16">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-xs font-bold uppercase tracking-wider text-[#D10B6A] shadow-xs">
            Client Endorsements & Reviews
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0B1220] tracking-tight">
            What Our <span className="text-gradient-tri">Clients Say</span>
          </h2>

          {/* 4.9/5 Rating Badge */}
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-slate-50 border border-slate-200 mt-2 shadow-xs">
            <div className="flex items-center text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
              ))}
            </div>
            <span className="text-sm font-extrabold text-[#0B1220]">4.9 / 5.0 Rating</span>
            <span className="text-xs text-slate-500 border-l border-slate-200 pl-3">Over 100+ Brands</span>
          </div>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Active Card */}
          <motion.div
            key={TESTIMONIALS[activeIndex].id}
            initial={reducedMotion ? { opacity: 1 } : { opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={reducedMotion ? { opacity: 1 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.4 }}
            className="relative rounded-3xl bg-white border border-slate-200 p-8 sm:p-12 shadow-[0_15px_40px_rgba(0,128,203,0.08)]"
          >
            <Quote className="w-12 h-12 text-[#0080CB]/20 mb-6" />

            <p className="text-lg sm:text-xl text-slate-700 font-normal leading-relaxed mb-8 italic">
              "{TESTIMONIALS[activeIndex].content}"
            </p>

            <div className="flex items-center justify-between border-t border-slate-100 pt-6">
              <div className="flex items-center gap-4">
                {/* Initials Badge Avatar */}
                <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#0080CB] to-[#0C9DA8] flex items-center justify-center text-white font-extrabold text-base shadow-md">
                  {TESTIMONIALS[activeIndex].avatar}
                </div>
                <div>
                  <h4 className="text-base font-bold text-[#0B1220]">
                    {TESTIMONIALS[activeIndex].name}
                  </h4>
                  <p className="text-xs text-slate-500 font-medium">Verified Partner Client</p>
                </div>
              </div>

              {/* Star Rating */}
              <div className="flex items-center text-amber-500 gap-1">
                {[...Array(TESTIMONIALS[activeIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between mt-8 px-2">
            <div className="flex items-center gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    activeIndex === i ? "w-8 bg-[#0080CB]" : "w-2 bg-slate-300 hover:bg-slate-400"
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={handlePrev}
                className="p-3 rounded-full bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-800 transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                className="p-3 rounded-full bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-800 transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
