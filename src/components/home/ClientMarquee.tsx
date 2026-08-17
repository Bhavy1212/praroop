"use client";

import Image from "next/image";
import { Sparkles, Building2, Award } from "lucide-react";
import { CLIENT_LOGOS } from "@/lib/data";

interface ClientMarqueeProps {
  hideHeader?: boolean;
  compact?: boolean;
  theme?: "light" | "dark";
}

export default function ClientMarquee({
  hideHeader = false,
  compact = false,
  theme = "dark",
}: ClientMarqueeProps) {
  const isLight = theme === "light";

  // Split the 23 logos into 3 distinct sets for the 3 marquee rows
  const row1 = CLIENT_LOGOS.slice(0, 8);
  const row2 = CLIENT_LOGOS.slice(8, 16);
  const row3 = CLIENT_LOGOS.slice(16);

  // Duplicate each row 4 times to ensure 100% gapless continuous marquee
  const row1Logos = [...row1, ...row1, ...row1, ...row1];
  const row2Logos = [...row2, ...row2, ...row2, ...row2];
  const row3Logos = [...row3, ...row3, ...row3, ...row3];

  return (
    <section
      id="client"
      className={`relative ${
        compact ? "py-1 sm:py-2" : "py-8 sm:py-12"
      } ${
        isLight ? "bg-[#F6F6F4] text-[#0F172A]" : "bg-[#07090E] text-white"
      } overflow-hidden selection:bg-[#0080CB] selection:text-white`}
    >
      {/* Ambient background glow */}
      <div
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px] ${
          isLight ? "bg-[#0080CB]/5" : "bg-[#0080CB]/10"
        } blur-[120px] pointer-events-none -z-10 rounded-full`}
      />

      {!hideHeader && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 sm:mb-8 text-center space-y-2 relative z-10">
          <div
            className={`inline-flex items-center gap-2 px-3.5 py-1 rounded-full ${
              isLight
                ? "bg-white border border-slate-200 text-[#0080CB]"
                : "bg-white/10 border border-white/15 text-[#0C9DA8]"
            } text-xs font-mono font-bold uppercase tracking-wider shadow-xs backdrop-blur-md`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Our Valued Partners</span>
          </div>

          <h2
            className={`text-3xl sm:text-4xl font-black ${
              isLight ? "text-[#0F172A]" : "text-white"
            } tracking-tight font-display`}
          >
            Brands We Have <span className="text-[#0080CB]">Elevated</span>
          </h2>

          <p
            className={`text-xs sm:text-sm ${
              isLight ? "text-[#334155]" : "text-slate-300"
            } max-w-xl mx-auto font-normal leading-relaxed`}
          >
            Trusted by 100+ corporate leaders, automotive giants, healthcare networks, and regional visionaries.
          </p>
        </div>
      )}

      {/* ── 3-Row Full-Bleed Continuous Logo Marquee ── */}
      <div className="relative w-full space-y-3 sm:space-y-4 overflow-hidden py-1">
        {/* Left & Right Soft Vignette Gradients */}
        <div
          className={`absolute inset-y-0 left-0 w-12 sm:w-36 bg-gradient-to-r ${
            isLight
              ? "from-[#F6F6F4] via-[#F6F6F4]/90"
              : "from-[#07090E] via-[#07090E]/90"
          } to-transparent z-20 pointer-events-none`}
        />
        <div
          className={`absolute inset-y-0 right-0 w-12 sm:w-36 bg-gradient-to-l ${
            isLight
              ? "from-[#F6F6F4] via-[#F6F6F4]/90"
              : "from-[#07090E] via-[#07090E]/90"
          } to-transparent z-20 pointer-events-none`}
        />

        {/* ── ROW 1: Moves to LEFT ── */}
        <div className="flex overflow-hidden whitespace-nowrap select-none">
          <div className="flex w-max shrink-0 items-center gap-3.5 sm:gap-5 animate-marquee-left will-change-transform">
            {row1Logos.map((client, idx) => (
              <div
                key={`r1-${client.id}-${idx}`}
                className="shrink-0 w-36 sm:w-48 lg:w-56 h-18 sm:h-22 lg:h-26 flex items-center justify-center transition-transform duration-300 hover:scale-105 group cursor-pointer"
              >
                <div className="relative w-full h-full">
                  <Image
                    src={client.logo}
                    alt={client.name}
                    fill
                    sizes="(max-width: 640px) 150px, (max-width: 1024px) 200px, 240px"
                    className="object-contain filter transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── ROW 2: Moves to RIGHT ── */}
        <div className="flex overflow-hidden whitespace-nowrap select-none">
          <div className="flex w-max shrink-0 items-center gap-3.5 sm:gap-5 animate-marquee-right will-change-transform">
            {row2Logos.map((client, idx) => (
              <div
                key={`r2-${client.id}-${idx}`}
                className="shrink-0 w-36 sm:w-48 lg:w-56 h-18 sm:h-22 lg:h-26 flex items-center justify-center transition-transform duration-300 hover:scale-105 group cursor-pointer"
              >
                <div className="relative w-full h-full">
                  <Image
                    src={client.logo}
                    alt={client.name}
                    fill
                    sizes="(max-width: 640px) 150px, (max-width: 1024px) 200px, 240px"
                    className="object-contain filter transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── ROW 3: Moves to LEFT ── */}
        <div className="flex overflow-hidden whitespace-nowrap select-none">
          <div className="flex w-max shrink-0 items-center gap-3.5 sm:gap-5 animate-marquee-left will-change-transform">
            {row3Logos.map((client, idx) => (
              <div
                key={`r3-${client.id}-${idx}`}
                className="shrink-0 w-36 sm:w-48 lg:w-56 h-18 sm:h-22 lg:h-26 flex items-center justify-center transition-transform duration-300 hover:scale-105 group cursor-pointer"
              >
                <div className="relative w-full h-full">
                  <Image
                    src={client.logo}
                    alt={client.name}
                    fill
                    sizes="(max-width: 640px) 150px, (max-width: 1024px) 200px, 240px"
                    className="object-contain filter transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {!hideHeader && (
        <div
          className={`max-w-4xl mx-auto px-4 mt-6 sm:mt-8 flex flex-wrap items-center justify-center gap-2.5 text-xs font-mono ${
            isLight ? "text-slate-600" : "text-slate-300"
          }`}
        >
          <span
            className={`px-3.5 py-1.5 rounded-full ${
              isLight ? "bg-white border border-slate-200 shadow-2xs" : "bg-white/5 border border-white/10"
            } flex items-center gap-1.5`}
          >
            <Building2 className="w-3 h-3 text-[#0080CB]" />
            <span>100+ Satisfied Clients</span>
          </span>
          <span
            className={`px-3.5 py-1.5 rounded-full ${
              isLight ? "bg-white border border-slate-200 shadow-2xs" : "bg-white/5 border border-white/10"
            } flex items-center gap-1.5`}
          >
            <Award className="w-3 h-3 text-[#0C9DA8]" />
            <span>200+ Pan-India Campaigns</span>
          </span>
        </div>
      )}
    </section>
  );
}
