"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { CLIENT_LOGOS } from "@/lib/data";

export default function ClientMarquee() {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    setReducedMotion(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  const marqueeLogos = [...CLIENT_LOGOS, ...CLIENT_LOGOS];

  return (
    <section id="client" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10 space-y-12">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-xs font-bold uppercase tracking-wider text-[#0C9DA8] shadow-xs">
            Trusted Partnerships
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1220] tracking-tight">
            Brands We Have <span className="text-gradient-tri">Elevated</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Partnering with industry leaders, healthcare providers, and regional visionaries across India.
          </p>
        </div>

        {/* Marquee Wrapper with side fade gradients */}
        <div className="relative w-full overflow-hidden py-4">
          <div className="absolute top-0 bottom-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute top-0 bottom-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

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
                className="shrink-0 w-44 sm:w-52 h-24 rounded-2xl bg-white border border-slate-200/80 p-4 flex items-center justify-center transition-all duration-300 hover:border-slate-300 hover:shadow-md"
              >
                <div className="relative w-full h-full">
                  <Image
                    src={client.logo}
                    alt={`${client.name} logo`}
                    fill
                    className="object-contain opacity-90 hover:opacity-100 transition-opacity"
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
