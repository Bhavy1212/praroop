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
        // === PRAAROOP OFFICIAL PALETTE ===
        brand: {
          DEFAULT: "#0080CB",   // Praaroop Blue - Primary
          blue:    "#0080CB",
          dark:    "#0066A3",
          darker:  "#0B1220",   // Ink dark mode
          light:   "#33A1E5",
          faint:   "rgba(0, 128, 203, 0.08)",
          tint:    "rgba(0, 128, 203, 0.12)",
        },
        teal: {
          DEFAULT: "#0C9DA8",   // Teal - Secondary
          dark:    "#0A828B",
          tint:    "rgba(12, 157, 168, 0.12)",
        },
        magenta: {
          DEFAULT: "#D10B6A",   // Magenta - Highlight Only
          tint:    "rgba(209, 11, 106, 0.12)",
        },
        surface: {
          DEFAULT: "#ffffff",
          light:   "#f4f8fa",   // Light Blue/Teal Tinted BG
          mid:     "#e1e8ec",   // Borders
          muted:   "#cbd5e1",
          dark:    "#0B1220",
        },
        ink: {
          DEFAULT: "#0B1220",   // Ink - Deep Black Headings
          body:    "#334155",   // Slate Body Copy
          muted:   "#64748B",
          faint:   "#94A3B8",
        },
      },
      fontFamily: {
        sans:    ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "Plus Jakarta Sans", "system-ui", "sans-serif"],
      },
      animation: {
        "marquee-left":  "marquee-left 35s linear infinite",
        "marquee-right": "marquee-right 35s linear infinite",
        "float":         "float 6s ease-in-out infinite",
        "pulse-ring":    "pulse-ring 2s ease-out infinite",
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
          "0%":   { transform: "scale(1)", opacity: "0.8" },
          "100%": { transform: "scale(1.8)", opacity: "0" },
        },
      },
      boxShadow: {
        "card":       "0 1px 3px rgba(11,18,32,0.06), 0 4px 16px rgba(11,18,32,0.06)",
        "card-hover": "0 4px 12px rgba(11,18,32,0.08), 0 12px 40px rgba(0,128,203,0.15)",
        "brand":      "0 4px 20px rgba(0, 128, 203, 0.3)",
        "teal":       "0 4px 20px rgba(12, 157, 168, 0.3)",
        "magenta":    "0 4px 20px rgba(209, 11, 106, 0.3)",
      },
    },
  },
  plugins: [],
};

export default config;
