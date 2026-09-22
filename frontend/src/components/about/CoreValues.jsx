import { motion } from "framer-motion";
import { Compass, Target, HeartHandshake, ShieldCheck, Cpu, Eye } from "lucide-react";

export default function CoreValues() {
  const values = [
    {
      icon: Cpu,
      title: "Technology",
      desc: "Delivering solutions with innovation and professional platforms.",
      badge: "Innovation",
    },
    {
      icon: ShieldCheck,
      title: "Trust",
      desc: "Building a dependable ecosystem for users and businesses alike.",
      badge: "Integrity",
    },
    {
      icon: Eye,
      title: "Transparency",
      desc: "Simplifying processes through clear, professional and open service delivery.",
      badge: "Clarity",
    },
    {
      icon: HeartHandshake,
      title: "Commitment to Service",
      desc: "We believe technology should make life easier. We are committed to customer-focused service.",
      badge: "Service",
    },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-[#F8FAFC] border-y border-[#EAEEF4]">
      <div className="max-w-[1220px] mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#00AEEF]">
            PURPOSE & PHILOSOPHY
          </p>
          <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#10182C]">
            Our Vision, Mission & Foundational Values
          </h2>
          <p className="mt-3 text-[#5A6F87] text-xs sm:text-base">
            Guided by a strict commitment to public trust, democratic access, and technological excellence.
          </p>
        </div>

        {/* Vision & Mission Double Cards */}
        <div className="mt-8 sm:mt-12 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl bg-white border border-[#E2E8F0] p-5 sm:p-8 relative overflow-hidden shadow-xs hover:border-[#00AEEF]/30 transition-all">
            <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-xl bg-[#00AEEF]/10 text-[#00AEEF] flex items-center justify-center mb-4 sm:mb-6">
              <Compass className="w-5 sm:w-6 h-5 sm:h-6" />
            </div>
            <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-[#00AEEF]">
              OUR VISION
            </span>
            <h3 className="mt-1.5 sm:mt-2 text-lg sm:text-xl font-bold text-[#10182C]">
              Building a Trusted Service Ecosystem
            </h3>
            <p className="mt-2.5 sm:mt-3 text-xs sm:text-sm text-[#5B6F84] leading-relaxed">
              To build a trusted and technology-enabled service ecosystem that makes essential services simpler, faster and more accessible for people and businesses.
            </p>
          </motion.div>

          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-2xl bg-white border border-[#E2E8F0] p-5 sm:p-8 relative overflow-hidden shadow-xs hover:border-[#F58220]/30 transition-all">
            <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-xl bg-[#F58220]/10 text-[#F58220] flex items-center justify-center mb-4 sm:mb-6">
              <Target className="w-5 sm:w-6 h-5 sm:h-6" />
            </div>
            <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-[#F58220]">
              OUR MISSION
            </span>
            <h3 className="mt-1.5 sm:mt-2 text-lg sm:text-xl font-bold text-[#10182C]">
              Expanding Capabilities and Needs
            </h3>
            <p className="mt-2.5 sm:mt-3 text-xs sm:text-sm text-[#5B6F84] leading-relaxed">
              Our mission is to provide professional, transparent and technology-driven services while continuously expanding our capabilities to meet the changing needs of customers, businesses and institutions.
            </p>
          </motion.div>
        </div>

        {/* 4 Core Values Grid */}
        <div className="mt-6 sm:mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {values.map((val, idx) => (
            <motion.div
              key={val.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.08 }}
              className="rounded-xl bg-white border border-[#E2E8F0] p-5 sm:p-6 flex flex-col justify-between hover:shadow-md hover:border-[#00AEEF]/30 transition-all group">
              <div>
                <div className="flex items-center justify-between mb-3.5 sm:mb-4">
                  <div className="w-9 sm:w-10 h-9 sm:h-10 rounded-lg bg-[#F2F5FA] text-[#00AEEF] flex items-center justify-center group-hover:bg-[#00AEEF] group-hover:text-white transition-colors duration-200">
                    <val.icon className="w-4 sm:w-5 h-4 sm:h-5" />
                  </div>
                  <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-[#F1F5F9] text-[#475569]">
                    {val.badge}
                  </span>
                </div>
                <h4 className="text-base font-bold text-[#10182C] group-hover:text-[#00AEEF] transition-colors">
                  {val.title}
                </h4>
                <p className="mt-1.5 sm:mt-2 text-xs text-[#5B6F84] leading-relaxed">
                  {val.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
