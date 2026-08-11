"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface ScrollTransitionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export default function ScrollTransition({
  children,
  className = "",
  id,
}: ScrollTransitionProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Smooth snap scroll transitions: scale, opacity, and vertical translation
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.4, 1, 1, 0.5]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.97, 1, 1, 0.98]);

  return (
    <motion.div
      id={id}
      ref={containerRef}
      style={{ opacity, scale }}
      className={`snap-section will-change-transform ${className}`}
    >
      {children}
    </motion.div>
  );
}
