"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

interface Section {
  id: string;
  label: string;
  component: React.ReactNode;
}

interface FullPageSnapScrollProps {
  sections: Section[];
}

export default function FullPageSnapScroll({ sections }: FullPageSnapScrollProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Track active section index cleanly
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const scrollPosition = containerRef.current.scrollTop;
      const windowHeight = containerRef.current.clientHeight;
      const index = Math.round(scrollPosition / windowHeight);
      if (index >= 0 && index < sections.length) {
        setActiveIndex(index);
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll, { passive: true });
    }

    return () => {
      if (container) {
        container.removeEventListener("scroll", handleScroll);
      }
    };
  }, [sections.length]);

  const scrollToSection = (index: number) => {
    if (!containerRef.current) return;
    const windowHeight = containerRef.current.clientHeight;
    containerRef.current.scrollTo({
      top: index * windowHeight,
      behavior: "smooth",
    });
    setActiveIndex(index);
  };

  return (
    <div className="relative w-full h-[calc(100vh-80px)] overflow-hidden">
      
      {/* Right Floating Section Dots Navigation Indicator */}
      <div className="fixed right-3 sm:right-6 top-1/2 -translate-y-1/2 z-40 flex flex-col gap-2 bg-white/90 backdrop-blur-md p-2 rounded-full border border-surface-mid shadow-lg">
        {sections.map((section, idx) => (
          <button
            key={section.id}
            onClick={() => scrollToSection(idx)}
            title={section.label}
            aria-label={`Scroll to ${section.label}`}
            className="group relative flex items-center justify-center p-1"
          >
            <span
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                activeIndex === idx
                  ? "bg-brand scale-125 ring-4 ring-brand/20"
                  : "bg-surface-mid group-hover:bg-brand/50"
              }`}
            />
            {/* Tooltip on hover */}
            <span className="absolute right-7 px-2.5 py-1 rounded-lg bg-ink text-white text-[11px] font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow-md">
              {section.label}
            </span>
          </button>
        ))}
      </div>

      {/* Main Snap Scroll Container - Each Section Fits 100% in Viewport Height */}
      <div
        ref={containerRef}
        className="w-full h-full overflow-y-scroll snap-y snap-mandatory scroll-smooth no-scrollbar"
      >
        {sections.map((section) => (
          <div
            key={section.id}
            id={section.id}
            className="w-full h-[calc(100vh-80px)] snap-start snap-always flex flex-col justify-center overflow-hidden relative border-b border-surface-mid/40 px-2 sm:px-4"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false, amount: 0.4 }}
              transition={{ duration: 0.4 }}
              className="w-full max-h-full overflow-hidden flex flex-col justify-center"
            >
              {section.component}
            </motion.div>
          </div>
        ))}
      </div>

    </div>
  );
}
