import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Award,
  Users,
  MessageSquareHeart,
  Sparkles,
  Fingerprint,
  HeartPulse,
  Landmark,
  Lightbulb,
} from "lucide-react";

const valuesAndPillars = [
  {
    icon: Award,
    title: "High Bar of Standards",
    tag: "Core Value",
    description:
      "We maintain rigorous operational and audit standards across biometric enrolment kits, uniform consignments, and banking processes.",
  },
  {
    icon: Users,
    title: "Team-Driven Execution",
    tag: "Core Value",
    description:
      "We work collaboratively in motivated specialist teams to deliver the best results for government bodies and corporate clients.",
  },
  {
    icon: MessageSquareHeart,
    title: "Sincere Feedback Culture",
    tag: "Core Value",
    description:
      "Continuous process refinement through close, open coordination with Deputy Commissioners, bank officials, and citizen beneficiaries.",
  },
  {
    icon: Sparkles,
    title: "Excitement in Every Project",
    tag: "Core Value",
    description:
      "Bringing authentic energy, dedication, and precision to grassroots civic schemes, school supplies, and banking recovery.",
  },
  {
    icon: Fingerprint,
    title: "Government Authorized Agency",
    tag: "Aadhaar Consortium",
    description:
      "Empanelled in consortium with BNK Capital Markets Ltd for district-wide Aadhaar enrolment camps across India.",
  },
  {
    icon: HeartPulse,
    title: "UTIITSL Authorized Vendor",
    tag: "Healthcare & PAN",
    description:
      "Mobilizing AB-PMJAY Ayushman Bharat health cards across 6 India districts and managing All-India PAN card services.",
  },
  {
    icon: Landmark,
    title: "DRA Certified Banking Team",
    tag: "BFSI Debt Recovery",
    description:
      "Certified recovery agents handling Personal Loans, Credit Cards, and Business Loans for Punjab National Bank and scheduled banks.",
  },
  {
    icon: Lightbulb,
    title: "In-House 'Egolife LED' Brand",
    tag: "Manufacturing & Retail",
    description:
      "Proprietary LED bulb manufacturing and strategic e-commerce distribution of 200+ services across All India & West Bengal.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function WhyChooseUs() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <section className="bg-white py-20 lg:py-24 border-b border-[#EAEEF4]">
      <div className="max-w-[1220px] mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.22em] text-[#00AEEF]">
            FOUNDATIONAL VALUES &amp; CAPABILITIES
          </p>
          <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#10182C]">
            Why Government Agencies &amp; Institutions Rely on eGoLife
          </h2>
          <p className="mt-3 text-[#5A6F87] text-sm sm:text-base">
            Grounded in our 4 set corporate values and backed by 11 years of deep IT industry delivery across India.
          </p>
        </div>

        {/* 8 Cards Grid */}
        <motion.div
          ref={sectionRef}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {valuesAndPillars.map((pillar) => (
            <motion.div
              key={pillar.title}
              variants={cardVariants}
              className="group relative flex flex-col justify-between rounded-2xl border border-[#E4E9F1] bg-[#FAFCFF] hover:bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#00AEEF]/30 hover:shadow-lg">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="flex items-center justify-center w-11 h-11 rounded-xl bg-[#F2F6FC] text-[#00AEEF] transition-colors duration-300 group-hover:bg-[#00AEEF] group-hover:text-white">
                    <pillar.icon className="w-5 h-5" />
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-[#F1F5F9] text-[#00AEEF]">
                    {pillar.tag}
                  </span>
                </div>

                <h3 className="text-base font-bold text-[#10182C] group-hover:text-[#00AEEF] transition-colors">
                  {pillar.title}
                </h3>
                <p className="mt-2.5 text-xs sm:text-sm text-[#556980] leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-[#EDF2F7] flex items-center justify-between text-[11px] text-[#16A34A] font-semibold">
                <span>Verified Delivery</span>
                <span>✓</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
