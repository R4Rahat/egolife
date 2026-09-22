import { useEffect } from "react";
import AboutHero from "../components/about/AboutHero.jsx";
import CompanyStory from "../components/about/CompanyStory.jsx";
import CoreValues from "../components/about/CoreValues.jsx";
import MilestonesTimeline from "../components/about/MilestonesTimeline.jsx";
import LeadershipProfile from "../components/about/LeadershipProfile.jsx";
import ManagementDirectory from "../components/about/ManagementDirectory.jsx";
import AboutCTA from "../components/about/AboutCTA.jsx";

export default function About() {
  useEffect(() => {
    if (window.location.hash) {
      setTimeout(() => {
        const element = document.getElementById(window.location.hash.substring(1));
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
    document.title = "About Us | eGoLife Governance Private Limited";
  }, []);

  return (
    <main className="min-h-screen bg-white">
      <AboutHero />
      <CompanyStory />
      <CoreValues />
      <MilestonesTimeline />
      <LeadershipProfile />
      <ManagementDirectory />
      <AboutCTA />
    </main>
  );
}
