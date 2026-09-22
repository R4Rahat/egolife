import { Mail, Phone, Globe, Building2, User } from "lucide-react";

export default function ManagementDirectory() {
  const directory = [
    {
      designation: "Managing Director-cum-Authorized Signatory",
      name: "Ms. Saloni Choudhary",
      mobile: "+91 7638852736",
      email: "salonichoudhary0202@gmail.com",
    },
    {
      designation: "Additional Director & Project Manager",
      name: "Mr. Prasanta Das",
      mobile: "+91 9101748894",
      email: "egolife.online@gmail.com",
    },
    {
      designation: "Additional Director & Schedule Manager",
      name: "Mr. Biplab Sarkar",
      mobile: "+91 9395506787",
      email: "egolifeaadhaar@gmail.com",
    },
    {
      designation: "Director & Schedule Manager",
      name: "Mr. Rana Das",
      mobile: "+91 7005573653",
      email: "",
    },
    {
      designation: "General Manager (GM)-cum-Bank Signatory",
      name: "Mr. Monowar Hussain",
      mobile: "+91 6002172653",
      email: "egolifemd@gmail.com",
    },
    {
      designation: "Deputy General Manager (DGM)-cum-Admin",
      name: "Mr. Hasanur Islam Mollah",
      mobile: "+91 7002616236",
      email: "egolife.offline@gmail.com",
    },
    {
      designation: "Assistant General Manager (AGM)",
      name: "Mr. Rameez Rabbani",
      mobile: "+91 7002365284",
      email: "",
    },
  ];

  return (
    <section className="py-20 bg-[#F8FAFC]">
      <div className="max-w-[1220px] mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#00AEEF]">
            DIRECTORY
          </p>
          <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#10182C]">
            Corporate Management & Contact
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Main Directory Table */}
          <div className="lg:col-span-2 space-y-6">
            <h3 className="font-bold text-xl text-[#10182C] flex items-center gap-2 border-b border-[#E2E8F0] pb-3">
              <Building2 className="w-5 h-5 text-[#00AEEF]" />
              Management Directory
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {directory.map((item, idx) => (
                <div key={idx} className="bg-white rounded-2xl shadow-sm border border-[#E2E8F0] p-6 flex flex-col hover:border-[#00AEEF]/40 transition-colors group">
                  <div className="flex items-start gap-4 mb-4">
                    {/* Photo Placeholder */}
                    <div className="w-16 h-16 rounded-xl bg-[#F1F5F9] border border-[#E2E8F0] flex items-center justify-center shrink-0 group-hover:bg-[#E0F2FE] transition-colors relative overflow-hidden">
                       <User className="w-8 h-8 text-[#94A3B8] group-hover:text-[#00AEEF] transition-colors" />
                       <div className="absolute inset-0 border-2 border-dashed border-[#CBD5E1] rounded-xl flex items-center justify-center bg-white/50 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity">
                         <span className="text-[9px] font-semibold text-[#475569] leading-tight text-center">Photo<br/>Space</span>
                       </div>
                    </div>
                    <div>
                      <h4 className="font-bold text-[#10182C] text-lg leading-tight">{item.name}</h4>
                      <p className="text-xs font-semibold text-[#00AEEF] mt-1">{item.designation}</p>
                    </div>
                  </div>
                  
                  <div className="mt-auto space-y-2 pt-4 border-t border-[#F1F5F9]">
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-[#94A3B8]" />
                      <a href={`tel:${item.mobile.replace(/\s+/g, '')}`} className="text-sm font-medium text-[#475569] hover:text-[#00AEEF] transition-colors">
                        {item.mobile}
                      </a>
                    </div>
                    {item.email && (
                      <div className="flex items-center gap-2">
                        <Mail className="w-4 h-4 text-[#94A3B8]" />
                        <a href={`mailto:${item.email}`} className="text-sm font-medium text-[#475569] hover:text-[#00AEEF] transition-colors truncate" title={item.email}>
                          {item.email}
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Official Company Contact Box */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-sm border border-[#E2E8F0] p-6 sticky top-24">
              <h3 className="font-bold text-lg text-[#10182C] mb-6 flex items-center gap-2 pb-4 border-b border-[#E2E8F0]">
                Official Company Contact
              </h3>
              
              <div className="space-y-6">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#64748B] block mb-1">Company</span>
                  <div className="flex items-start gap-2.5">
                    <Building2 className="w-4 h-4 text-[#00AEEF] mt-0.5" />
                    <span className="font-semibold text-[#10182C] text-sm leading-snug">Egolife Egovernance Private Limited</span>
                  </div>
                </div>

                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#64748B] block mb-1">Official Email</span>
                  <div className="flex items-start gap-2.5">
                    <Mail className="w-4 h-4 text-[#00AEEF] mt-0.5" />
                    <a href="mailto:info@egolife.in" className="font-semibold text-[#10182C] text-sm hover:text-[#00AEEF] transition-colors">info@egolife.in</a>
                  </div>
                </div>

                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#64748B] block mb-1">Additional Email</span>
                  <div className="flex items-start gap-2.5">
                    <Mail className="w-4 h-4 text-[#00AEEF] mt-0.5" />
                    <a href="mailto:goegolife@gmail.com" className="font-semibold text-[#10182C] text-sm hover:text-[#00AEEF] transition-colors">goegolife@gmail.com</a>
                  </div>
                </div>

                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#64748B] block mb-1">Official Websites</span>
                  <div className="flex flex-col gap-2">
                    <div className="flex items-start gap-2.5">
                      <Globe className="w-4 h-4 text-[#00AEEF] mt-0.5" />
                      <a href="https://www.egolife.in" target="_blank" rel="noreferrer" className="font-semibold text-[#10182C] text-sm hover:text-[#00AEEF] transition-colors">www.egolife.in</a>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <Globe className="w-4 h-4 text-[#00AEEF] mt-0.5" />
                      <a href="https://www.egolife.net" target="_blank" rel="noreferrer" className="font-semibold text-[#10182C] text-sm hover:text-[#00AEEF] transition-colors">www.egolife.net</a>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <Globe className="w-4 h-4 text-[#00AEEF] mt-0.5" />
                      <a href="https://www.growfast.in" target="_blank" rel="noreferrer" className="font-semibold text-[#10182C] text-sm hover:text-[#00AEEF] transition-colors">www.growfast.in</a>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-4 border-t border-[#E2E8F0]">
                <p className="text-[10px] text-center text-[#94A3B8] italic">
                  Prepared for official press-release and media communication use.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
