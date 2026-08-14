"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { ArrowLeft, ArrowRight, ArrowUpRight, Sparkles } from "lucide-react";
import { DIGITAL_MARKETING_ITEMS, BRAND } from "@/lib/data";
import styles from "./ServicesHeroSlider.module.css";

const SERVICES_DATA = [
  {
    number: "01",
    title: DIGITAL_MARKETING_ITEMS[0], // Brand strategy / Performance marketing
    subtitle:
      "We help you dominate market positioning, ROI, and brand authority with data-driven performance campaigns tailored to elevate brand value.",
    image: "/services/analysis.webp",
    badges: [
      "Market Analysis",
      "ROI Optimization",
      "Brand Positioning",
      "Performance Ads",
    ],
  },
  {
    number: "02",
    title: DIGITAL_MARKETING_ITEMS[1], // Digital marketing / Social media marketing
    subtitle:
      "Comprehensive social media management, organic viral growth, and targeted multi-platform digital ad strategies built for maximum conversion.",
    image: "/services/social-media.webp",
    badges: [
      "Social Media",
      "Paid Campaigns",
      "Audience Growth",
      "Viral Engagement",
    ],
  },
  {
    number: "03",
    title: DIGITAL_MARKETING_ITEMS[2], // Website Development
    subtitle:
      "High-converting, fast-loading digital web platforms designed with modern aesthetics, smooth scrollytelling animations, and seamless UX.",
    image: "/services/app-development.webp",
    badges: [
      "Modern Web",
      "SEO Optimized",
      "Interactive UX",
      "Next.js & React",
    ],
  },
  {
    number: "04",
    title: DIGITAL_MARKETING_ITEMS[3], // Political Campaign/ Narrative Building
    subtitle:
      "Strategic constituency sentiment mapping, narrative building, public relations management, and high-impact digital political outreach.",
    image: "/services/corporate.webp",
    badges: [
      "Constituency PR",
      "Public Relations",
      "Narrative Building",
      "Voter Outreach",
    ],
  },
  {
    number: "05",
    title: DIGITAL_MARKETING_ITEMS[4], // Content Marketing / Content Creation
    subtitle:
      "Captivating copywriting, high-definition video production, graphics, and multi-channel storytelling that converts viewers into loyal advocates.",
    image: "/services/content-creation.webp",
    badges: [
      "Video Production",
      "Copywriting",
      "Visual Assets",
      "Multi-Channel",
    ],
  },
  {
    number: "06",
    title: DIGITAL_MARKETING_ITEMS[5], // Influencer Marketing
    subtitle:
      "KOL and regional creator partnerships that drive authentic brand recommendations and massive localized engagement across Rajasthan & India.",
    image: "/services/influencer.webp",
    badges: [
      "Creator Network",
      "Regional KOLs",
      "Viral Campaigns",
      "Brand Advocacy",
    ],
  },
];

