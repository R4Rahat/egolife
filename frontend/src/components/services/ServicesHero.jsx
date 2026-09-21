import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronRight, ShieldCheck, Award, MapPin, Building2, Layers } from "lucide-react";

export default function ServicesHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#F7F9FD] via-white to-white py-16 md:py-24 border-b border-[#EAEEF4]">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-grid opacity-60 pointer-events-none" />
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[650px] h-[320px] bg-[#00AEEF]/6 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[380px] h-[260px] bg-[#F58220]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-[1220px] mx-auto px-6">
        {/* Breadcrumb */}
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex items-center gap-2 text-xs font-medium text-[#687A90] mb-6">
          <Link to="/" className="hover:text-[#00AEEF] transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-[#A0AEC0]" />
          <span className="text-[#00AEEF] font-semibold">Services</span>
        </motion.div>

        {/* Badges row */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap items-center gap-2.5 mb-5">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#00AEEF]/8 border border-[#00AEEF]/15 text-[#00AEEF] text-xs font-semibold">
            <ShieldCheck className="w-3.5 h-3.5 text-[#00AEEF]" />
            <span>CIN: U72900AS2021PTC022087</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F58220]/10 border border-[#F58220]/20 text-[#D96B0F] text-xs font-semibold">
            <MapPin className="w-3.5 h-3.5 text-[#F58220]" />
            <span>India-based Technology & Government Partner</span>
          </div>
        </motion.div>

        {/* Heading */}
        <div className="max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.15 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#10182C] tracking-tight leading-[1.15]">
            Comprehensive e-Governance, Public Supply &{" "}
            <span className="bg-gradient-to-r from-[#00AEEF] via-[#38BDF8] to-[#F58220] bg-clip-text text-transparent">
              Enterprise IT Services
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.2 }}
            className="mt-6 text-base sm:text-lg text-[#4B6179] leading-relaxed">
            From state-wide <strong>Aadhaar enrollment ecosystems</strong> and <strong>Ayushman Bharat (AB-PMJAY)</strong> healthcare rollouts to <strong>DRA certified banking debt recovery</strong>, government school uniform manufacturing, and IT infrastructure deployment across India and Eastern India.
          </motion.p>
        </div>

        {/* Quick Highlights Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 pt-8 border-t border-[#E8EEF5]">
          <div className="flex items-start gap-3.5 p-4 rounded-xl bg-white border border-[#E4EAF2] shadow-xs">
            <div className="w-10 h-10 rounded-lg bg-[#00AEEF]/10 text-[#00AEEF] flex items-center justify-center shrink-0">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xl font-black text-[#10182C]">Government Authorized</p>
              <p className="text-xs text-[#62778E] mt-0.5 font-medium">Aadhaar Enrolment Consortium</p>
            </div>
          </div>

          <div className="flex items-start gap-3.5 p-4 rounded-xl bg-white border border-[#E4EAF2] shadow-xs">
            <div className="w-10 h-10 rounded-lg bg-[#16A34A]/10 text-[#16A34A] flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xl font-black text-[#10182C]">AB-PMJAY & PAN</p>
              <p className="text-xs text-[#62778E] mt-0.5 font-medium">UTIITSL Authorized Partner</p>
            </div>
          </div>

          <div className="flex items-start gap-3.5 p-4 rounded-xl bg-white border border-[#E4EAF2] shadow-xs">
            <div className="w-10 h-10 rounded-lg bg-[#F58220]/10 text-[#F58220] flex items-center justify-center shrink-0">
              <Building2 className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xl font-black text-[#10182C]">DRA Certified</p>
              <p className="text-xs text-[#62778E] mt-0.5 font-medium">Banking Loan & CC Recovery</p>
            </div>
          </div>

          <div className="flex items-start gap-3.5 p-4 rounded-xl bg-white border border-[#E4EAF2] shadow-xs">
            <div className="w-10 h-10 rounded-lg bg-[#00AEEF]/10 text-[#00AEEF] flex items-center justify-center shrink-0">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xl font-black text-[#10182C]">200+ Services</p>
              <p className="text-xs text-[#62778E] mt-0.5 font-medium">Pan India & West Bengal</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
