"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight, ArrowUpRight, Search, Cpu, BarChart3, Users, Zap, Repeat } from "lucide-react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { BRAND } from "@/lib/data";

const CATEGORIES = [
  {
    id: "search-authority",
    title: "Search Authority",
    subtitle:
      "Dominating SEO, AEO, and GEO search rankings to make your brand the primary answer in AI-driven search.",
    image: "/services/analysis.webp",
    icon: Search,
    chip: "SEO / AEO / GEO",
  },
  {
    id: "llmo",
    title: "LLMO (LLM Optimization)",
    subtitle:
      "LLM & AI-answer-engine optimization ensuring generative AI models cite your brand as the leading authority.",
    image: "/services/app-development.webp",
    icon: Cpu,
    chip: "Generative AI Search",
  },
  {
    id: "performance-branding",
    title: "Performance Branding",
    subtitle:
      "High-ROI performance media combined with brand storytelling built to capture market share and drive revenue.",
    image: "/services/social-media.webp",
    icon: BarChart3,
    chip: "Paid ROI Media",
  },
  {
    id: "social-community",
    title: "Social & Community",
    subtitle:
      "Fostering authentic customer communities, viral organic engagement, and brand advocacy across social platforms.",
    image: "/services/content-creation.webp",
    icon: Users,
    chip: "Community & Viral",
  },
  {
    id: "conversion-intelligence",
    title: "Conversion Intelligence (UI/UX & CRO)",
    subtitle:
      "Frictionless, high-fidelity journeys that turn customer intent into conversions and long-term loyalty.",
    image: "/services/corporate.webp",
    icon: Zap,
    chip: "UI/UX & CRO",
  },
  {
    id: "lifecycle-marketing",
    title: "Lifecycle Marketing",
    subtitle:
      "Data-driven customer retention, automated CRM workflows, and long-term customer lifetime value maximization.",
    image: "/services/influencer.webp",
    icon: Repeat,
    chip: "Retention & LTV",
  },
];

