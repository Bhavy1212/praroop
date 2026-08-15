"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Sparkles, X } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const activationItems = [
  {
    id: "mall",
    number: "01",
    title: "Mall Activations",
    description:
      "High-footfall experiential setups inside Udaipur & Rajasthan's leading malls — sampling booths, live demos, and interactive brand zones that convert browsers into customers on the spot.",
    image: "/services/activations/mall-activation.webp",
    stat: "50,000+",
    statLabel: "Average weekend footfall reached per mall activation",
  },
  {
    id: "retail",
    number: "02",
    title: "Retail Activations",
    description:
      "In-store brand takeovers and point-of-sale experiences designed to drive impulse engagement right where the purchase decision happens.",
    image: "/services/activations/retail-pos.webp",
    stat: "3.2x",
    statLabel: "Average uplift in in-store shopper engagement",
  },
  {
    id: "corporate",
    number: "03",
    title: "Corporate Activations",
    description:
      "Branded experiences for corporate events, conferences, and product launches that put your brand front and center for high-value B2B audiences.",
    image: "/services/activations/corporate-summit.webp",
    stat: "40+",
    statLabel: "Corporate events activated across Rajasthan",
  },
  {
    id: "school-college",
    number: "04",
    title: "School / College Activations",
    description:
      "Campus-based engagement campaigns that reach the youth demographic directly — from sampling drives to interactive contests across Udaipur's leading institutions.",
    image: "/services/activations/campus-fest.webp",
    stat: "25+",
    statLabel: "Campuses activated across the region",
  },
];

const FACE_HEIGHT = 440; // Balanced 440px height that fits 100vh on all laptop & desktop screens

function CardCube({
  items,
  faceHeight,
  cubeRef,
}: {
  items: typeof activationItems;
  faceHeight: number;
  cubeRef: React.RefObject<HTMLDivElement | null>;
}) {
  const halfHeight = faceHeight / 2;

  return (
    <div
      ref={cubeRef}
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        transformStyle: "preserve-3d",
        willChange: "transform",
      }}
    >
      {items.map((item, i) => (
        <div
          key={item.id}
          style={{
            position: "absolute",
            inset: 0,
            backfaceVisibility: "hidden",
            transformStyle: "preserve-3d",
            transform: `rotateX(${i * -90}deg) translateZ(${halfHeight}px)`,
          }}
          className="w-full h-full bg-[#F4F2EE] text-slate-900 rounded-2xl md:rounded-r-none flex flex-col justify-center p-6 md:p-8 lg:p-10 select-none overflow-hidden"
        >
          <span className="block text-5xl lg:text-6xl font-black font-sans tracking-tight text-slate-950">
            {item.number}
          </span>
          <h3 className="text-xl lg:text-2xl font-bold mt-3 text-slate-950 font-display leading-tight tracking-tight">
            {item.title}
          </h3>
          <div className="w-12 h-[2px] bg-slate-950 my-3.5" />
          <p className="text-xs lg:text-sm text-neutral-700 leading-relaxed max-w-sm font-normal">
            {item.description}
          </p>
        </div>
      ))}
    </div>
  );
}

function ImageCube({
  items,
  faceHeight,
  cubeRef,
}: {
  items: typeof activationItems;
  faceHeight: number;
  cubeRef: React.RefObject<HTMLDivElement | null>;
}) {
  const halfHeight = faceHeight / 2;

  return (
    <div
      ref={cubeRef}
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        transformStyle: "preserve-3d",
        willChange: "transform",
      }}
    >
      {items.map((item, i) => (
        <div
          key={item.id}
          style={{
            position: "absolute",
            inset: 0,
            backfaceVisibility: "hidden",
            transformStyle: "preserve-3d",
            transform: `rotateX(${i * 90}deg) translateZ(${halfHeight}px)`,
          }}
          className="relative w-full h-full rounded-2xl md:rounded-l-none overflow-hidden bg-slate-950"
        >
          <Image
            src={item.image}
            alt={item.title}
            fill
            priority={i === 0}
            className="object-cover"
          />
          {/* Subtle bottom vignette */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
        </div>
      ))}
    </div>
  );
}

