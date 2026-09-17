import { useEffect } from "react";
import ContactHero from "../components/contact/ContactHero.jsx";
import ContactForm from "../components/contact/ContactForm.jsx";
import ContactInfo from "../components/contact/ContactInfo.jsx";
import ContactFAQ from "../components/contact/ContactFAQ.jsx";

export default function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Contact Us | EGOLIFE EGOVERNANCE PRIVATE LIMITED";
  }, []);

  return (
    <main className="min-h-screen bg-white">
      <ContactHero />

      {/* Main Content Grid: Form + Info */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-[1220px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            {/* Form Column */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>

            {/* Info Column */}
            <div className="lg:col-span-5">
              <ContactInfo />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <ContactFAQ />
    </main>
  );
}
