"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
  type MotionValue,
} from "framer-motion";
import {
  ArrowUpRight,
  Target,
  Compass,
  Megaphone,
  Globe,
  Share2,
  Code,
  Laptop,
  Cpu,
  Users,
  Flag,
  TrendingUp,
  Layers,
  Video as VideoIcon,
  Sparkles,
  Heart,
  Award,
  BarChart3,
} from "lucide-react";
import { BRAND } from "@/lib/data";

/* ── Card Data ────────────────────────────────────────────── */
const SERVICES = [
  {
    id: "brand-strategy",
    title: "Brand Strategy &\nPerformance",
    description:
      "Targeted ROI, brand authority, and data-driven audience conversion funnels.",
    videoSrc: "/services/videos/brand-strategy.mp4",
    imageSrc: "/services/analysis.webp",
    icons: [Target, BarChart3, Compass],
    chip: "ROI & Strategy",
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing &\nSocial Media",
    description:
      "Meta & Google performance campaigns, social growth, community engagement and analytics.",
    videoSrc: "/services/videos/social-marketing.mp4",
    imageSrc: "/services/social-media.webp",
    icons: [Megaphone, Globe, Share2],
    chip: "Social & Paid Ads",
  },
  {
    id: "website-development",
    title: "Website\nDevelopment",
    description:
      "High-speed responsive websites with modern UI/UX, conversion-focused experiences and SEO.",
    videoSrc: "/services/videos/web-development.mp4",
    imageSrc: "/services/app-development.webp",
    icons: [Code, Laptop, Cpu],
    chip: "Fullstack Web",
  },
  {
    id: "political-campaigns",
    title: "Political Campaigns\n& Narrative",
    description:
      "Constituency sentiment analytics, digital war rooms, voter outreach and strategic narrative building.",
    videoSrc: "/services/videos/political-campaign.mp4",
    imageSrc: "/services/banner.webp",
    icons: [Users, Flag, TrendingUp],
    chip: "Elections & PR",
  },
  {
    id: "content-marketing",
    title: "Content Marketing\n& Creation",
    description:
      "High-converting copy, scripts, visual storytelling, reels and brand identity assets.",
    videoSrc: "/services/videos/content-creation.mp4",
    imageSrc: "/services/content-creation.webp",
    icons: [Layers, VideoIcon, Sparkles],
    chip: "Creative & Media",
  },
  {
    id: "influencer-marketing",
    title: "Influencer\nMarketing",
    description:
      "Regional creator networks, brand ambassador partnerships and high-impact sponsored reach.",
    videoSrc: "/services/videos/influencer-marketing.mp4",
    imageSrc: "/services/influencer.webp",
    icons: [Sparkles, Heart, Award],
    chip: "Creator Networks",
  },
];

const N = SERVICES.length;
const ANGLE_STEP = 360 / N; // 60° per card for 6 cards

/* ── Geometry ──────────────────────────────────────────────
   For a regular N-polygon inscribed in a circle, the distance
   from center to the middle of each face (apothem) is:
     radius = (cardWidth / 2) / tan(π / N)
   For cardWidth ≈ 420px and N = 6:
     radius = 210 / tan(30°) = 210 / 0.5774 ≈ 364px
   We'll use 380px for a slightly tighter look.              */
const DRUM_RADIUS = 760;

/* ── Single Ring Card ─────────────────────────────────────── */
interface RingCardProps {
  card: (typeof SERVICES)[0];
  index: number;
  drumRotation: MotionValue<number>;
  onCardClick: (index: number) => void;
  reducedMotion: boolean;
}

