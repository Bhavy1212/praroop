"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight, ArrowUpRight, Sparkles } from "lucide-react";
import { DIGITAL_MARKETING_ITEMS, BRAND } from "@/lib/data";
import styles from "./ServicesHeroSlider.module.css";

const SERVICES_DATA = [
  {
    number: "01",
    title: DIGITAL_MARKETING_ITEMS[0], // Brand strategy / Performance marketing
    subtitle:
      "Data-driven performance campaigns and long-term brand positioning built to capture market share and maximize return on ad spend.",
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
      "Comprehensive social media management, organic viral growth, and targeted multi-platform digital ad strategies.",
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
      "High-converting, fast-loading digital web platforms designed with modern aesthetics, animations, and seamless UX.",
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
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState<"next" | "prev">("next");
  const [animatingKey, setAnimatingKey] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setReducedMotion(e.matches);
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const handleNext = () => {
    setSlideDirection("next");
    setCurrentIndex((prev) => (prev === SERVICES_DATA.length - 1 ? 0 : prev + 1));
    setAnimatingKey((prev) => prev + 1);
  };

  const handlePrev = () => {
    setSlideDirection("prev");
    setCurrentIndex((prev) => (prev === 0 ? SERVICES_DATA.length - 1 : prev - 1));
    setAnimatingKey((prev) => prev + 1);
  };

  const activeService = SERVICES_DATA[currentIndex];

  const badgePositions = [
    styles.badgeTopLeft,
    styles.badgeTopRight,
    styles.badgeBottomLeft,
    styles.badgeBottomRight,
  ];

  return (
    <div className={styles.container}>
      {/* 1. Large Animated Hero-Style Rounded Card */}
      <div className={styles.cardWrapper}>
        {/* Full-Bleed Background Image */}
        <Image
          key={activeService.image}
          src={activeService.image}
          alt={activeService.title}
          fill
          priority
          sizes="(max-width: 900px) 100vw, 900px"
          className={styles.bgImage}
        />

        {/* Dark Gradient Scrim Overlay */}
        <div className={styles.scrimOverlay} />

        {/* 4 Floating Pill Badges around card edges */}
        {activeService.badges.map((badgeText, idx) => (
          <div
            key={`${badgeText}-${currentIndex}`}
            className={`${styles.floatingBadge} ${badgePositions[idx % badgePositions.length]}`}
          >
            <Sparkles className="w-3 h-3 text-[#0080CB]" />
            <span>{badgeText}</span>
          </div>
        ))}

        {/* Centered Text Overlay with Directional Slide + Fade */}
        <div
          key={animatingKey}
          className={`${styles.contentOverlay} ${
            reducedMotion
              ? ""
              : slideDirection === "next"
              ? styles.slideEnterNext
              : styles.slideEnterPrev
          }`}
        >
          {/* Eyebrow Label */}
          <div className={styles.eyebrow}>
            <span>SERVICE {activeService.number} / 06</span>
          </div>

          {/* Large Bold Heading */}
          <h3 className={styles.heading}>{activeService.title}</h3>

          {/* Subtitle */}
          <p className={styles.subtitle}>{activeService.subtitle}</p>
        </div>
      </div>

      {/* 2. Controls Bar Below Card */}
      <div className={styles.controlsBar}>
        {/* Left Arrow Button */}
        <button
          onClick={handlePrev}
          className={styles.navButton}
          aria-label="Previous Service"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>

        {/* Center CTA Pill */}
        <a
          href={BRAND.whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.centerCtaPill}
        >
          <span>Explore Our Services</span>
          <ArrowUpRight className="w-4 h-4" />
        </a>

        {/* Right Arrow Button */}
        <button
          onClick={handleNext}
          className={styles.navButton}
          aria-label="Next Service"
        >
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>

      {/* 3. Indicator Dots */}
      <div className={styles.dotsWrapper} aria-label="Service Selector">
        {SERVICES_DATA.map((service, idx) => (
          <button
            key={service.number}
            onClick={() => {
              setSlideDirection(idx > currentIndex ? "next" : "prev");
              setCurrentIndex(idx);
              setAnimatingKey((prev) => prev + 1);
            }}
            className={`${styles.dot} ${currentIndex === idx ? styles.activeDot : ""}`}
            aria-label={`Go to service ${service.number}: ${service.title}`}
          />
        ))}
      </div>
    </div>
  );
}
