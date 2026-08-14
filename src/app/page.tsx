import SideDotNav from "@/components/ui/SideDotNav";
import AmbientBackground from "@/components/ui/AmbientBackground";
import Hero from "@/components/home/Hero";
import HeroCoverflowSlider from "@/components/home/HeroCoverflowSlider";
import SectionIntro from "@/components/home/SectionIntro";
import OutdoorMarketingSection from "@/components/home/OutdoorMarketingSection";
import ActivationsSection from "@/components/home/ActivationsSection";
import CtaBanner from "@/components/home/CtaBanner";
import StatsSection from "@/components/home/StatsSection";
import ClientMarquee from "@/components/home/ClientMarquee";
import WhyUs from "@/components/home/WhyUs";
import Testimonials from "@/components/home/Testimonials";
import FooterCtaCards from "@/components/home/FooterCtaCards";
import Footer from "@/components/layout/Footer";

export default function HomePage() {
  return (
    <main className="relative bg-[#0A0A0A] text-white min-h-screen selection:bg-[#0080CB] selection:text-white">
      {/* Drifting Ambient Background Glowing Orbs */}
      <AmbientBackground />

      {/* Side Dot Navigation indicator for desktop natural section scroll */}
      <SideDotNav />

      {/* Section 0 — Hero Banner Page */}
      <div id="hero">
        <Hero />
      </div>

      {/* Section 1 — Digital Marketing 3D Coverflow Slider */}
      <HeroCoverflowSlider />

      {/* Section 2 — Section Intro (360° Marketing expertise) */}
      <SectionIntro />

      {/* Section 3 — Outdoor Marketing */}
      <OutdoorMarketingSection />

      {/* Section 4 — Activations */}
      <ActivationsSection />

      {/* Section 5 — CTA Banner */}
      <CtaBanner />

      {/* Section 6 — Stats Counter */}
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
