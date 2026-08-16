"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { CLIENT_LOGOS } from "@/lib/data";

import { motion } from "framer-motion";

// ── Brand colours ──────────────────────────────────────────────────────────
const PINK = "#D10B6A";
const TEAL = "#0C9DA8";

// ── Single source of truth for ring geometry ──────────────────────────────
const DIAMETER = 540;
const OFFSET   = Math.round(DIAMETER * 0.50); // center-to-center ≈ 50% of diameter
const DURATION = 26; // seconds per full revolution

// ── OrbitCircle: Mathematically locked center and orbit ──────────────────────
function OrbitCircle({
  logos,
  diameter,
  color,
  style,
  direction = 1,
}: {
  logos: typeof CLIENT_LOGOS;
  diameter: number;
  color: string;
  style: React.CSSProperties;
  direction?: number;
}) {
  const strokeWidth = diameter * 0.17; // ~92px band width
  const radius = (diameter - strokeWidth) / 2;
  const center = diameter / 2;
  const logoSize = Math.round(strokeWidth * 0.95); // ~88px badge size

  return (
    <div style={{ ...style, position: "absolute", width: diameter, height: diameter }}>
      {/* 1. Exact SVG Ring Circle (center is precisely cx, cy) */}
      <svg
        width={diameter}
        height={diameter}
        viewBox={`0 0 ${diameter} ${diameter}`}
        className="absolute inset-0 pointer-events-none drop-shadow-[0_0_30px_rgba(0,0,0,0.6)]"
      >
        <circle
          cx={center}
          cy={center}
          r={radius}
          fill="none"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeOpacity={0.92}
        />
        {/* Subtle decorative dashed center line */}
        <circle
          cx={center}
          cy={center}
          r={radius}
          fill="none"
          stroke="rgba(255,255,255,0.3)"
          strokeWidth={1.5}
          strokeDasharray="5 7"
        />
      </svg>

      {/* 2. Rotating container centered EXACTLY on the same (center, center) */}
      <motion.div
        animate={{ rotate: direction * 360 }}
        transition={{ duration: DURATION, repeat: Infinity, ease: "linear" }}
        style={{
          position: "absolute",
          inset: 0,
          transformOrigin: `${center}px ${center}px`,
        }}
      >
        {logos.map((logo, i) => {
          const angle = (2 * Math.PI * i) / logos.length;
          // Exact coordinates along the exact center radius of the circle
          const x = center + radius * Math.cos(angle);
          const y = center + radius * Math.sin(angle);

          return (
            <div
              key={logo.id}
              style={{
                position: "absolute",
                left: `${x}px`,
                top: `${y}px`,
                transform: "translate(-50%, -50%)",
              }}
            >
              {/* Counter-rotation to keep logo upright */}
              <motion.div
                animate={{ rotate: -direction * 360 }}
                transition={{ duration: DURATION, repeat: Infinity, ease: "linear" }}
                style={{
                  width: logoSize,
                  height: logoSize,
                  transformOrigin: "center center",
                }}
                className="flex items-center justify-center p-2.5 rounded-full bg-white shadow-2xl border-2 border-white/80 transition-transform hover:scale-110"
              >
                <div className="relative w-full h-full">
                  <Image
                    src={logo.logo}
                    alt={logo.name}
                    fill
                    sizes={`${logoSize}px`}
                    className="object-contain filter contrast-105"
                  />
                </div>
              </motion.div>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
}

// ── Mobile marquee fallback ────────────────────────────────────────────────
function MobileMarquee() {
  const marqueeLogos = [...CLIENT_LOGOS, ...CLIENT_LOGOS];
  return (
    <div className="relative w-full overflow-hidden py-6">
      <div className="absolute top-0 bottom-0 left-0 w-24 bg-gradient-to-r from-[#0A0A0A] to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-0 w-24 bg-gradient-to-l from-[#0A0A0A] to-transparent z-10 pointer-events-none" />
      <div className="animate-marquee-left items-center gap-6">
        {marqueeLogos.map((client, idx) => (
          <div
            key={`${client.id}-${idx}`}
            className="shrink-0 w-44 h-24 rounded-2xl bg-[#141414] border border-white/15 p-3.5 flex items-center justify-center shadow-lg"
          >
            <div className="relative w-full h-full">
              <Image
                src={client.logo}
                alt={client.name}
                fill
                className="object-contain opacity-95"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


// ── Main section ───────────────────────────────────────────────────────────
export default function ClientMarquee() {
  const [isDesktop,    setIsDesktop]    = useState(false);
  const [reducedMotion,setReducedMotion]= useState(false);

  useEffect(() => {
    const mq  = window.matchMedia("(min-width: 768px)");
    const rmq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setIsDesktop(mq.matches);
    setReducedMotion(rmq.matches);

    const onMq  = (e: MediaQueryListEvent) => setIsDesktop(e.matches);
    const onRmq = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener ("change", onMq);
    rmq.addEventListener("change", onRmq);
    return () => {
      mq.removeEventListener ("change", onMq);
      rmq.removeEventListener("change", onRmq);
    };
  }, []);

  // Split logos across the two rings
  const mid       = Math.ceil(CLIENT_LOGOS.length / 2);
  const pinkLogos = CLIENT_LOGOS.slice(0, mid);   // pink = left / front
  const tealLogos = CLIENT_LOGOS.slice(mid);       // teal = right / behind

  const containerWidth  = DIAMETER + OFFSET;
  const containerHeight = DIAMETER;

  return (
    <section
      id="client"
      className="relative py-20 px-4 sm:px-6 lg:px-8 bg-[#0A0A0A] overflow-hidden border-t border-b border-white/5"
    >
      <div className="max-w-7xl mx-auto relative z-10 space-y-12">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono font-bold uppercase tracking-wider text-[#0C9DA8]">
            <span>Our Clients</span>
            <span>•</span>
            <span>Driving Impact Across India</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Brands We Have <span className="text-[#0C9DA8]">Elevated</span>
          </h2>
          <p className="text-sm sm:text-base text-[#CBD5E1] font-light">
            Trusted by corporate leaders, automotive giants, healthcare networks, and regional visionaries.
          </p>
        </div>

        {/* Desktop: Dual Overlapping Orbit Rings */}
        {isDesktop && !reducedMotion ? (
          <div className="flex flex-col items-center gap-10">
            {/* Two overlapping rings — all sizes derived from the same DIAMETER + STROKE_RATIO */}
            <div
              className="relative mx-auto"
              style={{ width: containerWidth, height: containerHeight }}
            >
              {/* Pink ring — LEFT / FRONT (z-20) */}
              <OrbitCircle
                logos={pinkLogos}
                diameter={DIAMETER}
                color={PINK}
                style={{ left: 0, top: 0, zIndex: 20 }}
              />

              {/* Teal ring — RIGHT / BEHIND (z-10) */}
              <OrbitCircle
                logos={tealLogos}
                diameter={DIAMETER}
                color={TEAL}
                style={{ left: OFFSET, top: 0, zIndex: 10 }}
              />
            </div>

            <p className="text-xs text-white/40 tracking-widest uppercase font-mono">
              {CLIENT_LOGOS.length}+ brands trust Praaroop Media
            </p>
          </div>
        ) : (
          <MobileMarquee />
        )}
      </div>
    </section>
  );
}
