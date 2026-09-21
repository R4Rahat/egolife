import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa6";

const WHATSAPP_URL = "https://wa.me/916002172653";

export default function CTA() {
  return (
    <section className="bg-white px-5 py-20 sm:px-8 lg:py-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="relative mx-auto max-w-[900px] overflow-hidden rounded-2xl bg-[#E0F2FE] p-8 sm:p-12 shadow-2xl text-[#10182C]">
        {/* Subtle orange glow */}
        <div className="pointer-events-none absolute -left-24 -top-24 h-[300px] w-[300px] rounded-full bg-[#F58220]/15 blur-[80px]" />
        {/* Subtle blue glow */}
        <div className="pointer-events-none absolute -right-24 top-0 h-[280px] w-[280px] rounded-full bg-[#00AEEF]/30 blur-[90px]" />

        <div className="relative z-10 flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          {/* LEFT CONTENT */}
          <div className="max-w-[500px]">
            <span className="text-[10px] font-bold uppercase tracking-[2.5px] text-[#00AEEF]">
              SUBMIT A PROJECT PROPOSAL
            </span>

            <h2 className="mt-2 text-2xl sm:text-3xl lg:text-[34px] font-extrabold leading-[1.12] tracking-tight text-[#10182C]">
              Ready to Deploy Verified{" "}
              <span className="text-[#00AEEF]">e-Governance</span> or Banking Services?
            </h2>

            <p className="mt-4 text-xs sm:text-sm leading-relaxed text-[#B8C4D4]">
              We write to you in proposal of Aadhaar generation camps, banking debt recovery, and government supply projects at your Gram Panchayats, schools, bank branches, and public premises.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-4 text-xs text-[#4B6179]">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#00AEEF]" />
                <span>Paikan, Goalpara (India)</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-[#00AEEF]" />
                <a href="mailto:egolifemd@gmail.com" className="hover:text-white transition-colors">
                  egolifemd@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT ACTION BUTTONS */}
          <div className="flex w-full shrink-0 flex-col gap-3 sm:w-[230px]">
            {/* Lighter WhatsApp Button */}
            <motion.a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex h-[42px] items-center justify-center gap-2 rounded-xl bg-[#EBFBF0] px-4 text-xs font-semibold text-[#15803D] border border-[#86EFAC]/70 shadow-xs transition-all hover:bg-[#DCFCE7] hover:border-[#4ADE80] hover:text-[#0D632E]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <FaWhatsapp size={16} className="text-[#25D366]" />
              <span>Connect on WhatsApp</span>
            </motion.a>

            {/* Direct Phone Call */}
            <motion.a
              href="tel:+916002172653"
              whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.08)" }}
              whileTap={{ scale: 0.98 }}
              className="flex h-[42px] items-center justify-center gap-2 rounded-xl border border-[#7DD3FC]/60 bg-white/60 px-4 text-xs font-semibold text-[#10182C] transition-all">
              <Phone size={14} className="text-[#00AEEF]" />
              <span>Call: +91 6002172653</span>
            </motion.a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
