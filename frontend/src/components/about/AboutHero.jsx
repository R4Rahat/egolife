import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronRight, ShieldCheck, Award, Building2, Users2 } from "lucide-react";

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#F7F9FD] via-white to-white py-12 sm:py-16 md:py-24 border-b border-[#EAEEF4]">
      {/* Background Decorative Grids and Glows */}
      <div className="absolute inset-0 bg-grid opacity-60 pointer-events-none" />
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[300px] sm:w-[600px] h-[300px] bg-[#00AEEF]/6 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[200px] sm:w-[350px] h-[250px] bg-[#F58220]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-[1220px] mx-auto px-4 sm:px-6">
        {/* Breadcrumb */}
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex items-center gap-2 text-xs font-medium text-[#687A90] mb-4 sm:mb-6">
          <Link to="/" className="hover:text-[#00AEEF] transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-[#A0AEC0]" />
          <span className="text-[#00AEEF] font-semibold">About Us</span>
        </motion.div>

        {/* Header Content */}
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1.5 rounded-full bg-[#00AEEF]/8 border border-[#00AEEF]/15 text-[#00AEEF] text-[10px] sm:text-xs font-semibold tracking-wide mb-4 sm:mb-5 max-w-full text-wrap">
            <ShieldCheck className="w-4 h-4 text-[#00AEEF] shrink-0" />
            <span className="leading-tight">ESTABLISHED 2021 • GOVERNANCE & DIGITAL INNOVATION</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.15 }}
            className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-[#10182C] tracking-tight leading-[1.2] sm:leading-[1.15] break-words">
            Empowering Public Governance Through{" "}
            <span className="bg-gradient-to-r from-[#00AEEF] via-[#38BDF8] to-[#F58220] bg-clip-text text-transparent">
              Scalable Digital Technology
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.2 }}
            className="mt-4 sm:mt-6 text-sm sm:text-lg text-[#4B6179] leading-relaxed">
            Headquartered in Goalpara, Assam, Egolife Egovernance Private Limited combines technology,
            digital services, financial solutions and business support services to create convenient
            solutions for the modern economy.
          </motion.p>
        </div>

        {/* Quick Highlights Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 sm:mt-12 grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 pt-6 sm:pt-8 border-t border-[#E8EEF5]">
          <div className="flex items-center sm:items-start gap-3 sm:gap-3.5 p-3.5 sm:p-4 rounded-xl bg-white border border-[#E4EAF2] shadow-xs">
            <div className="w-10 h-10 rounded-lg bg-[#00AEEF]/10 text-[#00AEEF] flex items-center justify-center shrink-0">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <p className="text-lg sm:text-xl font-black text-[#10182C] leading-tight">Multi-Service</p>
              <p className="text-xs text-[#62778E] mt-0.5 font-medium">Technology Platform</p>
            </div>
          </div>

          <div className="flex items-center sm:items-start gap-3 sm:gap-3.5 p-3.5 sm:p-4 rounded-xl bg-white border border-[#E4EAF2] shadow-xs">
            <div className="w-10 h-10 rounded-lg bg-[#F58220]/10 text-[#F58220] flex items-center justify-center shrink-0">
              <Building2 className="w-5 h-5" />
            </div>
            <div>
              <p className="text-lg sm:text-xl font-black text-[#10182C] leading-tight">Pan India</p>
              <p className="text-xs text-[#62778E] mt-0.5 font-medium">Key Service Areas</p>
            </div>
          </div>

          <div className="flex items-center sm:items-start gap-3 sm:gap-3.5 p-3.5 sm:p-4 rounded-xl bg-white border border-[#E4EAF2] shadow-xs">
            <div className="w-10 h-10 rounded-lg bg-[#00AEEF]/10 text-[#00AEEF] flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <p className="text-lg sm:text-xl font-black text-[#10182C] leading-tight">100% Secure</p>
              <p className="text-xs text-[#62778E] mt-0.5 font-medium">Digital Governance</p>
            </div>
          </div>

          <div className="flex items-center sm:items-start gap-3 sm:gap-3.5 p-3.5 sm:p-4 rounded-xl bg-white border border-[#E4EAF2] shadow-xs">
            <div className="w-10 h-10 rounded-lg bg-[#16A34A]/10 text-[#16A34A] flex items-center justify-center shrink-0">
              <Users2 className="w-5 h-5" />
            </div>
            <div>
              <p className="text-lg sm:text-xl font-black text-[#10182C] leading-tight">Citizen First</p>
              <p className="text-xs text-[#62778E] mt-0.5 font-medium">Service Ecosystem</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
