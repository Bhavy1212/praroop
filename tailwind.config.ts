import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // === PRAAROOP BRAND PALETTE (extracted from live site) ===
        brand: {
          DEFAULT: "#345995",   // Primary navy-blue
          dark:    "#27426f",   // Hover / deeper accent
          darker:  "#1e3150",   // Deep dark variant
          light:   "#668cc9",   // Lighter tint
          faint:   "rgba(52, 89, 149, 0.08)",  // Subtle BG tint
          tint:    "rgba(52, 89, 149, 0.12)",  // Badge / pill fills
        },
        surface: {
          DEFAULT: "#ffffff",
          light:   "#f8f9fa",   // Alternate section BG
          mid:     "#e9ecef",   // Borders, dividers
          muted:   "#dee2e6",   // Very subtle dividers
        },
        ink: {
          DEFAULT: "#212529",   // Dark headings
          body:    "#495057",   // Body copy
          muted:   "#6c757d",   // Secondary / labels
          faint:   "#adb5bd",   // Disabled / placeholder
        },
      },
      fontFamily: {
        sans:    ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-syne)",  "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-xl": ["clamp(3.5rem, 8vw, 7rem)",  { lineHeight: "1.0", letterSpacing: "-0.03em" }],
        "display-lg": ["clamp(2.5rem, 5vw, 4.5rem)", { lineHeight: "1.1", letterSpacing: "-0.025em" }],
        "display-md": ["clamp(1.75rem, 3vw, 2.5rem)", { lineHeight: "1.2", letterSpacing: "-0.015em" }],
      },
      animation: {
        "marquee-left":  "marquee-left 40s linear infinite",
        "marquee-right": "marquee-right 40s linear infinite",
        "float":         "float 6s ease-in-out infinite",
        "pulse-ring":    "pulse-ring 2s ease-out infinite",
        "fade-in-up":    "fade-in-up 0.6s ease-out forwards",
        "spin-slow":     "spin 20s linear infinite",
      },
      keyframes: {
        "marquee-left": {
          "0%":   { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-right": {
          "0%":   { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%":      { transform: "translateY(-12px)" },
        },
        "pulse-ring": {
          "0%":   { transform: "scale(1)",   opacity: "0.8" },
          "100%": { transform: "scale(1.8)", opacity: "0" },
        },
        "fade-in-up": {
          "0%":   { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      boxShadow: {
        "card":       "0 1px 3px rgba(0,0,0,0.06), 0 4px 16px rgba(0,0,0,0.06)",
        "card-hover": "0 4px 12px rgba(0,0,0,0.08), 0 12px 40px rgba(52,89,149,0.12)",
        "brand":      "0 4px 20px rgba(52, 89, 149, 0.3)",
        "brand-lg":   "0 8px 40px rgba(52, 89, 149, 0.4)",
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
        "4xl": "2rem",
      },
    },
  },
  plugins: [],
};

export default config;
