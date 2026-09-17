import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const trustSignals = [
  "CIN: U72900AS2021PTC022087",
  "EA Code 1507 (GAD Assam)",
  "UTIITSL Authorized Partner",
  "DRA Certified Agency",
  "Punjab National Bank Vendor",
];

const stats = [
  {
    value: 7,
    label: "Years in IT Industry",
    hasPlus: true,
  },
  {
    value: 11,
    label: "Assam Districts Covered",
    hasPlus: true,
  },
  {
    value: 200,
    label: "Services Across NE & WB",
    hasPlus: true,
  },
  {
    value: 1507,
    label: "Enrolment Agency Code",
    hasPlus: false,
  },
];

function Counter({ target, active, hasPlus }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;

    let start = 0;
    const duration = 1200;
    const steps = 50;
    const increment = target / steps;

    const timer = setInterval(() => {
      start += increment;

      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [target, active]);

  return (
    <>
      {count}
      {hasPlus && <span className="text-[#F58220]">+</span>}
    </>
  );
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.09,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 18,
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

export default function TrustSignals() {
  const sectionRef = useRef(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const element = sectionRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-gradient-to-b from-[#F2F6FB] via-[#EEF4FA] to-white py-16 sm:py-20 lg:py-24 border-b border-[#EAEEF4]">
      <div className="relative mx-auto max-w-[1220px] px-5 sm:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={active ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="text-center">
          <div className="mb-4 flex items-center justify-center gap-2">
            <span className="h-[6px] w-[6px] rounded-full bg-[#F58220]" />
            <span className="text-[11px] font-semibold uppercase tracking-[3.5px] text-[#24469A]">
              Trust Signals
            </span>
          </div>

          <h2 className="mx-auto max-w-[650px] text-[32px] sm:text-[40px] lg:text-[44px] font-extrabold leading-[1.08] tracking-[-1.5px] text-[#0D1930]">
            Government-Empanelled.
            <br />
            Audited. Accredited.
          </h2>

          <p className="mx-auto mt-4 max-w-[620px] text-[13px] sm:text-[14px] leading-[1.65] text-[#526B84]">
            Official vendor partnerships and consortium empanelments under GAD Govt. of Assam, UTIITSL, and leading financial institutions.
          </p>
        </motion.div>

        {/* Signals */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={active ? "visible" : "hidden"}
          className="mx-auto mt-10 flex max-w-[950px] flex-wrap justify-center gap-3">
          {trustSignals.map((signal) => (
            <motion.div
              key={signal}
              variants={itemVariants}
              className="flex h-[46px] items-center gap-2.5 rounded-lg border border-[#D8E3ED] bg-[#F9FBFD] px-4 sm:px-5 transition-all duration-300 hover:border-[#24469A]/30 hover:bg-white hover:shadow-xs">
              <CheckCircle2 size={15} strokeWidth={2} className="shrink-0 text-[#F58220]" />
              <span className="whitespace-nowrap text-xs font-semibold text-[#173D68]">
                {signal}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={active ? "visible" : "hidden"}
          className="mx-auto mt-8 grid max-w-[950px] grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={itemVariants}
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
              className="flex h-[110px] flex-col items-center justify-center rounded-xl border border-[#D8E3ED] bg-white p-3 transition-all duration-300 hover:border-[#24469A]/30 hover:shadow-sm">
              <div className="text-[28px] sm:text-[32px] font-extrabold leading-none tracking-[-1.5px] text-[#24469A]">
                <Counter target={stat.value} active={active} hasPlus={stat.hasPlus} />
              </div>
              <p className="mt-2 text-center text-[10px] sm:text-[11px] font-medium text-[#526B84]">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
