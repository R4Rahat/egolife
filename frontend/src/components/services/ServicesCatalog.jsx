import { useState } from "react";
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
} from "lucide-react";
import { Link } from "react-router-dom";

const categories = [
  "All Services",
  "Aadhaar & Citizen ID",
  "Healthcare & PAN (UTI)",
  "Banking & DRA Recovery",
  "Govt Supply & Uniforms",
  "Manufacturing & E-Commerce",
  "IT Consulting & Tax",
];

const services = [
  {
    id: "aadhaar-enrolment",
    category: "Aadhaar & Citizen ID",
    title: "Aadhaar Enrolment Manpower & Kit Deployment",
    partner: "GAD Assam | EA Code: 1507",
    icon: Fingerprint,
    color: "from-blue-600 to-indigo-700",
    badge: "Official Enrolment Consortium",
    districts: ["Baksa", "Udalguri", "Tamulpur", "Barpeta", "Goalpara", "Nalbari"],
    summary:
      "Turnkey vendor of certified manpower and biometric kits for Aadhaar generation under Deputy Commissioners and District Commissioners of Assam.",
    points: [
      "Operating in consortium with BNK Capital Markets Ltd (Enrolment Agency EA Code 1507).",
      "Empanelled under Deputy Commissioners of Baksa, Udalguri, Tamulpur, Barpeta, Goalpara, and District Commissioner Nalbari.",
      "Complete deployment of certified operators, biometric Iris scanners, slap fingerprint scanners, and GPS-enabled laptops.",
      "Execution of Aadhaar generation camps at Gram Panchayats, government schools, and block administration centers.",
    ],
  },
  {
    id: "alankit-aadhaar",
    category: "Aadhaar & Citizen ID",
    title: "Labour-Welfare Aadhaar Enrolment Centers",
    partner: "Alankit Limited | Labour-Welfare Dept",
    icon: ShieldCheck,
    color: "from-indigo-600 to-blue-600",
    badge: "Assam Labour Welfare",
    districts: ["Statewide Assam Districts"],
    summary:
      "Authorized vendor of Alankit Limited operating dedicated Aadhaar Enrolment Centers for workers and citizens under the Labour-Welfare Department of Assam.",
    points: [
      "Setup and management of specialized enrolment desks in designated labor welfare zones.",
      "Fast-track documentation, mobile/biometric updates, and mandatory biometrics for youth and unorganized workers.",
      "Dedicated helpdesk ensuring last-mile compliance with welfare scheme entitlements.",
    ],
  },
  {
    id: "pnb-enrolment",
    category: "Aadhaar & Citizen ID",
    title: "Punjab National Bank Enrolment & Kit Supply",
    partner: "Punjab National Bank | BNK Capital",
    icon: Building,
    color: "from-sky-600 to-blue-700",
    badge: "Banking Branch Operations",
    districts: ["Various PNB Branches Across Assam"],
    summary:
      "Appointed by BNK Capital Markets Ltd as the manpower and hardware kit supplier across Punjab National Bank branches throughout Assam.",
    points: [
      "Stationing certified banking enrolment operators inside Punjab National Bank branches.",
      "Supplying UIDAI-certified hardware kits, verification printers, and secure network infrastructure.",
      "Enabling bank customers and local citizens to complete Aadhaar linking, KYC updation, and new enrolments smoothly.",
    ],
  },
  {
    id: "ab-pmjay-ayushman",
    category: "Healthcare & PAN (UTI)",
    title: "AB-PMJAY Ayushman Bharat Health Project",
    partner: "UTIITSL (Govt of India Undertaking)",
    icon: HeartPulse,
    color: "from-emerald-600 to-teal-700",
    badge: "National Health Mission",
    districts: ["Goalpara", "Bongaigaon", "Dhubri", "Karimganj", "Hailakandi", "Cachar"],
    summary:
      "Official vendor under UTI Infrastructure Technology and Services Limited (UTIITSL) for implementing Ayushman Bharat (AB-PMJAY) health cards across 6 key Assam districts.",
    points: [
      "Field mobilization and beneficiary verification across Goalpara, Bongaigaon, Dhubri, Karimganj, Hailakandi, and Cachar.",
      "Issuance of Ayushman Golden Cards providing cashless health cover up to ₹5 Lakh per family per year.",
      "Gram Panchayat-level camp organization in collaboration with district health authorities and local administration.",
    ],
  },
  {
    id: "pan-card-agency",
    category: "Healthcare & PAN (UTI)",
    title: "PAN Card Agency (All India Basis)",
    partner: "UTI Infrastructure Technology & Services Ltd",
    icon: ShieldCheck,
    color: "from-teal-600 to-emerald-700",
    badge: "All-India Franchise",
    districts: ["All India Network"],
    summary:
      "Working as an authorized PAN Card service vendor on an All-India basis under UTIITSL for new PAN allocations, reprints, and corrections.",
    points: [
      "Processing new PAN applications for individuals, HUFs, companies, and trusts across India.",
      "Digital verification, document verification, biometric-enabled instant e-PAN generation.",
      "Correction of demographic details and seamless PAN-Aadhaar linking facilitation.",
    ],
  },
  {
    id: "dra-recovery-banking",
    category: "Banking & DRA Recovery",
    title: "DRA Certified Banking Debt Recovery Services",
    partner: "Scheduled Banks & NBFCs",
    icon: Landmark,
    color: "from-amber-500 to-orange-600",
    badge: "IIBF / DRA Certified Team",
    districts: ["Assam & North-East Region"],
    summary:
      "Professional team of certified Debt Recovery Agents (DRA) adhering strictly to RBI ethical guidelines for non-performing asset (NPA) resolution.",
    points: [
      "Specialized handling of Personal Loans (PL), Credit Card outstandings (CC), and Business Loans.",
      "Certified DRA personnel trained in amicable negotiation, legal escalation, and compliance protocols.",
      "Comprehensive skip tracing, structured field visits, and audit-ready collection reporting for banking institutions.",
    ],
  },
  {
    id: "school-uniform-supply",
    category: "Govt Supply & Uniforms",
    title: "Government School Uniform Supply",
    partner: "Department of School Education, Assam",
    icon: Shirt,
    color: "from-orange-500 to-red-600",
    badge: "State Public Procurement",
    districts: ["Multiple Districts of Assam"],
    summary:
      "Large-scale manufacturing, tailoring, packaging, and direct distribution of quality school uniforms for government and provincialized schools.",
    points: [
      "Proven execution track record delivering institutional school uniforms across multiple districts of Assam.",
      "Standardized sizing, high-durability fabrics complying with departmental textile specifications.",
      "End-to-end logistics from regional manufacturing units straight to block educational offices and schools.",
    ],
  },
  {
    id: "it-accessories-govt-supply",
    category: "Govt Supply & Uniforms",
    title: "IT Accessories, Govt Supply & Construction",
    partner: "Public Works & State Nodal Departments",
    icon: Building,
    color: "from-indigo-600 to-slate-700",
    badge: "Hardware & Civil Projects",
    districts: ["Statewide Deployments"],
    summary:
      "Provisioning of IT hardware, office automation accessories, institutional supplies, and government civil/construction works.",
    points: [
      "Procurement and supply of institutional computers, biometric scanners, webcams, printers, and networking gear.",
      "Execution of institutional civil construction and infrastructure renovation projects for state premises.",
      "Strict compliance with government tender specifications and quality certifications.",
    ],
  },
  {
    id: "egolife-led-manufacturing",
    category: "Manufacturing & E-Commerce",
    title: "Egolife LED Bulb Manufacturing",
    partner: "Proprietary Brand: 'Egolife LED'",
    icon: Lightbulb,
    color: "from-amber-600 to-yellow-600",
    badge: "In-House Manufacturing",
    districts: ["North-East India & West Bengal"],
    summary:
      "Indigenous manufacturing and distribution of premium, energy-efficient LED lighting products under our registered brand 'Egolife LED'.",
    points: [
      "Manufactured with surge protection and high lumen-per-watt efficiency for rural and urban grids.",
      "Supplying commercial, institutional, municipal, and household lighting requirements.",
      "Rigorous quality assurance, extended warranty, and eco-friendly manufacturing processes.",
    ],
  },
  {
    id: "ecommerce-services",
    category: "Manufacturing & E-Commerce",
    title: "Egolife E-Commerce Partner (200+ Services)",
    partner: "Egolife E-Commerce Ltd",
    icon: ShoppingBag,
    color: "from-purple-600 to-indigo-700",
    badge: "200+ Digital Services",
    districts: ["North-East India & West Bengal"],
    summary:
      "Strategic partner of Egolife E-Commerce Ltd, delivering a comprehensive portfolio of over 200 consumer, commercial, and utility services.",
    points: [
      "Regional distribution network spanning all eight North-Eastern states and West Bengal.",
      "Digital payment gateways, utility bill collections, ticketing, and consumer goods distribution.",
      "Empowering local village-level entrepreneurs (VLEs) and retail outlets with high-margin digital services.",
    ],
  },
  {
    id: "it-consulting-training",
    category: "IT Consulting & Tax",
    title: "IT Consulting, System Deployment & Training",
    partner: "Corporate Houses & Government Bodies",
    icon: Laptop,
    color: "from-blue-600 to-cyan-700",
    badge: "7+ Years Industry Experience",
    districts: ["Corporate & Institutional Clients"],
    summary:
      "With 7+ years of deep IT industry experience, our specialist team provides end-to-end consulting, system architecture deployment, and capacity building.",
    points: [
      "Consulting on digital transformation, enterprise software adoption, and administrative portal modernization.",
      "On-site deployment of secure databases, LAN/WAN architectures, and cloud-hosted portals.",
      "Comprehensive training for departmental officers, field executives, and administrative staff.",
    ],
  },
  {
    id: "tax-consultancy",
    category: "IT Consulting & Tax",
    title: "Tax Consultancy & Financial Compliance",
    partner: "Commercial & Business Enterprises",
    icon: ShieldCheck,
    color: "from-slate-700 to-zinc-800",
    badge: "Taxation & Legal Filings",
    districts: ["North-East Business Sector"],
    summary:
      "Professional tax advisory, GST compliance, income tax e-filing, and regulatory auditing assistance for enterprises and contractors.",
    points: [
      "GST registration, monthly return filings, audit preparations, and input tax credit reconciliations.",
      "Direct tax consultancy, TDS filings, and corporate annual compliance documentation.",
      "Advisory on government tender financial eligibility, balance sheet optimization, and MSME benefits.",
    ],
  },
];

