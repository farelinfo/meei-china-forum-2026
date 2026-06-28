import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import ValueStrip from "@/components/sections/ValueStrip";
import HighlightsSection from "@/components/sections/HighlightsSection";
import OpportunitiesSpotlightSection from "@/components/sections/OpportunitiesSpotlightSection";
import AboutSection from "@/components/sections/AboutSection";
import SpeakersSection from "@/components/sections/SpeakersSection";
import WhoShouldAttendSection from "@/components/sections/WhoShouldAttendSection";
import ProgrammeSection from "@/components/sections/ProgrammeSection";
import CtaSection from "@/components/sections/CtaSection";
import PartnersSection from "@/components/sections/PartnersSection";
import FaqSection from "@/components/sections/FaqSection";
import ContactSection from "@/components/sections/ContactSection";

export default function HomePage() {
  return (
    <>
      <Header />
      <main id="main-content">
        {/* A — Hero */}
        <HeroSection />

        {/* B — Countries marquee */}
        <ValueStrip />

        {/* C — Opportunities spotlight (full-width mint section) */}
        <HighlightsSection />

        {/* D — Summit agenda + overview panel */}
        <ProgrammeSection />

        {/* C2 — Opportunities spotlight panel (white floating) */}
        <OpportunitiesSpotlightSection />

        {/* G — About (negative top margin pulls it up so the spotlight panel straddles the boundary) */}
        <div className="-mt-[110px]">
          <AboutSection />
        </div>

        {/* I — Speakers */}
        <SpeakersSection />

        {/* L — Who should attend */}
        <WhoShouldAttendSection />

        {/* N — Partners */}
        <PartnersSection />

        {/* FAQ */}
        <FaqSection />

        {/* M — CTA */}
        <CtaSection />

        {/* O — Contact */}
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
