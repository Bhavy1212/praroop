"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { Star, Quote, ShieldCheck, Sparkles, BookOpen, ChevronDown, Award, TrendingUp } from "lucide-react";
import { TESTIMONIALS } from "@/lib/data";

const AVATAR_GRADIENTS = [
  "from-[#0080CB] to-[#0C9DA8]",
  "from-[#D10B6A] to-[#0080CB]",
  "from-[#0C9DA8] to-[#10B981]",
  "from-[#0080CB] to-[#6366F1]",
];

/* Enriched per-page client impact and score details */
const TESTIMONIAL_PAGES = [
  {
    ...TESTIMONIALS[0],
    score: "5.0",
    scoreLabel: "Excellence Rating",
    metric: "+240%",
    metricLabel: "Ticket Sales Growth",
    category: "Cinema & Theater Advertising",
    clientTag: "Entertainment Brand Partner",
  },
  {
    ...TESTIMONIALS[1],
    score: "4.9",
    scoreLabel: "High ROI Score",
    metric: "+180%",
    metricLabel: "Brand Recall Boost",
    category: "Outdoor Hoardings & Billboards",
    clientTag: "Regional Retail Partner",
  },
  {
    ...TESTIMONIALS[2],
    score: "5.0",
    scoreLabel: "Authority Rating",
    metric: "+350%",
    metricLabel: "Airport Footfall Exposure",
    category: "Airport & LED Van Branding",
    clientTag: "Corporate Network Partner",
  },
  {
    ...TESTIMONIALS[3],
    score: "5.0",
    scoreLabel: "Visibility Score",
    metric: "+400%",
    metricLabel: "Citywide Transit Reach",
    category: "Bus & Auto Mobile Ads",
    clientTag: "National Consumer Partner",
  },
];

