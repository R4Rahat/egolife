import { motion } from "framer-motion";
import { CheckCircle2, MapPin, Building, Calendar, Layers } from "lucide-react";

export default function CompanyStory() {
  const storyPoints = [
    {
      title: "Technology",
      desc: "Providing reliable, accessible and innovative solutions for individuals, businesses, institutions and government-related projects.",
    },
    {
      title: "Trust",
      desc: "Building a trusted ecosystem that makes essential services simpler, faster and more accessible.",
    },
    {
      title: "Transparency & Service",
      desc: "Simplifying everyday processes by bringing multiple essential services together through a professional platform.",
    },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="max-w-[1220px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          {/* Left Column: Narrative */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#00AEEF]">
              OUR FOUNDATION & JOURNEY
            </p>
            <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#10182C] leading-tight">
              Multi-Service Technology Solutions
            </h2>

            <p className="mt-4 sm:mt-5 text-[#4B6179] text-sm sm:text-base leading-relaxed">
              Established in 2021 and headquartered in Goalpara, Assam, <strong className="text-[#10182C]">Egolife Egovernance Private Limited</strong> is a technology-driven, multi-service company focused on delivering reliable, accessible and innovative solutions for individuals, businesses, institutions and government-related projects.
            </p>

            <p className="mt-3 sm:mt-4 text-[#4B6179] text-sm sm:text-base leading-relaxed">
              Our approach is built around Technology, Trust, Transparency and Service. We aim to simplify everyday processes by bringing multiple essential services together through a professional and technology-enabled platform.
            </p>

            {/* Core Pillars List */}
            <div className="mt-6 sm:mt-8 space-y-3.5 sm:space-y-4">
              {storyPoints.map((pt, idx) => (
                <div key={idx} className="flex items-start gap-3 sm:gap-3.5">
                  <div className="w-6 h-6 rounded-full bg-[#00AEEF]/10 text-[#00AEEF] flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#10182C]">{pt.title}</h4>
                    <p className="text-xs sm:text-sm text-[#5B6F84] mt-0.5 leading-relaxed">{pt.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Institutional Identity Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5">
            <div className="relative rounded-2xl bg-[#E0F2FE] p-5 sm:p-8 text-[#10182C] shadow-xl sm:shadow-2xl overflow-hidden">
              {/* Decorative background glows */}
              <div className="pointer-events-none absolute -left-24 -top-24 h-[250px] sm:h-[300px] w-[250px] sm:w-[300px] rounded-full bg-[#F58220]/15 blur-[80px]" />
              <div className="pointer-events-none absolute -right-24 top-0 h-[220px] sm:h-[280px] w-[220px] sm:w-[280px] rounded-full bg-[#00AEEF]/30 blur-[90px]" />

              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/70 border border-[#7DD3FC]/60 text-[10px] sm:text-[11px] font-semibold tracking-wider uppercase text-[#00AEEF]">
                  Institutional Profile
                </div>

                <h3 className="mt-3 sm:mt-4 text-lg sm:text-xl font-extrabold text-[#10182C] leading-snug">
                  Egolife Egovernance Private Limited
                </h3>

                <p className="mt-2 text-xs text-[#4B6179] leading-relaxed">
                  Incorporated under the Companies Act, providing multi-service digital, financial, and business support solutions.
                </p>

                <div className="mt-5 sm:mt-6 space-y-3.5 sm:space-y-4 pt-5 sm:pt-6 border-t border-[#7DD3FC]/50 text-xs">
                  <div className="flex items-start sm:items-center gap-3">
                    <Calendar className="w-4 h-4 text-[#00AEEF] shrink-0 mt-0.5 sm:mt-0" />
                    <div>
                      <span className="text-[#4B6179] block text-[10px] sm:text-[11px]">Year of Inception</span>
                      <span className="font-semibold text-[#10182C]">2021</span>
                    </div>
                  </div>

                  <div className="flex items-start sm:items-center gap-3">
                    <MapPin className="w-4 h-4 text-[#00AEEF] shrink-0 mt-0.5 sm:mt-0" />
                    <div>
                      <span className="text-[#4B6179] block text-[10px] sm:text-[11px]">Corporate Office</span>
                      <span className="font-semibold text-[#10182C] break-words">
                        Paikan Part II, P.O, P.S-Krishnai, Dist-Goalpara (Assam), Pin-783126
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start sm:items-center gap-3">
                    <Building className="w-4 h-4 text-[#00AEEF] shrink-0 mt-0.5 sm:mt-0" />
                    <div>
                      <span className="text-[#4B6179] block text-[10px] sm:text-[11px]">Key Authorizations</span>
                      <span className="font-semibold text-[#10182C]">
                        Govt. Authorized Agency, UTIITSL, DRA Certified
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start sm:items-center gap-3">
                    <Layers className="w-4 h-4 text-[#00AEEF] shrink-0 mt-0.5 sm:mt-0" />
                    <div>
                      <span className="text-[#4B6179] block text-[10px] sm:text-[11px]">Service Areas</span>
                      <span className="font-semibold text-[#10182C]">
                        Pan India
                      </span>
                    </div>
                  </div>
                </div>

                {/* Bottom Trust Badge */}
                <div className="mt-5 sm:mt-6 rounded-xl bg-white/60 border border-[#7DD3FC]/50 p-3 sm:p-3.5 flex flex-col xs:flex-row xs:items-center justify-between gap-2.5 xs:gap-0">
                  <div>
                    <p className="text-[10px] uppercase font-bold tracking-wider text-[#00AEEF]">
                      Active Reach
                    </p>
                    <p className="text-xs sm:text-sm font-bold text-[#10182C] mt-0.5">Pan India Delivery</p>
                  </div>
                  <span className="inline-flex items-center justify-center px-2.5 py-1 rounded-full bg-[#16A34A]/20 text-[#15803D] text-[10px] sm:text-[11px] font-semibold border border-[#16A34A]/30 w-fit">
                    Active Deployments
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
