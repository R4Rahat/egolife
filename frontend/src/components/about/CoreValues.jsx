import { motion } from "framer-motion";
import { Compass, Target, HeartHandshake, ShieldCheck, Cpu, Eye } from "lucide-react";

export default function CoreValues() {
  const values = [
    {
      icon: HeartHandshake,
      title: "Citizen-Centric Design",
      desc: "Every portal and workflow is architected for maximum usability, multi-lingual accessibility, and minimal friction for common citizens.",
      badge: "Inclusivity",
    },
    {
      icon: ShieldCheck,
      title: "Data Sovereignty & Security",
      desc: "Strict adherence to government cybersecurity guidelines, role-based access, end-to-end encryption, and comprehensive audit trails.",
      badge: "Integrity",
    },
    {
      icon: Cpu,
      title: "High-Availability Scalability",
      desc: "Cloud-native architectures engineered to handle peak loads during tax assessment deadlines, welfare scheme rollouts, and billing cycles.",
      badge: "Reliability",
    },
    {
      icon: Eye,
      title: "Radical Transparency",
      desc: "Empowering departmental administrators and the public with real-time tracking, tamper-proof logs, and transparent status dashboards.",
      badge: "Accountability",
    },
  ];

  return (
    <section className="py-20 bg-[#F8FAFC] border-y border-[#EAEEF4]">
      <div className="max-w-[1220px] mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#00AEEF]">
            PURPOSE & PHILOSOPHY
          </p>
          <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#10182C]">
            Our Vision, Mission & Foundational Values
          </h2>
          <p className="mt-3 text-[#5A6F87] text-sm sm:text-base">
            Guided by a strict commitment to public trust, democratic access, and technological excellence.
          </p>
        </div>

        {/* Vision & Mission Double Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl bg-white border border-[#E2E8F0] p-8 relative overflow-hidden shadow-xs hover:border-[#00AEEF]/30 transition-all">
            <div className="w-12 h-12 rounded-xl bg-[#00AEEF]/10 text-[#00AEEF] flex items-center justify-center mb-6">
              <Compass className="w-6 h-6" />
            </div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#00AEEF]">
              OUR VISION
            </span>
            <h3 className="mt-2 text-xl font-bold text-[#10182C]">
              Empowering India&apos;s Digital Governance Era
            </h3>
            <p className="mt-3 text-sm text-[#5B6F84] leading-relaxed">
              To be the most dependable governance technology institution in India, bridging the divide between citizens and administration through reliable, accessible, and high-performance digital platforms.
            </p>
          </motion.div>

          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-2xl bg-white border border-[#E2E8F0] p-8 relative overflow-hidden shadow-xs hover:border-[#F58220]/30 transition-all">
            <div className="w-12 h-12 rounded-xl bg-[#F58220]/10 text-[#F58220] flex items-center justify-center mb-6">
              <Target className="w-6 h-6" />
            </div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#F58220]">
              OUR MISSION
            </span>
            <h3 className="mt-2 text-xl font-bold text-[#10182C]">
              Delivering Sustainable & Transparent Systems
            </h3>
            <p className="mt-3 text-sm text-[#5B6F84] leading-relaxed">
              To build modern, compliant, and cost-effective IT infrastructure for government bodies that enhances operational agility, guarantees financial and audit integrity, and elevates the quality of civic services.
            </p>
          </motion.div>
        </div>

        {/* 4 Core Values Grid */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((val, idx) => (
            <motion.div
              key={val.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.08 }}
              className="rounded-xl bg-white border border-[#E2E8F0] p-6 flex flex-col justify-between hover:shadow-md hover:border-[#00AEEF]/30 transition-all group">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-lg bg-[#F2F5FA] text-[#00AEEF] flex items-center justify-center group-hover:bg-[#00AEEF] group-hover:text-white transition-colors duration-200">
                    <val.icon className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-[#F1F5F9] text-[#475569]">
                    {val.badge}
                  </span>
                </div>
                <h4 className="text-base font-bold text-[#10182C] group-hover:text-[#00AEEF] transition-colors">
                  {val.title}
                </h4>
                <p className="mt-2 text-xs text-[#5B6F84] leading-relaxed">
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
