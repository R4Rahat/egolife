import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  CheckCircle2,
  Fingerprint,
  HeartPulse,
  Landmark,
  ShieldCheck,
  Building2,
  MapPin,
  ArrowRight,
  Zap,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa6";

const WHATSAPP_URL = "https://wa.me/916002172653";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" },
  }),
};

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-grid border-b border-[#EAEEF4]">
      {/* Background glow effects */}
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[650px] h-[350px] bg-[#00AEEF]/6 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[380px] h-[280px] bg-[#F58220]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1220px] mx-auto px-6 pt-12 pb-20 lg:pt-16 lg:pb-24 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* LEFT COLUMN */}
        <div>
          {/* Official Badges */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0}
            className="flex flex-wrap items-center gap-2">

            <div className="inline-flex items-center gap-1.5 rounded-full border border-[#F58220]/20 bg-[#F58220]/10 px-3.5 py-1 text-xs font-semibold text-[#D96B0F]">
              <MapPin className="w-3.5 h-3.5 text-[#00AEEF]" />
              <span>Entire NorthEast, India</span>
            </div>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={1}
            className="mt-6 text-[38px] sm:text-[46px] lg:text-[52px] font-extrabold leading-[1.08] tracking-tight text-[#10182C]">
            Empowering Public Governance &amp;{" "}
            <span className="bg-gradient-to-r from-[#00AEEF] via-[#38BDF8] to-[#F58220] bg-clip-text text-transparent">
              Citizen Infrastructure
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={2}
            className="mt-5 max-w-xl text-[15px] lg:text-base leading-relaxed text-[#4B6179]">
            <strong className="text-[#10182C]">EGOLIFE EGOVERNANCE PRIVATE LIMITED</strong> is an India-based technology institution delivering statewide Aadhaar enrolment (Government Authorized), Ayushman Bharat healthcare drives, DRA certified banking recovery, and government procurement solutions across All India.
          </motion.p>

          {/* Action CTAs with Lighter WhatsApp Button */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={3}
            className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 rounded-full bg-[#00AEEF] text-white px-6 py-3 text-sm font-semibold transition-all hover:bg-[#1E3A80] shadow-md hover:shadow-lg hover:-translate-y-0.5">
              <span>Explore Services</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            {/* Lighter WhatsApp Button */}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#EBFBF0] px-5 py-3 text-sm font-medium text-[#15803D] border border-[#86EFAC]/70 shadow-xs transition-all hover:bg-[#DCFCE7] hover:border-[#4ADE80] hover:text-[#0D632E] hover:shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <FaWhatsapp className="w-4 h-4 text-[#25D366]" />
              <span>Connect on WhatsApp</span>
            </a>
          </motion.div>

          {/* Key Compliance List */}
          <motion.ul
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={4}
            className="mt-9 flex flex-wrap gap-x-6 gap-y-3">
            {[
              "Government Authorized Agency",
              "UTIITSL Authorized Vendor",
              "DRA Certified Recovery Agents",
            ].map((item) => (
              <li
                key={item}
                className="flex items-center gap-2 text-xs sm:text-sm font-medium text-[#4B6179]">
                <CheckCircle2 className="w-4 h-4 text-[#16A34A] shrink-0" />
                {item}
              </li>
            ))}
          </motion.ul>
        </div>

        {/* RIGHT COLUMN: Interactive High-Tech Operations Showcase (Replacing broken image) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative">
          <div className="relative rounded-3xl bg-gradient-to-br from-[#E0F2FE] via-[#BAE6FD] to-[#7DD3FC] p-6 sm:p-8 text-[#10182C] shadow-2xl border border-[#7DD3FC]/50 overflow-hidden">
            {/* Ambient background lights */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#00AEEF]/30 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#F58220]/20 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10">
              {/* Terminal Header */}
              <div className="flex items-center justify-between pb-4 border-b border-[#7DD3FC]/50">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-amber-500" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500" />
                  <span className="ml-2 text-xs font-mono text-[#4B6179]">
                    egolife-governance-hub // India-network
                  </span>
                </div>
                <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                  Live Operations
                </span>
              </div>

              {/* Active Deployment Highlights */}
              <div className="mt-5 space-y-3.5">
                {/* Aadhaar Deployment Card */}
                <div className="p-3.5 rounded-xl bg-white/60 border border-[#7DD3FC]/50 flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0 mt-0.5">
                    <Fingerprint className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <p className="text-xs font-bold text-[#10182C] truncate">
                        Aadhaar Enrolment Consortium
                      </p>
                      <span className="text-[9px] font-bold text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded">

                      </span>
                    </div>
                    <p className="text-[11px] text-[#4B6179] mt-0.5">
                      Baksa, Udalguri, Tamulpur, Barpeta, Goalpara, Nalbari
                    </p>
                  </div>
                </div>

                {/* Ayushman Bharat Card */}
                <div className="p-3.5 rounded-xl bg-white/60 border border-[#7DD3FC]/50 flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                    <HeartPulse className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <p className="text-xs font-bold text-[#10182C] truncate">
                        AB-PMJAY Ayushman Bharat Health Drive
                      </p>
                      <span className="text-[9px] font-bold text-blue-300 bg-blue-500/10 px-1.5 py-0.5 rounded">
                        UTIITSL
                      </span>
                    </div>
                    <p className="text-[11px] text-[#4B6179] mt-0.5">
                      Goalpara, Bongaigaon, Dhubri, Karimganj, Hailakandi, Cachar
                    </p>
                  </div>
                </div>

                {/* Banking & DRA Card */}
                <div className="p-3.5 rounded-xl bg-white/60 border border-[#7DD3FC]/50 flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
                    <Landmark className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <p className="text-xs font-bold text-[#10182C] truncate">
                        Banking DRA Recovery &amp; PNB Branch Enrolment
                      </p>
                      <span className="text-[9px] font-bold text-amber-300 bg-amber-500/10 px-1.5 py-0.5 rounded">
                        DRA Certified
                      </span>
                    </div>
                    <p className="text-[11px] text-[#4B6179] mt-0.5">
                      Punjab National Bank branches across India • PL, CC, Business Loans
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom Metrics Bar */}
              <div className="mt-5 pt-4 border-t border-[#7DD3FC]/50 grid grid-cols-3 gap-3 text-center">
                <div className="p-2 rounded-lg bg-white/60">
                  <p className="text-lg font-black text-[#00AEEF]">11+ Yrs</p>
                  <p className="text-[10px] text-[#4B6179]">IT Industry</p>
                </div>
                <div className="p-2 rounded-lg bg-white/60">
                  <p className="text-lg font-black text-[#10182C]">200+</p>
                  <p className="text-[10px] text-[#4B6179]">Services Offered</p>
                </div>
                <div className="p-2 rounded-lg bg-white/60">
                  <p className="text-lg font-black text-emerald-400">SERVICES</p>
                  <p className="text-[10px] text-[#4B6179]">Across PAN India</p>
                </div>
              </div>
            </div>
          </div>

          {/* Floating Badges */}
          <div className="absolute -bottom-4 left-6 hidden sm:flex items-center gap-2.5 rounded-xl border border-[#EAEEF4] bg-white px-4 py-2.5 shadow-lg">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
            <span className="text-xs font-bold text-[#10182C]">
              www.growfast.in
            </span>
          </div>

          <div className="absolute -top-4 right-6 hidden sm:flex items-center gap-2 rounded-xl border border-[#EAEEF4] bg-white px-4 py-2.5 shadow-lg">
            <Zap className="w-4 h-4 text-[#00AEEF]" />
            <span className="text-xs font-bold text-[#10182C]">
              www.egolife.net
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
