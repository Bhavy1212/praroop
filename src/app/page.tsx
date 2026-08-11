import ScrollProgress from "@/components/ui/ScrollProgress";
import ScrollTransition from "@/components/ui/ScrollTransition";
import Hero from "@/components/home/Hero";
import DigitalMarketingSection from "@/components/home/DigitalMarketingSection";
import SectionIntro from "@/components/home/SectionIntro";
import OutdoorMarketingSection from "@/components/home/OutdoorMarketingSection";
import ActivationsSection from "@/components/home/ActivationsSection";
import CtaBanner from "@/components/home/CtaBanner";
import StatsSection from "@/components/home/StatsSection";
import ClientMarquee from "@/components/home/ClientMarquee";
import WhyUs from "@/components/home/WhyUs";
import Testimonials from "@/components/home/Testimonials";
import FooterCtaCards from "@/components/home/FooterCtaCards";

export default function HomePage() {
  return (
    <>
      {/* Top Reading Progress Bar */}
      <ScrollProgress />

      {/* Sequential Webflow/GSAP-Style Scroll Triggered Sections */}
      <div className="space-y-4">
        <Hero />

        <ScrollTransition id="services">
          <DigitalMarketingSection />
        </ScrollTransition>

        <ScrollTransition>
          <SectionIntro />
        </ScrollTransition>

        <ScrollTransition id="outdoor">
          <OutdoorMarketingSection />
        </ScrollTransition>

        <ScrollTransition id="activations">
          <ActivationsSection />
        </ScrollTransition>

        <ScrollTransition>
          <CtaBanner />
        </ScrollTransition>

        <ScrollTransition>
          <StatsSection />
        </ScrollTransition>

        <ScrollTransition id="client">
          <ClientMarquee />
        </ScrollTransition>

        <ScrollTransition id="why-us">
          <WhyUs />
        </ScrollTransition>

        <ScrollTransition id="testimonials">
          <Testimonials />
        </ScrollTransition>

        <ScrollTransition>
          <FooterCtaCards />
        </ScrollTransition>
      </div>
    </>
  );
}
