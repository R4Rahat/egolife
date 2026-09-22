import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  CheckCircle2,
  Fingerprint,
  HeartPulse,
  Landmark,
  ShieldCheck,
  Building2,
  MapPin,
  ArrowRight,
  Zap,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa6";

const WHATSAPP_URL = "https://wa.me/916002172653";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.1,
      ease: "easeOut",
    },
  }),
};

export default function Hero() {
  return (
    <section
      className="
        relative
        w-full
        max-w-full
        min-w-0
        overflow-x-clip
        overflow-y-hidden
        bg-grid
        border-b
        border-[#EAEEF4]
      "
    >
      {/* Background glow effects */}
      <div
        className="
          absolute
          top-[-50px]
          left-1/2
          -translate-x-1/2
          w-[240px]
          h-[160px]
          sm:w-[500px]
          sm:h-[300px]
          lg:w-[650px]
          lg:h-[350px]
          bg-[#00AEEF]/6
          rounded-full
          blur-3xl
          pointer-events-none
        "
      />

      <div
        className="
          absolute
          top-1/3
          right-[-80px]
          sm:right-10
          w-[180px]
          h-[160px]
          sm:w-[380px]
          sm:h-[280px]
          bg-[#F58220]/5
          rounded-full
          blur-3xl
          pointer-events-none
        "
      />

      {/* MAIN CONTAINER */}
      <div
        className="
          relative
          w-full
          max-w-[1220px]
          min-w-0
          mx-auto
          box-border
          px-[15px]
          sm:px-6
          lg:px-8
          pt-7
          sm:pt-12
          lg:pt-16
          pb-10
          sm:pb-20
          lg:pb-24
          grid
          grid-cols-1
          lg:grid-cols-2
          gap-8
          sm:gap-12
          lg:gap-16
          xl:gap-20
          items-center
        "
      >

        {/* ================================================= */}
        {/* LEFT COLUMN */}
        {/* ================================================= */}

        <div className="w-full min-w-0 max-w-full">

          {/* Official Badge */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0}
            className="flex flex-wrap items-center gap-2"
          >
            <div
              className="
                inline-flex
                max-w-full
                items-center
                gap-1.5
                rounded-full
                border
                border-[#F58220]/20
                bg-[#F58220]/10
                px-2.5
                py-1
                text-[9px]
                sm:text-xs
                font-semibold
                text-[#D96B0F]
              "
            >
              <MapPin className="w-3 h-3 text-[#00AEEF] shrink-0" />

              <span>Entire NorthEast, India</span>
            </div>
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={1}
            className="
              mt-4
              sm:mt-6
              w-full
              max-w-full
              text-[24px]
              sm:text-[44px]
              md:text-[48px]
              lg:text-[50px]
              xl:text-[52px]
              font-extrabold
              leading-[1.13]
              sm:leading-[1.08]
              tracking-tight
              text-[#10182C]
              break-words
            "
          >
            Empowering Public Governance &amp;{" "}
            <span className="bg-gradient-to-r from-[#00AEEF] via-[#38BDF8] to-[#F58220] bg-clip-text text-transparent">
              Citizen Infrastructure
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={2}
            className="
              mt-3
              sm:mt-5
              w-full
              max-w-2xl
              text-[12px]
              sm:text-[15px]
              lg:text-base
              leading-[1.65]
              sm:leading-7
              lg:leading-relaxed
              text-[#4B6179]
              text-left
              sm:text-justify
            "
          >
            <strong className="text-[#10182C]">
              EGOLIFE EGOVERNANCE PRIVATE LIMITED
            </strong>{" "}
            is an India-based technology institution delivering statewide
            Aadhaar enrolment (Government Authorized), Ayushman Bharat
            healthcare drives, DRA certified banking recovery, and government
            procurement solutions across All India.
          </motion.p>

          {/* CTA BUTTONS */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={3}
            className="
              mt-5
              sm:mt-8
              w-full
              max-w-full
              flex
              flex-col
              sm:flex-row
              gap-2.5
              sm:gap-4
            "
          >

            {/* Explore Services */}
            <Link
              to="/services"
              className="
                inline-flex
                w-full
                sm:w-auto
                max-w-full
                justify-center
                items-center
                gap-2
                rounded-full
                bg-[#00AEEF]
                text-white
                px-5
                sm:px-6
                py-2.5
                sm:py-3
                text-[12px]
                sm:text-sm
                font-semibold
                transition-all
                hover:bg-[#1E3A80]
                shadow-md
                hover:shadow-lg
                hover:-translate-y-0.5
                box-border
              "
            >
              <span>Explore Services</span>

              <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </Link>

            {/* WhatsApp */}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex
                w-full
                sm:w-auto
                max-w-full
                justify-center
                items-center
                gap-2
                rounded-full
                bg-[#EBFBF0]
                px-5
                py-2.5
                sm:py-3
                text-[12px]
                sm:text-sm
                font-medium
                text-[#15803D]
                border
                border-[#86EFAC]/70
                shadow-xs
                transition-all
                hover:bg-[#DCFCE7]
                hover:border-[#4ADE80]
                hover:text-[#0D632E]
                hover:shadow-sm
                box-border
              "
            >
              <span className="relative flex h-1.5 w-1.5 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />

                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
              </span>

              <FaWhatsapp className="w-3.5 h-3.5 text-[#25D366]" />

              <span>Connect on WhatsApp</span>
            </a>
          </motion.div>
        </div>

        {/* ================================================= */}
        {/* RIGHT COLUMN / DASHBOARD */}
        {/* ================================================= */}

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.7,
            ease: "easeOut",
          }}
          className="
            relative
            w-full
            min-w-0
            max-w-full
            flex
            justify-center
          "
        >

          {/* OUTER DASHBOARD BOX */}
          <div
            className="
              relative
              w-[calc(100%-10px)]
              sm:w-full
              max-w-full
              min-w-0
              mx-auto
              box-border
              rounded-xl
              sm:rounded-3xl
              bg-gradient-to-br
              from-[#E0F2FE]
              via-[#BAE6FD]
              to-[#7DD3FC]
              p-2
              sm:p-6
              lg:p-8
              text-[#10182C]
              shadow-2xl
              border
              border-[#7DD3FC]/50
              overflow-hidden
            "
          >

            {/* Ambient lights */}
            <div
              className="
                absolute
                top-0
                right-0
                w-32
                h-32
                sm:w-64
                sm:h-64
                bg-[#00AEEF]/30
                rounded-full
                blur-3xl
                pointer-events-none
              "
            />

            <div
              className="
                absolute
                bottom-0
                left-0
                w-32
                h-32
                sm:w-64
                sm:h-64
                bg-[#F58220]/20
                rounded-full
                blur-3xl
                pointer-events-none
              "
            />

            <div className="relative z-10 w-full min-w-0 max-w-full">

              {/* TERMINAL HEADER */}
              <div
                className="
                  flex
                  flex-col
                  sm:flex-row
                  items-start
                  sm:items-center
                  justify-between
                  pb-2.5
                  sm:pb-4
                  border-b
                  border-[#7DD3FC]/50
                  gap-2
                  sm:gap-0
                  w-full
                  min-w-0
                "
              >

                <div className="flex items-center gap-1.5 min-w-0 max-w-full">

                  <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-red-500 shrink-0" />

                  <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-amber-500 shrink-0" />

                  <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-emerald-500 shrink-0" />

                  <span
                    className="
                      ml-1
                      text-[7px]
                      sm:text-[11px]
                      lg:text-xs
                      font-mono
                      text-[#4B6179]
                      truncate
                      max-w-[120px]
                      sm:max-w-[200px]
                      lg:max-w-none
                    "
                  >
                    egolife-governance-hub // India-network
                  </span>

                </div>

                <span
                  className="
                    text-[6px]
                    sm:text-[10px]
                    uppercase
                    font-bold
                    px-1.5
                    sm:px-2
                    py-0.5
                    sm:py-1
                    rounded
                    bg-emerald-500/20
                    text-emerald-700
                    border
                    border-emerald-500/30
                    flex
                    items-center
                    gap-1
                    shrink-0
                  "
                >
                  <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-emerald-500 animate-ping" />

                  Live Operations
                </span>

              </div>

              {/* CARDS */}
              <div
                className="
                  mt-2.5
                  sm:mt-5
                  space-y-1.5
                  sm:space-y-3.5
                  max-h-[225px]
                  sm:max-h-[280px]
                  overflow-y-auto
                  overflow-x-hidden
                  pr-0.5
                  sm:pr-2
                "
              >

                {/* Aadhaar Card */}
                <div
                  className="
                    w-full
                    min-w-0
                    box-border
                    p-2
                    sm:p-3.5
                    rounded-lg
                    sm:rounded-xl
                    bg-white/60
                    border
                    border-[#7DD3FC]/50
                    flex
                    items-start
                    gap-1.5
                    sm:gap-3
                  "
                >

                  <div
                    className="
                      w-6
                      h-6
                      sm:w-9
                      sm:h-9
                      rounded-md
                      sm:rounded-lg
                      bg-blue-500/20
                      text-blue-400
                      flex
                      items-center
                      justify-center
                      shrink-0
                    "
                  >
                    <Fingerprint className="w-3 h-3 sm:w-5 sm:h-5" />
                  </div>

                  <div className="min-w-0 flex-1 overflow-hidden">

                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-0.5 sm:gap-2">

                      <p className="text-[8px] sm:text-xs font-bold text-[#10182C] leading-3.5 sm:leading-4 break-words">
                        Aadhaar Enrolment Consortium
                      </p>

                      <span className="self-start text-[6px] sm:text-[9px] font-bold text-emerald-600 bg-emerald-500/10 px-1 py-0.5 rounded shrink-0">
                        Govt. Auth.
                      </span>

                    </div>

                    <p className="text-[7px] sm:text-[11px] text-[#4B6179] mt-0.5 leading-3 sm:leading-4 break-words">
                      Baksa, Udalguri, Tamulpur, Barpeta, Goalpara, Nalbari
                    </p>

                  </div>
                </div>

                {/* Aadhaar LWD */}
                <div
                  className="
                    w-full
                    min-w-0
                    box-border
                    p-2
                    sm:p-3.5
                    rounded-lg
                    sm:rounded-xl
                    bg-white/60
                    border
                    border-[#7DD3FC]/50
                    flex
                    items-start
                    gap-1.5
                    sm:gap-3
                  "
                >

                  <div
                    className="
                      w-6
                      h-6
                      sm:w-9
                      sm:h-9
                      rounded-md
                      sm:rounded-lg
                      bg-blue-500/20
                      text-blue-400
                      flex
                      items-center
                      justify-center
                      shrink-0
                    "
                  >
                    <Fingerprint className="w-3 h-3 sm:w-5 sm:h-5" />
                  </div>

                  <div className="min-w-0 flex-1 overflow-hidden">

                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-0.5 sm:gap-2">

                      <p className="text-[8px] sm:text-xs font-bold text-[#10182C] leading-3.5 sm:leading-4 break-words">
                        Aadhaar Enrolment LWD Assam (Under Alankit)
                      </p>

                      <span className="self-start text-[6px] sm:text-[9px] font-bold text-emerald-600 bg-emerald-500/10 px-1 py-0.5 rounded shrink-0">
                        Govt. Auth.
                      </span>

                    </div>

                    <p className="text-[7px] sm:text-[11px] text-[#4B6179] mt-0.5 leading-3 sm:leading-4">
                      Enitre Assam
                    </p>

                  </div>
                </div>

                {/* Ayushman */}
                <div
                  className="
                    w-full
                    min-w-0
                    box-border
                    p-2
                    sm:p-3.5
                    rounded-lg
                    sm:rounded-xl
                    bg-white/60
                    border
                    border-[#7DD3FC]/50
                    flex
                    items-start
                    gap-1.5
                    sm:gap-3
                  "
                >

                  <div
                    className="
                      w-6
                      h-6
                      sm:w-9
                      sm:h-9
                      rounded-md
                      sm:rounded-lg
                      bg-emerald-500/20
                      text-emerald-400
                      flex
                      items-center
                      justify-center
                      shrink-0
                    "
                  >
                    <HeartPulse className="w-3 h-3 sm:w-5 sm:h-5" />
                  </div>

                  <div className="min-w-0 flex-1 overflow-hidden">

                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-0.5 sm:gap-2">

                      <p className="text-[8px] sm:text-xs font-bold text-[#10182C] leading-3.5 sm:leading-4 break-words">
                        AB-PMJAY Ayushman Bharat
                      </p>

                      <span className="self-start text-[6px] sm:text-[9px] font-bold text-blue-600 bg-blue-500/10 px-1 py-0.5 rounded shrink-0">
                        UTIITSL
                      </span>

                    </div>

                    <p className="text-[7px] sm:text-[11px] text-[#4B6179] mt-0.5 leading-3 sm:leading-4 break-words">
                      Goalpara, Bongaigaon, Dhubri, Karimganj, Hailakandi, Cachar
                    </p>

                  </div>
                </div>

                {/* Banking */}
                <div
                  className="
                    w-full
                    min-w-0
                    box-border
                    p-2
                    sm:p-3.5
                    rounded-lg
                    sm:rounded-xl
                    bg-white/60
                    border
                    border-[#7DD3FC]/50
                    flex
                    items-start
                    gap-1.5
                    sm:gap-3
                  "
                >

                  <div
                    className="
                      w-6
                      h-6
                      sm:w-9
                      sm:h-9
                      rounded-md
                      sm:rounded-lg
                      bg-amber-500/20
                      text-amber-400
                      flex
                      items-center
                      justify-center
                      shrink-0
                    "
                  >
                    <Landmark className="w-3 h-3 sm:w-5 sm:h-5" />
                  </div>

                  <div className="min-w-0 flex-1 overflow-hidden">

                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-0.5 sm:gap-2">

                      <p className="text-[8px] sm:text-xs font-bold text-[#10182C] leading-3.5 sm:leading-4">
                        Debt Recovery Agency
                      </p>

                      <span className="self-start text-[6px] sm:text-[9px] font-bold text-amber-600 bg-amber-500/10 px-1 py-0.5 rounded shrink-0">
                        ICICI BANK
                      </span>

                    </div>

                    <p className="text-[7px] sm:text-[11px] text-[#4B6179] mt-0.5 leading-3 sm:leading-4">
                      Madhya Pradesh • PL, CC, Business Loans
                    </p>

                  </div>
                </div>

              </div>

              {/* METRICS */}
              <div
                className="
                  mt-2.5
                  sm:mt-5
                  pt-2.5
                  sm:pt-4
                  border-t
                  border-[#7DD3FC]/50
                  grid
                  grid-cols-3
                  gap-1
                  sm:gap-3
                  text-center
                "
              >

                <div className="p-1 sm:p-2 rounded-md sm:rounded-lg bg-white/60 min-w-0 overflow-hidden">

                  <p className="text-[9px] sm:text-lg font-black text-[#00AEEF] truncate">
                    11+ Yrs
                  </p>

                  <p className="text-[6px] sm:text-[10px] text-[#4B6179] truncate">
                    IT Industry
                  </p>

                </div>

                <div className="p-1 sm:p-2 rounded-md sm:rounded-lg bg-white/60 min-w-0 overflow-hidden">

                  <p className="text-[9px] sm:text-lg font-black text-[#10182C] truncate">
                    200+
                  </p>

                  <p className="text-[6px] sm:text-[10px] text-[#4B6179] truncate">
                    Services Offered
                  </p>

                </div>

                <div className="p-1 sm:p-2 rounded-md sm:rounded-lg bg-white/60 min-w-0 overflow-hidden">

                  <p className="text-[8px] sm:text-lg font-black text-emerald-500 truncate">
                    SERVICES
                  </p>

                  <p className="text-[6px] sm:text-[10px] text-[#4B6179] truncate">
                    Across PAN India
                  </p>

                </div>

              </div>

            </div>
          </div>

          {/* Floating badges - desktop only */}
          <div className="absolute -bottom-4 left-6 hidden md:flex items-center gap-2.5 rounded-xl border border-[#EAEEF4] bg-white px-4 py-2.5 shadow-lg">

            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />

            <span className="text-xs font-bold text-[#10182C]">
              www.growfast.in
            </span>

          </div>

          <div className="absolute -top-4 right-6 hidden md:flex items-center gap-2 rounded-xl border border-[#EAEEF4] bg-white px-4 py-2.5 shadow-lg">

            <Zap className="w-4 h-4 text-[#00AEEF]" />

            <span className="text-xs font-bold text-[#10182C]">
              www.egolife.net
            </span>

          </div>

        </motion.div>
      </div>
    </section>
  );
}