"use client";

export default function AmbientBackground() {
  return (
    <div
      className="fixed inset-0 pointer-events-none overflow-hidden z-0"
      aria-hidden="true"
    >
      {/* Primary Blue Blob - Top Left */}
      <div
        className="absolute -top-32 -left-32 w-[550px] h-[550px] rounded-full bg-[#0080CB]/15 blur-[120px] animate-blob-1 transform-gpu pointer-events-none"
      />

      {/* Secondary Teal Blob - Center Right */}
      <div
        className="absolute top-[38%] -right-36 w-[600px] h-[600px] rounded-full bg-[#0C9DA8]/15 blur-[130px] animate-blob-2 transform-gpu pointer-events-none"
      />

      {/* Highlight Magenta Blob - Bottom Left */}
      <div
        className="absolute top-[72%] left-[4%] w-[500px] h-[500px] rounded-full bg-[#D10B6A]/12 blur-[120px] animate-blob-3 transform-gpu pointer-events-none"
      />

      {/* Subtle Noise Grid Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/[0.02] via-transparent to-transparent opacity-50 pointer-events-none" />
    </div>
  );
}
