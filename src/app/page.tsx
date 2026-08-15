import SideDotNav from "@/components/ui/SideDotNav";
import AmbientBackground from "@/components/ui/AmbientBackground";
import Hero from "@/components/home/Hero";
import GrowthEngine3DCarousel from "@/components/home/GrowthEngine3DCarousel";
import OutdoorMarketingSection from "@/components/home/OutdoorMarketingSection";
import ActivationsSection from "@/components/home/ActivationsSection";
import StatsSection from "@/components/home/StatsSection";
import ClientMarquee from "@/components/home/ClientMarquee";
import WhyUs from "@/components/home/WhyUs";
import Testimonials from "@/components/home/Testimonials";
import FooterCtaCards from "@/components/home/FooterCtaCards";
import Footer from "@/components/layout/Footer";

export default function HomePage() {
  return (
    <main className="relative bg-[#FAFAFC] text-[#0F172A] min-h-screen selection:bg-[#0080CB] selection:text-white">
      {/* Drifting Ambient Background Glowing Orbs */}
      <AmbientBackground />

      {/* Side Dot Navigation indicator for desktop natural section scroll */}
      <SideDotNav />

      {/* Section 0 — Hero Banner Page (Horizontal Scroll: Banner → We Are The Best 360° Agency in Udaipur) */}
      <div id="hero">
        <Hero />
      </div>

      {/* Section 1 — 3D Coverflow Digital Services Carousel */}
      <GrowthEngine3DCarousel />

      {/* Section 2 — Outdoor Marketing */}
      <OutdoorMarketingSection />

      {/* Section 3 — Activations */}
      <ActivationsSection />

      {/* Section 4 — Stats Counter */}
      <StatsSection />

      {/* Section 7 — Client Logo Marquee */}
      <ClientMarquee />

      {/* Section 8 — Why Choose Us & About Us */}
      <WhyUs />

      {/* Section 9 — Testimonials */}
      <Testimonials />

      {/* Section 10 — Footer CTA & Footer */}
      <div id="footer">
        <FooterCtaCards />
        <Footer />
      </div>
    </main>
  );
}