export default function ServicesHeroSlider() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check screen size & reduced motion
  useEffect(() => {
    const checkSettings = () => {
      setIsMobile(window.innerWidth < 1024);
      setReducedMotion(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
    };

    checkSettings();
    window.addEventListener("resize", checkSettings);
    return () => window.removeEventListener("resize", checkSettings);
  }, []);

  // Track vertical scroll progress inside tall 500vh container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Calculate active tile index smoothly as user scrolls down the locked pinned viewport
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (reducedMotion || isMobile) return;
    
    // Map 0 -> 1 progress into 0 -> 5 index range
    const clampedProgress = Math.max(0, Math.min(0.999, latest));
    const newIdx = Math.floor(clampedProgress * SERVICES_DATA.length);

    if (newIdx !== activeIndex && newIdx >= 0 && newIdx < SERVICES_DATA.length) {
      setActiveIndex(newIdx);
    }
  });

  const handleNext = () => {
    setActiveIndex((prev) => (prev === SERVICES_DATA.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? SERVICES_DATA.length - 1 : prev - 1));
  };

  const badgePositions = [
    styles.badgeTopLeft,
    styles.badgeTopRight,
    styles.badgeBottomLeft,
    styles.badgeBottomRight,
  ];

  return (
    <div ref={containerRef} className={styles.sectionWrapper}>
      <div className={styles.stickyViewport}>
        
        {/* 3D Pinned Deck Container (Appinventiv Style) */}
        <div className={styles.deckContainer}>
          {SERVICES_DATA.map((service, i) => {
            // Calculate relative offset from active card
            let diff = i - activeIndex;

            // Compute 3D Card Animation Properties
            let x = "0%";
            let scale = 1;
            let opacity = 1;
            let zIndex = 30;
            let rotateY = 0;
            let blur = "blur(0px)";

            if (diff === 0) {
              // Active Center Card
              x = "0%";
              scale = 1;
              opacity = 1;
              zIndex = 30;
              rotateY = 0;
              blur = "blur(0px)";
            } else if (diff === -1 || (activeIndex === 0 && i === SERVICES_DATA.length - 1)) {
              // Peeking Left Card
              x = "-65%";
              scale = 0.78;
              opacity = 0.45;
              zIndex = 10;
              rotateY = 12;
              blur = "blur(2px)";
            } else if (diff === 1 || (activeIndex === SERVICES_DATA.length - 1 && i === 0)) {
              // Peeking Right Card
              x = "65%";
              scale = 0.78;
              opacity = 0.45;
              zIndex = 10;
              rotateY = -12;
              blur = "blur(2px)";
            } else {
              // Hidden offscreen cards
              x = diff < 0 ? "-130%" : "130%";
              scale = 0.6;
              opacity = 0;
              zIndex = 1;
              rotateY = 0;
              blur = "blur(4px)";
            }

            const isActive = diff === 0;

            return (
              <motion.div
                key={service.number}
                onClick={() => setActiveIndex(i)}
                animate={
                  reducedMotion
                    ? { opacity: isActive ? 1 : 0 }
                    : { x, scale, opacity, zIndex, rotateY, filter: blur }
                }
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 28,
                  mass: 0.8,
                }}
                className={styles.cardFrame}
              >
                {/* Full Bleed Background Image */}
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  priority={i === 0}
                  className={styles.bgImage}
                />

                {/* Dark Gradient Scrim */}
                <div className={styles.scrimOverlay} />

                {/* 4 Floating Badges around Card Edges (Shown on Active Center Card) */}
                {isActive &&
                  service.badges.map((badgeText, idx) => (
                    <div
                      key={badgeText}
                      className={`${styles.floatingBadge} ${badgePositions[idx % badgePositions.length]}`}
                    >
                      <Sparkles className="w-3 h-3 text-[#0080CB]" />
                      <span>{badgeText}</span>
                    </div>
                  ))}

                {/* Centered Content */}
                <div className={styles.cardContent}>
                  <div className={styles.eyebrow}>
                    <span>SERVICE {service.number} / 06</span>
                  </div>

                  <h3 className={styles.heading}>{service.title}</h3>

                  <p className={styles.subtitle}>{service.subtitle}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Navigation Controls Bar Below 3D Deck (Exact Appinventiv Reference Match) */}
        <div className={styles.controlsBar}>
          {/* Left Arrow Button */}
          <button
            onClick={handlePrev}
            className={styles.navButton}
            aria-label="Previous Service"
          >
            <ArrowLeft className="w-6 h-6 text-[#0B1220]" />
          </button>

          {/* Center Pill Button */}
          <a
            href={BRAND.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.centerCtaPill}
          >
            <span>Tell Us What You're Looking For</span>
            <ArrowUpRight className="w-4 h-4 text-[#FFE600]" />
          </a>

          {/* Right Arrow Button */}
          <button
            onClick={handleNext}
            className={styles.navButton}
            aria-label="Next Service"
          >
            <ArrowRight className="w-6 h-6 text-[#0B1220]" />
          </button>
        </div>

        {/* Indicator Dots */}
        <div className={styles.dotsWrapper}>
          {SERVICES_DATA.map((service, idx) => (
            <button
              key={service.number}
              onClick={() => setActiveIndex(idx)}
              className={`${styles.dot} ${activeIndex === idx ? styles.activeDot : ""}`}
              aria-label={`Go to service ${service.number}`}
            />
          ))}
        </div>

      </div>
    </div>
  );
}
