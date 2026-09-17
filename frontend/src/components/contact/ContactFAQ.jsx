import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
  {
    q: "How can our Gram Panchayat or School organize an Aadhaar enrolment camp?",
    a: "Operating in consortium with BNK Capital Markets Ltd as Enrolment Agency (EA code 1507) under GAD Govt. of Assam, we deploy certified operators, biometric kits (Iris and slap scanners), and GPS laptops directly to your premises. Submit the proposal form or message our WhatsApp desk to coordinate camp dates.",
  },
  {
    q: "Which districts are covered under your AB-PMJAY Ayushman Bharat healthcare project?",
    a: "Under UTI Infrastructure Technology and Services Limited (UTIITSL), our field teams mobilize and generate Ayushman Golden Cards across 6 key districts: Goalpara, Bongaigaon, Dhubri, Karimganj, Hailakandi, and Cachar.",
  },
  {
    q: "How can banks partner with eGoLife for DRA debt recovery?",
    a: "We have an experienced team of IIBF / DRA certified recovery agents trained in amicable negotiation, skip tracing, and compliance with RBI guidelines. We actively handle Personal Loans (PL), Credit Cards (CC), and Business Loans for scheduled banks and NBFCs.",
  },
  {
    q: "Can government departments or institutions procure 'Egolife LED' bulbs and school uniforms?",
    a: "Yes. We manufacture energy-efficient LED bulbs under the registered brand 'Egolife LED' and have extensive experience executing state government school uniform manufacturing and distribution tenders across Assam.",
  },
  {
    q: "What is the typical response turnaround time for project inquiries?",
    a: "All web inquiries are assigned a unique Reference ID and reviewed by our administrative office in Paikan, Goalpara within 24 business hours. For immediate assistance, you can call +91 6002172653 or message us on WhatsApp.",
  },
];

export default function ContactFAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <section className="py-16 bg-[#F8FAFC] border-t border-[#EAEEF4]">
      <div className="max-w-[900px] mx-auto px-6">
        <div className="text-center max-w-xl mx-auto mb-10">
          <span className="text-[10px] font-bold uppercase tracking-widest text-[#24469A]">
            FREQUENTLY ASKED QUESTIONS
          </span>
          <h3 className="text-xl sm:text-2xl font-extrabold text-[#10182C] mt-1">
            Common Inquiries &amp; Engagement Guidance
          </h3>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-xl border border-[#E2E8F0] bg-white overflow-hidden transition-all shadow-2xs">
                <button
                  onClick={() => toggle(idx)}
                  className="w-full flex items-center justify-between p-4 sm:p-5 text-left transition-colors hover:bg-[#F8FAFC]">
                  <span className="text-xs sm:text-sm font-bold text-[#10182C] flex items-center gap-2.5">
                    <HelpCircle className="w-4 h-4 text-[#24469A] shrink-0" />
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#64748B] shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-[#24469A]" : ""
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="px-5 pb-5 pt-1 text-xs sm:text-sm text-[#5B6F84] leading-relaxed border-t border-[#F1F5F9]">
                      {faq.a}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
