import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronRight, ShieldCheck, Award, Building2, Users2 } from "lucide-react";

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#F7F9FD] via-white to-white py-16 md:py-24 border-b border-[#EAEEF4]">
      {/* Background Decorative Grids and Glows */}
      <div className="absolute inset-0 bg-grid opacity-60 pointer-events-none" />
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#24469A]/6 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[350px] h-[250px] bg-[#F58220]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-[1220px] mx-auto px-6">
        {/* Breadcrumb */}
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex items-center gap-2 text-xs font-medium text-[#687A90] mb-6">
          <Link to="/" className="hover:text-[#24469A] transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-[#A0AEC0]" />
          <span className="text-[#24469A] font-semibold">About Us</span>
        </motion.div>

        {/* Header Content */}
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#24469A]/8 border border-[#24469A]/15 text-[#24469A] text-xs font-semibold tracking-wide mb-5">
            <ShieldCheck className="w-4 h-4 text-[#24469A]" />
            <span>ESTABLISHED 2011 • GOVERNANCE & DIGITAL INNOVATION</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.15 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#10182C] tracking-tight leading-[1.15]">
            Empowering Public Governance Through{" "}
            <span className="bg-gradient-to-r from-[#24469A] via-[#1E60B8] to-[#F58220] bg-clip-text text-transparent">
              Scalable Digital Technology
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.2 }}
            className="mt-6 text-base sm:text-lg text-[#4B6179] leading-relaxed">
            Headquartered in Lucknow, eGoLife Governance Private Limited has spent over 15 years
            partnering with state departments, municipal corporations, and enterprise bodies to
            engineer mission-critical software, citizen-first service portals, and transparent administrative workflows.
          </motion.p>
        </div>

        {/* Quick Highlights Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 pt-8 border-t border-[#E8EEF5]">
          <div className="flex items-start gap-3.5 p-4 rounded-xl bg-white border border-[#E4EAF2] shadow-xs">
            <div className="w-10 h-10 rounded-lg bg-[#24469A]/10 text-[#24469A] flex items-center justify-center shrink-0">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xl font-black text-[#10182C]">15+ Years</p>
              <p className="text-xs text-[#62778E] mt-0.5 font-medium">Public Sector Expertise</p>
            </div>
          </div>

          <div className="flex items-start gap-3.5 p-4 rounded-xl bg-white border border-[#E4EAF2] shadow-xs">
            <div className="w-10 h-10 rounded-lg bg-[#F58220]/10 text-[#F58220] flex items-center justify-center shrink-0">
              <Building2 className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xl font-black text-[#10182C]">80+ Projects</p>
              <p className="text-xs text-[#62778E] mt-0.5 font-medium">Government Engagements</p>
            </div>
          </div>

          <div className="flex items-start gap-3.5 p-4 rounded-xl bg-white border border-[#E4EAF2] shadow-xs">
            <div className="w-10 h-10 rounded-lg bg-[#24469A]/10 text-[#24469A] flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xl font-black text-[#10182C]">120+ Platforms</p>
              <p className="text-xs text-[#62778E] mt-0.5 font-medium">Enterprise & Civic Systems</p>
            </div>
          </div>

          <div className="flex items-start gap-3.5 p-4 rounded-xl bg-white border border-[#E4EAF2] shadow-xs">
            <div className="w-10 h-10 rounded-lg bg-[#16A34A]/10 text-[#16A34A] flex items-center justify-center shrink-0">
              <Users2 className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xl font-black text-[#10182C]">200+ Clients</p>
              <p className="text-xs text-[#62778E] mt-0.5 font-medium">Served Across India</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
