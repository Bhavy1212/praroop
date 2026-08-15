"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { CLIENT_LOGOS } from "@/lib/data";

// ── Brand colours ──────────────────────────────────────────────────────────
const PINK = "#D10B6A";
const TEAL = "#0C9DA8";

// ── Single source of truth for ring geometry ──────────────────────────────
// Change DIAMETER or STROKE_RATIO here — everything else is derived.
const DIAMETER     = 420;
const STROKE_RATIO = 0.18;  // ring band as fraction of diameter (tune to taste)

function getRingConfig(diameter: number, strokeRatio: number) {
  const strokeWidth       = diameter * strokeRatio;
  const outerRadius       = diameter / 2;
  const centerlineRadius  = outerRadius - strokeWidth / 2; // logos orbit exactly HERE
  const logoSize          = Math.round(strokeWidth * 0.80); // logos fill ~80% of band
  return { strokeWidth, outerRadius, centerlineRadius, logoSize };
}

// ── Overlap geometry (measured from the actual Praaroop logo) ─────────────
const OFFSET   = Math.round(DIAMETER * 0.518); // center-to-center ≈ 51.8% of diameter
const DURATION = 22; // seconds per full revolution

// ── Ring element ──────────────────────────────────────────────────────────
// Outer wrapper is the positioning context (no border, no offset math).
// The visual ring is a separate absolutely-positioned child — purely decorative.
// This keeps pivot top/left calculations clean (always diameter/2 from wrapper corner).
function OrbitCircle({
  logos,
  diameter,
  color,
  style,
}: {
  logos:    typeof CLIENT_LOGOS;
  diameter: number;
  color:    string;
  style:    React.CSSProperties;
}) {
  const { strokeWidth, centerlineRadius, logoSize } = getRingConfig(diameter, STROKE_RATIO);

  return (
    /* Outer wrapper — positioning context, exactly diameter × diameter, no border */
    <div style={{ ...style, position: "absolute", width: diameter, height: diameter }}>

      {/* Visual ring — purely decorative, pointer-events:none so it doesn't interfere */}
      <div
        style={{
          position:    "absolute",
          inset:       0,
          borderRadius:"50%",
          border:      `${strokeWidth}px solid ${color}`,
          boxSizing:   "border-box",
          pointerEvents:"none",
        }}
      />

      {/* Pivot elements — top/left are exact pixels from wrapper corner, no border math */}
      {logos.map((logo, i) => {
        const angleOffset = (360 / logos.length) * i;
        const delay       = -((DURATION / logos.length) * i);

        return (
          <div
            key={logo.id}
            className="orbit-pivot"
            style={{
              position:          "absolute",
              top:               diameter / 2,   // exact pixel center of wrapper
              left:              diameter / 2,   // exact pixel center of wrapper
              width:             0,
              height:            0,
              transform:         `rotate(${angleOffset}deg)`,
              animationDuration: `${DURATION}s`,
              animationDelay:    `${delay}s`,
            }}
          >
            {/* centerlineRadius is derived from the same config as the ring stroke */}
            <div style={{ transform: `translateX(${centerlineRadius}px)` }}>
              <div
                className="orbit-logo-counter-spin"
                style={{ animationDuration: `${DURATION}s`, animationDelay: `${delay}s` }}
              >
                <div
                  style={{ width: logoSize, height: logoSize }}
                  className="-translate-x-1/2 -translate-y-1/2 flex items-center justify-center"
                >
                  <Image
                    src={logo.logo}
                    alt={logo.name}
                    width={logoSize}
                    height={logoSize}
                    className="object-contain w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}


// ── Mobile marquee fallback ────────────────────────────────────────────────
function MobileMarquee() {
  const marqueeLogos = [...CLIENT_LOGOS, ...CLIENT_LOGOS];
  return (
    <div className="relative w-full overflow-hidden py-4">
      <div className="absolute top-0 bottom-0 left-0 w-20 bg-gradient-to-r from-[#0A0A0A] to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-0 w-20 bg-gradient-to-l from-[#0A0A0A] to-transparent z-10 pointer-events-none" />
      <div className="animate-marquee-left items-center gap-6">
        {marqueeLogos.map((client, idx) => (
          <div
            key={`${client.id}-${idx}`}
            className="shrink-0 w-36 h-20 rounded-xl bg-[#111] border border-white/10 p-3 flex items-center justify-center"
          >
            <div className="relative w-full h-full">
              <Image
                src={client.logo}
                alt={client.name}
                fill
                className="object-contain opacity-80"
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
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-wider text-[#0C9DA8]">
            Driving Impact On a Global Scale
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Brands We Have <span className="text-gradient-tri">Elevated</span>
          </h2>
          <p className="text-sm sm:text-base text-[#CBD5E1]">
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
