import { Link } from "react-router-dom";

export default function GovernmentExperience() {
  return (
    <section className="bg-[#F8FAFC] py-20 lg:py-24 border-b border-[#EAEEF4]">
      <div className="max-w-[1220px] mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-[11px] font-bold uppercase tracking-[3px] text-[#00AEEF]">
            INSTITUTIONAL TRAJECTORY
          </p>
          <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#10182C]">
            Our Journey &amp; Public Sector Track Record
          </h2>
          <p className="mt-3 text-[#5A6F87] text-sm sm:text-base max-w-2xl mx-auto">
            From our early beginnings to becoming a trusted multi-service network, executing large-scale digital, financial, and government projects across India.
          </p>
        </div>

        {/* Action Button */}
        <div className="mt-10 flex justify-center">
          <Link
            to="/about#milestones"
            className="inline-flex items-center gap-2 rounded-full bg-[#10182C] px-6 py-3.5 text-sm font-semibold text-white transition-all hover:bg-[#00AEEF] shadow-lg hover:shadow-xl hover:-translate-y-1"
          >
            <span>View Full Milestones</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
