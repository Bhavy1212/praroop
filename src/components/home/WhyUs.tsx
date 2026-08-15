"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Award, Star, Trophy, Sparkles, CheckCircle2, ShieldCheck, Zap, TrendingUp } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// 8 Benchmark & Excellence cards matching the exact layout from Appinventiv Digital
const BENCHMARK_CARDS = [
  {
    id: "card-1",
    type: "red",
    title: "Strategic Excellence",
    category: "360° CAMPAIGNS",
    badge: "Top Growth Agency",
    year: "2026",
    bg: "bg-[#991B1B] text-white border-red-700/60 shadow-[0_20px_50px_rgba(153,27,27,0.3)]",
    start: { x: "-36vw", y: "30vh", rotateY: 15, rotateX: 10, rotateZ: -6 },
    end:   { x: "-38vw", y: "-35vh", rotateY: 195, rotateX: -12, rotateZ: 8 },
  },
  {
    id: "card-2",
    type: "sand",
    title: "Clutch 100",
    category: "TOP RATED AGENCY",
    badge: "5.0 ★ VERIFIED",
    year: "2026",
    bg: "bg-[#E6DCBA] text-[#1E293B] border-[#CFC39B] shadow-[0_20px_50px_rgba(0,0,0,0.4)]",
    start: { x: "-28vw", y: "-15vh", rotateY: 175, rotateX: -8, rotateZ: 5 },
    end:   { x: "-26vw", y: "32vh", rotateY: -10, rotateX: 14, rotateZ: -6 },
  },
  {
    id: "card-3",
    type: "white-laurel",
    title: "ET Leadership",
    category: "EXCELLENCE AWARDS",
    badge: "Media & Advertising",
    year: "2026",
    bg: "bg-white text-slate-900 border-slate-200 shadow-[0_25px_60px_rgba(0,0,0,0.5)]",
    start: { x: "-4vw", y: "-30vh", rotateY: 180, rotateX: -12, rotateZ: -4 },
    end:   { x: "-6vw", y: "24vh", rotateY: 5, rotateX: 10, rotateZ: 6 },
  },
  {
    id: "card-4",
    type: "yellow",
    title: "Creative Brilliance",
    category: "OUTLOOK BUSINESS",
    badge: "SPOTLIGHT 2026",
    year: "SPECIAL FEATURE",
    bg: "bg-[#FACC15] text-black border-yellow-300 font-bold shadow-[0_20px_50px_rgba(250,204,21,0.25)]",
    start: { x: "24vw", y: "-22vh", rotateY: 170, rotateX: 12, rotateZ: -6 },
    end:   { x: "26vw", y: "30vh", rotateY: -15, rotateX: -10, rotateZ: 8 },
  },
  {
    id: "card-5",
    type: "green",
    title: "Tech-Driven Solutions",
    category: "INNOVATION & AI",
    badge: "Future-Ready Media",
    year: "2026",
    bg: "bg-[#86EFAC] text-[#064E3B] border-emerald-300 shadow-[0_20px_50px_rgba(134,239,172,0.3)]",
    start: { x: "38vw", y: "-6vh", rotateY: 78, rotateX: -5, rotateZ: 8 },
    end:   { x: "36vw", y: "34vh", rotateY: -85, rotateX: 10, rotateZ: -10 },
  },
  {
    id: "card-6",
    type: "gold-seal",
    title: "India 5000",
    category: "BEST MSME AWARDS",
    badge: "Client Trust Leader",
    year: "WINNER",
    bg: "bg-[#FEF3C7] text-[#78350F] border-amber-300 shadow-[0_20px_50px_rgba(0,0,0,0.4)]",
    start: { x: "30vw", y: "24vh", rotateY: 10, rotateX: -10, rotateZ: 6 },
    end:   { x: "28vw", y: "-28vh", rotateY: 185, rotateX: 14, rotateZ: -6 },
  },
  {
    id: "card-7",
    type: "white-ft",
    title: "High-Growth Leader",
    category: "ASIA-PACIFIC 2026",
    badge: "Financial Times Ranking",
    year: "FT 100",
    bg: "bg-white text-slate-900 border-slate-200 shadow-[0_25px_60px_rgba(0,0,0,0.5)]",
    start: { x: "5vw", y: "32vh", rotateY: 5, rotateX: 8, rotateZ: -5 },
    end:   { x: "7vw", y: "-30vh", rotateY: 180, rotateX: -10, rotateZ: 7 },
  },
  {
    id: "card-8",
    type: "teal",
    title: "Client-Centric Focus",
    category: "UDAIPUR #1 AGENCY",
    badge: "99.4% Client Retention",
    year: "PROVEN IMPACT",
    bg: "bg-[#0C9DA8] text-white border-teal-300/50 shadow-[0_20px_50px_rgba(12,157,168,0.3)]",
    start: { x: "-20vw", y: "34vh", rotateY: -165, rotateX: -8, rotateZ: 6 },
    end:   { x: "-18vw", y: "-22vh", rotateY: 15, rotateX: 12, rotateZ: -6 },
  },
];

