import { motion } from "framer-motion";
import { MapPin, ShieldCheck, HeartPulse, Fingerprint, Building2 } from "lucide-react";

export default function AssamCoverageSection() {
  const districtList = [
    {
      name: "Goalpara",
      type: "Headquarters & Core Hub",
      projects: ["Regd. Office (Paikan)", "AB-PMJAY (UTI)", "GAD Aadhaar Manpower", "PNB Bank Kits"],
      badge: "Corporate Base",
    },
    {
      name: "Bongaigaon",
      type: "Western Assam Hub",
      projects: ["AB-PMJAY Health Cards", "Aadhaar Camps", "E-Commerce Distribution"],
      badge: "Active Ops",
    },
    {
      name: "Dhubri",
      type: "Border Belt Region",
      projects: ["AB-PMJAY Beneficiary Enrolment", "Citizen Identification", "School Uniforms"],
      badge: "Active Ops",
    },
    {
      name: "Baksa",
      type: "BTR Region",
      projects: ["DC Baksa Aadhaar Manpower", "Biometric Kit Supplier", "Gram Panchayat Camps"],
      badge: "DC Empanelled",
    },
    {
      name: "Udalguri",
      type: "BTR Region",
      projects: ["DC Udalguri Aadhaar Vendor", "Hardware Kit Deployment", "School Camps"],
      badge: "DC Empanelled",
    },
    {
      name: "Tamulpur",
      type: "BTR Region",
      projects: ["DC Tamulpur Aadhaar Centers", "Manpower Deployment", "Citizen Services"],
      badge: "DC Empanelled",
    },
    {
      name: "Barpeta",
      type: "Lower Assam Division",
      projects: ["DC Barpeta Aadhaar Vendor", "Gram Panchayat Enrolments", "School Uniforms"],
      badge: "DC Empanelled",
    },
    {
      name: "Nalbari",
      type: "Central Lower Assam",
      projects: ["District Commissioner Nalbari", "Biometric Enrolment", "PNB Bank Branch Kits"],
      badge: "DC Empanelled",
    },
    {
      name: "Cachar (Silchar)",
      type: "Barak Valley Division",
      projects: ["AB-PMJAY (UTIITSL)", "Ayushman Golden Cards", "Banking Support"],
      badge: "Health Mission",
    },
    {
      name: "Karimganj",
      type: "Barak Valley Division",
      projects: ["AB-PMJAY Project Vendor", "Beneficiary Verification", "UTI PAN Card Ops"],
      badge: "Health Mission",
    },
    {
      name: "Hailakandi",
      type: "Barak Valley Division",
      projects: ["AB-PMJAY Healthcare Drive", "Panchayat Verification", "Citizen ID Services"],
      badge: "Health Mission",
    },
    {
      name: "North-East & West Bengal",
      type: "Regional Footprint",
      projects: ["Egolife LED Bulb Distribution", "200+ E-Commerce Services", "PAN Agency All India"],
      badge: "Regional Network",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1220px] mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#F58220]">
            REGIONAL IMPACT & REACH
          </p>
          <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#10182C]">
            District Footprint Across Assam & Eastern India
          </h2>
          <p className="mt-3 text-[#5A6F87] text-sm sm:text-base">
            Actively operating under Deputy Commissioners, District Commissioners, UTIITSL, and Alankit Limited across urban, rural, and tea garden districts.
          </p>
        </div>

        {/* District Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {districtList.map((dist, idx) => (
            <motion.div
              key={dist.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.04 }}
              className="p-5 rounded-xl border border-[#E2E8F0] bg-[#FAFCFF] hover:bg-white hover:border-[#24469A]/30 hover:shadow-md transition-all group flex flex-col justify-between">
              <div>
                <div className="flex items-start justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-[#F58220] shrink-0 group-hover:scale-110 transition-transform" />
                    <h3 className="text-base font-bold text-[#10182C] group-hover:text-[#24469A] transition-colors">
                      {dist.name}
                    </h3>
                  </div>
                  <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded bg-[#F2F5FB] text-[#24469A] border border-[#24469A]/10 whitespace-nowrap">
                    {dist.badge}
                  </span>
                </div>

                <p className="text-xs text-[#64748B] font-medium mb-3">{dist.type}</p>

                <ul className="space-y-1.5 text-xs text-[#334155]">
                  {dist.projects.map((proj, pIdx) => (
                    <li key={pIdx} className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#24469A] shrink-0" />
                      <span>{proj}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-4 pt-3 border-t border-[#EDF2F7] flex items-center justify-between text-[11px] text-[#16A34A] font-semibold">
                <span>Verified Vendor Execution</span>
                <span>✓</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Registered Office Callout Banner */}
        <div className="mt-10 rounded-2xl bg-gradient-to-r from-[#24469A]/8 via-[#F2F6FC] to-[#F58220]/8 border border-[#24469A]/15 p-6 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#24469A] text-white flex items-center justify-center shrink-0 shadow-sm">
              <Building2 className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-[#24469A]">
                REGISTERED CORPORATE HEADQUARTERS
              </p>
              <h4 className="text-base font-extrabold text-[#10182C] mt-0.5">
                Paikan Part II, P.O & P.S - Krishnai, Dist - Goalpara (Assam), PIN - 783126
              </h4>
              <p className="text-xs text-[#526880] mt-0.5">
                Official Correspondence: egolifemd@gmail.com | Helpline: +91 6002172653
              </p>
            </div>
          </div>

          <span className="shrink-0 px-4 py-2 rounded-full bg-white border border-[#24469A]/20 text-xs font-bold text-[#24469A] shadow-xs">
            Assam State Jurisdiction
          </span>
        </div>
      </div>
    </section>
  );
}