export default function Testimonials() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activePageIndex, setActivePageIndex] = useState<number>(0);
  const [isBookOpen, setIsBookOpen] = useState<boolean>(false);
  const totalReviews = TESTIMONIAL_PAGES.length;

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Track whether the book is in closed cover mode vs open mode
  useMotionValueEvent(scrollYProgress, "change", (progress) => {
    setIsBookOpen(progress >= 0.15);

    if (progress >= 0.15) {
      // Scale review index across progress 0.15 -> 1.00
      const normalized = Math.min(Math.max((progress - 0.15) / 0.85, 0), 0.999);
      const idx = Math.floor(normalized * totalReviews);
      setActivePageIndex(idx);
    } else {
      setActivePageIndex(0);
    }
  });

  const jumpToReview = (idx: number) => {
    if (!containerRef.current) return;
    const top = containerRef.current.offsetTop;
    const height = containerRef.current.offsetHeight;
    const scrollDist = height - window.innerHeight;
    const targetProgress = 0.20 + (idx / totalReviews) * 0.75;
    const targetScroll = top + targetProgress * scrollDist;
    window.scrollTo({ top: targetScroll, behavior: "smooth" });
  };

  const coils = Array.from({ length: 8 });
  const activePageData = TESTIMONIAL_PAGES[activePageIndex];
  const activeGradient = AVATAR_GRADIENTS[activePageIndex % AVATAR_GRADIENTS.length];

  return (
    <section
      id="testimonials"
      ref={containerRef}
      className="relative bg-[#FAFAFC] border-t border-slate-200/80"
      style={{ height: "450vh" }}
    >
      {/* Sticky Viewport Container */}
      <div className="sticky top-0 h-screen w-full flex flex-col justify-center items-center py-6 px-4 sm:px-6 lg:px-8 overflow-hidden z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-8 space-y-2 select-none">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-slate-200 text-xs font-bold uppercase tracking-wider text-[#D10B6A] shadow-xs">
            <BookOpen className="w-3.5 h-3.5 text-[#0080CB]" />
            <span>Interactive Client Diaries</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0B1220] tracking-tight">
            What Our <span className="text-gradient-tri">Clients Say</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-500">
            {!isBookOpen
              ? "Scroll down to open the diary and explore verified stories."
              : `Story 0${activePageIndex + 1} of 0${totalReviews} • Scroll to flip next story`}
          </p>
        </div>

        {/* ── 3D Notebook Stage ── */}
        <div
          style={{ perspective: 2200 }}
          className="relative w-full max-w-4xl mx-auto flex items-center justify-center min-h-[440px] sm:min-h-[490px]"
        >
          {/* Ambient Ground Shadow */}
          <div className="absolute -inset-6 bg-black/15 blur-3xl rounded-[40px] -z-30" />

          <AnimatePresence mode="wait">
            {!isBookOpen ? (
              /* ═══════════════════════════════════════════════════════════
                 STATE 1: ONLY THE CLOSED COVER PAGE (CENTERED)
                 ═══════════════════════════════════════════════════════════ */
              <motion.div
                key="closed-cover-only"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                exit={{
                  opacity: 0,
                  scale: 1.05,
                  rotateY: -95,
                  x: -60,
                  transition: { duration: 0.55, ease: [0.3, 0, 0.2, 1] },
                }}
                style={{ transformStyle: "preserve-3d", transformOrigin: "left center" }}
                onClick={() => jumpToReview(0)}
                className="relative w-full max-w-md sm:max-w-lg mx-auto rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[#1E293B] via-[#0F172A] to-[#020617] text-white border-2 border-slate-700/90 shadow-[0_30px_70px_rgba(0,0,0,0.5)] overflow-hidden pl-12 sm:pl-16 pr-8 sm:pr-10 py-10 sm:py-12 cursor-pointer select-none"
              >
                {/* Leather texture overlay */}
                <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px] opacity-5 pointer-events-none" />

                {/* Perimeter Deboss Line */}
                <div className="absolute inset-3.5 rounded-xl sm:rounded-2xl border border-cyan-400/25 pointer-events-none" />

                {/* ── Left Spiral Binding Spine ── */}
                <div className="absolute left-0 top-0 bottom-0 w-11 sm:w-14 bg-gradient-to-r from-black/80 to-transparent flex flex-col justify-between py-6 items-center z-20 pointer-events-none">
                  {coils.map((_, idx) => (
                    <div key={idx} className="relative flex items-center justify-center w-full my-0.5">
                      <div className="w-3 h-3 rounded-full bg-black/90 shadow-inner border border-white/20" />
                      <div className="absolute -left-1 w-6 sm:w-7 h-3 rounded-full bg-gradient-to-r from-slate-400 via-white to-slate-500 shadow-md transform -rotate-12 border-t border-white" />
                    </div>
                  ))}
                </div>

                {/* ── Right Bookmark Elastic Ribbon ── */}
                <div className="absolute right-10 top-0 bottom-0 w-4 sm:w-5 bg-gradient-to-b from-[#D10B6A] to-[#0080CB] shadow-lg border-x border-white/20 flex flex-col justify-between items-center py-4 z-10">
                  <div className="w-2 h-2 rounded-full bg-[#0C9DA8]" />
                  <div className="w-2 h-2 rounded-full bg-[#0C9DA8]" />
                </div>

                {/* ── Sticky Bookmark Tag on top right ── */}
                <div className="absolute top-0 right-16 px-3.5 py-1 bg-gradient-to-r from-[#0080CB] to-[#0C9DA8] rounded-b-lg shadow-md text-[10px] font-black tracking-wider uppercase text-white border-b border-x border-cyan-200/40">
                  Vol. 2026
                </div>

                {/* Cover Content */}
                <div className="relative z-10 space-y-6 text-center">
                  {/* Embossed Brand Seal */}
                  <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-[#0080CB]/30 via-white/10 to-[#D10B6A]/30 p-0.5 mx-auto border border-cyan-300/40 shadow-[0_0_25px_rgba(0,128,203,0.3)] flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-[#0F172A] border border-cyan-400/30 flex items-center justify-center">
                      <Quote className="w-6 h-6 text-cyan-300 drop-shadow-[0_0_8px_rgba(12,157,168,0.6)]" />
                    </div>
                  </div>

                  {/* Foil Embossed Title */}
                  <div className="space-y-1.5">
                    <span className="text-[10px] sm:text-xs font-mono font-bold tracking-[0.25em] text-[#0080CB] uppercase block">
                      PRAAROOP MEDIA
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-serif font-black tracking-wider text-[#D10B6A] drop-shadow-md uppercase">
                      Client Diaries
                    </h3>
                    <p className="text-xs text-slate-400 font-sans tracking-wide">
                      4 Verified Stories Sealed Inside
                    </p>
                  </div>

                  {/* Scroll Down to Open Prompt */}
                  <div className="pt-2">
                    <div className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#0080CB] hover:bg-[#0C9DA8] text-white font-extrabold text-xs tracking-wider uppercase shadow-[0_8px_20px_rgba(0,128,203,0.4)] animate-bounce">
                      <span>Scroll Down to Open</span>
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ) : (
              /* ═══════════════════════════════════════════════════════════
                 STATE 2: OPEN DUAL-PAGE BOOK (LEFT: RATING | RIGHT: CONTENT)
                 ═══════════════════════════════════════════════════════════ */
              <motion.div
                key="open-book-pages"
                initial={{ opacity: 0, scale: 0.9, rotateY: 30 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                className="relative w-full rounded-2xl sm:rounded-3xl bg-[#FAF8F5] border-2 border-slate-300/90 shadow-[0_25px_60px_rgba(0,0,0,0.15)] overflow-hidden"
              >
                {/* Stacked Paper Base Depth (Underneath rim) */}
                <div className="absolute inset-x-2 -bottom-2 h-full bg-[#E4DDD0] rounded-2xl sm:rounded-3xl border border-slate-300 shadow-md -z-20" />
                <div className="absolute inset-x-1 -bottom-1 h-full bg-[#EFE9DC] rounded-2xl sm:rounded-3xl border border-slate-300 shadow-sm -z-10" />

                {/* Lined Paper Texture */}
                <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_27px,#E2E8F0_28px)] bg-[size:100%_28px] opacity-25 pointer-events-none" />

                <div className="grid grid-cols-1 md:grid-cols-2">
                  {/* ════════════════════════════════════════════════════════
                     LEFT SIDE: CLIENT RATING, SCORE & METRICS
                     ════════════════════════════════════════════════════════ */}
                  <div className="relative p-7 sm:p-10 flex flex-col justify-between border-b md:border-b-0 md:border-r border-slate-200/80 bg-gradient-to-br from-[#FAF8F5] to-[#F1ECE1]">
                    {/* Top Header */}
                    <div className="space-y-4">
                      <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                        <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-[#0080CB]">
                          Praaroop Media • Diaries
                        </span>
                        <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-slate-200/80 text-[10px] font-bold text-slate-700">
                          <ShieldCheck className="w-3.5 h-3.5 text-[#0C9DA8]" />
                          <span>Vol. 2026</span>
                        </div>
                      </div>

                      <div className="space-y-1 pt-1">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-[#D10B6A] block">
                          {activePageData.category}
                        </span>
                        <h3 className="text-xl sm:text-2xl font-serif font-black text-[#0B1220] tracking-tight">
                          {activePageData.clientTag}
                        </h3>
                      </div>
                    </div>

                    {/* DYNAMIC CLIENT SCORE & RATING (Updates on every scroll page) */}
                    <div className="my-5 p-4 rounded-2xl bg-white/90 border border-slate-200/90 shadow-2xs space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                          {activePageData.scoreLabel}
                        </span>
                        {/* Dynamic Stars */}
                        <div className="flex items-center text-[#0C9DA8] gap-0.5">
                          {[...Array(activePageData.rating)].map((_, i) => (
                            <Star key={i} className="w-3.5 h-3.5 fill-[#0C9DA8] text-[#0C9DA8]" />
                          ))}
                        </div>
                      </div>

                      {/* Animated Score Numbers */}
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={`score-${activePageData.id}`}
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -8 }}
                          transition={{ duration: 0.3 }}
                          className="flex items-baseline justify-between pt-1 border-t border-slate-100"
                        >
                          <div className="flex items-baseline gap-1.5">
                            <span className="text-3xl font-black text-[#0B1220] font-mono">
                              {activePageData.score}
                            </span>
                            <span className="text-xs text-slate-400 font-semibold">/ 5.0</span>
                          </div>

                          {/* Dynamic Campaign Metric */}
                          <div className="text-right">
                            <span className="text-sm font-black text-[#0080CB] flex items-center justify-end gap-1 font-mono">
                              <TrendingUp className="w-3.5 h-3.5" />
                              {activePageData.metric}
                            </span>
                            <span className="text-[10px] text-slate-500 font-medium block">
                              {activePageData.metricLabel}
                            </span>
                          </div>
                        </motion.div>
                      </AnimatePresence>
                    </div>

                    {/* Page Selector Tabs */}
                    <div className="space-y-2">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block">
                        Turn to Page:
                      </span>
                      <div className="grid grid-cols-4 gap-1.5">
                        {TESTIMONIAL_PAGES.map((item, idx) => (
                          <button
                            key={item.id}
                            onClick={() => jumpToReview(idx)}
                            className={`py-1.5 px-2 rounded-lg text-xs font-bold font-mono transition-all cursor-pointer ${
                              activePageIndex === idx
                                ? "bg-[#0080CB] text-white shadow-md scale-105"
                                : "bg-white/80 hover:bg-white text-slate-600 border border-slate-200"
                            }`}
                          >
                            P.0{idx + 1}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* ════════════════════════════════════════════════════════
                     RIGHT SIDE: REVIEW CONTENT & CLIENT DETAILS
                     ════════════════════════════════════════════════════════ */}
                  <div className="relative p-7 sm:p-10 flex flex-col justify-between bg-white min-h-[380px] sm:min-h-[420px]">
                    {/* Top Page Header */}
                    <div className="flex items-center justify-between border-b border-slate-100 pb-3 z-10">
                      <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-slate-400 uppercase">
                        <span>Story #{activePageIndex + 1}</span>
                      </div>
                      <div className="px-3 py-1 rounded-full bg-[#0080CB]/10 border border-[#0080CB]/20 text-[11px] font-bold text-[#0080CB]">
                        Page 0{activePageIndex + 1} of 0{totalReviews}
                      </div>
                    </div>

                    {/* Flipping Review Content */}
                    <div className="relative my-auto py-4 z-10">
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={`review-${activePageData.id}`}
                          initial={{ opacity: 0, rotateY: -25, x: 15 }}
                          animate={{ opacity: 1, rotateY: 0, x: 0 }}
                          exit={{ opacity: 0, rotateY: 25, x: -15 }}
                          transition={{ duration: 0.45, ease: "easeOut" }}
                          className="space-y-5"
                        >
                          {/* Quote Emblem & Verified Seal */}
                          <div className="flex items-center justify-between">
                            <div className="w-10 h-10 rounded-xl bg-[#0080CB]/10 flex items-center justify-center text-[#0080CB]">
                              <Quote className="w-5 h-5" />
                            </div>
                            <div className="flex items-center gap-1 text-xs font-bold text-slate-500 bg-slate-50 px-2.5 py-1 rounded-full border border-slate-200">
                              <Award className="w-3.5 h-3.5 text-[#D10B6A]" />
                              <span>Verified Review</span>
                            </div>
                          </div>

                          {/* Review Quote */}
                          <p className="text-base sm:text-lg text-slate-800 font-serif italic leading-relaxed">
                            &ldquo;{activePageData.content}&rdquo;
                          </p>

                          {/* Author Info */}
                          <div className="flex items-center gap-3.5 pt-2 border-t border-slate-100">
                            <div
                              className={`w-12 h-12 rounded-full bg-gradient-to-tr ${activeGradient} flex items-center justify-center text-white font-extrabold text-sm shadow-md shrink-0`}
                            >
                              {activePageData.avatar}
                            </div>
                            <div>
                              <h4 className="text-base font-bold text-[#0B1220] leading-snug">
                                {activePageData.name}
                              </h4>
                              <p className="text-xs text-slate-500 font-medium">Verified Partner Client</p>
                            </div>
                          </div>
                        </motion.div>
                      </AnimatePresence>
                    </div>

                    {/* Bottom Scroll Indicator */}
                    <div className="flex items-center justify-between border-t border-slate-100 pt-3 text-[11px] font-mono text-slate-400 z-10">
                      <span className="flex items-center gap-1 text-[#0C9DA8] font-bold">
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>Praaroop Verified</span>
                      </span>
                      <span>
                        {activePageIndex < totalReviews - 1
                          ? "Scroll to flip next story →"
                          : "End of Diaries ✓"}
                      </span>
                    </div>
                  </div>

                  {/* ── Center Spiral Metal Binding Spine ── */}
                  <div className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-8 sm:w-10 z-40 hidden md:flex flex-col justify-between py-6 items-center pointer-events-none">
                    <div className="absolute inset-y-0 w-4 bg-gradient-to-r from-black/25 via-black/40 to-black/25 -z-10" />
                    {coils.map((_, idx) => (
                      <div key={idx} className="relative flex items-center justify-center w-full my-0.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-slate-900 shadow-inner border border-white/20" />
                        <div className="absolute w-8 h-3 rounded-full bg-gradient-to-r from-slate-400 via-white to-slate-500 shadow-md transform -rotate-12 border-t border-white" />
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
