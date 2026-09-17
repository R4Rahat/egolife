import { useEffect } from "react";
import AboutHero from "../components/about/AboutHero.jsx";
import CompanyStory from "../components/about/CompanyStory.jsx";
import CoreValues from "../components/about/CoreValues.jsx";
import EmpanelmentsSection from "../components/about/EmpanelmentsSection.jsx";
import MilestonesTimeline from "../components/about/MilestonesTimeline.jsx";
import AboutCTA from "../components/about/AboutCTA.jsx";

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "About Us | eGoLife Governance Private Limited";
  }, []);

  return (
    <main className="min-h-screen bg-white">
      <AboutHero />
      <CompanyStory />
      <CoreValues />
      <EmpanelmentsSection />
      <MilestonesTimeline />
      <AboutCTA />
    </main>
  );
}
