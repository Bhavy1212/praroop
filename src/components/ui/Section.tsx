import React, { forwardRef } from "react";

interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
}

const Section = forwardRef<HTMLElement, SectionProps>(function Section(
  { id, className = "", children },
  ref
) {
  return (
    <section ref={ref} id={id} className={`scroll-mt-24 py-4 md:py-6 w-full ${className}`}>
      {children}
    </section>
  );
});

export default Section;
