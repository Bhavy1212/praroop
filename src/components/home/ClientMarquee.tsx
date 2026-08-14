"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { CLIENT_LOGOS } from "@/lib/data";

export default function ClientMarquee() {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    setReducedMotion(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  // Double array to create seamless 100% -> 50% loop
  const marqueeLogos = [...CLIENT_LOGOS, ...CLIENT_LOGOS];

  return (
    <section id="client" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-[#0A0A0A] overflow-hidden border-t border-b border-white/5">
      <div className="max-w-7xl mx-auto relative z-10 space-y-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-wider text-[#0C9DA8]">
            Driving Impact On a Global Scale
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Brands We Have <span className="text-gradient-tri">Elevated</span>
          </h2>
          <p className="text-sm sm:text-base text-[#CBD5E1]">
            Trusted by corporate leaders, automotive giants, healthcare networks, and regional visionaries.
          </p>
        </div>

        {/* Marquee Track Container with Side Fade Overlays */}
        <div className="relative w-full overflow-hidden py-4">
          <div className="absolute top-0 bottom-0 left-0 w-28 bg-gradient-to-r from-[#0A0A0A] to-transparent z-10 pointer-events-none" />
          <div className="absolute top-0 bottom-0 right-0 w-28 bg-gradient-to-l from-[#0A0A0A] to-transparent z-10 pointer-events-none" />

          <div
            className={`flex items-center gap-8 ${
              reducedMotion
                ? "overflow-x-auto no-scrollbar justify-center flex-wrap"
                : "animate-marquee-left"
            }`}
          >
            {marqueeLogos.map((client, idx) => (
              <div
                key={`${client.id}-${idx}`}
                className="shrink-0 w-44 sm:w-52 h-24 rounded-2xl bg-[#111111] border border-white/10 p-4 flex items-center justify-center transition-all duration-300 hover:border-white/30 hover:bg-[#141414] hover:shadow-[0_0_25px_rgba(0,128,203,0.3)]"
              >
                <div className="relative w-full h-full">
                  <Image
                    src={client.logo}
                    alt={`${client.name} partner logo`}
                    fill
                    className="object-contain filter brightness-120 opacity-80 hover:opacity-100 transition-opacity"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
