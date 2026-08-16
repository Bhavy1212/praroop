"use client";

interface InteractiveBackgroundProps {
  children?: React.ReactNode;
  className?: string;
}

export default function InteractiveBackground({
  children,
  className = "",
}: InteractiveBackgroundProps) {
  // Pure flat clean canvas without background gradient blobs or gradient washes
  return (
    <div className={`relative bg-[#FAFAFC] text-[#0F172A] ${className}`}>
      <div className="relative z-10">{children}</div>
    </div>
  );
}
