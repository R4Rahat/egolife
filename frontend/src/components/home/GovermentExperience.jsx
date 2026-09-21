import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import {
  Calendar,
  Building,
  Award,
  CheckCircle2,
  HeartPulse,
  Landmark,
  Lightbulb,
} from "lucide-react";

const timeline = [
  {
    year: "2016",
    title: "Inception as M.S SALES SERVICE",
    description:
      "Founded in India as a sole proprietorship firm, providing IT hardware accessories, commercial supplies, and field administrative assistance.",
    icon: Calendar,
    side: "left",
  },
  {
    year: "2018",
    title: "Government School Uniform Supply",
    description:
      "Expanded into large-scale state government supplies, successfully delivering school uniforms across multiple districts of India.",
    icon: Building,
    side: "right",
  },
  {
    year: "2021",
    title: "Incorporation as Egolife Egovernance Pvt Ltd",
    description:
      "Formally incorporated as a Private Limited Company (CIN: U72900AS2021PTC022087) with corporate headquarters in Paikan, Goalpara, India.",
    icon: Award,
    side: "left",
  },
  {
    year: "2022",
    title: "Aadhaar Consortium & PNB Deployment",
    description:
      "Consortium with BNK Capital Markets Ltd (Government Authorized) under Government; appointed vendor for Punjab National Bank and Alankit Ltd (Labour-Welfare Dept).",
    icon: CheckCircle2,
    side: "right",
  },
  {
    year: "2023",
    title: "AB-PMJAY (UTIITSL) Across 6 Districts & PAN Agency",
    description:
      "Appointed vendor under UTIITSL for Ayushman Bharat health card drives in Goalpara, Bongaigaon, Dhubri, Karimganj, Hailakandi, and Cachar; All-India PAN card vendor.",
    icon: HeartPulse,
    side: "left",
  },
  {
    year: "2024 & Beyond",
    title: "Egolife LED, E-Commerce (200+) & Banking DRA Recovery",
    description:
      "In-house LED bulb manufacturing, DRA certified debt recovery for scheduled banks, and 200+ digital services across All India and West Bengal.",
    icon: Lightbulb,
    side: "right",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
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

export default function GovernmentExperience() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.15 });

  return (
    <section className="bg-[#F8FAFC] py-20 lg:py-24 border-b border-[#EAEEF4]">
      <div className="max-w-[1220px] mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-[11px] font-bold uppercase tracking-[3px] text-[#00AEEF]">
            INSTITUTIONAL TRAJECTORY
          </p>
          <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#10182C]">
            Our Journey &amp; Public Sector Track Record
          </h2>
          <p className="mt-3 text-[#5A6F87] text-sm sm:text-base">
            From our founding in 2016 as M.S SALES SERVICE to statewide e-governance implementation under , UTIITSL, and Punjab National Bank.
          </p>
        </div>

        {/* Timeline */}
        <div className="mt-16 relative">
          {/* Central spine line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-[#CBD5E1] -translate-x-1/2" />

          <motion.div
            ref={sectionRef}
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="space-y-8 md:space-y-12">
            {timeline.map((item, idx) => {
              const isLeft = item.side === "left";
              return (
                <motion.div
                  key={item.year}
                  variants={itemVariants}
                  className={`relative flex flex-col md:flex-row items-center ${
                    !isLeft ? "md:flex-row-reverse" : ""
                  }`}>
                  {/* Content card */}
                  <div className="w-full md:w-[calc(50%-2.5rem)]">
                    <div className="p-6 rounded-2xl bg-white border border-[#E2E8F0] shadow-xs hover:shadow-md hover:border-[#00AEEF]/30 transition-all">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="px-2.5 py-1 rounded-md bg-[#00AEEF]/10 text-[#00AEEF] text-xs font-black">
                          {item.year}
                        </span>
                        <h3 className="text-base font-bold text-[#10182C]">{item.title}</h3>
                      </div>
                      <p className="text-xs sm:text-sm text-[#5B6F84] leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Central Node marker */}
                  <div className="my-3 md:my-0 md:absolute md:left-1/2 md:-translate-x-1/2 flex items-center justify-center z-10">
                    <div className="w-10 h-10 rounded-full bg-white border-2 border-[#00AEEF] shadow-md flex items-center justify-center text-[#00AEEF]">
                      <item.icon className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Empty side placeholder */}
                  <div className="hidden md:block md:w-[calc(50%-2.5rem)]" />
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