function RingCard({
  card,
  index,
  drumRotation,
  onCardClick,
  reducedMotion,
}: RingCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  // Each card's fixed angle position on the ring
  const cardAngle = index * ANGLE_STEP; // 0°, 60°, 120°, ...

  // The card's effective facing angle relative to the viewer:
  // when drumRotation + cardAngle ≡ 0 (mod 360), the card faces front.
  const facingAngle = useTransform(drumRotation, (rot) => {
    let angle = (rot + cardAngle) % 360;
    if (angle > 180) angle -= 360;
    if (angle < -180) angle += 360;
    return angle;
  });

  // Text opacity: legible only when nearly front-facing (±30°)
  const textOpacity = useTransform(facingAngle, (a) =>
    Math.max(0, 1 - Math.abs(a) / 30)
  );

  return (
    <div
      onClick={() => onCardClick(index)}
      className="absolute top-1/2 left-1/2 w-[260px] h-[190px] sm:w-[300px] sm:h-[220px] md:w-[340px] md:h-[250px] lg:w-[370px] lg:h-[270px] -ml-[130px] sm:-ml-[150px] md:-ml-[170px] lg:-ml-[185px] -mt-[95px] sm:-mt-[110px] md:-mt-[125px] lg:-mt-[135px] rounded-[20px] overflow-hidden cursor-pointer select-none will-change-transform transform-gpu"
      style={{
        /* Each card is placed on the ring by:
           1. Rotating to its slot angle on the ring
           2. Pushing out from center by DRUM_RADIUS along Z
           The parent drum div rotates the whole ring. */
        transform: `rotateY(${cardAngle}deg) translateZ(${DRUM_RADIUS}px)`,
        transformStyle: "preserve-3d",
      }}
    >
      {/* Card inner wrapper with glassmorphism border */}
      <div className="relative w-full h-full rounded-[18px] overflow-hidden bg-white/[0.08] backdrop-blur-md border border-white/20 shadow-[0_12px_36px_rgba(0,0,0,0.6)]">
        {/* Background Media */}
        {!reducedMotion && card.videoSrc ? (
          <video
            ref={videoRef}
            src={card.videoSrc}
            poster={card.imageSrc}
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover filter brightness-[0.75] contrast-[1.05]"
          />
        ) : (
          <Image
            src={card.imageSrc}
            alt={card.title}
            fill
            className="absolute inset-0 w-full h-full object-cover filter brightness-[0.75] contrast-[1.05]"
          />
        )}

        {/* Dark gradient for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/5 pointer-events-none z-10" />

        {/* Top floating icons row */}
        <div className="relative z-20 p-3 md:p-3.5 flex items-center justify-between w-full pointer-events-none">
          <div className="flex gap-1.5">
            {card.icons.map((IconComp, idx) => (
              <div
                key={idx}
                className="w-6 h-6 md:w-7 md:h-7 rounded-full bg-white/15 backdrop-blur-md border border-white/20 flex items-center justify-center text-white shadow-sm"
              >
                <IconComp className="w-3 h-3 md:w-3.5 md:h-3.5 text-white/90" />
              </div>
            ))}
          </div>
          <div className="px-2.5 py-0.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-[9px] font-mono text-white/90">
            0{index + 1} / 0{N}
          </div>
        </div>

        {/* Card text content — fades sharply when card rotates away */}
        <motion.div
          style={{ opacity: textOpacity }}
          className="absolute inset-x-0 bottom-3.5 md:bottom-4 px-3.5 md:px-4 text-center z-20 pointer-events-none space-y-1"
        >
          <div className="inline-block px-2.5 py-0.5 rounded-full bg-[#0080CB]/40 border border-[#0080CB]/60 text-[9px] md:text-[10px] font-bold uppercase tracking-wider text-[#38BDF8] mb-0.5">
            {card.chip}
          </div>
          <h3 className="text-base sm:text-lg md:text-xl font-black text-white leading-tight drop-shadow-md whitespace-pre-line">
            {card.title}
          </h3>
          <p className="text-[10px] sm:text-[11px] text-white/85 font-light max-w-[260px] mx-auto line-clamp-2 leading-tight">
            {card.description}
          </p>
        </motion.div>
      </div>
    </div>
  );
}

