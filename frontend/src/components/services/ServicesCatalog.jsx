import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Fingerprint,
  HeartPulse,
  Landmark,
  Shirt,
  Lightbulb,
  ShoppingBag,
  Laptop,
  CheckCircle2,
  MapPin,
  Building,
  ShieldCheck,
  ArrowRight,
  RefreshCw,
  Globe,
  Database,
  Loader2,
} from "lucide-react";
import { Link } from "react-router-dom";
import { defaultServices, fetchServicesFromApi } from "../../data/servicesData";

const ICON_MAP = {
  Fingerprint,
  HeartPulse,
  Landmark,
  Shirt,
  Lightbulb,
  ShoppingBag,
  Laptop,
  CheckCircle2,
  MapPin,
  Building,
  ShieldCheck,
  ArrowRight,
};

function getIconComponent(icon) {
  if (typeof icon === "string") {
    return ICON_MAP[icon] || ShieldCheck;
  }
  return icon || ShieldCheck;
}

export default function ServicesCatalog() {
  const [servicesList, setServicesList] = useState(defaultServices);
  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState("local");
  const [activeCategory, setActiveCategory] = useState("All Services");
  const [errorMsg, setErrorMsg] = useState(null);

  const loadServicesData = async () => {
    setLoading(true);
    setErrorMsg(null);
    try {
      const res = await fetchServicesFromApi();
      setServicesList(res.data && res.data.length > 0 ? res.data : defaultServices);
      setDataSource(res.source || "local");
      if (res.error) {
        setErrorMsg(res.error);
      }
    } catch (err) {
      console.error("Error loading services:", err);
      setServicesList(defaultServices);
      setDataSource("local");
      setErrorMsg(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadServicesData();
  }, []);

  // Compute categories dynamically from current active services list
  const availableCategories = [
    "All Services",
    ...Array.from(new Set(servicesList.map((s) => s.category).filter(Boolean))),
  ];

  const filteredServices =
    activeCategory === "All Services"
      ? servicesList
      : servicesList.filter((s) => s.category === activeCategory);

  return (
    <section className="py-12 sm:py-20 bg-[#F8FAFC]">
      <div className="max-w-[1220px] mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#00AEEF]">
            DETAILED PORTFOLIO OF CAPABILITIES
          </p>
          <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#10182C]">
            Our Core Services & Public Sector Engagements
          </h2>
          <p className="mt-3 text-[#5A6F87] text-sm sm:text-base">
            Backed by 11 years of IT experience, official empanelments with BNK Capital (Government Authorized), UTIITSL, and leading financial institutions.
          </p>

          {/* API Data Source Status Badge */}
          <div className="mt-4 inline-flex items-center justify-center gap-2">
            {dataSource === "api" ? (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200/80 shadow-xs">
                <Globe className="w-3.5 h-3.5 text-emerald-600 animate-pulse" />
                <span>Live API Data Active (.env)</span>
              </span>
            ) : (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 text-slate-600 border border-slate-200">
                <Database className="w-3.5 h-3.5 text-slate-500" />
                <span>Current Local Services</span>
              </span>
            )}

            <button
              onClick={loadServicesData}
              disabled={loading}
              title="Refresh / Fetch Services Data"
              className="p-1 text-slate-400 hover:text-[#00AEEF] hover:bg-white rounded-full transition-all border border-transparent hover:border-slate-200 disabled:opacity-50 cursor-pointer">
              <RefreshCw className={`w-3.5 h-3.5 ${loading ? "animate-spin text-[#00AEEF]" : ""}`} />
            </button>
          </div>

          {errorMsg && (
            <p className="mt-2 text-xs text-amber-600 font-medium">
              Note: Could not reach API ({errorMsg}). Showing default current services.
            </p>
          )}
        </div>

        {/* Category Filter Tabs */}
        <div className="mt-8 sm:mt-10 flex items-center justify-start sm:justify-center flex-wrap gap-2">
          {availableCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                activeCategory === cat
                  ? "bg-[#00AEEF] text-white shadow-sm"
                  : "bg-white text-[#4B6179] border border-[#E2E8F0] hover:bg-[#F1F5F9] hover:text-[#10182C]"
              }`}>
              {cat}
            </button>
          ))}
        </div>

        {/* Loading Skeleton Indicator */}
        {loading ? (
          <div className="mt-12 text-center py-16 bg-white rounded-2xl border border-slate-200 shadow-xs flex flex-col items-center justify-center gap-3">
            <Loader2 className="w-8 h-8 text-[#00AEEF] animate-spin" />
            <p className="text-sm font-semibold text-slate-600">Fetching Services from API...</p>
          </div>
        ) : (
          /* Services Grid */
          <div className="mt-8 sm:mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <AnimatePresence mode="popLayout">
              {filteredServices.map((service, idx) => {
                const IconComponent = getIconComponent(service.icon);
                return (
                  <motion.div
                    key={service.id || idx}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4, delay: idx * 0.04 }}
                    className="rounded-2xl bg-white border border-[#E4EAF2] p-5 sm:p-8 flex flex-col justify-between shadow-xs hover:shadow-lg hover:border-[#00AEEF]/30 transition-all group">
                    <div>
                      {/* Top Row: Icon + Badges */}
                      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 sm:gap-4">
                        <div className="flex items-center gap-3 sm:gap-3.5">
                          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#00AEEF]/10 text-[#00AEEF] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                            <IconComponent className="w-5 h-5 sm:w-6 sm:h-6" />
                          </div>
                          <div>
                            <span className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider text-[#F58220]">
                              {service.category}
                            </span>
                            <h3 className="text-base sm:text-lg font-bold text-[#10182C] group-hover:text-[#00AEEF] transition-colors leading-snug">
                              {service.title}
                            </h3>
                          </div>
                        </div>

                        {service.badge && (
                          <span className="self-start shrink-0 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#F2F5FB] text-[#00AEEF] border border-[#00AEEF]/15">
                            {service.badge}
                          </span>
                        )}
                      </div>

                      {/* Partner / Authority Banner */}
                      {service.partner && (
                        <div className="mt-3.5 sm:mt-4 inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-lg bg-[#F8FAFC] border border-[#E8EEF5] text-xs font-semibold text-[#334155] max-w-full flex-wrap">
                          <span className="text-[#64748B]">Authority/Partner:</span>
                          <span className="text-[#1E3A8A] font-bold">{service.partner}</span>
                        </div>
                      )}

                      {/* Summary */}
                      <p className="mt-3 sm:mt-4 text-xs sm:text-sm text-[#4B6179] leading-relaxed">
                        {service.summary}
                      </p>

                      {/* Bullet Points */}
                      {service.points && service.points.length > 0 && (
                        <ul className="mt-4 sm:mt-5 space-y-2 sm:space-y-2.5">
                          {service.points.map((pt, pIdx) => (
                            <li key={pIdx} className="flex items-start gap-2 sm:gap-2.5 text-xs sm:text-sm text-[#374151]">
                              <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#16A34A] shrink-0 mt-0.5" />
                              <span>{pt}</span>
                            </li>
                          ))}
                        </ul>
                      )}

                      {/* Districts Chip Row */}
                      {service.districts && service.districts.length > 0 && (
                        <div className="mt-5 sm:mt-6 pt-3.5 sm:pt-4 border-t border-[#F1F5F9]">
                          <p className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-[#64748B] mb-2 flex items-center gap-1.5">
                            <MapPin className="w-3.5 h-3.5 text-[#F58220]" />
                            Operational Footprint:
                          </p>
                          <div className="flex flex-wrap gap-1.5">
                            {service.districts.map((d) => (
                              <span
                                key={d}
                                className="px-2 sm:px-2.5 py-0.5 rounded-md bg-[#F1F5F9] text-[#475569] text-[11px] sm:text-xs font-medium">
                                {d}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Bottom Action */}
                    <div className="mt-5 sm:mt-7 pt-3.5 sm:pt-4 border-t border-[#EDF2F7] flex items-center justify-between">
                      <span className="text-[11px] sm:text-xs font-semibold text-[#16A34A] flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-[#16A34A] animate-pulse" />
                        Active Operations
                      </span>

                      <Link
                        to="/contact"
                        className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs font-bold text-[#00AEEF] hover:text-[#1E3A8A] transition-colors">
                        <span>Inquire for Deployment</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        )}
      </div>
    </section>
  );
}
