import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Landmark,
  Building2,
  ShieldCheck,
  Building,
  Layers,
  HeartPulse,
} from "lucide-react";

const partners = [
  { icon: Landmark, name: "GAD, Govt. of Assam" },
  { icon: HeartPulse, name: "UTIITSL (AB-PMJAY)" },
  { icon: Building, name: "Punjab National Bank" },
  { icon: ShieldCheck, name: "Alankit Limited" },
  { icon: Building2, name: "DC Offices of Assam" },
  { icon: Layers, name: "Egolife E-Commerce" },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

const item = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function TrustedBy() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });

  return (
    <section className="bg-[#F8FAFC] border-b border-[#EAEEF4]">
      <div className="max-w-[1220px] mx-auto px-6 py-12 lg:py-14">
        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}>
          <motion.h2
            variants={item}
            className="text-center text-[12px] font-bold uppercase tracking-[3.5px] text-[#5A6F87]">
            Empanelled &amp; Partnered with Leading Public Authorities &amp; Institutions
          </motion.h2>

          <motion.div
            variants={container}
            className="mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-5 lg:justify-between">
            {partners.map((partner) => (
              <motion.div
                key={partner.name}
                variants={item}
                className="flex items-center gap-2.5 text-[#10182C] px-3 py-1.5 rounded-lg bg-white border border-[#E2E8F0] shadow-2xs">
                <partner.icon className="w-4 h-4 text-[#24469A]" />
                <span className="text-xs sm:text-sm font-bold whitespace-nowrap">
                  {partner.name}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
