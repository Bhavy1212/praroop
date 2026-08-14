"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

interface InteractiveBackgroundProps {
  children?: React.ReactNode;
  variant?: "light" | "dark";
  className?: string;
}

export default function InteractiveBackground({
  children,
  variant = "light",
  className = "",
}: InteractiveBackgroundProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (shouldReduceMotion) return;

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [shouldReduceMotion]);

  const isLight = variant === "light";

  return (
    <div
      className={`relative overflow-hidden ${
        isLight ? "bg-[#F8FAFC] text-slate-900" : "bg-[#0B1220] text-white"
      } ${className}`}
    >
      {/* ── Ambient Fluid Gradient Mesh Blobs ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        {/* Blob 1: Praaroop Blue (#0080CB) */}
        <motion.div
          animate={
            shouldReduceMotion
              ? {}
              : {
                  x: [0, 80, -40, 0],
                  y: [0, -60, 50, 0],
                  scale: [1, 1.15, 0.9, 1],
                }
          }
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className={`absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full blur-[130px] ${
            isLight ? "bg-[#0080CB]/18" : "bg-[#0080CB]/35"
          }`}
        />

        {/* Blob 2: Teal (#0C9DA8) */}
        <motion.div
          animate={
            shouldReduceMotion
              ? {}
              : {
                  x: [0, -90, 60, 0],
                  y: [0, 70, -40, 0],
                  scale: [1, 0.85, 1.15, 1],
                }
          }
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className={`absolute top-1/3 -right-32 w-[650px] h-[650px] rounded-full blur-[140px] ${
            isLight ? "bg-[#0C9DA8]/15" : "bg-[#0C9DA8]/30"
          }`}
        />

        {/* Blob 3: Magenta (#D10B6A) */}
        <motion.div
          animate={
            shouldReduceMotion
              ? {}
              : {
                  x: [0, 50, -60, 0],
                  y: [0, -40, 60, 0],
                  scale: [1, 1.1, 0.9, 1],
                }
          }
          transition={{
            duration: 32,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className={`absolute -bottom-32 left-1/4 w-[550px] h-[550px] rounded-full blur-[120px] ${
            isLight ? "bg-[#D10B6A]/12" : "bg-[#D10B6A]/20"
          }`}
        />

        {/* Cursor-Following Spotlight Glow */}
        {!shouldReduceMotion && (
          <div
            className="absolute w-[450px] h-[450px] rounded-full pointer-events-none transition-transform duration-300 ease-out"
            style={{
              transform: `translate(${mousePosition.x - 225}px, ${
                mousePosition.y - 225
              }px)`,
              background: isLight
                ? "radial-gradient(circle, rgba(0,128,203,0.12) 0%, rgba(12,157,168,0.08) 45%, transparent 70%)"
                : "radial-gradient(circle, rgba(0,128,203,0.2) 0%, rgba(12,157,168,0.12) 45%, transparent 70%)",
              filter: "blur(35px)",
            }}
          />
        )}

        {/* Dot Grid Layer */}
        <div
          className={`absolute inset-0 ${
            isLight
              ? "bg-[radial-gradient(#0080cb12_1px,transparent_1px)]"
              : "bg-[radial-gradient(#ffffff12_1px,transparent_1px)]"
          } [background-size:28px_28px]`}
        />
      </div>

      {/* Content wrapper */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
