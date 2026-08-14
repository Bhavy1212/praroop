"use client";

import { useEffect, useState } from "react";

export default function AmbientBackground() {
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

  return (
    <div
      className="fixed inset-0 pointer-events-none overflow-hidden z-0"
      aria-hidden="true"
    >
      {/* Vibrant Blue Blob - Top Left */}
      <div
        className={`absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-[#0080CB]/12 blur-[140px] ${
          reducedMotion ? "opacity-30" : "animate-blob-1"
        }`}
      />

      {/* Vibrant Teal Blob - Center Right */}
      <div
        className={`absolute top-[30%] -right-40 w-[650px] h-[650px] rounded-full bg-[#0C9DA8]/12 blur-[150px] ${
          reducedMotion ? "opacity-25" : "animate-blob-2"
        }`}
      />

      {/* Vibrant Magenta Blob - Bottom Left */}
      <div
        className={`absolute top-[65%] left-[5%] w-[550px] h-[550px] rounded-full bg-[#D10B6A]/10 blur-[150px] ${
          reducedMotion ? "opacity-25" : "animate-blob-3"
        }`}
      />

      {/* Subtle Mesh Grid Texture */}
      <div className="absolute inset-0 bg-[radial-gradient(#0080cb_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.03]" />
    </div>
  );
}