export default function GrowthEngineSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const pinContainerRef = useRef<HTMLDivElement>(null);
  const panelsRef = useRef<HTMLDivElement[]>([]);
  const scrollTriggerInstanceRef = useRef<ScrollTrigger | null>(null);

  const [activeIndex, setActiveIndex] = useState(0);
  const activeIndexRef = useRef(0);
  const [isMobile, setIsMobile] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    activeIndexRef.current = activeIndex;
  }, [activeIndex]);

  // 3D Coverflow Transform Calculator based on offset (-2, -1, 0, 1, 2)
  const getTransformConfig = (offset: number) => {
    const clamped = Math.max(-2, Math.min(2, offset));
    const configs: Record<number, { xPercent: number; rotateY: number; scale: number; opacity: number; zIndex: number }> = {
      0:  { xPercent: 0,   rotateY: 0,   scale: 1,    opacity: 1,    zIndex: 30 },
      1:  { xPercent: 55,  rotateY: -35, scale: 0.78, opacity: 0.55, zIndex: 20 },
      "-1": { xPercent: -55, rotateY: 35,  scale: 0.78, opacity: 0.55, zIndex: 20 },
      2:  { xPercent: 90,  rotateY: -45, scale: 0.55, opacity: 0,    zIndex: 10 },
      "-2": { xPercent: -90, rotateY: 45,  scale: 0.55, opacity: 0,    zIndex: 10 },
    };
    return configs[clamped] || { xPercent: 0, rotateY: 0, scale: 1, opacity: 0, zIndex: 1 };
  };

  // Perform 3D Coverflow Index Shift Animation
  const animateTo = (newIdx: number, duration = 0.8) => {
    const panels = panelsRef.current.filter(Boolean);
    if (!panels.length) return;

    panels.forEach((panel, i) => {
      const offset = i - newIdx;
      const t = getTransformConfig(offset);

      if (reducedMotion) {
        gsap.to(panel, {
          opacity: i === newIdx ? 1 : 0,
          duration: 0.4,
          ease: "power2.out",
        });
      } else {
        gsap.to(panel, {
          xPercent: t.xPercent,
          rotateY: t.rotateY,
          scale: t.scale,
          opacity: t.opacity,
          zIndex: t.zIndex,
          force3D: true,
          duration: duration,
          ease: "power3.inOut",
        });
      }
    });
  };

  // Navigate to a specific index
  const goToIndex = (targetIdx: number) => {
    const clampedIdx = Math.max(0, Math.min(CATEGORIES.length - 1, targetIdx));
    setActiveIndex(clampedIdx);
    animateTo(clampedIdx);
  };

  const goNext = () => goToIndex(activeIndex + 1);
  const goPrev = () => goToIndex(activeIndex - 1);

  // Setup GSAP + ScrollTrigger for 3D Coverflow Pinning
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const checkSettings = () => {
      setIsMobile(window.innerWidth < 768);
      setReducedMotion(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
    };

    checkSettings();
    window.addEventListener("resize", checkSettings);

    const panels = panelsRef.current.filter(Boolean);
    if (!panels.length) return;

    // Initial 3D transform state set
    panels.forEach((panel, i) => {
      const offset = i - 0;
      const t = getTransformConfig(offset);
      gsap.set(panel, {
        xPercent: t.xPercent,
        rotateY: t.rotateY,
        scale: t.scale,
        opacity: t.opacity,
        zIndex: t.zIndex,
        force3D: true,
      });
    });

    if (window.innerWidth < 768 || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return () => window.removeEventListener("resize", checkSettings);
    }

    const ctx = gsap.context(() => {
      const st = ScrollTrigger.create({
        trigger: pinContainerRef.current,
        start: "top top",
        end: () => "+=" + (CATEGORIES.length * 360),
        pin: true,
        anticipatePin: 1,
        onUpdate: (self) => {
          const step = Math.round(self.progress * (CATEGORIES.length - 1));
          if (step !== activeIndexRef.current && step >= 0 && step < CATEGORIES.length) {
            setActiveIndex(step);
            animateTo(step);
          }
        },
      });

      scrollTriggerInstanceRef.current = st;
    }, sectionRef);

    return () => {
      window.removeEventListener("resize", checkSettings);
      ctx.revert();
    };
  }, []);

  return (
    <section
      id="growth-engine"
      ref={sectionRef}
      className="relative bg-[#0A0A0A] bg-noise border-t border-white/5 text-white overflow-hidden"
    >
      {/* Background Starfield & Radial Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#0080CB]/15 via-transparent to-transparent pointer-events-none" />

      {/* FULL VIEWPORT PAGE FOR 3D COVERFLOW TILES (HEADING REMOVED, TILE SIZE INCREASED) */}
      <div
        ref={pinContainerRef}
        className="min-h-screen h-screen flex flex-col justify-center items-center relative py-8 px-4 z-20"
      >
        {/* Large 3D Coverflow Viewport Container */}
        <div
          className="relative w-full max-w-7xl h-[540px] sm:h-[600px] md:h-[660px] flex items-center justify-center my-auto"
          style={{ perspective: "1400px" }}
        >
          {CATEGORIES.map((cat, i) => {
            const IconComp = cat.icon;
            const offset = i - activeIndex;

            return (
              <div
                key={cat.id}
                ref={(el) => {
                  if (el) panelsRef.current[i] = el;
                }}
                onClick={() => goToIndex(i)}
                className="carousel-panel absolute w-[94%] max-w-[1050px] h-full rounded-[36px] overflow-hidden bg-[#111111] border border-white/20 shadow-[0_35px_80px_rgba(0,0,0,0.95)] flex flex-col justify-end p-8 sm:p-12 cursor-pointer transform-gpu transition-shadow duration-300"
                style={{
                  pointerEvents: Math.abs(offset) <= 1 ? "auto" : "none",
                }}
              >
                {/* Full-Bleed High-Res Background Image */}
                <Image
                  src={cat.image}
                  alt={cat.title}
                  fill
                  priority={i === 0}
                  className="object-cover filter brightness-[0.72] contrast-[1.05]"
                />

                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent z-10" />

                {/* Decorative Floating Icon Stickers (Top Corner Chips) */}
                <div className="absolute top-8 left-8 z-20 flex items-center gap-2.5 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 text-xs sm:text-sm font-bold text-white shadow-xl">
                  <IconComp className="w-4 h-4 sm:w-5 sm:h-5 text-[#0C9DA8]" />
                  <span>{cat.chip}</span>
                </div>

                <div className="absolute top-8 right-8 z-20 hidden sm:flex items-center gap-2 bg-black/60 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/20 text-xs font-mono text-white/90">
                  <span>0{i + 1} / 06</span>
                </div>

                {/* Bottom Text Content inside Large Card */}
                <div className="relative z-20 text-left space-y-3 max-w-3xl">
                  <h3 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white leading-tight font-display drop-shadow-2xl">
                    {cat.title}
                  </h3>

                  <p className="text-base sm:text-lg text-[#CBD5E1] font-normal leading-relaxed line-clamp-2 sm:line-clamp-3">
                    {cat.subtitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Carousel Controls Bar Below */}
        <div className="flex items-center justify-center gap-4 sm:gap-6 mb-4 z-40">
          <button
            onClick={goPrev}
            disabled={activeIndex === 0}
            className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-white/30 bg-black/50 hover:bg-white/20 text-white flex items-center justify-center transition-all duration-300 disabled:opacity-30 disabled:pointer-events-none backdrop-blur-md shadow-xl"
            aria-label="Previous Category"
          >
            <ArrowLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          <a
            href={BRAND.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-transparent border border-white/40 hover:bg-white/15 text-white font-extrabold text-xs sm:text-sm px-6 sm:px-8 py-3.5 rounded-full transition-all duration-300 backdrop-blur-md shadow-2xl uppercase tracking-wider"
          >
            <span>Tell Us What You're Looking For</span>
            <ArrowUpRight className="w-4 h-4 text-[#0C9DA8]" />
          </a>

          <button
            onClick={goNext}
            disabled={activeIndex === CATEGORIES.length - 1}
            className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-white/30 bg-black/50 hover:bg-white/20 text-white flex items-center justify-center transition-all duration-300 disabled:opacity-30 disabled:pointer-events-none backdrop-blur-md shadow-xl"
            aria-label="Next Category"
          >
            <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>

      </div>
    </section>
  );
}
