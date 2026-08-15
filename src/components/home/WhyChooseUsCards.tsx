"use client";

import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Compass, Lightbulb, Cpu, HeartHandshake, CheckCircle2 } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const CARDS = [
  {
    title:       "Strategic Excellence",
    desc:        "We take a tailored approach to every project, ensuring our strategies align with your goals and resonate with your audience.",
    Icon:        Compass,
    accentColor: "#0080CB",
  },
  {
    title:       "Creative Brilliance",
    desc:        "Our team of designers, storytellers, and strategists push the boundaries of creativity to make your brand unforgettable.",
    Icon:        Lightbulb,
    accentColor: "#0C9DA8",
  },
  {
    title:       "Technology-Driven Solutions",
    desc:        "Leveraging the latest tools and trends, we deliver innovative solutions that stay ahead of the curve.",
    Icon:        Cpu,
    accentColor: "#D10B6A",
  },
  {
    title:       "Client-Centric Focus",
    desc:        "Your success is our priority. We work closely with you, building relationships based on trust, transparency, and shared vision.",
    Icon:        HeartHandshake,
    accentColor: "#0080CB",
  },
];

export default function WhyChooseUsCards() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardRefs   = useRef<(HTMLDivElement | null)[]>([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      // ── Desktop: 3D scrubbed flip carousel ──────────────────────────────
      mm.add("(min-width: 768px) and (prefers-reduced-motion: no-preference)", () => {
        const n      = CARDS.length;
        const cards  = cardRefs.current.filter(Boolean) as HTMLDivElement[];

        // All cards start stacked at center, rotated away
        gsap.set(cards, {
          position:   "absolute",
          top:        "50%",
          left:       "50%",
          xPercent:   -50,
          yPercent:   -50,
          rotateY:    (i) => (i === 0 ? 0 : 90),
          opacity:    (i) => (i === 0 ? 1 : 0),
          scale:      (i) => (i === 0 ? 1 : 0.85),
        });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger:          sectionRef.current,
            start:            "top top",
            end:              () => `+=${n * window.innerHeight * 0.8}`,
            pin:              true,
            scrub:            0.8,
            invalidateOnRefresh: true,
            // markers: true,  // ← enable temporarily to debug start/end positions
          },
        });

        for (let i = 0; i < n - 1; i++) {
          const step     = 1 / (n - 1);
          const outCard  = cards[i];
          const inCard   = cards[i + 1];

          // Outgoing: flip from 0° → -90° and fade + scale down
          tl.to(
            outCard,
            { rotateY: -90, opacity: 0, scale: 0.85, duration: step, ease: "power2.inOut" },
            i * step
          );

          // Incoming: flip from +90° → 0° and fade + scale up, starts simultaneously
          tl.fromTo(
            inCard,
            { rotateY: 90, opacity: 0, scale: 0.85 },
            { rotateY: 0,  opacity: 1, scale: 1,    duration: step, ease: "power2.inOut" },
            i * step
          );
        }

        return () => { tl.scrollTrigger?.kill(); };
      });

      // ── Mobile / reduced-motion: simple stagger-fade vertical stack ─────
      mm.add("(max-width: 767px), (prefers-reduced-motion: reduce)", () => {
        // Reset inline styles so cards flow normally
        gsap.set(cardRefs.current.filter(Boolean) as HTMLDivElement[], {
          clearProps: "all",
        });

        cardRefs.current.forEach((card) => {
          if (!card) return;
          gsap.from(card, {
            opacity:  0,
            y:        36,
            duration: 0.55,
            ease:     "power2.out",
            scrollTrigger: {
              trigger: card,
              start:   "top 88%",
              once:    true,
            },
          });
        });

        return () => ScrollTrigger.getAll().forEach((st) => st.kill());
      });
    }, sectionRef);

    const timeout = setTimeout(() => ScrollTrigger.refresh(), 300);

    return () => {
      ctx.revert();
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      style={{ perspective: "1200px", overflow: "hidden", position: "relative" }}
      className="w-full"
    >
      {/* ── Desktop 3D stage: fixed-height viewport well ── */}
      <div
        className="hidden md:block relative"
        style={{ height: "100vh" }}
      >
        {CARDS.map((card, i) => (
          <div
            key={card.title}
            ref={(el) => { cardRefs.current[i] = el; }}
            style={{
              transformStyle:     "preserve-3d",
              backfaceVisibility: "hidden",
              willChange:         "transform, opacity",
              width:              "clamp(300px, 36vw, 480px)",
              padding:            "2.5rem",
              borderRadius:       "24px",
              background:         "#ffffff",
              boxShadow:          "0 20px 60px rgba(0,0,0,0.12)",
              border:             "1px solid rgba(0,0,0,0.06)",
            }}
          >
            <CardInner card={card} />
          </div>
        ))}
      </div>

      {/* ── Mobile stacked list ── */}
      <div className="flex flex-col gap-5 md:hidden">
        {CARDS.map((card, i) => (
          <div
            key={card.title}
            ref={(el) => { cardRefs.current[i] = el; }}
            style={{
              padding:      "1.75rem",
              borderRadius: "20px",
              background:   "#ffffff",
              boxShadow:    "0 8px 24px rgba(0,0,0,0.07)",
              border:       "1px solid rgba(0,0,0,0.06)",
            }}
          >
            <CardInner card={card} />
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Shared card inner content ──────────────────────────────────────────────
function CardInner({ card }: { card: typeof CARDS[0] }) {
  return (
    <div className="flex flex-col gap-4">
      <div
        className="w-14 h-14 rounded-2xl flex items-center justify-center"
        style={{
          background: `${card.accentColor}18`,
          border:     `1px solid ${card.accentColor}30`,
          boxShadow:  `0 0 18px ${card.accentColor}20`,
        }}
      >
        <card.Icon className="w-7 h-7" style={{ color: card.accentColor }} />
      </div>

      <h3 className="text-xl font-bold text-slate-900 font-display tracking-tight">
        {card.title}
      </h3>

      <p className="text-sm text-slate-600 leading-relaxed">
        {card.desc}
      </p>

      <div
        className="pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-[#0080CB]"
      >
        <CheckCircle2 className="w-4 h-4 text-[#0C9DA8]" />
        <span>Proven Performance Strategy</span>
      </div>
    </div>
  );
}
