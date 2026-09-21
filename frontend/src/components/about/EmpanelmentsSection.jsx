import { motion } from "framer-motion";
import { Award, ShieldCheck, CheckCircle, FileCheck2, Building } from "lucide-react";

export default function EmpanelmentsSection() {
  const empanelments = [
    {
      title: "UPLC Registered",
      sub: "Uttar Pradesh Electronics Corporation Ltd",
      year: "Registered 2012",
      badge: "State IT Agency",
      desc: "Registered vendor and technology partner for Uttar Pradesh's apex state IT nodal agency for hardware, software, and systems integration.",
      icon: ShieldCheck,
      color: "from-blue-600 to-indigo-700",
    },
    {
      title: "UPDESCO Empanelled",
      sub: "UP Development Systems Corporation Ltd",
      year: "Empanelled 2016",
      badge: "Public Systems",
      desc: "Empanelled agency authorized to deliver enterprise software solutions, eGovernance platforms, and digital consulting to state departments.",
      icon: Award,
      color: "from-amber-500 to-orange-600",
    },
    {
      title: "MSME Registered",
      sub: "Ministry of Micro, Small & Medium Enterprises",
      year: "Registered 2018",
      badge: "Govt of India",
      desc: "Recognized enterprise adhering to national industrial standards, fostering homegrown technological innovation and public sector engineering.",
      icon: Building,
      color: "from-emerald-600 to-teal-700",
    },
    {
      title: "RCUES Empanelled",
      sub: "Regional Centre for Urban & Environmental Studies",
      year: "Empanelled 2024",
      badge: "Urban Governance",
      desc: "Empanelled for urban modernization, municipal GIS systems, civic utility management, and administrative capacity building.",
      icon: FileCheck2,
      color: "from-indigo-600 to-purple-700",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1220px] mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#F58220]">
            INSTITUTIONAL ACCREDITATIONS
          </p>
          <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#10182C]">
            Empanelled & Registered with Apex Public Bodies
          </h2>
          <p className="mt-3 text-[#5A6F87] text-sm sm:text-base">
            Our empanelments attest to our rigorous financial, technical, and cybersecurity compliance standards.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {empanelments.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="rounded-2xl border border-[#E4EAF2] p-7 bg-gradient-to-b from-white to-[#F9FAFC] hover:shadow-lg hover:border-[#00AEEF]/30 transition-all group flex flex-col justify-between">
              <div>
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3.5">
                    <div className="w-12 h-12 rounded-xl bg-[#00AEEF]/10 text-[#00AEEF] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                      <item.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-[#10182C] group-hover:text-[#00AEEF] transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-xs text-[#526880] font-medium">{item.sub}</p>
                    </div>
                  </div>

                  <span className="shrink-0 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#F2F5FB] text-[#00AEEF] border border-[#00AEEF]/15">
                    {item.badge}
                  </span>
                </div>

                <p className="mt-5 text-sm text-[#4E6278] leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#EDF2F7] flex items-center justify-between text-xs">
                <span className="font-semibold text-[#10182C] flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-[#16A34A]" />
                  Verified Compliance
                </span>
                <span className="text-[#64748B] font-medium">{item.year}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Trust Banner */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-10 rounded-xl bg-[#F4F7FC] border border-[#DFE6F2] p-5 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#00AEEF] text-white flex items-center justify-center shrink-0 text-xs font-bold">
              ✓
            </div>
            <div>
              <p className="text-xs font-bold text-[#10182C]">
                Ready for Public Tenders, GeM & RFP Engagements
              </p>
              <p className="text-[11px] text-[#556980]">
                Fully compliant with General Financial Rules (GFR), CVC guidelines, and state e-procurement norms.
              </p>
            </div>
          </div>
          <span className="text-xs font-semibold text-[#00AEEF] whitespace-nowrap">
            Audit-Ready Operations
          </span>
        </motion.div>
      </div>
    </section>
  );
}
