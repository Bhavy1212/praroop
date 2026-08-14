"use client";

import { useEffect, useState, useRef } from "react";

const SECTIONS = [
  { id: "hero", label: "Hero" },
  { id: "services", label: "Digital Services" },
  { id: "growth-engine", label: "Growth Engine" },
  { id: "outdoor", label: "Outdoor Advertising" },
  { id: "activations", label: "Activations" },
  { id: "stats", label: "Agency Impact" },
  { id: "client", label: "Our Clients" },
  { id: "why-us", label: "Why Praaroop" },
  { id: "testimonials", label: "Client Reviews" },
];

export default function SideDotNav() {
  const [activeId, setActiveId] = useState("hero");
  const tickingRef = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      if (tickingRef.current) return;
      tickingRef.current = true;

      requestAnimationFrame(() => {
        const scrollPosition = window.scrollY + 300;

        for (const sec of SECTIONS) {
          const el = document.getElementById(sec.id);
          if (el) {
            const top = el.offsetTop;
            const height = el.offsetHeight;

            if (scrollPosition >= top && scrollPosition < top + height) {
              setActiveId(sec.id);
              break;
            }
          }
        }
        tickingRef.current = false;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col items-center gap-3 bg-black/60 backdrop-blur-md p-3 rounded-full border border-white/15 shadow-2xl pointer-events-auto"
      aria-label="Homepage scroll navigation"
    >
      {SECTIONS.map((sec) => {
        const isActive = activeId === sec.id;
        return (
          <button
            key={sec.id}
            onClick={() => scrollToSection(sec.id)}
            aria-label={`Scroll to ${sec.label}`}
            className="group relative flex items-center justify-center p-1 focus:outline-none"
          >
            <span
              className={`block rounded-full transition-all duration-300 ${
                isActive
                  ? "w-3 h-3 bg-[#0C9DA8] shadow-[0_0_10px_#0C9DA8] scale-110"
                  : "w-2 h-2 bg-white/40 group-hover:bg-white group-hover:scale-125"
              }`}
            />
            {/* Tooltip Label */}
            <span className="absolute right-8 px-2.5 py-1 rounded-md bg-black/90 border border-white/15 text-[11px] font-bold text-white whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-200 shadow-xl">
              {sec.label}
            </span>
          </button>
        );
      })}
    </nav>
  );
}
