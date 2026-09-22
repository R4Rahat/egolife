import { motion } from "framer-motion";
import { User, Briefcase, GraduationCap, Star, BookOpen } from "lucide-react";
import founder from "../../assests/founder.jpeg";

export default function LeadershipProfile() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1220px] mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#00AEEF]">
            LEADERSHIP
          </p>
          <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#10182C]">
            Meet Our Leadership
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left Column: Photo & Brief Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4"
          >
            <div className="rounded-2xl bg-[#F8FAFC] border border-[#EAEEF4] p-6 text-center shadow-sm relative overflow-hidden">
              {/* Photo Placeholder */}
<div className="w-full aspect-square bg-[#E2E8F0] rounded-xl flex items-center justify-center mb-6 overflow-hidden relative">
  <img
    src={founder}
    alt="Founder"
    className="w-full h-full object-cover"
  />

  <div className="absolute inset-0 border-2 border-dashed border-[#CBD5E1] rounded-xl flex items-center justify-center bg-white/50 backdrop-blur-sm opacity-0 hover:opacity-100 transition-opacity">
    <span className="text-sm font-semibold text-[#475569]">
      Photo Space
    </span>
  </div>
</div>

              <h3 className="text-2xl font-bold text-[#10182C]">Prasanta Das</h3>
              <p className="text-sm font-semibold text-[#00AEEF] mt-1">
                Additional Director & Project Manager
              </p>
              <p className="text-xs text-[#64748B] mt-1 font-medium">
                Egolife Egovernance Private Limited
              </p>
            </div>
          </motion.div>

          {/* Right Column: Detailed Profile */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-8 space-y-10"
          >
            {/* Bio */}
            <div>
              <h4 className="text-xl font-bold text-[#10182C] flex items-center gap-2 border-b border-[#EAEEF4] pb-2 mb-4">
                <BookOpen className="w-5 h-5 text-[#00AEEF]" />
                Professional Biography
              </h4>
              <p className="text-[#4B6179] text-sm leading-relaxed mb-4">
                Prasanta Das is an experienced technology, digital governance, and project management professional with more than a decade of experience across IT infrastructure, e-Governance, Digital India initiatives, financial inclusion, skill development, and grassroots digital services.
              </p>
              <p className="text-[#4B6179] text-sm leading-relaxed">
                He holds a Bachelor of Engineering (B.E.) in Computer Science & Engineering, completed in 2011 from Rural Engineering College, Bhalki, affiliated with Visvesvaraya Technological University (VTU). His technical foundation, combined with extensive field and project-management experience, has enabled him to lead large-scale digital and government-service initiatives.
              </p>
            </div>

            {/* Experience */}
            <div>
              <h4 className="text-xl font-bold text-[#10182C] flex items-center gap-2 border-b border-[#EAEEF4] pb-2 mb-6">
                <Briefcase className="w-5 h-5 text-[#00AEEF]" />
                Professional Experience
              </h4>
              
              <div className="space-y-6">
                <div className="relative pl-6 border-l-2 border-[#E2E8F0]">
                  <div className="absolute w-3 h-3 bg-[#00AEEF] rounded-full -left-[7px] top-1.5 ring-4 ring-white" />
                  <h5 className="font-bold text-[#10182C]">Additional Director & Project Manager</h5>
                  <p className="text-xs font-semibold text-[#00AEEF] mb-2">Egolife Egovernance Private Limited</p>
                  <p className="text-[#4B6179] text-xs leading-relaxed">
                    Prasanta Das is responsible for project planning, implementation, team coordination, operational management, and strategic execution of the company’s technology and e-Governance initiatives. He contributes to developing scalable digital-service models and strengthening partnerships with government and private-sector stakeholders.
                  </p>
                </div>

                <div className="relative pl-6 border-l-2 border-[#E2E8F0]">
                  <div className="absolute w-3 h-3 bg-[#CBD5E1] rounded-full -left-[7px] top-1.5 ring-4 ring-white" />
                  <h5 className="font-bold text-[#10182C]">State Assistant Manager</h5>
                  <p className="text-xs font-semibold text-[#64748B] mb-2">CSC E-governance Services India Limited | Jan 2022 – May 2025</p>
                  <p className="text-[#4B6179] text-xs leading-relaxed">
                    Worked on state-level implementation and coordination of major Digital India and government projects. Responsibilities included coordinating with District Managers and VLEs for PMGDISHA, serving as State/Project SPOC for PM Vishwakarma, NSP, DoP, and PM-MKSSY. Coordinated Geo-Tagging under PMJVK. Prepared project reports and supported service improvement through operational planning.
                  </p>
                </div>

                <div className="relative pl-6 border-l-2 border-[#E2E8F0]">
                  <div className="absolute w-3 h-3 bg-[#CBD5E1] rounded-full -left-[7px] top-1.5 ring-4 ring-white" />
                  <h5 className="font-bold text-[#10182C]">District Manager</h5>
                  <p className="text-xs font-semibold text-[#64748B] mb-2">CSC E-governance Services India Limited | Jan 2017 – Jan 2022</p>
                  <p className="text-[#4B6179] text-xs leading-relaxed">
                    Managed and coordinated a large network of 1,000+ VLEs and supported the delivery of G2C and B2C digital services. Responsibilities included developing VLEs into sustainable digital-service providers, coordinating with government stakeholders, and supporting financial inclusion and ARTPS services through the CSC network.
                  </p>
                </div>

                <div className="relative pl-6 border-l-2 border-[#E2E8F0]">
                  <div className="absolute w-3 h-3 bg-[#CBD5E1] rounded-full -left-[7px] top-1.5 ring-4 ring-white" />
                  <h5 className="font-bold text-[#10182C]">Associate – Network Management</h5>
                  <p className="text-xs font-semibold text-[#64748B] mb-2">Wipro Infotech Pvt. Ltd. | Nov 2012 – Jan 2017</p>
                  <p className="text-[#4B6179] text-xs leading-relaxed">
                    Worked in network management and IT infrastructure support, including hardware and software maintenance. Provided IT infrastructure support at 1st BN NDRF Camp, Patgaon, Azara, Guwahati, Assam.
                  </p>
                </div>
              </div>
            </div>

            {/* Education & Expertise Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Education */}
              <div>
                <h4 className="text-xl font-bold text-[#10182C] flex items-center gap-2 border-b border-[#EAEEF4] pb-2 mb-4">
                  <GraduationCap className="w-5 h-5 text-[#00AEEF]" />
                  Educational Qualifications
                </h4>
                <div className="bg-[#F8FAFC] rounded-xl p-4 border border-[#EAEEF4]">
                  <h5 className="font-bold text-[#10182C] text-sm">B.E. – Computer Science & Engineering</h5>
                  <p className="text-xs text-[#00AEEF] font-semibold mt-1">2011</p>
                  <p className="text-[#4B6179] text-xs mt-2">
                    Rural Engineering College, Bhalki, affiliated with Visvesvaraya Technological University (VTU)
                  </p>
                </div>
              </div>

              {/* Leadership Profile Note */}
              <div>
                <h4 className="text-xl font-bold text-[#10182C] flex items-center gap-2 border-b border-[#EAEEF4] pb-2 mb-4">
                  <Star className="w-5 h-5 text-[#F58220]" />
                  Leadership Profile
                </h4>
                <div className="bg-[#FFF8F3] rounded-xl p-4 border border-[#FDE6D5]">
                  <p className="text-[#4B6179] text-xs leading-relaxed">
                    With experience spanning IT infrastructure, e-Governance, government projects and large-scale digital service networks, Prasanta Das brings a combination of technical knowledge, field-level understanding and project-management expertise. As Additional Director & Project Manager, he plays an important role in project execution, technology-driven service delivery and organisational growth.
                  </p>
                </div>
              </div>
            </div>

            {/* Areas of Expertise */}
            <div>
              <h4 className="text-sm font-bold text-[#10182C] uppercase tracking-wider mb-3">Areas of Expertise</h4>
              <div className="flex flex-wrap gap-2">
                {[
                  "IT & Network Management",
                  "e-Governance",
                  "Digital India Initiatives",
                  "Project Management",
                  "Government Services",
                  "Financial Inclusion",
                  "VLE Network Management",
                  "Digital Entrepreneurship",
                  "Team Leadership",
                  "Rural Digital Services",
                  "Data & Performance Management"
                ].map((skill, idx) => (
                  <span key={idx} className="bg-white border border-[#E2E8F0] text-[#475569] text-xs px-3 py-1.5 rounded-full hover:border-[#00AEEF] hover:text-[#00AEEF] transition-colors cursor-default">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