export default function ActivationsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardCubeRef = useRef<HTMLDivElement>(null);
  const imageCubeRef = useRef<HTMLDivElement>(null);

  const [activeIndex, setActiveIndex] = useState(0);
  const [revealed, setRevealed] = useState(false);

  const [isMobile, setIsMobile] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const checkViewport = () => {
      setIsMobile(window.innerWidth < 768 || window.matchMedia("(pointer: coarse)").matches);
      setReducedMotion(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
    };

    checkViewport();
    window.addEventListener("resize", checkViewport);
    return () => window.removeEventListener("resize", checkViewport);
  }, []);

  // GSAP Continuous Scroll-Scrubbed Vertical 3D Cube Rotation
  useEffect(() => {
    if (isMobile || reducedMotion) return;

    const section = sectionRef.current;
    const cardCube = cardCubeRef.current;
    const imageCube = imageCubeRef.current;
    if (!section || !cardCube || !imageCube) return;

    const steps = activationItems.length - 1; // 3 rotations between 4 faces

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: () => `+=${activationItems.length * window.innerHeight * 0.85}`,
        pin: true,
        scrub: 0.5, // smooth, continuous 1:1 scroll scrub
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          const progress = self.progress;
          const rotation = progress * steps * 90;

          // Card cube rotates forward: incoming face rolls in from the TOP
          gsap.set(cardCube, { rotateX: rotation });

          // Image cube rotates opposite: incoming face rolls in from the BOTTOM
          gsap.set(imageCube, { rotateX: -rotation });

          const idx = Math.min(
            activationItems.length - 1,
            Math.max(0, Math.round(progress * steps))
          );
          setActiveIndex((prev) => {
            if (prev !== idx) setRevealed(false);
            return idx;
          });
        },
      });
    }, section);

    const timeout = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 200);

    return () => {
      ctx.revert();
      clearTimeout(timeout);
    };
  }, [isMobile, reducedMotion]);

  const currentItem = activationItems[activeIndex];

  return (
    <section
      id="activations"
      ref={sectionRef}
      className="relative bg-black text-white border-t border-white/10"
    >
      {reducedMotion || isMobile ? (
        /* Mobile Fallback: Normal Vertical Stack */
        <div className="py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto space-y-12 bg-black text-white">
          <div className="text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-wider text-[#D10B6A]">
              <Sparkles className="w-3.5 h-3.5 text-[#D10B6A]" />
              <span>On-Ground B2C & B2B Engagements</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight font-display">
              Brand <span className="text-gradient-tri">Activations</span> & Events
            </h2>
            <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto">
              Immersive physical brand experiences that create memorable connections and drive immediate customer action.
            </p>
          </div>

          <div className="space-y-8">
            {activationItems.map((item) => (
              <div
                key={item.id}
                className="rounded-2xl overflow-hidden bg-[#F4F2EE] text-slate-900 border border-white/10 shadow-2xl flex flex-col"
              >
                <div className="relative h-[260px] w-full">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/75 backdrop-blur-md text-white text-xs font-mono font-bold">
                    {item.number} / 04
                  </div>
                  <div className="absolute bottom-4 right-4 px-4 py-2 rounded-full bg-black/85 backdrop-blur-md text-white text-xs font-semibold flex items-center gap-1.5 shadow-lg">
                    <span className="font-bold text-[#0C9DA8]">{item.stat}</span>
                    <span className="text-white/80">Impact</span>
                  </div>
                </div>

                <div className="p-8 space-y-4">
                  <div className="space-y-2">
                    <span className="text-5xl font-black font-sans text-slate-950 block">
                      {item.number}
                    </span>
                    <h3 className="text-2xl font-black text-slate-900 leading-tight font-display">
                      {item.title}
                    </h3>
                    <div className="w-12 h-[2px] bg-slate-300 my-2" />
                    <p className="text-sm text-slate-600 leading-relaxed font-normal">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-200">
                    <p className="text-xs font-bold text-slate-900">{item.statLabel}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        /* Desktop: Vertical 3D Cube-Rotate Stepper Perfectly Centered with Equal Spacing */
        <div className="h-screen w-full flex flex-col justify-center items-center pt-20 pb-4 px-4 relative overflow-hidden bg-black">
          
          {/* Subtle Vertical Grid Lines in Background */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:140px_100%] pointer-events-none" />

          {/* Centered Content Unit */}
          <div className="w-full flex flex-col items-center justify-center my-auto">
            {/* Section Header */}
            <div className="relative z-20 text-center max-w-2xl mx-auto px-4 mb-6 space-y-1.5 shrink-0">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold uppercase tracking-widest text-[#0C9DA8]">
                <Sparkles className="w-3 h-3 text-[#0C9DA8]" />
                <span>EXPERIENTIAL MARKETING</span>
              </div>
              <h2 className="text-2xl lg:text-3xl font-black uppercase text-white tracking-tight font-display">
                Brand Activations <span className="text-[#D10B6A]">& Events</span>
              </h2>
              <p className="text-xs text-white/60 max-w-lg mx-auto font-normal">
                Immersive physical brand experiences that create memorable connections and drive immediate customer action.
              </p>
            </div>

            {/* Contained Module Frame with Individual Perspective Contexts */}
            <div className="relative z-10 max-w-5xl w-full mx-auto px-6 md:px-8 shrink-0">
              <div
                className="flex flex-col md:flex-row rounded-2xl shadow-2xl border border-white/15 bg-black relative"
                style={{ height: FACE_HEIGHT }}
              >
                {/* Left Card Cube (Hinges & spins so incoming face enters from TOP) */}
                <div
                  className="w-full md:w-[42%] h-full rounded-2xl md:rounded-r-none overflow-hidden"
                  style={{ perspective: "1800px" }}
                >
                  <CardCube items={activationItems} faceHeight={FACE_HEIGHT} cubeRef={cardCubeRef} />
                </div>

                {/* Right Image Cube (Spins opposite so incoming face enters from BOTTOM) */}
                <div
                  className="relative w-full md:w-[58%] h-full rounded-2xl md:rounded-l-none overflow-hidden"
                  style={{ perspective: "1800px" }}
                >
                  <ImageCube
                    items={activationItems}
                    faceHeight={FACE_HEIGHT}
                    cubeRef={imageCubeRef}
                  />

                  {/* Click to Reveal Pill Button */}
                  <div className="absolute bottom-5 right-5 z-30">
                    <button
                      type="button"
                      onClick={() => setRevealed((prev) => !prev)}
                      className={`px-4 py-2 rounded-full backdrop-blur-md text-[11px] font-bold tracking-wide flex items-center gap-1.5 shadow-2xl transition-all duration-300 cursor-pointer ${
                        revealed
                          ? "bg-[#D10B6A] hover:bg-[#0080CB] text-white border border-[#D10B6A]"
                          : "bg-black/80 hover:bg-black text-white border border-white/20 hover:border-white/40"
                      }`}
                    >
                      <span>{revealed ? "Hide Details" : "Click to reveal"}</span>
                      {revealed ? (
                        <X className="w-3 h-3" />
                      ) : (
                        <ArrowUpRight className="w-3 h-3" />
                      )}
                    </button>
                  </div>

                  {/* Reveal Overlay Layer */}
                  <AnimatePresence>
                    {revealed && (
                      <motion.div
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 12 }}
                        transition={{ duration: 0.25 }}
                        className="absolute inset-0 bg-black/80 backdrop-blur-md flex flex-col justify-end p-6 md:p-10 z-20"
                      >
                        <div className="max-w-md space-y-1.5">
                          <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#0C9DA8]">
                            Key Metric & Impact
                          </span>
                          <p className="text-2xl md:text-3xl font-black text-white font-display tracking-tight">
                            {currentItem.stat}
                          </p>
                          <p className="text-xs text-white/80 font-normal leading-relaxed">
                            {currentItem.statLabel}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </div>

          {/* Dot Progress Nav */}
          <div className="hidden md:flex fixed right-8 top-1/2 -translate-y-1/2 flex-col gap-2.5 z-30">
            {activationItems.map((item, i) => (
              <button
                key={item.id}
                aria-label={`Jump to step ${i + 1}`}
                className={`transition-all duration-300 rounded-full ${
                  i === activeIndex
                    ? "w-2 h-6 bg-[#0C9DA8] shadow-[0_0_10px_rgba(12,157,168,0.6)]"
                    : "w-2 h-2 bg-white/30 hover:bg-white/60"
                }`}
              />
            ))}
          </div>

        </div>
      )}
    </section>
  );
}
