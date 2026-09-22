import { motion } from "framer-motion";
import { Flag, CheckCircle2, Award, Zap, Compass, Star } from "lucide-react";

export default function MilestonesTimeline() {
  const milestones = [
    {
      year: "2011",
      title: "Founding in Lucknow",
      desc: "Incorporation of eGoLife Governance Private Limited with a vision to modernize administrative operations and public technology.",
      icon: Flag,
    },
    {
      year: "2012",
      title: "UPLC Registration & First Civic Rollouts",
      desc: "Registered with UPLC; launched specialized municipal billing, taxation, and citizen registry databases.",
      icon: CheckCircle2,
    },
    {
      year: "2016",
      title: "UPDESCO Empanelment & State Expansion",
      desc: "Empanelled under UPDESCO to deliver enterprise software, statewide eGovernance platforms, and IT consultancy.",
      icon: Award,
    },
    {
      year: "2018",
      title: "MSME Registration & Enterprise Scaling",
      desc: "Expanded into scalable GIS mapping, property tax geospatial integration, and high-concurrency public systems.",
      icon: Zap,
    },
    {
      year: "2024",
      title: "RCUES Empanelment & Smart Urban Solutions",
      desc: "Empanelled with RCUES to drive smart city solutions, urban environmental monitoring, and ULB modernization.",
      icon: Compass,
    },
    {
      year: "2026 & Beyond",
      title: "15+ Years of Proven Governance Excellence",
      desc: "Over 80 government projects, 120 digital platforms, and 200+ clients across public and enterprise sectors.",
      icon: Star,
    },
  ];

  return (
    <section id="milestones" className="py-12 sm:py-16 md:py-20 bg-[#F8FAFC] border-b border-[#EAEEF4]">
      <div className="max-w-[1220px] mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#00AEEF]">
            CHRONICLE OF GROWTH
          </p>
          <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#10182C]">
            15 Years of Milestone Transformations
          </h2>
          <p className="mt-3 text-[#5A6F87] text-xs sm:text-base">
            From our founding in 2011 to becoming a trusted public sector partner across India.
          </p>
        </div>

        {/* Timeline Component */}
        <div className="mt-10 sm:mt-16 relative">
          {/* Vertical spine line: left-aligned on mobile, central on desktop */}
          <div className="absolute left-4 md:left-1/2 top-2 bottom-2 w-0.5 bg-[#CBD5E1] md:-translate-x-1/2" />

          <div className="space-y-6 md:space-y-12">
            {milestones.map((item, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div
                  key={item.year}
                  className={`relative flex flex-col md:flex-row items-start md:items-center ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}>

                  {/* Central/Mobile Node marker */}
                  <div className="absolute left-4 -translate-x-1/2 top-5 md:static md:translate-x-0 md:my-0 md:absolute md:left-1/2 md:-translate-x-1/2 flex items-center justify-center z-10">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white border-2 border-[#00AEEF] shadow-md flex items-center justify-center text-[#00AEEF] shrink-0">
                      <item.icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </div>
                  </div>

                  {/* Content card */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? 30 : -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.08 }}
                    className="w-full pl-10 md:pl-0 md:w-[calc(50%-2.5rem)]">
                    <div className="p-4 sm:p-6 rounded-2xl bg-white border border-[#E2E8F0] shadow-xs hover:shadow-md hover:border-[#00AEEF]/30 transition-all">
                      <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-2">
                        <span className="px-2.5 py-1 rounded-md bg-[#00AEEF]/10 text-[#00AEEF] text-xs font-extrabold">
                          {item.year}
                        </span>
                        <h3 className="text-sm sm:text-base font-bold text-[#10182C]">{item.title}</h3>
                      </div>
                      <p className="text-xs sm:text-sm text-[#5B6F84] leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>

                  {/* Empty side placeholder for balance on desktop */}
                  <div className="hidden md:block md:w-[calc(50%-2.5rem)]" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
