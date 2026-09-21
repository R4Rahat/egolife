import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import CountUp from "../common/CountUp.jsx";

const stats = [
  { value: 11, suffix: "+", label: "Years in IT Industry" },
  { value: 200, suffix: "+", label: "Digital & Retail Services" },
  { value: 28, suffix: "+", label: "India Districts Covered" },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const card = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Stats() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });

  return (
    <section className="bg-grid border-b border-[#EAEEF4]">
      <div className="max-w-[1220px] mx-auto px-6 py-12 lg:py-14">
        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={card}
              className="h-[140px] flex flex-col justify-center rounded-2xl border border-[#E4E9F1] bg-white px-6 lg:px-7 shadow-xs hover:border-[#00AEEF]/30 transition-all">
              <p className="text-3xl lg:text-[40px] font-extrabold leading-none text-[#00AEEF]">
                <CountUp target={stat.value} start={inView} />
                <span className="text-[#F58220]">{stat.suffix}</span>
              </p>
              <p className="mt-2 text-xs sm:text-sm font-medium text-[#4B6179]">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
