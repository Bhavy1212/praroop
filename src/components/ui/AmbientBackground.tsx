"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function AmbientBackground() {
  const [reducedMotion, setReducedMotion] = useState(false);
  const { scrollY } = useScroll();

  // Subtle parallax translation factors for floating blobs
  const yBlob1 = useTransform(scrollY, [0, 4000], [0, -350]);
  const yBlob2 = useTransform(scrollY, [0, 4000], [0, 300]);
  const yBlob3 = useTransform(scrollY, [0, 4000], [0, -200]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setReducedMotion(e.matches);
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return (
    <div
      className="fixed inset-0 pointer-events-none overflow-hidden z-0"
      aria-hidden="true"
    >
      {/* Primary Blue Blob - Top Left with Parallax */}
      <motion.div
        style={reducedMotion ? {} : { y: yBlob1 }}
        className={`absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full bg-[#0080CB]/20 blur-[140px] ${
          reducedMotion ? "opacity-20" : "animate-blob-1"
        }`}
      />

      {/* Secondary Teal Blob - Center Right with Parallax */}
      <motion.div
        style={reducedMotion ? {} : { y: yBlob2 }}
        className={`absolute top-[35%] -right-40 w-[650px] h-[650px] rounded-full bg-[#0C9DA8]/20 blur-[150px] ${
          reducedMotion ? "opacity-15" : "animate-blob-2"
        }`}
      />

      {/* Highlight Magenta Blob - Bottom Left with Parallax */}
      <motion.div
        style={reducedMotion ? {} : { y: yBlob3 }}
        className={`absolute top-[70%] left-[5%] w-[550px] h-[550px] rounded-full bg-[#D10B6A]/18 blur-[140px] ${
          reducedMotion ? "opacity-15" : "animate-blob-3"
        }`}
      />

      {/* Subtle Noise / Grid Texture */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/[0.03] via-transparent to-transparent opacity-60" />
    </div>
  );
}