export default function WhyUs() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef     = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      // ── Desktop 3D Pinned Scrub Animation ──
      mm.add("(min-width: 768px) and (prefers-reduced-motion: no-preference)", () => {
        const cardElements = cardsRef.current.filter(Boolean) as HTMLDivElement[];

        // Initial 3D placements
        cardElements.forEach((el, idx) => {
          const config = BENCHMARK_CARDS[idx];
          gsap.set(el, {
            x: config.start.x,
            y: config.start.y,
            rotateY: config.start.rotateY,
            rotateX: config.start.rotateX,
            rotateZ: config.start.rotateZ,
            transformPerspective: 1600,
            transformOrigin: "50% 50%",
          });
        });

        // Pinned Scroll Timeline
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: container,
            start: "top top",
            end: "+=260%",
            pin: true,
            scrub: 1.2,
            invalidateOnRefresh: true,
          },
        });

        // 3D rotation & vertical parallax drift across the screen
        cardElements.forEach((el, idx) => {
          const config = BENCHMARK_CARDS[idx];
          tl.to(
            el,
            {
              x: config.end.x,
              y: config.end.y,
              rotateY: config.end.rotateY,
              rotateX: config.end.rotateX,
              rotateZ: config.end.rotateZ,
              ease: "none",
            },
            0
          );
        });

        return () => {
          tl.scrollTrigger?.kill();
        };
      });

      // ── Mobile / Reduced Motion: Responsive grid ──
      mm.add("(max-width: 767px), (prefers-reduced-motion: reduce)", () => {
        const cardElements = cardsRef.current.filter(Boolean) as HTMLDivElement[];
        gsap.set(cardElements, { clearProps: "all" });

        cardElements.forEach((el) => {
          gsap.from(el, {
            opacity: 0,
            y: 30,
            duration: 0.6,
            scrollTrigger: {
              trigger: el,
              start: "top 90%",
              once: true,
            },
          });
        });

        return () => ScrollTrigger.getAll().forEach((st) => st.kill());
      });
    }, container);

    const timer = setTimeout(() => ScrollTrigger.refresh(), 300);

    return () => {
      ctx.revert();
      clearTimeout(timer);
    };
  }, []);

  return (
    <section
      id="why-us"
      ref={containerRef}
      className="relative bg-[#000000] text-white min-h-screen overflow-hidden flex items-center justify-center border-t border-b border-white/5 select-none"
      style={{ perspective: "1600px" }}
    >
      {/* ── 6 Subtle Vertical Grid Lines (Exact Appinventiv Style) ── */}
      <div className="absolute inset-0 pointer-events-none flex justify-between px-4 sm:px-12 md:px-24 opacity-15 z-0">
        <div className="w-[1px] h-full bg-white/20" />
        <div className="w-[1px] h-full bg-white/20" />
        <div className="w-[1px] h-full bg-white/20" />
        <div className="w-[1px] h-full bg-white/20" />
        <div className="w-[1px] h-full bg-white/20" />
        <div className="w-[1px] h-full bg-white/20" />
      </div>

      {/* ── Giant Pinned Centerpiece Headline ── */}
      <div className="relative z-10 text-center max-w-5xl px-4 pointer-events-none space-y-4 sm:space-y-6">
        <h2 className="text-5xl sm:text-7xl md:text-8xl lg:text-[7.5rem] font-extrabold tracking-tighter leading-[0.92] uppercase font-display text-white">
          THE INDUSTRY
          <br />
          <span className="text-[#FACC15] block mt-1 tracking-tight drop-shadow-[0_0_35px_rgba(250,204,21,0.35)]">
            BENCHMARK
          </span>
        </h2>

        <p className="text-sm sm:text-base md:text-lg text-slate-300 max-w-xl mx-auto font-normal leading-relaxed tracking-wide">
          Validated by Rajasthan&apos;s leading enterprises, national brand partners, and 360° growth milestones.
        </p>

        <div className="pt-1 flex items-center justify-center gap-3">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold uppercase tracking-widest text-[#FACC15]">
            <Sparkles className="w-3.5 h-3.5 text-[#FACC15]" />
            What Sets Praaroop Apart
          </span>
        </div>
      </div>

      {/* ── Desktop 3D Floating / Rotating Cards Canvas ── */}
      <div
        className="hidden md:block absolute inset-0 pointer-events-none z-20"
        style={{ transformStyle: "preserve-3d" }}
      >
        {BENCHMARK_CARDS.map((card, idx) => (
          <div
            key={card.id}
            ref={(el) => { cardsRef.current[idx] = el; }}
            className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 sm:w-56 md:w-60 p-5 rounded-xl border ${card.bg} pointer-events-auto transition-transform duration-200`}
            style={{
              transformStyle: "preserve-3d",
              willChange: "transform",
            }}
          >
            {/* Top header row */}
            <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-wider opacity-85 mb-2.5 border-b border-current/20 pb-1.5">
              <span className="font-semibold">{card.category}</span>
              <span>{card.year}</span>
            </div>

            {/* Visual Icon Badge */}
            <div className="my-2 flex items-center justify-center">
              {card.type === "red" && (
                <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center shadow-inner">
                  <Trophy className="w-6 h-6 text-white" />
                </div>
              )}
              {card.type === "sand" && (
                <div className="w-10 h-10 rounded-lg bg-slate-900/10 flex items-center justify-center">
                  <Star className="w-6 h-6 text-amber-900 fill-amber-900" />
                </div>
              )}
              {card.type === "white-laurel" && (
                <div className="w-11 h-11 rounded-full bg-amber-50 border border-amber-200 flex items-center justify-center">
                  <Award className="w-6 h-6 text-amber-600" />
                </div>
              )}
              {card.type === "yellow" && (
                <div className="w-10 h-10 rounded-lg bg-black/10 flex items-center justify-center">
                  <Zap className="w-6 h-6 text-black" />
                </div>
              )}
              {card.type === "green" && (
                <div className="w-10 h-10 rounded-lg bg-emerald-900/10 flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-emerald-950" />
                </div>
              )}
              {card.type === "gold-seal" && (
                <div className="w-11 h-11 rounded-full bg-amber-200/80 border-2 border-dashed border-amber-600 flex items-center justify-center">
                  <ShieldCheck className="w-6 h-6 text-amber-800" />
                </div>
              )}
              {card.type === "white-ft" && (
                <div className="w-10 h-10 rounded bg-slate-100 flex items-center justify-center font-serif font-black text-xs">
                  FT
                </div>
              )}
              {card.type === "teal" && (
                <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6 text-white" />
                </div>
              )}
            </div>

            {/* Title & Badge */}
            <div className="text-center mt-2 space-y-1">
              <h3 className="text-base sm:text-lg font-bold font-display leading-snug">
                {card.title}
              </h3>
              <p className="text-xs opacity-85 font-medium">{card.badge}</p>
            </div>
          </div>
        ))}
      </div>

      {/* ── Mobile Layout: Responsive Grid of Cards ── */}
      <div className="md:hidden w-full px-4 py-16 grid grid-cols-1 sm:grid-cols-2 gap-4 relative z-20">
        {BENCHMARK_CARDS.map((card, idx) => (
          <div
            key={`mob-${card.id}`}
            ref={(el) => { cardsRef.current[idx] = el; }}
            className={`p-5 rounded-xl border ${card.bg} flex flex-col justify-between`}
          >
            <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-wider opacity-80 mb-2">
              <span>{card.category}</span>
              <span>{card.year}</span>
            </div>
            <h3 className="text-lg font-bold font-display my-1">{card.title}</h3>
            <p className="text-xs opacity-85">{card.badge}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