/* ── Main Component ────────────────────────────────────────── */
export default function GrowthEngine3DCarousel() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeDot, setActiveDot] = useState(0);
  const [isDesktop, setIsDesktop] = useState(true);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 768);
    handleResize();
    window.addEventListener("resize", handleResize);

    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const cb = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener("change", cb);

    return () => {
      window.removeEventListener("resize", handleResize);
      mq.removeEventListener("change", cb);
    };
  }, []);

  /* ── Scroll progress ──────────────────────────────────── */
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // Map scroll [0→1] to drum rotation [0→ -(N-1)*60°]
  // Negative rotation so drum spins "forward" (next card comes from right)
  const drumRotation = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -(N - 1) * ANGLE_STEP]
  );

  // Active dot indicator
  useMotionValueEvent(drumRotation, "change", (rot) => {
    const idx = Math.round(Math.abs(rot) / ANGLE_STEP);
    setActiveDot(Math.min(idx, N - 1));
  });

  // Click-to-jump: scroll page to position matching that card index
  const scrollToIndex = useCallback(
    (index: number) => {
      if (!sectionRef.current) return;
      const top = sectionRef.current.offsetTop;
      const h = sectionRef.current.offsetHeight;
      const scrollDist = h - window.innerHeight;
      const target = top + (index / (N - 1)) * scrollDist;
      window.scrollTo({ top: target, behavior: "smooth" });
    },
    []
  );

  /* ── Reduced Motion Fallback ─────────────────────────── */
  if (reducedMotion) {
    return (
      <section
        id="services"
        className="relative w-full bg-[#050505] text-white py-24 px-4 border-t border-white/5"
      >
        <div className="max-w-5xl mx-auto text-center mb-12">
          <span className="block text-xs md:text-sm font-light uppercase tracking-widest text-[#0080CB] mb-2">
            our
          </span>
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-white leading-none">
            <span className="text-[#0080CB]">360°</span> Digital Capabilities
          </h2>
        </div>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {SERVICES.map((card) => (
            <div
              key={card.id}
              className="rounded-[20px] overflow-hidden bg-white/[0.08] border border-white/20 p-6 flex flex-col justify-end min-h-[300px] relative"
            >
              <Image
                src={card.imageSrc}
                alt={card.title}
                fill
                className="object-cover brightness-[0.7] -z-10"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent -z-10" />
              <h3 className="text-xl font-bold text-white mb-2 whitespace-pre-line">
                {card.title}
              </h3>
              <p className="text-sm text-white/80">{card.description}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }

  /* ── Mobile Fallback: Horizontal scroll-snap ──────────── */
  if (!isDesktop) {
    return (
      <section
        id="services"
        className="relative w-full bg-[#050505] text-white py-16 px-4 border-t border-white/5"
      >
        <div className="text-center mb-8">
          <span className="block text-xs font-light uppercase tracking-widest text-[#0080CB] mb-1">
            our
          </span>
          <h2 className="text-3xl font-black uppercase tracking-tight text-white leading-none">
            <span className="text-[#0080CB]">360°</span> Digital Capabilities
          </h2>
        </div>

        <div className="w-full flex gap-4 overflow-x-auto snap-x snap-mandatory py-4 px-2 scrollbar-none">
          {SERVICES.map((card, i) => (
            <div
              key={card.id}
              className="min-w-[85vw] h-[440px] snap-center rounded-[24px] overflow-hidden bg-white/[0.06] backdrop-blur-sm border border-white/15 relative flex-shrink-0 flex flex-col justify-between p-5 shadow-xl"
            >
              {card.videoSrc ? (
                <video
                  src={card.videoSrc}
                  poster={card.imageSrc}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover brightness-[0.72] -z-10"
                />
              ) : (
                <Image
                  src={card.imageSrc}
                  alt={card.title}
                  fill
                  className="absolute inset-0 w-full h-full object-cover brightness-[0.72] -z-10"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent -z-10" />

              <div className="flex items-center justify-between">
                <div className="flex gap-1.5">
                  {card.icons.map((IC, idx) => (
                    <div
                      key={idx}
                      className="w-7 h-7 rounded-full bg-white/15 backdrop-blur-md border border-white/20 flex items-center justify-center"
                    >
                      <IC className="w-3.5 h-3.5 text-white/90" />
                    </div>
                  ))}
                </div>
                <span className="px-2 py-0.5 rounded-full bg-black/50 text-[10px] font-mono text-white/80 border border-white/10">
                  0{i + 1} / 0{N}
                </span>
              </div>

              <div className="space-y-1 text-center">
                <span className="inline-block px-2 py-0.5 rounded-full bg-[#0080CB]/30 border border-[#0080CB]/50 text-[10px] font-bold uppercase tracking-wider text-[#38BDF8]">
                  {card.chip}
                </span>
                <h3 className="text-xl font-black text-white leading-tight whitespace-pre-line">
                  {card.title}
                </h3>
                <p className="text-xs text-white/85 font-light line-clamp-2 leading-relaxed">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }

  /* ── Desktop: True 3D Ring Carousel ──────────────────── */
  return (
    <section
      id="services"
      ref={sectionRef}
      className="relative w-full bg-[#050505] text-white border-t border-white/5"
      style={{ height: `${N * 100}vh` }}
    >
      {/* Sticky viewport — pins for the entire scroll budget with perfect 50% vertical centering */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center px-4 z-20">
        {/* Ambient glow behind the ring */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[700px] bg-[radial-gradient(ellipse_at_center,_rgba(0,128,203,0.14),_transparent_65%)] pointer-events-none z-0" />

        {/* 3D Perspective Stage — balanced optical center */}
        <div
          className="relative w-full max-w-[1400px] h-full flex items-center justify-center translate-y-6 sm:translate-y-8 md:translate-y-10"
          style={{
            perspective: "1600px",
            perspectiveOrigin: "50% 50%",
            transformStyle: "preserve-3d",
          }}
        >
          {/* Centered Heading at Z = 0: Behind front cards (+Z), in front of back cards (-Z) */}
          <div
            className="absolute pointer-events-none select-none text-center flex flex-col items-center justify-center"
            style={{
              transform: "translateZ(0px)",
              transformStyle: "preserve-3d",
            }}
          >
            <div
              className="absolute inset-0 -m-16 rounded-full bg-[radial-gradient(circle,_rgba(0,128,203,0.3)_0%,_transparent_70%)] blur-2xl pointer-events-none"
              style={{ transform: "translateZ(-5px)" }}
            />
            <span className="block font-mono text-xs sm:text-sm font-bold uppercase tracking-[0.3em] text-[#0C9DA8] mb-2 drop-shadow-[0_0_10px_rgba(12,157,168,0.6)]">
              OUR CORE
            </span>
            <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight text-white leading-none font-display">
              <span className="text-[#0080CB] drop-shadow-[0_0_25px_rgba(0,128,203,0.5)]">
                360°
              </span>
              <br />
              <span className="text-white drop-shadow-md">Digital</span>
              <br />
              <span className="text-[#D10B6A] text-3xl sm:text-5xl md:text-6xl lg:text-7xl drop-shadow-[0_0_25px_rgba(209,11,106,0.6)]">
                Services
              </span>
            </h2>
          </div>

          {/* The Drum — 3D orbital ring rotating around Z=0 */}
          <motion.div
            className="relative w-0 h-0"
            style={{
              transformStyle: "preserve-3d",
              rotateY: drumRotation,
            }}
          >
            {SERVICES.map((card, i) => (
              <RingCard
                key={card.id}
                card={card}
                index={i}
                drumRotation={drumRotation}
                onCardClick={scrollToIndex}
                reducedMotion={reducedMotion}
              />
            ))}
          </motion.div>
        </div>


        {/* Progress Dots Navigation — absolutely anchored at bottom without pushing stage */}
        <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-30 select-none pointer-events-auto">
          <div className="flex items-center gap-2.5 bg-black/40 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/10 shadow-lg">
            {SERVICES.map((_, idx) => (
              <button
                key={idx}
                onClick={() => scrollToIndex(idx)}
                aria-label={`Jump to service ${idx + 1}`}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  activeDot === idx
                    ? "w-7 bg-[#0080CB] shadow-[0_0_12px_rgba(0,128,203,0.8)]"
                    : "w-2 bg-white/30 hover:bg-white/60"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


