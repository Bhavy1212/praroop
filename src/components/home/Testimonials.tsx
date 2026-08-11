"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote, ExternalLink, ChevronLeft, ChevronRight, CheckCircle } from "lucide-react";
import Image from "next/image";
import { TESTIMONIALS } from "@/lib/data";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const nextTestimonial = () => {
    const nextIdx = (activeIndex + 1) % TESTIMONIALS.length;
    setActiveIndex(nextIdx);
    scrollToCard(nextIdx);
  };

  const prevTestimonial = () => {
    const prevIdx = (activeIndex - 1 + TESTIMONIALS.length) % TESTIMONIALS.length;
    setActiveIndex(prevIdx);
    scrollToCard(prevIdx);
  };

  const scrollToCard = (index: number) => {
    if (containerRef.current) {
      const cardWidth = containerRef.current.clientWidth;
      containerRef.current.scrollTo({
        left: index * cardWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="testimonials" className="py-20 bg-surface-light border-b border-surface-mid overflow-hidden relative">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-brand/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-brand/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <ScrollReveal className="space-y-3 max-w-2xl">
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white text-brand text-xs font-bold shadow-sm border border-surface-mid">
                <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                <span>Rated 4.9 of 5</span>
              </span>
              <span className="inline-flex items-center gap-1 text-xs text-ink-muted font-medium">
                <CheckCircle className="w-3.5 h-3.5 text-green-500" /> Verified Reviews
              </span>
            </div>

            {/* Verbatim Section Heading */}
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-ink tracking-tight">
              Here's what our clients say.
            </h2>
          </ScrollReveal>

          {/* Verbatim "View all reviews" link -> Google Maps Listing */}
          <ScrollReveal direction="left" className="shrink-0">
            <a
              href="https://g.co/kgs/fpcAL9V"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white hover:bg-brand hover:text-white border border-surface-mid text-ink font-semibold text-sm shadow-sm transition-all duration-300 group"
            >
              <span>View all reviews</span>
              <ExternalLink className="w-4 h-4 text-brand group-hover:text-white transition-colors" />
            </a>
          </ScrollReveal>
        </div>

        {/* Horizontal Drag/Swipe Snap Carousel — One Testimonial Per Snap Point */}
        <ScrollReveal className="relative">
          <div className="bg-white rounded-3xl border border-surface-mid p-8 sm:p-12 shadow-xl relative overflow-hidden">
            
            <Quote className="absolute -top-4 -right-4 w-40 h-40 text-brand/5 pointer-events-none" />

            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 30, scale: 0.98 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -30, scale: 0.98 }}
                transition={{ duration: 0.4 }}
                className="space-y-6 max-w-3xl"
              >
                {/* 5 Star Rating */}
                <div className="flex items-center gap-1">
                  {[...Array(TESTIMONIALS[activeIndex].rating)].map((_, index) => (
                    <Star
                      key={index}
                      className="w-5 h-5 fill-yellow-400 text-yellow-400 drop-shadow-sm"
                    />
                  ))}
                </div>

                {/* Verbatim Review Quote */}
                <blockquote className="text-ink text-xl sm:text-2xl font-medium leading-relaxed italic">
                  "{TESTIMONIALS[activeIndex].content}"
                </blockquote>

                {/* Reviewer Details */}
                <div className="flex items-center gap-4 pt-4">
                  <div className="relative w-14 h-14 rounded-full overflow-hidden shrink-0 border-2 border-brand/30 shadow-md">
                    <Image
                      src={TESTIMONIALS[activeIndex].avatar}
                      alt={TESTIMONIALS[activeIndex].name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-lg text-ink">
                      {TESTIMONIALS[activeIndex].name}
                    </h3>
                    <p className="text-xs text-brand font-semibold">
                      Verified Client Review
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Carousel Navigation Indicators & Snap Controls */}
            <div className="flex items-center justify-between pt-8 mt-8 border-t border-surface-light">
              <div className="flex items-center gap-2">
                {TESTIMONIALS.map((t, idx) => (
                  <button
                    key={t.id}
                    onClick={() => {
                      setActiveIndex(idx);
                      scrollToCard(idx);
                    }}
                    aria-label={`Go to review ${idx + 1}`}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      activeIndex === idx
                        ? "w-8 bg-brand"
                        : "w-2.5 bg-surface-mid hover:bg-brand/40"
                    }`}
                  />
                ))}
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={prevTestimonial}
                  aria-label="Previous review"
                  className="w-10 h-10 rounded-full bg-surface-light hover:bg-brand hover:text-white border border-surface-mid text-ink flex items-center justify-center transition-colors shadow-sm"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextTestimonial}
                  aria-label="Next review"
                  className="w-10 h-10 rounded-full bg-surface-light hover:bg-brand hover:text-white border border-surface-mid text-ink flex items-center justify-center transition-colors shadow-sm"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

          </div>
        </ScrollReveal>

        {/* 4 Interactive Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.id}
              onClick={() => {
                setActiveIndex(i);
                scrollToCard(i);
              }}
              whileHover={{ y: -4 }}
              animate={{
                scale: activeIndex === i ? 1.03 : 1,
                opacity: activeIndex === i ? 1 : 0.85,
              }}
              transition={{ duration: 0.3 }}
              className={`p-6 rounded-3xl border transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                activeIndex === i
                  ? "bg-white border-brand shadow-lg ring-2 ring-brand/20"
                  : "bg-white/80 border-surface-mid hover:border-brand/40 shadow-sm"
              }`}
            >
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-0.5">
                    {[...Array(t.rating)].map((_, index) => (
                      <Star
                        key={index}
                        className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <span className="text-[11px] font-bold text-brand font-mono">0{i + 1}</span>
                </div>

                <p className="text-ink-body text-xs leading-relaxed line-clamp-3 italic">
                  "{t.content}"
                </p>
              </div>

              <div className="flex items-center gap-3 pt-4 mt-4 border-t border-surface-light">
                <div className="relative w-9 h-9 rounded-full overflow-hidden shrink-0 border border-brand/20">
                  <Image
                    src={t.avatar}
                    alt={t.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-display font-bold text-xs text-ink">
                    {t.name}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
