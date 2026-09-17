import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Fingerprint,
  HeartPulse,
  Landmark,
  Shirt,
  ShieldCheck,
  Building,
  ArrowRight,
  MapPin,
} from "lucide-react";

const caseStudies = [
  {
    id: "aadhaar-enrolment",
    category: "CITIZEN IDENTIFICATION & GAD ASSAM",
    title: "Aadhaar Generation & Biometric Kit Deployment",
    authority: "GAD Assam | EA Code: 1507",
    description:
      "Operating in consortium with BNK Capital Markets Ltd as Enrolment Agency (EA code 1507). Providing certified operators and biometric kits under Deputy Commissioners of Baksa, Udalguri, Tamulpur, Barpeta, Goalpara, and District Commissioner Nalbari.",
    icon: Fingerprint,
    color: "from-blue-600 to-indigo-700",
    tags: ["EA Code 1507", "6 DC Offices", "Gram Panchayat Camps"],
    coverage: "Baksa, Udalguri, Tamulpur, Barpeta, Goalpara, Nalbari",
  },
  {
    id: "ab-pmjay-ayushman",
    category: "HEALTHCARE MISSION & UTIITSL",
    title: "AB-PMJAY Ayushman Bharat Health Project",
    authority: "UTIITSL (Govt of India Undertaking)",
    description:
      "Field mobilization and biometric verification of beneficiaries for Ayushman Bharat golden card generation. Executing camp-based enrolment drives providing up to ₹5 Lakh cashless health cover.",
    icon: HeartPulse,
    color: "from-emerald-600 to-teal-700",
    tags: ["UTIITSL", "Health Cover ₹5L", "Golden Cards"],
    coverage: "Goalpara, Bongaigaon, Dhubri, Karimganj, Hailakandi, Cachar",
  },
  {
    id: "pnb-branch-enrolment",
    category: "BANKING PARTNERSHIP & HARDWARE",
    title: "Punjab National Bank Enrolment & Kit Supply",
    authority: "Punjab National Bank | BNK Capital",
    description:
      "Appointed by BNK Capital Markets Ltd as vendor of manpower and Aadhaar kit supplier stationed across various Punjab National Bank branches throughout Assam for customer KYC and citizen enrolment.",
    icon: Building,
    color: "from-sky-600 to-blue-700",
    tags: ["PNB Assam Branches", "Certified Operators", "Biometric Kits"],
    coverage: "Statewide Punjab National Bank Branches",
  },
  {
    id: "school-uniforms",
    category: "STATE PUBLIC PROCUREMENT",
    title: "Government School Uniform Manufacturing & Supply",
    authority: "Dept of School Education, Assam",
    description:
      "Large-scale tailoring, quality inspection, and timely distribution of standardized school uniforms for students enrolled across government schools in different districts of Assam.",
    icon: Shirt,
    color: "from-orange-500 to-amber-600",
    tags: ["Institutional Supply", "Statewide Districts", "Quality Certified"],
    coverage: "Multiple Districts of Assam",
  },
  {
    id: "pan-card-agency",
    category: "TAXATION & DIRECT BENEFIT",
    title: "PAN Card Agency on All-India Basis",
    authority: "UTIITSL Authorized Partner",
    description:
      "National franchise providing instant e-PAN issuance, biometric verification, demographic corrections, and Aadhaar-PAN seeding for individuals and business entities across India.",
    icon: ShieldCheck,
    color: "from-teal-600 to-emerald-700",
    tags: ["All-India Franchise", "Instant e-PAN", "Direct Tax Compliance"],
    coverage: "All India Network",
  },
  {
    id: "dra-debt-recovery",
    category: "BANKING & BFSI RECOVERY",
    title: "DRA Certified Banking Debt Recovery Services",
    authority: "Scheduled Commercial Banks & NBFCs",
    description:
      "Team of IIBF / DRA certified recovery agents specializing in amicable, ethical resolution of non-performing assets across Personal Loans (PL), Credit Cards (CC), and Business Loans.",
    icon: Landmark,
    color: "from-amber-600 to-orange-700",
    tags: ["DRA Certified", "PL, CC & Business Loans", "RBI Adherence"],
    coverage: "Assam & North-East Region",
  },
];

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 25,
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

export default function CaseStudies() {
  return (
    <section className="bg-white py-20 lg:py-24 border-b border-[#EAEEF4]">
      <div className="max-w-[1220px] mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-[11px] font-bold uppercase tracking-[3px] text-[#F58220]">
            FLAGSHIP PUBLIC DELIVERIES
          </p>
          <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#10182C]">
            Verified Projects &amp; Public Sector Engagements
          </h2>
          <p className="mt-3 text-[#5A6F87] text-sm sm:text-base">
            Proven execution across Deputy Commissioners of Assam, UTIITSL, Punjab National Bank, and the Department of School Education.
          </p>
        </div>

        {/* 6 Project Cards Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
          {caseStudies.map((item) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={item.id}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="group flex flex-col justify-between rounded-2xl border border-[#E4EAF2] bg-[#FAFCFF] hover:bg-white p-6 sm:p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#24469A]/30 hover:shadow-xl">
                <div>
                  {/* Category & Authority */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[10px] font-black uppercase tracking-wider text-[#24469A]">
                      {item.category}
                    </span>
                    <span className="w-2 h-2 rounded-full bg-[#16A34A] animate-pulse" />
                  </div>

                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-11 h-11 rounded-xl bg-[#24469A]/10 text-[#24469A] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-[#10182C] group-hover:text-[#24469A] transition-colors leading-snug">
                        {item.title}
                      </h3>
                      <p className="text-xs text-[#64748B] font-semibold mt-0.5">
                        {item.authority}
                      </p>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-[#4B6179] leading-relaxed">
                    {item.description}
                  </p>

                  {/* Coverage */}
                  <div className="mt-4 flex items-center gap-1.5 text-xs text-[#334155] font-medium">
                    <MapPin className="w-3.5 h-3.5 text-[#F58220] shrink-0" />
                    <span className="truncate">{item.coverage}</span>
                  </div>

                  {/* Tags */}
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded-md bg-[#F1F5F9] text-[#475569] text-[11px] font-semibold">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer Link */}
                <div className="mt-6 pt-4 border-t border-[#EDF2F7] flex items-center justify-between">
                  <span className="text-xs font-semibold text-[#16A34A]">
                    Active Framework
                  </span>
                  <Link
                    to="/services"
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#24469A] hover:text-[#1E3A80] transition-colors">
                    <span>View Specifications</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
