import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Phone, Mail, MapPin } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa6";

const WHATSAPP_URL = "https://wa.me/919044095988";

export default function AboutCTA() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1220px] mx-auto px-6">
        <div className="relative rounded-3xl bg-gradient-to-br from-[#0D1629] via-[#121E38] to-[#172647] p-8 sm:p-12 md:p-16 text-white overflow-hidden shadow-2xl">
          {/* Background Decorative Glows */}
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-80 h-80 rounded-full bg-[#24469A]/30 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-80 h-80 rounded-full bg-[#F58220]/20 blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-xs font-semibold uppercase tracking-wider text-[#F58220] mb-6">
              PARTNER WITH EGOLIFE
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
              Ready to Modernize Your Administrative & Public Services?
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="mt-4 text-sm sm:text-base text-[#9BB1C9] leading-relaxed max-w-2xl">
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
                className="inline-flex items-center gap-2 rounded-full bg-[#24469A] px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-[#1E3A80] shadow-md hover:shadow-lg hover:-translate-y-0.5">
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
            <div className="mt-12 pt-8 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-[#9BB1C9]">
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#F58220] shrink-0" />
                <span>Sales: +91 9044095988 / 77</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#F58220] shrink-0" />
                <span>Direct: support@egolife.in</span>
              </div>
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-[#F58220] shrink-0" />
                <span>Gomti Nagar, Lucknow, UP</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
