import { MapPin, Phone, Mail } from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";

const quickLinks = [
  "About",
  "Services",
  "Government",
  "Industries",
  "Case Studies",
  "Careers",
  "Contact",
  "Sitemap",
  "Support",
];

const registrations = [
  "Established 2011",
  "UPLC Registered (2012)",
  "UPDESCO Empanelled (2016)",
  "MSME Registered (2018)",
  "RCUES Empanelled (2024)",
];

export default function Footer() {
  return (
    <footer className="bg-[#E0F2FE] text-[#10182C]">
      {/* ========================================= */}
      {/* MAIN FOOTER                               */}
      {/* ========================================= */}

      <div className="mx-auto max-w-[1180px] px-6 py-12 sm:px-8 lg:py-14">
        <div
          className="
            grid
            grid-cols-1
            gap-10
            sm:grid-cols-2
            lg:grid-cols-[2.1fr_1fr_1.35fr_1.25fr]
            lg:gap-12
          ">
          {/* ========================================= */}
          {/* COMPANY                                   */}
          {/* ========================================= */}

          <div>
            {/* Logo */}
            <a href="/" className="inline-flex items-center">
              <img
                src="/images/logo/egolife-logo.png"
                alt="eGoLife Governance Private Limited"
                className="h-auto w-[145px] object-contain"
              />
            </a>

            {/* Description */}
            <p
              className="
                mt-5
                max-w-[300px]
                text-[10px]
                leading-[1.65]
                text-[#8997AA]
              ">
              Trusted technology partner delivering enterprise software,
              eGovernance platforms, GIS, mobile and cloud solutions for
              Government and businesses across India.
            </p>

            {/* Social Icons */}
            <div className="mt-5 flex items-center gap-2">
              {/* Facebook */}
              <a
                href="#"
                aria-label="Facebook"
                className="
                  flex
                  h-7
                  w-7
                  items-center
                  justify-center
                  rounded-full
                  bg-[#172238]
                  text-[#8190A5]
                  transition-all
                  duration-200
                  hover:bg-[#00AEEF]
                  hover:text-white
                ">
                <FaFacebookF size={11} />
              </a>

              {/* Instagram */}
              <a
                href="#"
                aria-label="Instagram"
                className="
                  flex
                  h-7
                  w-7
                  items-center
                  justify-center
                  rounded-full
                  bg-[#172238]
                  text-[#8190A5]
                  transition-all
                  duration-200
                  hover:bg-[#00AEEF]
                  hover:text-white
                ">
                <FaInstagram size={12} />
              </a>

              {/* LinkedIn */}
              <a
                href="#"
                aria-label="LinkedIn"
                className="
                  flex
                  h-7
                  w-7
                  items-center
                  justify-center
                  rounded-full
                  bg-[#172238]
                  text-[#8190A5]
                  transition-all
                  duration-200
                  hover:bg-[#00AEEF]
                  hover:text-white
                ">
                <FaLinkedinIn size={11} />
              </a>

              {/* X / Twitter */}
              <a
                href="#"
                aria-label="X"
                className="
                  flex
                  h-7
                  w-7
                  items-center
                  justify-center
                  rounded-full
                  bg-[#172238]
                  text-[#8190A5]
                  transition-all
                  duration-200
                  hover:bg-[#00AEEF]
                  hover:text-white
                ">
                <FaXTwitter size={11} />
              </a>
            </div>
          </div>

          {/* ========================================= */}
          {/* QUICK LINKS                               */}
          {/* ========================================= */}

          <div>
            <h3
              className="
                mb-4
                text-[9px]
                font-bold
                uppercase
                tracking-[0.5px]
                text-[#10182C]
              ">
              Quick Links
            </h3>

            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="
                      text-[9px]
                      text-[#8B98AA]
                      transition-colors
                      duration-200
                      hover:text-white
                    ">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ========================================= */}
          {/* REGISTRATIONS                             */}
          {/* ========================================= */}

          <div>
            <h3
              className="
                mb-4
                text-[9px]
                font-bold
                uppercase
                tracking-[0.5px]
                text-[#10182C]
              ">
              Registrations
            </h3>

            <ul className="space-y-2">
              {registrations.map((registration) => (
                <li key={registration}>
                  <span
                    className="
                      text-[9px]
                      leading-4
                      text-[#8B98AA]
                    ">
                    {registration}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* ========================================= */}
          {/* CONTACT                                   */}
          {/* ========================================= */}

          <div>
            <h3
              className="
                mb-4
                text-[9px]
                font-bold
                uppercase
                tracking-[0.5px]
                text-[#10182C]
              ">
              Contact
            </h3>

            {/* Address */}
            <div className="flex gap-2">
              <MapPin
                size={12}
                strokeWidth={1.7}
                className="mt-[2px] shrink-0 text-[#00AEEF]"
              />

              <p
                className="
                  text-[9px]
                  leading-[1.55]
                  text-[#8B98AA]
                ">
                1/09, Vikrant Khand, Gomti Nagar
                <br />
                Lucknow – 226010
                <br />
                Uttar Pradesh, India
              </p>
            </div>

            {/* Phone */}
            <div className="mt-3 flex gap-2">
              <Phone
                size={12}
                strokeWidth={1.7}
                className="mt-[1px] shrink-0 text-[#00AEEF]"
              />

              <div className="text-[9px] leading-[1.55]">
                <a
                  href="tel:+919044095988"
                  className="
                    block
                    text-[#8B98AA]
                    transition-colors
                    hover:text-white
                  ">
                  Sales: 9044095988 / 77
                </a>

                <a
                  href="tel:+919040959922"
                  className="
                    block
                    text-[#8B98AA]
                    transition-colors
                    hover:text-white
                  ">
                  Support: 9040959922
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="mt-3 flex gap-2">
              <Mail
                size={12}
                strokeWidth={1.7}
                className="mt-[1px] shrink-0 text-[#00AEEF]"
              />

              <a
                href="mailto:info@egolife.in"
                className="
                  text-[9px]
                  text-[#8B98AA]
                  transition-colors
                  hover:text-white
                ">
                info@egolife.in
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================= */}
      {/* BOTTOM BAR                                */}
      {/* ========================================= */}

      <div className="border-t border-[#202C40]">
        <div
          className="
            mx-auto
            flex
            max-w-[1180px]
            flex-col
            items-center
            justify-between
            gap-3
            px-6
            py-4
            sm:px-8
            md:flex-row
          ">
          {/* Copyright */}
          <p className="text-[8px] text-[#63738A]">
            © {new Date().getFullYear()} eGoLife Governance Private Limited. All
            rights reserved.
          </p>

          {/* Legal Links */}
          <div className="flex items-center gap-5">
            <a
              href="#"
              className="
                text-[8px]
                text-[#63738A]
                transition-colors
                hover:text-white
              ">
              Privacy Policy
            </a>

            <a
              href="#"
              className="
                text-[8px]
                text-[#63738A]
                transition-colors
                hover:text-white
              ">
              Terms
            </a>

            <a
              href="#"
              className="
                text-[8px]
                text-[#63738A]
                transition-colors
                hover:text-white
              ">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