export default function ServicesCatalog() {
  const [activeCategory, setActiveCategory] = useState("All Services");

  const filteredServices =
    activeCategory === "All Services"
      ? services
      : services.filter((s) => s.category === activeCategory);

  return (
    <section className="py-20 bg-[#F8FAFC]">
      <div className="max-w-[1220px] mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#24469A]">
            DETAILED PORTFOLIO OF CAPABILITIES
          </p>
          <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#10182C]">
            Our Core Services & Public Sector Engagements
          </h2>
          <p className="mt-3 text-[#5A6F87] text-sm sm:text-base">
            Backed by 7+ years of IT experience, official empanelments with GAD Assam (EA Code 1507), UTIITSL, and leading financial institutions.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="mt-10 flex items-center justify-center flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ${
                activeCategory === cat
                  ? "bg-[#24469A] text-white shadow-sm"
                  : "bg-white text-[#4B6179] border border-[#E2E8F0] hover:bg-[#F1F5F9] hover:text-[#10182C]"
              }`}>
              {cat}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service, idx) => {
              const IconComponent = service.icon;
              return (
                <motion.div
                  key={service.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className="rounded-2xl bg-white border border-[#E4EAF2] p-7 sm:p-8 flex flex-col justify-between shadow-xs hover:shadow-lg hover:border-[#24469A]/30 transition-all group">
                  <div>
                    {/* Top Row: Icon + Badges */}
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-center gap-3.5">
                        <div className="w-12 h-12 rounded-xl bg-[#24469A]/10 text-[#24469A] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                          <IconComponent className="w-6 h-6" />
                        </div>
                        <div>
                          <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#F58220]">
                            {service.category}
                          </span>
                          <h3 className="text-lg font-bold text-[#10182C] group-hover:text-[#24469A] transition-colors leading-snug">
                            {service.title}
                          </h3>
                        </div>
                      </div>

                      <span className="shrink-0 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#F2F5FB] text-[#24469A] border border-[#24469A]/15">
                        {service.badge}
                      </span>
                    </div>

                    {/* Partner / Authority Banner */}
                    <div className="mt-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#F8FAFC] border border-[#E8EEF5] text-xs font-semibold text-[#334155]">
                      <span className="text-[#64748B]">Authority/Partner:</span>
                      <span className="text-[#1E3A8A] font-bold">{service.partner}</span>
                    </div>

                    {/* Summary */}
                    <p className="mt-4 text-sm text-[#4B6179] leading-relaxed">
                      {service.summary}
                    </p>

                    {/* Bullet Points */}
                    <ul className="mt-5 space-y-2.5">
                      {service.points.map((pt, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#374151]">
                          <CheckCircle2 className="w-4 h-4 text-[#16A34A] shrink-0 mt-0.5" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Districts Chip Row */}
                    {service.districts && (
                      <div className="mt-6 pt-4 border-t border-[#F1F5F9]">
                        <p className="text-[11px] font-bold uppercase tracking-wider text-[#64748B] mb-2 flex items-center gap-1.5">
                          <MapPin className="w-3.5 h-3.5 text-[#F58220]" />
                          Operational Footprint:
                        </p>
                        <div className="flex flex-wrap gap-1.5">
                          {service.districts.map((d) => (
                            <span
                              key={d}
                              className="px-2.5 py-0.5 rounded-md bg-[#F1F5F9] text-[#475569] text-xs font-medium">
                              {d}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Bottom Action */}
                  <div className="mt-7 pt-4 border-t border-[#EDF2F7] flex items-center justify-between">
                    <span className="text-xs font-semibold text-[#16A34A] flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-[#16A34A] animate-pulse" />
                      Active Operations
                    </span>

                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#24469A] hover:text-[#1E3A8A] transition-colors">
                      <span>Inquire for Deployment</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
