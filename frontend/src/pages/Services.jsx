import { useEffect } from "react";
import ServicesHero from "../components/services/ServicesHero.jsx";
import CredentialsBar from "../components/services/CredentialsBar.jsx";
import ServicesCatalog from "../components/services/ServicesCatalog.jsx";
import AssamCoverageSection from "../components/services/AssamCoverageSection.jsx";
import CorporateValues from "../components/services/CorporateValues.jsx";
import ServicesCTA from "../components/services/ServicesCTA.jsx";

export default function Services() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Services | EGOLIFE EGOVERNANCE PRIVATE LIMITED";
  }, []);

  return (
    <main className="min-h-screen bg-white">
      <ServicesHero />
      <CredentialsBar />
      <ServicesCatalog />
      <AssamCoverageSection />
      <CorporateValues />
      <ServicesCTA />
    </main>
  );
}
