import { motion } from "framer-motion";
import { CheckCircle2, MapPin, Building, Calendar, Layers } from "lucide-react";

export default function CompanyStory() {
  const storyPoints = [
    {
      title: "Pioneering Civic Tech Since 2011",
      desc: "Founded in Lucknow, eGoLife began with a single mission: to simplify government-to-citizen (G2C) and government-to-business (G2B) interactions through robust digital engineering.",
    },
    {
      title: "State & Municipal Empowerments",
      desc: "We have partnered directly with municipal corporations, urban local bodies (ULBs), and state undertakings across Uttar Pradesh and India to modernize civic infrastructure.",
    },
    {
      title: "Turnkey Digital Transformation",
      desc: "From complex database architectures and GIS mapping to citizen mobile apps and automated payment gateways, our full-lifecycle engineering ensures zero public downtime.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1220px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Narrative */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#F58220]">
              OUR FOUNDATION & JOURNEY
            </p>
            <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#10182C] leading-tight">
              A Legacy of Trust in Indian Public Administration
            </h2>

            <p className="mt-5 text-[#4B6179] text-base leading-relaxed">
              Established in 2011, <strong className="text-[#10182C]">eGoLife Governance Private Limited</strong> is a premier technology and systems integration enterprise based in Lucknow, Uttar Pradesh. Over the past decade and a half, we have evolved from an agile IT consultancy into a recognized institution delivering large-scale e-governance systems.
            </p>

            <p className="mt-4 text-[#4B6179] text-base leading-relaxed">
              We specialize in engineering high-reliability software architectures tailored to the stringent security, scalability, and audit compliance demands of public departments. Whether digitizing municipal tax assessments, powering urban water utility billings, or deploying citizen grievance redressal platforms, our work impacts millions of citizens daily.
            </p>

            {/* Core Pillars List */}
            <div className="mt-8 space-y-4">
              {storyPoints.map((pt, idx) => (
                <div key={idx} className="flex items-start gap-3.5">
                  <div className="w-6 h-6 rounded-full bg-[#24469A]/10 text-[#24469A] flex items-center justify-center shrink-0 mt-0.5">
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
            <div className="relative rounded-2xl bg-gradient-to-br from-[#0D1629] to-[#172647] p-8 text-white shadow-xl shadow-[#0D1629]/10 overflow-hidden">
              {/* Decorative background circle */}
              <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-[#24469A]/30 rounded-full blur-2xl pointer-events-none" />
              <div className="absolute -left-10 -top-10 w-40 h-40 bg-[#F58220]/20 rounded-full blur-2xl pointer-events-none" />

              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-[11px] font-semibold tracking-wider uppercase text-[#F58220]">
                  Institutional Profile
                </div>

                <h3 className="mt-4 text-xl font-extrabold text-white">
                  eGoLife Governance Private Limited
                </h3>

                <p className="mt-2 text-xs text-[#9BB1C9] leading-relaxed">
                  Incorporated under the Companies Act, dedicated to e-Governance, Enterprise Software Engineering, and Citizen Portal Development.
                </p>

                <div className="mt-6 space-y-4 pt-6 border-t border-white/10 text-xs">
                  <div className="flex items-center gap-3">
                    <Calendar className="w-4 h-4 text-[#F58220] shrink-0" />
                    <div>
                      <span className="text-[#889EBA] block text-[11px]">Year of Inception</span>
                      <span className="font-semibold text-white">2011 (15+ Years Active)</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <MapPin className="w-4 h-4 text-[#F58220] shrink-0" />
                    <div>
                      <span className="text-[#889EBA] block text-[11px]">Corporate Office</span>
                      <span className="font-semibold text-white">
                        Vikrant Khand, Gomti Nagar, Lucknow – 226010, UP
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Building className="w-4 h-4 text-[#F58220] shrink-0" />
                    <div>
                      <span className="text-[#889EBA] block text-[11px]">Key Empanelments</span>
                      <span className="font-semibold text-white">
                        UPLC, UPDESCO, MSME, RCUES
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Layers className="w-4 h-4 text-[#F58220] shrink-0" />
                    <div>
                      <span className="text-[#889EBA] block text-[11px]">Focus Sectors</span>
                      <span className="font-semibold text-white">
                        Municipalities, Smart Cities, Revenue, Citizen Portals
                      </span>
                    </div>
                  </div>
                </div>

                {/* Bottom Trust Badge */}
                <div className="mt-6 rounded-xl bg-white/5 border border-white/10 p-3.5 flex items-center justify-between">
                  <div>
                    <p className="text-[10px] uppercase font-bold tracking-wider text-[#F58220]">
                      Proven Execution
                    </p>
                    <p className="text-sm font-bold text-white mt-0.5">80+ Government Projects</p>
                  </div>
                  <span className="inline-flex items-center justify-center px-2.5 py-1 rounded-full bg-[#16A34A]/20 text-[#4ADE80] text-[11px] font-semibold border border-[#16A34A]/30">
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
