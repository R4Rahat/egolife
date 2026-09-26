import { MapPin, Phone, Mail, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Notifications", href: "/notifications" },
  { name: "Apps & Downloads", href: "/apps" },
  { name: "Partner", href: "/partner" },
  { name: "Industries", href: "/industries" },
  { name: "Case Studies", href: "/case-studies" },
  { name: "Careers", href: "/careers" },
  { name: "Contact", href: "/contact" },
];

const registrations = [
  "Govt. Authorized Agency",
  "UTIITSL Authorized Vendor",
  "DRA Certified Recovery Agents",
  "Pan India Service Delivery",
  "Established 2021",
];

export default function Footer() {
  return (
    <footer className="bg-[#0B1121] text-white relative overflow-hidden pt-16">
      {/* Background ambient glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#00AEEF]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#F58220]/5 rounded-full blur-3xl pointer-events-none" />

      {/* Main Footer Content */}
      <div className="mx-auto max-w-[1220px] px-6 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">
          
          {/* Brand & Description (Col Span 4) */}
          <div className="lg:col-span-4">
            <Link to="/" className="inline-block">
              <img
                src="/logo.png"
                alt="Egolife Egovernance Private Limited"
                className="h-12 w-auto object-contain"
              />
            </Link>

            <p className="mt-6 text-sm leading-relaxed text-[#94A3B8] max-w-sm">
              Egolife Egovernance Private Limited is a technology-driven, multi-service company focused on delivering reliable, accessible, and innovative solutions for individuals, businesses, institutions, and government-related projects.
            </p>

            {/* Social Icons */}
            <div className="mt-8 flex items-center gap-3">
              {[
                { Icon: FaFacebookF, label: "Facebook" },
                { Icon: FaInstagram, label: "Instagram" },
                { Icon: FaLinkedinIn, label: "LinkedIn" },
                { Icon: FaXTwitter, label: "X / Twitter" },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href="#"
                  aria-label={social.label}
                  className="w-9 h-9 flex items-center justify-center rounded-full bg-[#1E293B] text-[#94A3B8] transition-all hover:bg-[#00AEEF] hover:text-white hover:-translate-y-1"
                >
                  <social.Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links (Col Span 2) */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-6">
              Quick Links
            </h3>
            <ul className="space-y-3.5">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="group flex items-center text-sm text-[#94A3B8] transition-colors hover:text-[#00AEEF]"
                  >
                    <ArrowRight className="w-3.5 h-3.5 mr-2 opacity-0 -ml-5 transition-all group-hover:opacity-100 group-hover:ml-0 text-[#00AEEF]" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Registrations (Col Span 3) */}
          <div className="lg:col-span-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-6">
              Authorizations
            </h3>
            <ul className="space-y-3.5">
              {registrations.map((registration) => (
                <li key={registration} className="flex items-start gap-2 text-sm text-[#94A3B8]">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#F58220] mt-1.5 shrink-0" />
                  <span>{registration}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact (Col Span 3) */}
          <div className="lg:col-span-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-6">
              Contact Us
            </h3>
            
            <div className="space-y-4">
              {/* Address */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#1E293B] flex items-center justify-center shrink-0">
                  <MapPin size={14} className="text-[#00AEEF]" />
                </div>
                <p className="text-sm leading-relaxed text-[#94A3B8] pt-1">
                  Paikan Part II, P.O, P.S-Krishnai, <br />
                  Dist-Goalpara (Assam), <br />
                  Pin-783126
                </p>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#1E293B] flex items-center justify-center shrink-0">
                  <Phone size={14} className="text-[#00AEEF]" />
                </div>
                <a
                  href="tel:+916002172653"
                  className="text-sm text-[#94A3B8] transition-colors hover:text-[#00AEEF]"
                >
                  +91 6002172653
                </a>
              </div>

              {/* Email */}
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#1E293B] flex items-center justify-center shrink-0">
                  <Mail size={14} className="text-[#00AEEF]" />
                </div>
                <div className="flex flex-col text-sm">
                  <a
                    href="mailto:info@egolife.in"
                    className="text-[#94A3B8] transition-colors hover:text-[#00AEEF]"
                  >
                    info@egolife.in
                  </a>
                  <a
                    href="mailto:egolifemd@gmail.com"
                    className="text-[#94A3B8] transition-colors hover:text-[#00AEEF]"
                  >
                    egolifemd@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#1E293B] bg-[#020617]">
        <div className="mx-auto max-w-[1220px] px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#64748B]">
            © {new Date().getFullYear()} Egolife Egovernance Private Limited. All rights reserved.
          </p>
          
          <div className="flex items-center gap-6">
            <a href="#" className="text-xs text-[#64748B] transition-colors hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="text-xs text-[#64748B] transition-colors hover:text-white">
              Terms of Service
            </a>
            <a href="#" className="text-xs text-[#64748B] transition-colors hover:text-white">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
