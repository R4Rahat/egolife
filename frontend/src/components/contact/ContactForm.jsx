import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle2, RefreshCw, MessageSquare } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa6";

const serviceOptions = [
  "Aadhaar Enrolment Camp / Kit Supply (EA 1507)",
  "AB-PMJAY Ayushman Bharat Project (UTIITSL)",
  "Banking Debt Recovery (DRA Certified - PL, CC, Loans)",
  "Government School Uniform Supply Project",
  "UTIITSL PAN Card Agency Franchise",
  "Egolife LED Bulb Procurement / Dealership",
  "Egolife E-Commerce (200+ Services) Partnership",
  "IT Hardware, Accessories & Civil Govt Projects",
  "General Tender / RFP Inquiry",
];

const organizationTypes = [
  "Gram Panchayat / Block Office",
  "District Administration / DC Office",
  "Bank Branch / Financial Institution",
  "School / Educational Institution",
  "Corporate / Business Enterprise",
  "Self-Help Group / Cooperative",
  "Citizen / Individual Contractor",
];

const districtOptions = [
  "Goalpara",
  "Bongaigaon",
  "Dhubri",
  "Baksa",
  "Udalguri",
  "Tamulpur",
  "Barpeta",
  "Nalbari",
  "Cachar",
  "Karimganj",
  "Hailakandi",
  "Other Assam District",
  "Other North-East State / West Bengal",
];

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    orgType: "",
    district: "",
    service: "",
    message: "",
  });

  const [status, setStatus] = useState("idle"); // 'idle' | 'submitting' | 'success'
  const [referenceId, setReferenceId] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("submitting");

    // Simulate submission delay
    setTimeout(() => {
      const generatedRef = "EGO-" + Math.floor(100000 + Math.random() * 900000);
      setReferenceId(generatedRef);
      setStatus("success");
    }, 800);
  };

  const resetForm = () => {
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      orgType: "",
      district: "",
      service: "",
      message: "",
    });
    setStatus("idle");
  };

  // WhatsApp prefilled message
  const whatsappMessage = encodeURIComponent(
    `Hello eGoLife Governance,\n\nI am contacting you regarding: ${
      formData.service || "General Inquiry"
    }\nName: ${formData.fullName}\nPhone: ${formData.phone}\nDistrict: ${
      formData.district || "Assam"
    }\nOrganization: ${formData.orgType || "N/A"}\nMessage: ${
      formData.message || "Please provide further details."
    }`
  );

  return (
    <div className="rounded-2xl border border-[#E2E8F0] bg-white p-7 sm:p-9 shadow-sm">
      {status === "success" ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center py-8">
          <div className="mx-auto w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4 border border-emerald-200">
            <CheckCircle2 className="w-8 h-8" />
          </div>

          <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#F2F5FB] text-[#24469A]">
            Ref ID: {referenceId}
          </span>

          <h3 className="mt-3 text-2xl font-extrabold text-[#10182C]">
            Proposal Inquiry Received!
          </h3>

          <p className="mt-2 text-sm text-[#5B6F84] max-w-md mx-auto leading-relaxed">
            Thank you, <strong className="text-[#10182C]">{formData.fullName}</strong>. Your requirement for{" "}
            <strong className="text-[#24469A]">{formData.service || "our services"}</strong> has been logged. Our administrative team will respond within 24 business hours.
          </p>

          {/* Quick WhatsApp Forwarding */}
          <div className="mt-7 pt-6 border-t border-[#EDF2F7] flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={`https://wa.me/916002172653?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#EBFBF0] px-5 py-2.5 text-xs font-semibold text-[#15803D] border border-[#86EFAC]/70 hover:bg-[#DCFCE7] transition-all shadow-xs">
              <FaWhatsapp className="w-4 h-4 text-[#25D366]" />
              <span>Forward to Official WhatsApp</span>
            </a>

            <button
              onClick={resetForm}
              className="inline-flex items-center gap-2 rounded-full border border-[#CBD5E1] px-5 py-2.5 text-xs font-semibold text-[#475569] hover:bg-[#F8FAFC] transition-colors">
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Submit Another Request</span>
            </button>
          </div>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#F58220]">
              SERVICE &amp; TENDER PROPOSAL
            </span>
            <h3 className="text-xl sm:text-2xl font-extrabold text-[#10182C] mt-0.5">
              Submit Your Project Requirement
            </h3>
            <p className="text-xs text-[#526880] mt-1">
              Fields marked with an asterisk (<span className="text-red-500">*</span>) are mandatory.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Full Name */}
            <div>
              <label className="block text-xs font-bold text-[#334155] mb-1.5">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="fullName"
                required
                value={formData.fullName}
                onChange={handleChange}
                placeholder="e.g. Rahul Das"
                className="w-full rounded-xl border border-[#CBD5E1] bg-[#F8FAFC] px-3.5 py-2.5 text-xs sm:text-sm text-[#10182C] placeholder:text-[#94A3B8] focus:border-[#24469A] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#24469A]"
              />
            </div>

            {/* Email Address */}
            <div>
              <label className="block text-xs font-bold text-[#334155] mb-1.5">
                Official / Contact Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="e.g. official@domain.gov.in"
                className="w-full rounded-xl border border-[#CBD5E1] bg-[#F8FAFC] px-3.5 py-2.5 text-xs sm:text-sm text-[#10182C] placeholder:text-[#94A3B8] focus:border-[#24469A] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#24469A]"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Phone Number */}
            <div>
              <label className="block text-xs font-bold text-[#334155] mb-1.5">
                Mobile / WhatsApp Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                placeholder="e.g. +91 9876543210"
                className="w-full rounded-xl border border-[#CBD5E1] bg-[#F8FAFC] px-3.5 py-2.5 text-xs sm:text-sm text-[#10182C] placeholder:text-[#94A3B8] focus:border-[#24469A] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#24469A]"
              />
            </div>

            {/* Organization Type */}
            <div>
              <label className="block text-xs font-bold text-[#334155] mb-1.5">
                Entity / Organization Type <span className="text-red-500">*</span>
              </label>
              <select
                name="orgType"
                required
                value={formData.orgType}
                onChange={handleChange}
                className="w-full rounded-xl border border-[#CBD5E1] bg-[#F8FAFC] px-3.5 py-2.5 text-xs sm:text-sm text-[#10182C] focus:border-[#24469A] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#24469A]">
                <option value="">Select Organization Type</option>
                {organizationTypes.map((org) => (
                  <option key={org} value={org}>
                    {org}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* District */}
            <div>
              <label className="block text-xs font-bold text-[#334155] mb-1.5">
                District / Region <span className="text-red-500">*</span>
              </label>
              <select
                name="district"
                required
                value={formData.district}
                onChange={handleChange}
                className="w-full rounded-xl border border-[#CBD5E1] bg-[#F8FAFC] px-3.5 py-2.5 text-xs sm:text-sm text-[#10182C] focus:border-[#24469A] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#24469A]">
                <option value="">Select District</option>
                {districtOptions.map((d) => (
                  <option key={d} value={d}>
                    {d}
                  </option>
                ))}
              </select>
            </div>

            {/* Service Requirement */}
            <div>
              <label className="block text-xs font-bold text-[#334155] mb-1.5">
                Service Vertical Required <span className="text-red-500">*</span>
              </label>
              <select
                name="service"
                required
                value={formData.service}
                onChange={handleChange}
                className="w-full rounded-xl border border-[#CBD5E1] bg-[#F8FAFC] px-3.5 py-2.5 text-xs sm:text-sm text-[#10182C] focus:border-[#24469A] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#24469A]">
                <option value="">Select Required Service</option>
                {serviceOptions.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Message / Project Scope */}
          <div>
            <label className="block text-xs font-bold text-[#334155] mb-1.5">
              Project Details / Proposal Notes <span className="text-red-500">*</span>
            </label>
            <textarea
              name="message"
              required
              rows={4}
              value={formData.message}
              onChange={handleChange}
              placeholder="Please describe your proposal, expected camp location or deployment timeline..."
              className="w-full rounded-xl border border-[#CBD5E1] bg-[#F8FAFC] px-3.5 py-2.5 text-xs sm:text-sm text-[#10182C] placeholder:text-[#94A3B8] focus:border-[#24469A] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#24469A]"
            />
          </div>

          {/* Submit Button */}
          <div className="pt-2">
            <button
              type="submit"
              disabled={status === "submitting"}
              className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-[#24469A] px-6 py-3.5 text-sm font-semibold text-white shadow-md transition-all hover:bg-[#1E3A80] hover:shadow-lg disabled:opacity-70">
              {status === "submitting" ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin" />
                  <span>Logging Proposal...</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>Submit Service Proposal</span>
                </>
              )}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
