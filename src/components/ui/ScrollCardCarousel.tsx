"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export interface CarouselCard {
  id:          string;
  icon:        React.ReactNode;
  title:       string;
  description: string;
  accentColor: string;
  footer?:     React.ReactNode;
}

interface ScrollCardCarouselProps {
  cards: CarouselCard[];
  /** dark | light — controls section background */
  theme?: "dark" | "light";
}

export default function ScrollCardCarousel({
  cards,
  theme = "light",
}: ScrollCardCarouselProps) {
  const sectionRef  = useRef<HTMLDivElement>(null);
  const trackRef    = useRef<HTMLDivElement>(null);
  const cardRefs    = useRef<(HTMLDivElement | null)[]>([]);

  const isDark  = theme === "dark";
  const bg      = isDark ? "bg-[#080808]" : "bg-[#FAFAFC]";
  const cardBg  = isDark ? "#111111"      : "#ffffff";
  const textHd  = isDark ? "#ffffff"      : "#0F172A";
  const textBdy = isDark ? "#94A3B8"      : "#475569";

  useEffect(() => {
    const section = sectionRef.current;
    const track   = trackRef.current;
    if (!section || !track) return;

    const n        = cards.length;
    const cardEls  = cardRefs.current.filter(Boolean) as HTMLDivElement[];

    const ctx = gsap.context(() => {
      // ── Desktop: 3D flip carousel ──────────────────────────────────────
      const mm = gsap.matchMedia();

      mm.add("(min-width: 768px) and (prefers-reduced-motion: no-preference)", () => {
        // Set initial state: cards stacked, rotated away, slightly to the right
        gsap.set(cardEls, {
          position:   "absolute",
          top:        "50%",
          left:       "50%",
          xPercent:   -50,
          yPercent:   -50,
          rotateY:    (i) => (i === 0 ? 0 : 90),
          opacity:    (i) => (i === 0 ? 1 : 0),
          scale:      (i) => (i === 0 ? 1 : 0.85),
          z:          0,
        });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger:          section,
            start:            "top top",
            end:              () => `+=${n * window.innerHeight * 0.75}`,
            pin:              true,
            scrub:            0.6,
            invalidateOnRefresh: true,
          },
        });

        // For each transition between card i → i+1
        for (let i = 0; i < n - 1; i++) {
          const outCard = cardEls[i];
          const inCard  = cardEls[i + 1];

          const step = 1 / (n - 1); // fraction of tl per card

          tl.to(
            outCard,
            {
              rotateY:  -90,
              opacity:  0,
              scale:    0.85,
              x:        "-15%",
              duration: step,
              ease:     "power2.inOut",
            },
            i * step
          ).fromTo(
            inCard,
            { rotateY: 90, opacity: 0, scale: 0.85, x: "15%" },
            {
              rotateY:  0,
              opacity:  1,
              scale:    1,
              x:        "0%",
              duration: step,
              ease:     "power2.inOut",
            },
            i * step          // starts at the same moment the previous card exits
          );
        }

        return () => { tl.scrollTrigger?.kill(); };
      });

      // ── Mobile: simple stagger-fade, no pin ───────────────────────────
      mm.add("(max-width: 767px), (prefers-reduced-motion: reduce)", () => {
        gsap.set(cardEls, { position: "relative", top: "auto", left: "auto", xPercent: 0, yPercent: 0 });

        cardEls.forEach((el, i) => {
          gsap.from(el, {
            opacity:  0,
            y:        40,
            duration: 0.6,
            delay:    i * 0.1,
            scrollTrigger: {
              trigger:  el,
              start:    "top 85%",
              once:     true,
            },
          });
        });

        return () => ScrollTrigger.getAll().forEach((st) => st.kill());
      });
    }, section);

    const timeout = setTimeout(() => ScrollTrigger.refresh(), 200);

    return () => {
      ctx.revert();
      clearTimeout(timeout);
    };
  }, [cards.length]);

  return (
    <div ref={sectionRef} className="relative w-full">
      {/* ── Desktop 3D Stage ── */}
      <div
        className="hidden md:block"
        style={{
          height:           "100vh",
          perspective:      "1200px",
          perspectiveOrigin:"50% 50%",
        }}
      >
        {/* Track — full section height, cards positioned absolutely inside */}
        <div
          ref={trackRef}
          className="relative w-full h-full flex items-center justify-center"
          style={{ transformStyle: "preserve-3d" }}
        >
          {cards.map((card, i) => (
            <div
              key={card.id}
              ref={(el) => { cardRefs.current[i] = el; }}
              style={{
                transformStyle:  "preserve-3d",
                backfaceVisibility: "hidden",
                willChange:      "transform, opacity",
                width:           "clamp(300px, 38vw, 500px)",
                background:      cardBg,
                borderRadius:    "24px",
                boxShadow:       "0 25px 60px rgba(0,0,0,0.18)",
                border:          `1px solid ${isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.06)"}`,
                padding:         "2.5rem",
                display:         "flex",
                flexDirection:   "column",
                gap:             "1.25rem",
              }}
            >
              <CardContent card={card} textHd={textHd} textBdy={textBdy} isDark={isDark} />
            </div>
          ))}
        </div>
      </div>

      {/* ── Mobile simple stack ── */}
      <div className="flex flex-col gap-6 md:hidden">
        {cards.map((card, i) => (
          <div
            key={card.id}
            ref={(el) => { cardRefs.current[i] = el; }}
            style={{
              background:   cardBg,
              borderRadius: "20px",
              border:       `1px solid ${isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.06)"}`,
              boxShadow:    "0 8px 24px rgba(0,0,0,0.08)",
              padding:      "1.75rem",
              display:      "flex",
              flexDirection:"column",
              gap:          "1rem",
            }}
          >
            <CardContent card={card} textHd={textHd} textBdy={textBdy} isDark={isDark} />
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Shared card interior ───────────────────────────────────────────────────
function CardContent({
  card,
  textHd,
  textBdy,
  isDark,
}: {
  card:    CarouselCard;
  textHd:  string;
  textBdy: string;
  isDark:  boolean;
}) {
  return (
    <>
      <div
        className="w-14 h-14 rounded-2xl flex items-center justify-center"
        style={{
          background:  `${card.accentColor}18`,
          border:      `1px solid ${card.accentColor}30`,
          boxShadow:   `0 0 20px ${card.accentColor}22`,
        }}
      >
        <span style={{ color: card.accentColor }}>{card.icon}</span>
      </div>

      <h3
        className="text-xl font-bold font-display tracking-tight"
        style={{ color: textHd }}
      >
        {card.title}
      </h3>

      <p
        className="text-sm leading-relaxed font-normal flex-1"
        style={{ color: textBdy }}
      >
        {card.description}
      </p>

      {card.footer && (
        <div
          className="pt-4 border-t"
          style={{ borderColor: isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.06)" }}
        >
          {card.footer}
        </div>
      )}
    </>
  );
}
