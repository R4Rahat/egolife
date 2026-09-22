import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Phone, Mail, MapPin } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa6";

const WHATSAPP_URL = "https://wa.me/916002172653";

export default function AboutCTA() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1220px] mx-auto px-6">
        <div className="relative rounded-3xl bg-[#E0F2FE] p-8 sm:p-12 md:p-16 text-[#10182C] overflow-hidden shadow-2xl">
          {/* Background Decorative Glows */}
          <div className="pointer-events-none absolute -left-24 -top-24 h-[300px] w-[300px] rounded-full bg-[#F58220]/15 blur-[80px]" />
          <div className="pointer-events-none absolute -right-24 top-0 h-[280px] w-[280px] rounded-full bg-[#00AEEF]/30 blur-[90px]" />

          <div className="relative z-10 max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/70 border border-[#7DD3FC]/60 text-xs font-semibold uppercase tracking-wider text-[#00AEEF] mb-6">
              PARTNER WITH EGOLIFE
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight text-[#10182C]">
              Ready to Modernize Your Administrative & Public Services?
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="mt-4 text-sm sm:text-base text-[#4B6179] leading-relaxed max-w-2xl">
              From municipal revenue systems and urban planning portals to enterprise mobile apps,
              our team brings 15+ years of verified public-sector IT expertise to your agency.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-[#00AEEF] px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-[#0092C8] shadow-md hover:shadow-lg hover:-translate-y-0.5">
                <span>Contact Our Specialists</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              {/* Lighter WhatsApp CTA */}
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
                <span>Chat on WhatsApp</span>
              </a>
            </motion.div>

            {/* Quick Contact Bar */}
            <div className="mt-12 pt-8 border-t border-[#7DD3FC]/50 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-[#4B6179]">
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#00AEEF] shrink-0" />
                <a href="tel:+916002172653" className="hover:text-[#00AEEF] transition-colors">Call: +91 6002172653</a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#00AEEF] shrink-0" />
                <a href="mailto:info@egolife.in" className="hover:text-[#00AEEF] transition-colors">info@egolife.in</a>
              </div>
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-[#00AEEF] shrink-0" />
                <span>Paikan, Goalpara (Assam)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
