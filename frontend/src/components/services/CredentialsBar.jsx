import {
  Shield,
  CheckCircle2,
  Award,
  Landmark,
  Building,
  Cpu,
} from "lucide-react";

export default function CredentialsBar() {
  const credentials = [
    {
      icon: Award,
      label: "Government Authorized Agency",
      sub: "BNK Capital Consortium",
    },
    {
      icon: CheckCircle2,
      label: "UTIITSL Authorized Vendor",
      sub: "AB-PMJAY & PAN Services",
    },
    {
      icon: Landmark,
      label: "DRA Certified Agency",
      sub: "Banking Loan Recovery",
    },
    {
      icon: Building,
      label: "Punjab National Bank",
      sub: "Enrolment & Kit Supplier",
    },
    {
      icon: Cpu,
      label: "Egolife LED & E-Commerce",
      sub: "In-House Manufacturing",
    },
  ];

  return (
    <div className="bg-[#E0F2FE] text-[#10182C] py-5 border-b border-[#1E2C4A]">
      <div className="max-w-[1220px] mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {credentials.map((cred, idx) => (
            <div
              key={idx}
              className="flex items-center gap-2.5 p-2 rounded-lg bg-white/60 border border-white/8 hover:bg-white/10 transition-colors"
            >
              <cred.icon className="w-4 h-4 text-[#00AEEF] shrink-0" />
              <div className="min-w-0">
                <p className="text-[11px] font-bold text-[#10182C] truncate">
                  {cred.label}
                </p>
                <p className="text-[10px] text-[#8EA2BC] truncate">
                  {cred.sub}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
