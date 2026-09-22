import { motion } from "framer-motion";
import {
  Award,
  Users,
  MessageSquareHeart,
  Sparkles,
  TrendingUp,
  History,
} from "lucide-react";

export default function CorporateValues() {
  const setValues = [
    {
      icon: Award,
      title: "We Maintain High Bar of Standards",
      desc: "Every biometric kit, uniform consignment, and recovery negotiation is held to stringent national quality and regulatory metrics.",
      accent: "text-blue-600 bg-blue-50 border-blue-200",
    },
    {
      icon: Users,
      title: "We Work in a Team to Get the Best Results",
      desc: "From certified Aadhaar operators to DRA field agents, our cross-functional team collaborates cohesively for zero-error execution.",
      accent: "text-emerald-600 bg-emerald-50 border-emerald-200",
    },
    {
      icon: MessageSquareHeart,
      title: "We Take Feedback Sincerely",
      desc: "Continuous refinement through transparent communication with District Commissioners, bank managers, and citizen beneficiaries.",
      accent: "text-orange-600 bg-orange-50 border-orange-200",
    },
    {
      icon: Sparkles,
      title: "We Take Every Project with Excitement",
      desc: "Approaching grassroots e-governance drives, healthcare cards, and enterprise IT challenges with genuine passion and dedication.",
      accent: "text-purple-600 bg-purple-50 border-purple-200",
    },
  ];

  return (
    <section className="py-12 sm:py-20 bg-[#F8FAFC] border-y border-[#EAEEF4]">
      <div className="max-w-[1220px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          {/* Left Column: Corporate Evolution from 2016 to 2021 */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00AEEF]/8 border border-[#00AEEF]/15 text-[#00AEEF] text-xs font-semibold uppercase tracking-wider mb-4">
              <History className="w-3.5 h-3.5" />
              <span>CORPORATE EVOLUTION</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#10182C] leading-tight">
              From Grassroots Beginnings to an Accredited State Partner
            </h2>

            <p className="mt-4 sm:mt-5 text-[#4B6179] text-sm sm:text-base leading-relaxed">
              Our enterprise was originally established in the year{" "}
              <strong className="text-[#10182C]">2016</strong> as a sole
              proprietorship firm under the name{" "}
              <strong className="text-[#10182C]">M.S SALES SERVICE</strong>.
              Through relentless perseverance, deep field experience, and
              unwavering client trust, the organization was formally
              incorporated in <strong className="text-[#10182C]">2021</strong>{" "}
              as{" "}
              <strong className="text-[#00AEEF]">
                EGOLIFE EGOVERNANCE PRIVATE LIMITED
              </strong>
              .
            </p>

            <div className="mt-6 sm:mt-8 space-y-3 sm:space-y-4">
              <div className="p-3.5 sm:p-4 rounded-xl bg-white border border-[#E2E8F0] shadow-xs flex items-start gap-3 sm:gap-3.5">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-[#00AEEF]/10 text-[#00AEEF] flex items-center justify-center shrink-0 font-extrabold text-xs sm:text-sm">
                  16
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-[#10182C]">
                    2016: M.S SALES SERVICE
                  </h4>
                  <p className="text-xs text-[#5B6F84] mt-0.5 leading-relaxed">
                    Commenced commercial supply, IT accessories, and field
                    administrative assistance across Western India.
                  </p>
                </div>
              </div>

              <div className="p-3.5 sm:p-4 rounded-xl bg-white border border-[#E2E8F0] shadow-xs flex items-start gap-3 sm:gap-3.5">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-[#F58220]/10 text-[#F58220] flex items-center justify-center shrink-0 font-extrabold text-xs sm:text-sm">
                  21
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-[#10182C]">
                    2021: Incorporated as Private Limited
                  </h4>
                  <p className="text-xs text-[#5B6F84] mt-0.5 leading-relaxed">
                    Expanded into official Aadhaar Consortium, UTIITSL vendor,
                    and banking DRA recovery.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: The 4 Set Values */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6"
          >
            <div className="bg-white rounded-2xl border border-[#E2E8F0] p-5 sm:p-8 shadow-sm">
              <span className="text-xs font-bold uppercase tracking-widest text-[#F58220]">
                OUR GUIDING COMPASS
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold text-[#10182C] mt-1 mb-4 sm:mb-6">
                Our Set Values & Operational Focus
              </h3>

              <div className="space-y-3 sm:space-y-4">
                {setValues.map((v, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 sm:p-4 rounded-xl border border-[#EDF2F7] hover:border-[#00AEEF]/25 transition-all bg-[#FAFCFF] flex items-start gap-3 sm:gap-3.5"
                  >
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-white border border-[#E2E8F0] text-[#00AEEF] flex items-center justify-center shrink-0 shadow-xs">
                      <v.icon className="w-4 h-4 sm:w-5 sm:h-5 text-[#00AEEF]" />
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-[#10182C]">
                        {v.title}
                      </h4>
                      <p className="text-xs text-[#526880] mt-1 leading-relaxed">
                        {v.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
