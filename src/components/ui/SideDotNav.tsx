"use client";

import { useEffect, useState } from "react";

const SECTIONS = [
  { id: "hero", label: "Hero" },
  { id: "services", label: "Digital Services" },
  { id: "outdoor", label: "Outdoor Advertising" },
  { id: "activations", label: "Activations" },
  { id: "growth", label: "Campaign Planning" },
  { id: "stats", label: "Agency Impact" },
  { id: "client", label: "Our Clients" },
  { id: "why-us", label: "Why Praaroop" },
  { id: "testimonials", label: "Client Reviews" },
];

export default function SideDotNav() {
  const [activeId, setActiveId] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
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
    };

    window.addEventListener("scroll", handleScroll);
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
      className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col items-center gap-3 bg-white/90 backdrop-blur-md p-3 rounded-full border border-slate-200 shadow-xl pointer-events-auto"
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
                  ? "w-3 h-3 bg-[#0080CB] shadow-[0_0_10px_#0080CB] scale-110"
                  : "w-2 h-2 bg-slate-300 hover:bg-slate-500"
              }`}
            />
            {/* Tooltip Label on Hover */}
            <span className="absolute right-9 px-3 py-1.5 rounded-lg bg-[#0B1220] border border-slate-800 text-white text-xs font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow-xl">
              {sec.label}
            </span>
          </button>
        );
      })}
    </nav>
  );
}
