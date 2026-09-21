import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/government", label: "Government" },
  { to: "/industries", label: "Industries" },
  { to: "/case-studies", label: "Case Studies" },
  { to: "/careers", label: "Careers" },
  { to: "/contact", label: "Contact" },
];

const WHATSAPP_URL = "https://wa.me/919044095988";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [logoError, setLogoError] = useState(false);
  const location = useLocation();

  // Close mobile drawer on route navigation
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  // Track scroll position for subtle shadow and elevation
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${scrolled
          ? "bg-[#E6F3FF]/95 backdrop-blur-md shadow-[0_4px_20px_-4px_rgba(16,24,44,0.08)] border-b border-[#E2E8F0]"
          : "bg-[#F0F7FF]/95 backdrop-blur-sm border-b border-[#EAEEF4]"
        }`}>
      <div className="max-w-[1220px] mx-auto px-6 h-[72px] flex items-center justify-between">
        {/* Logo with graceful typography fallback */}
        <Link to="/" className="flex items-center shrink-0 group">
          {!logoError ? (
            <img
              src="logo.png"
              alt="eGoLife Governance"
              className="h-10 w-auto object-contain"
              onError={() => setLogoError(true)}
            />
          ) : (
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#00AEEF] to-[#0092C8] flex items-center justify-center text-white font-extrabold text-sm shadow-sm shadow-[#00AEEF]/25">
                eG
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-extrabold tracking-tight text-[#10182C] leading-none">
                  eGo<span className="text-[#00AEEF]">Life</span>
                </span>
                <span className="text-[9px] font-bold tracking-[0.16em] uppercase text-[#F58220] mt-0.5">
                  Governance
                </span>
              </div>
            </div>
          )}
        </Link>

        {/* Desktop navigation links */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className={({ isActive }) =>
                `px-3 py-1.5 rounded-full text-[13px] xl:text-sm font-medium transition-all duration-200 ${isActive
                  ? "text-[#00AEEF] bg-[#00AEEF]/8 font-semibold shadow-xs"
                  : "text-[#4B6179] hover:text-[#10182C] hover:bg-[#F2F5FB]"
                }`
              }>
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* Lighter WhatsApp CTA */}
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden lg:inline-flex items-center gap-2 rounded-full bg-[#EBFBF0] px-4 py-2 text-xs xl:text-sm font-medium text-[#15803D] border border-[#86EFAC]/70 shadow-[0_1px_2px_rgba(21,128,61,0.06)] transition-all duration-200 hover:bg-[#DCFCE7] hover:border-[#4ADE80] hover:text-[#0D632E] hover:shadow-[0_4px_12px_rgba(34,197,94,0.15)] active:scale-[0.98]">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <FaWhatsapp className="w-4 h-4 text-[#25D366]" />
          <span>WhatsApp Us</span>
        </a>

        {/* Mobile menu toggle button */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-xl border border-[#E4E9F1] text-[#10182C] hover:bg-[#F4F7FC] hover:text-[#00AEEF] transition-colors focus:outline-none"
          aria-label="Toggle menu"
          aria-expanded={open}>
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="lg:hidden overflow-hidden border-t border-[#EAEEF4] bg-white/98 backdrop-blur-lg shadow-lg">
            <nav className="max-w-[1220px] mx-auto px-6 py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.to === "/"}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center justify-between rounded-xl px-4 py-2.5 text-sm font-medium transition-colors ${isActive
                      ? "bg-[#00AEEF]/8 text-[#00AEEF] font-semibold"
                      : "text-[#10182C] hover:bg-[#F2F5FB] hover:text-[#00AEEF]"
                    }`
                  }>
                  {link.label}
                </NavLink>
              ))}

              {/* Mobile lighter WhatsApp CTA */}
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center justify-center gap-2 rounded-xl bg-[#EBFBF0] px-5 py-3 text-sm font-medium text-[#15803D] border border-[#86EFAC]/70 transition-colors hover:bg-[#DCFCE7] active:bg-[#C8F8D6]">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <FaWhatsapp className="w-4 h-4 text-[#25D366]" />
                <span>WhatsApp Us</span>
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Notification Marquee */}
      <div className="bg-[#00AEEF] text-white text-xs sm:text-sm py-1.5 overflow-hidden font-semibold">
        <marquee behavior="scroll" direction="left" scrollamount="5">
          Welcome to EGOLIFE EGOVERNANCE PRIVATE LIMITED - Serving All Over India with 11 Years of IT Experience.
        </marquee>
      </div>
    </header>
  );
}
