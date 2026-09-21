import { motion } from "framer-motion";
import {
  Landmark,
  Stethoscope,
  Zap,
  GraduationCap,
  Building2,
  Wheat,
  Plane,
  Factory,
  ShoppingBag,
  Banknote,
  Trees,
  Shield,
} from "lucide-react";

const industries = [
  {
    name: "Government",
    icon: Landmark,
  },
  {
    name: "Healthcare",
    icon: Stethoscope,
  },
  {
    name: "Power & Utilities",
    icon: Zap,
  },
  {
    name: "Education",
    icon: GraduationCap,
  },
  {
    name: "Municipal Bodies",
    icon: Building2,
  },
  {
    name: "Agriculture",
    icon: Wheat,
  },
  {
    name: "Tourism",
    icon: Plane,
  },
  {
    name: "Manufacturing",
    icon: Factory,
  },
  {
    name: "Retail",
    icon: ShoppingBag,
  },
  {
    name: "Banking & BFSI",
    icon: Banknote,
  },
  {
    name: "Environment",
    icon: Trees,
  },
  {
    name: "Public Safety",
    icon: Shield,
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.07,
    },
  },
};

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

function IndustriesSection() {
  return (
    <section className="relative overflow-hidden bg-[#F7F9FC] py-24 sm:py-28 lg:py-32">
      {/* Very subtle background grid */}
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-40" />

      <div className="relative mx-auto max-w-[1250px] px-6 sm:px-8">
        {/* ========================================= */}
        {/* HEADING                                   */}
        {/* ========================================= */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{
            once: true,
            amount: 0.4,
          }}
          transition={{
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mx-auto max-w-[760px] text-center">
          {/* Eyebrow */}
          <div className="mb-5 flex items-center justify-center gap-2">
            <span className="h-[6px] w-[6px] rounded-full bg-[#F58220]" />

            <span className="text-[12px] font-semibold uppercase tracking-[4px] text-[#00AEEF]">
              Industries We Serve
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-[38px] font-extrabold leading-[1.08] tracking-[-1.8px] text-[#0D1930] sm:text-[46px] lg:text-[48px]">
            Domain depth across India's most
            <br className="hidden sm:block" />
            regulated sectors.
          </h2>
        </motion.div>

        {/* ========================================= */}
        {/* INDUSTRIES GRID                           */}
        {/* ========================================= */}

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.15,
          }}
          className="
            mx-auto
            mt-14
            grid
            max-w-[1215px]
            grid-cols-2
            gap-3
            sm:grid-cols-3
            sm:gap-4
            lg:grid-cols-6
            lg:gap-4
          ">
          {industries.map((industry) => {
            const Icon = industry.icon;

            return (
              <motion.div
                key={industry.name}
                variants={cardVariants}
                whileHover={{
                  y: -5,
                  transition: {
                    duration: 0.2,
                  },
                }}
                className="
                  group
                  flex
                  h-[125px]
                  cursor-default
                  flex-col
                  items-center
                  justify-center
                  rounded-[12px]
                  border
                  border-[#DCE5EE]
                  bg-white
                  px-3
                  transition-all
                  duration-300
                  hover:border-[#BFCFE3]
                  hover:shadow-[0_12px_30px_rgba(28,61,100,0.07)]
                  sm:h-[125px]
                ">
                {/* Icon */}
                <div
                  className="
                    mb-4
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    text-[#00AEEF]
                    transition-transform
                    duration-300
                    group-hover:-translate-y-1
                  ">
                  <Icon size={29} strokeWidth={1.8} />
                </div>

                {/* Name */}
                <span
                  className="
                    text-center
                    text-[14px]
                    font-medium
                    leading-5
                    text-[#10182C]
                    transition-colors
                    duration-300
                    group-hover:text-[#00AEEF]
                  ">
                  {industry.name}
                </span>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

export default IndustriesSection;
