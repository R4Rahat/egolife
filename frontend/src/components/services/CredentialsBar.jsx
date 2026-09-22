import React from "react";
import {
  Award,
  ShieldCheck,
  Building2,
  Layers3,
} from "lucide-react";

const services = [
  {
    icon: Award,
    title: "Government Authorized Agency",
    description: "Aadhaar Enrolment Consortium",
    iconBg: "bg-[#E0F5FC]",
    iconColor: "text-[#00AEEF]",
  },
  {
    icon: ShieldCheck,
    title: "AB-PMJAY & PAN",
    description: "UTIITSL Authorized Partner",
    iconBg: "bg-[#E7F7ED]",
    iconColor: "text-[#16A05D]",
  },
  {
    icon: Building2,
    title: "DRA Certified",
    description: "Banking Loan & CC Recovery",
    iconBg: "bg-[#FFF1E5]",
    iconColor: "text-[#FF7A00]",
  },
  {
    icon: Layers3,
    title: "200+ Services",
    description: "Pan India & West Bengal",
    iconBg: "bg-[#E0F5FC]",
    iconColor: "text-[#00AEEF]",
  },
];

export default function SupplyEnterpriseServices() {
  return (
    <section
      className="
        relative
        w-full
        max-w-full
        overflow-hidden
        bg-white
        px-2
        py-14
        sm:px-6
        sm:py-16
        lg:px-8
        lg:py-20
      "
    >
      {/* Background Grid */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-40
        "
        style={{
          backgroundImage: `
            linear-gradient(#E7EEF5 1px, transparent 1px),
            linear-gradient(90deg, #E7EEF5 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
        }}
      />

      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-[1220px]
          min-w-0
        "
      >
        {/* =========================
            HEADING
        ========================== */}

        <div className="w-full max-w-[900px] px-2 sm:px-0">
          <h2
            className="
              text-[30px]
              leading-[1.05]
              font-extrabold
              tracking-[-0.03em]
              text-[#10182C]
              sm:text-[38px]
              lg:text-[48px]
            "
          >
            Supply &{" "}
            <span className="text-[#00AEEF]">
              Enterprise IT
            </span>
            <br />

            <span
              className="
                bg-gradient-to-r
                from-[#8CA7BC]
                via-[#D28D6E]
                to-[#8CA7BC]
                bg-clip-text
                text-transparent
              "
            >
              Services
            </span>
          </h2>

          <p
            className="
              mt-7
              max-w-[850px]
              text-[16px]
              leading-[1.75]
              text-[#355273]
              sm:text-[18px]
              sm:leading-[1.7]
              lg:text-[19px]
            "
          >
            From state-wide{" "}
            <strong className="font-bold text-[#355273]">
              Aadhaar enrollment ecosystems
            </strong>{" "}
            and{" "}
            <strong className="font-bold text-[#355273]">
              Ayushman Bharat (AB-PMJAY)
            </strong>{" "}
            healthcare rollouts to{" "}
            <strong className="font-bold text-[#355273]">
              DRA certified banking debt recovery
            </strong>
            , government school uniform manufacturing, and IT
            infrastructure deployment across India and Eastern India.
          </p>
        </div>

        {/* Divider */}
        <div className="mt-10 h-px w-full bg-[#E6EDF3] sm:mt-12" />

        {/* =========================
    SERVICE CARDS
========================= */}

        <div
          className="
    mt-8
    grid
    w-full
    min-w-0
    grid-cols-2
    gap-2
    sm:mt-10
    sm:gap-5
    lg:grid-cols-4
    lg:gap-6
  "
        >
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                className="
          group
          relative

          !grid
          !grid-cols-1
          !items-center
          !justify-items-center

          w-full
          min-w-0
          max-w-full

          overflow-hidden

          rounded-2xl
          border
          border-[#DCE6EF]
          bg-white

          px-2
          py-6

          text-center

          shadow-[0_2px_8px_rgba(16,24,44,0.05)]

          transition-all
          duration-300

          hover:-translate-y-1
          hover:shadow-[0_10px_30px_rgba(16,24,44,0.10)]

          sm:px-4
          sm:py-6

          lg:px-5
          lg:py-7
        "
              >
                {/* =========================
            ICON
        ========================== */}

                <div
                  className={`
            flex
            h-11
            w-11
            shrink-0
            items-center
            justify-center
            rounded-xl

            ${service.iconBg}
          `}
                >
                  <Icon
                    className={`
              h-5
              w-5

              ${service.iconColor}
            `}
                    strokeWidth={2}
                  />
                </div>

                {/* =========================
            TEXT
        ========================== */}

                <div
                  className="
            mt-3

            w-full
            min-w-0
            max-w-full

            text-center
          "
                >
                  <h3
                    className="
              m-0

              w-full
              min-w-0
              max-w-full

              px-1

              text-[15px]
              font-extrabold
              leading-[1.2]

              text-[#10182C]

              break-words
              whitespace-normal
              overflow-wrap-anywhere

              sm:text-[17px]

              lg:text-[18px]
            "
                  >
                    {service.title}
                  </h3>

                  <p
                    className="
              m-0
              mt-2

              w-full
              min-w-0
              max-w-full

              px-1

              text-[10px]
              leading-[1.35]

              text-[#4B6179]

              break-words
              whitespace-normal
              overflow-wrap-anywhere

              sm:text-[11px]

              lg:text-[12px]
            "
                  >
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}