import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ChevronRight,
  ShieldCheck,
  Award,
  MapPin,
  Building2,
  Layers,
} from "lucide-react";

export default function ServicesHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#F7F9FD] via-white to-white py-10 sm:py-16 md:py-24 border-b border-[#EAEEF4]">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-grid opacity-60 pointer-events-none" />
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[300px] sm:w-[650px] h-[200px] sm:h-[320px] bg-[#00AEEF]/6 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[200px] sm:w-[380px] h-[150px] sm:h-[260px] bg-[#F58220]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-[1220px] mx-auto px-4 sm:px-6">
        {/* Breadcrumb */}
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex items-center gap-2 text-xs font-medium text-[#687A90] mb-4 sm:mb-6"
        >
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
          className="flex flex-wrap items-center gap-2 sm:gap-2.5 mb-4 sm:mb-5"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#00AEEF]/8 border border-[#00AEEF]/15 text-[#00AEEF] text-[11px] sm:text-xs font-semibold">
            <ShieldCheck className="w-3.5 h-3.5 text-[#00AEEF]" />
          </div>

          <div className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-full bg-[#F58220]/10 border border-[#F58220]/20 text-[#D96B0F] text-[11px] sm:text-xs font-semibold">
            <MapPin className="w-3.5 h-3.5 text-[#F58220] shrink-0" />
            <span>India-based Technology & Government Partner</span>
          </div>
        </motion.div>

        {/* Heading */}
        <div className="max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.15 }}
            className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-[#10182C] tracking-tight leading-[1.18] sm:leading-[1.15]"
          >
            Comprehensive e-Governance, Public Supply &{" "}
            <span className="bg-gradient-to-r from-[#00AEEF] via-[#38BDF8] to-[#F58220] bg-clip-text text-transparent">
              Enterprise IT Services
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.2 }}
            className="mt-4 sm:mt-6 text-sm sm:text-lg text-[#4B6179] leading-relaxed"
          >
            From state-wide <strong>Aadhaar enrollment ecosystems</strong> and{" "}
            <strong>Ayushman Bharat (AB-PMJAY)</strong> healthcare rollouts to{" "}
            <strong>DRA certified banking debt recovery</strong>, government
            school uniform manufacturing, and IT infrastructure deployment
            across India and Eastern India.
          </motion.p>
        </div>

        {/* Quick Highlights Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 pt-6 sm:pt-8 border-t border-[#E8EEF5]"
        >
          <div className="flex items-start gap-3 sm:gap-3.5 p-3.5 sm:p-4 rounded-xl bg-white border border-[#E4EAF2] shadow-xs">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-[#00AEEF]/10 text-[#00AEEF] flex items-center justify-center shrink-0">
              <Award className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div>
              <p className="text-base sm:text-xl font-black text-[#10182C]">
                Government Authorized
              </p>
              <p className="text-xs text-[#62778E] mt-0.5 font-medium">
                Aadhaar Enrolment Consortium
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 sm:gap-3.5 p-3.5 sm:p-4 rounded-xl bg-white border border-[#E4EAF2] shadow-xs">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-[#16A34A]/10 text-[#16A34A] flex items-center justify-center shrink-0">
              <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div>
              <p className="text-base sm:text-xl font-black text-[#10182C]">
                AB-PMJAY & PAN
              </p>
              <p className="text-xs text-[#62778E] mt-0.5 font-medium">
                UTIITSL Authorized Partner
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 sm:gap-3.5 p-3.5 sm:p-4 rounded-xl bg-white border border-[#E4EAF2] shadow-xs">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-[#F58220]/10 text-[#F58220] flex items-center justify-center shrink-0">
              <Building2 className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div>
              <p className="text-base sm:text-xl font-black text-[#10182C]">DRA Certified</p>
              <p className="text-xs text-[#62778E] mt-0.5 font-medium">
                Banking Loan & CC Recovery
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 sm:gap-3.5 p-3.5 sm:p-4 rounded-xl bg-white border border-[#E4EAF2] shadow-xs">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-[#00AEEF]/10 text-[#00AEEF] flex items-center justify-center shrink-0">
              <Layers className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div>
              <p className="text-base sm:text-xl font-black text-[#10182C]">200+ Services</p>
              <p className="text-xs text-[#62778E] mt-0.5 font-medium">
                Pan India & West Bengal
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
