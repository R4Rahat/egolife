import { motion } from "framer-motion";
import {
  Building2,
  MapPin,
  Phone,
  Mail,
  Clock,
  ShieldCheck,
  Award,
  Globe,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa6";

const WHATSAPP_URL = "https://wa.me/916002172653";

export default function ContactInfo() {
  return (
    <div className="space-y-6">
      {/* Registered Office & Corporate Profile Card */}
      <div className="rounded-2xl bg-gradient-to-br from-[#E0F2FE] via-[#BAE6FD] to-[#7DD3FC] p-7 sm:p-8 text-[#10182C] shadow-xl relative overflow-hidden">
        <div className="absolute -right-12 -bottom-12 w-48 h-48 bg-[#00AEEF]/30 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute -left-12 -top-12 w-40 h-40 bg-[#F58220]/20 rounded-full blur-2xl pointer-events-none" />

        <div className="relative z-10">
          <span className="text-[10px] font-bold uppercase tracking-wider text-[#00AEEF] bg-white/70 px-2.5 py-1 rounded-full border border-[#7DD3FC]/60">
            Registered Corporate Office
          </span>

          <h3 className="text-xl font-extrabold text-[#10182C] mt-3.5">
            EGOLIFE EGOVERNANCE PRIVATE LIMITED
          </h3>
          <p className="text-xs text-[#4B6179] mt-1 font-mono">
            CIN: U72900AS2021PTC022087
          </p>

          <div className="mt-6 space-y-4 pt-5 border-t border-[#7DD3FC]/50 text-xs">
            {/* Address */}
            <div className="flex items-start gap-3">
              <MapPin className="w-4 h-4 text-[#00AEEF] shrink-0 mt-0.5" />
              <div>
                <span className="text-[#4B6179] block text-[10px] uppercase font-bold">Address</span>
                <span className="font-semibold text-[#10182C] leading-relaxed block mt-0.5">
                  Entire Northeast Region
                </span>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-3">
              <Phone className="w-4 h-4 text-[#00AEEF] shrink-0 mt-0.5" />
              <div>
                <span className="text-[#4B6179] block text-[10px] uppercase font-bold">Helpline &amp; Sales</span>
                <a
                  href="tel:+916002172653"
                  className="font-semibold text-[#10182C] hover:text-[#00AEEF] transition-colors block mt-0.5">
                  +91 6002172653
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-3">
              <Mail className="w-4 h-4 text-[#00AEEF] shrink-0 mt-0.5" />
              <div>
                <span className="text-[#4B6179] block text-[10px] uppercase font-bold">Email Correspondence</span>
                <a
                  href="mailto:egolifemd@gmail.com"
                  className="font-semibold text-[#10182C] hover:text-[#00AEEF] transition-colors block mt-0.5">
                  egolifemd@gmail.com
                </a>
              </div>
            </div>

            {/* Website */}
            <div className="flex items-start gap-3">
              <Globe className="w-4 h-4 text-[#00AEEF] shrink-0 mt-0.5" />
              <div>
                <span className="text-[#4B6179] block text-[10px] uppercase font-bold">Official Portal</span>
                <span className="font-semibold text-[#10182C] block mt-0.5">
                  www.egolife.in
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lighter WhatsApp Quick Connect Card */}
      <div className="rounded-2xl border border-[#86EFAC]/60 bg-[#EBFBF0] p-6 text-[#15803D] shadow-xs">
        <div className="flex items-start gap-3.5">
          <div className="w-10 h-10 rounded-xl bg-white border border-[#86EFAC] flex items-center justify-center shrink-0 shadow-xs">
            <FaWhatsapp className="w-5 h-5 text-[#25D366]" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h4 className="text-sm font-bold text-[#14532D]">Immediate WhatsApp Desk</h4>
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
            </div>
            <p className="text-xs text-[#166534] mt-1 leading-relaxed">
              Connect directly with our administration team for urgent tender documents or camp schedules.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3.5 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold text-[#15803D] border border-[#86EFAC] shadow-2xs hover:bg-[#DCFCE7] transition-colors">
              <FaWhatsapp className="w-4 h-4 text-[#25D366]" />
              <span>Start WhatsApp Conversation</span>
            </a>
          </div>
        </div>
      </div>

      {/* Official Credentials Checklist */}
      <div className="rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] p-6">
        <h4 className="text-xs font-bold uppercase tracking-wider text-[#334155] mb-3">
          Verified Public Sector Compliance
        </h4>
        <ul className="space-y-2 text-xs text-[#475569]">
          <li className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#16A34A] shrink-0" />
            <span>Government Authorized Agency</span>
          </li>
          <li className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#16A34A] shrink-0" />
            <span>UTIITSL Authorized Partner (AB-PMJAY &amp; PAN)</span>
          </li>
          <li className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#16A34A] shrink-0" />
            <span>IIBF / DRA Certified Debt Recovery Agency</span>
          </li>
          <li className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#16A34A] shrink-0" />
            <span>Empanelled Supplier for Uniforms</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
