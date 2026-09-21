import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronRight, ShieldCheck, MapPin, Phone, Mail, Clock } from "lucide-react";

export default function ContactHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#F7F9FD] via-white to-white py-16 md:py-20 border-b border-[#EAEEF4]">
      {/* Background grids */}
      <div className="absolute inset-0 bg-grid opacity-60 pointer-events-none" />
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[650px] h-[300px] bg-[#00AEEF]/6 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[350px] h-[250px] bg-[#F58220]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-[1220px] mx-auto px-6">
        {/* Breadcrumbs */}
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex items-center gap-2 text-xs font-medium text-[#687A90] mb-6">
          <Link to="/" className="hover:text-[#00AEEF] transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-[#A0AEC0]" />
          <span className="text-[#00AEEF] font-semibold">Contact Us</span>
        </motion.div>

        {/* Badges */}
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.08 }}
            className="flex flex-wrap items-center gap-2.5 mb-5">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#00AEEF]/8 border border-[#00AEEF]/15 text-[#00AEEF] text-xs font-semibold">
              <ShieldCheck className="w-3.5 h-3.5 text-[#00AEEF]" />
              <span>CIN: U72900AS2021PTC022087</span>
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F58220]/10 border border-[#F58220]/20 text-[#D96B0F] text-xs font-semibold">
              <MapPin className="w-3.5 h-3.5 text-[#F58220]" />
              <span>Goalpara, India</span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.12 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#10182C] tracking-tight leading-[1.15]">
            Connect with Our{" "}
            <span className="bg-gradient-to-r from-[#00AEEF] via-[#38BDF8] to-[#F58220] bg-clip-text text-transparent">
              Public Sector &amp; Technical
            </span>{" "}
            Specialists
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.16 }}
            className="mt-5 text-base sm:text-lg text-[#4B6179] leading-relaxed">
            Whether you represent a District Administration, Gram Panchayat, Bank Branch, Educational Institution, or Commercial Enterprise, we are ready to deploy certified teams and reliable technology.
          </motion.p>
        </div>

        {/* Quick Contact Chips */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.22 }}
          className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-[#E8EEF5]">
          <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white border border-[#E4EAF2] shadow-xs">
            <div className="w-10 h-10 rounded-lg bg-[#00AEEF]/10 text-[#00AEEF] flex items-center justify-center shrink-0">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <p className="text-[11px] uppercase font-bold text-[#64748B]">Official Helpline</p>
              <a href="tel:+916002172653" className="text-sm font-bold text-[#10182C] hover:text-[#00AEEF] transition-colors">
                +91 6002172653
              </a>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white border border-[#E4EAF2] shadow-xs">
            <div className="w-10 h-10 rounded-lg bg-[#F58220]/10 text-[#F58220] flex items-center justify-center shrink-0">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <p className="text-[11px] uppercase font-bold text-[#64748B]">Email Correspondence</p>
              <a href="mailto:egolifemd@gmail.com" className="text-sm font-bold text-[#10182C] hover:text-[#00AEEF] transition-colors">
                egolifemd@gmail.com
              </a>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white border border-[#E4EAF2] shadow-xs">
            <div className="w-10 h-10 rounded-lg bg-[#16A34A]/10 text-[#16A34A] flex items-center justify-center shrink-0">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <p className="text-[11px] uppercase font-bold text-[#64748B]">Operational Hours</p>
              <p className="text-sm font-bold text-[#10182C]">Mon – Sat: 9:30 AM – 6:30 PM</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
