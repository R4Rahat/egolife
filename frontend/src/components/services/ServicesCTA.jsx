import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  ShieldCheck,
  Award,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa6";

const WHATSAPP_URL = "https://wa.me/916002172653";

export default function ServicesCTA() {
  return (
    <section className="py-12 sm:py-20 bg-white">
      <div className="max-w-[1220px] mx-auto px-4 sm:px-6">
        <div className="relative rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[#E0F2FE] via-[#7ec3dc] to-[#45a3e1] p-6 sm:p-12 md:p-16 text-[#10182C] overflow-hidden shadow-2xl">
          {/* Background Decorative Glows */}
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-48 sm:w-80 h-48 sm:h-80 rounded-full bg-[#00AEEF]/30 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-48 sm:w-80 h-48 sm:h-80 rounded-full bg-[#F58220]/20 blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/70 border border-[#7DD3FC]/60 text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-[#00AEEF] mb-4 sm:mb-6"
            >
              INVITING PUBLIC & ENTERPRISE PROPOSALS
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-snug sm:leading-tight"
            >
              Deploy Certified Aadhaar, Banking & Healthcare Services in Your
              District
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="mt-3 sm:mt-4 text-xs sm:text-base text-[#4B6179] leading-relaxed max-w-2xl"
            >
              We write to you in proposal of Aadhaar generation camps, banking
              recovery, and government supply projects at your Gram Panchayats,
              schools, bank branches, and public premises. Let our certified
              team deliver effective and efficient execution.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4"
            >
              <Link
                to="/contact"
                className="inline-flex justify-center items-center gap-2 rounded-full bg-[#00AEEF] px-5 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm font-semibold text-[#10182C] transition-all hover:bg-[#1E3A80] shadow-md hover:shadow-lg hover:-translate-y-0.5"
              >
                <span>Submit Service Request</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              {/* Lighter WhatsApp CTA */}
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex justify-center items-center gap-2 rounded-full bg-[#EBFBF0] px-4 sm:px-5 py-2.5 sm:py-3 text-xs sm:text-sm font-medium text-[#15803D] border border-[#86EFAC]/70 shadow-xs transition-all hover:bg-[#DCFCE7] hover:border-[#4ADE80] hover:text-[#0D632E] hover:shadow-sm"
              >
                <span className="relative flex h-2 w-2 shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <FaWhatsapp className="w-4 h-4 text-[#25D366]" />
                <span>Direct WhatsApp Inquiries</span>
              </a>
            </motion.div>

            {/* Direct Official Contact Bar from Document */}
            <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-[#7DD3FC]/50 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5 text-xs text-[#4B6179]">
              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#00AEEF] shrink-0 mt-0.5" />
                <div>
                  <span className="text-[#4B6179] block text-[10px] uppercase font-bold">
                    Official Hotline
                  </span>
                  <a
                    href="tel:+916002172653"
                    className="font-semibold text-[#10182C] hover:text-[#00AEEF] transition-colors"
                  >
                    +91 6002172653
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-[#00AEEF] shrink-0 mt-0.5" />
                <div>
                  <span className="text-[#4B6179] block text-[10px] uppercase font-bold">
                    Email Correspondence
                  </span>
                  <a
                    href="mailto:egolifemd@gmail.com"
                    className="font-semibold text-[#10182C] hover:text-[#00AEEF] transition-colors"
                  >
                    egolifemd@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#00AEEF] shrink-0 mt-0.5" />
                <div>
                  <span className="text-[#4B6179] block text-[10px] uppercase font-bold">
                    Regd. Office (India)
                  </span>
                  <span className="font-semibold text-[#10182C] block">
                    Paikan Part II, Krishnai, Goalpara – 783126
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
