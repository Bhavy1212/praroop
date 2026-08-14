'use client';

import { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [cursorText, setCursorText] = useState('');
  const [isHovered, setIsHovered] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 28, stiffness: 350 };
  const smoothX = useSpring(cursorX, springConfig);
  const smoothY = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Disable custom cursor entirely on touch devices or reduced motion preference
    const isTouch = window.matchMedia('(pointer: coarse)').matches;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (isTouch || prefersReducedMotion) return;

    setIsVisible(true);

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const hoverable = target.closest('[data-cursor], a, button, input, textarea');
      if (hoverable) {
        setIsHovered(true);
        const customLabel = hoverable.getAttribute('data-cursor');
        if (customLabel) {
          setCursorText(customLabel);
        } else {
          setCursorText('');
        }
      } else {
        setIsHovered(false);
        setCursorText('');
      }
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [cursorX, cursorY]);

  if (!isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden" aria-hidden="true">
      {/* Outer Glowing Halo Ring */}
      <motion.div
        className="fixed top-0 left-0 rounded-full border border-[#0080CB]/60 bg-[#0080CB]/10 backdrop-blur-[2px] pointer-events-none flex items-center justify-center text-[10px] font-bold tracking-widest text-[#0C9DA8] uppercase shadow-[0_0_20px_rgba(0,128,203,0.3)]"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          width: isHovered ? (cursorText ? 80 : 54) : 28,
          height: isHovered ? (cursorText ? 80 : 54) : 28,
          opacity: isHovered ? 0.95 : 0.45,
          borderColor: isHovered ? '#0C9DA8' : 'rgba(0, 128, 203, 0.4)',
        }}
        transition={{ type: 'spring', damping: 22, stiffness: 320 }}
      >
        {cursorText && (
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-[9px] font-bold leading-none text-white px-1 text-center"
          >
            {cursorText}
          </motion.span>
        )}
      </motion.div>

      {/* Inner Glowing Core Dot */}
      <motion.div
        className="fixed top-0 left-0 w-2.5 h-2.5 bg-[#0C9DA8] rounded-full pointer-events-none shadow-[0_0_10px_#0C9DA8]"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: isHovered ? 0 : 1,
        }}
        transition={{ duration: 0.15 }}
      />
    </div>
  );
}
