"use client";

import { useEffect } from "react";

export default function SmoothScrollProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    // Smooth anchor link click interception (#services, #outdoor, #client, etc.)
    const handleAnchorClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest('a[href*="#"]');
      if (!target) return;
      const href = target.getAttribute("href");
      if (!href) return;

      const hashIndex = href.indexOf("#");
      if (hashIndex === -1) return;
      const hash = href.substring(hashIndex);
      if (hash === "#") return;

      const el = document.querySelector(hash) as HTMLElement;
      if (el) {
        e.preventDefault();
        const container = document.querySelector(".snap-container") as HTMLElement;
        if (container) {
          // Scroll the snap container to the element's top position within it
          const top = el.offsetTop;
          container.scrollTo({ top, behavior: "smooth" });
        } else {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    };
    document.addEventListener("click", handleAnchorClick);

    return () => {
      document.removeEventListener("click", handleAnchorClick);
    };
  }, []);

  return <>{children}</>;
}

