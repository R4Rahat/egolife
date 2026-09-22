import Hero from "../components/home/Hero.jsx";
import Stats from "../components/home/Stats.jsx";
import TrustedBy from "../components/home/TrustedBy.jsx";
import WhyChooseUs from "../components/home/WhyChooseUs.jsx";
import IndustriesSection from "../components/home/IndustriesSection.jsx";
import GovernmentExperience from "../components/home/GovermentExperience.jsx";
import CaseStudies from "../components/home/CaseStudies.jsx";
import TrustSignals from "../components/home/TrustSignals.jsx";
import CTA from "../components/home/CTA.jsx";

export default function Home() {
  return (
    <main>
      <Hero />
      {/* <Stats /> */}
      <TrustedBy />
      <WhyChooseUs />
      <IndustriesSection />
      <GovernmentExperience />
      <CaseStudies />
      <TrustSignals />
      <CTA />
    </main>
  );
}
