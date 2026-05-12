// components/layout/Footer.tsx

"use client";

import { useState } from "react";
import Container from "@/components/Container";
import Image from "next/image";
import Link from "next/link";
import {
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react";

export default function Footer() {
  const [showMoreHardware, setShowMoreHardware] = useState(false);

  return (
    <footer className="overflow-hidden border-t border-black/10 bg-[#Fff]">
      {/* TOP FOOTER */}
      <div className="py-12 md:py-16">
        <Container>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
            {/* BRAND */}
            <div>
              <Link href="/">
                <Image
                  src="https://cdn.hboxdigital.com/public/hbox-pay/images/HBOX%20Pay%20logo.png"
                  alt="HBOX Pay"
                  width={138}
                  height={40}
                  className="h-auto w-[138px]"
                />
              </Link>

              <p className="mt-6 max-w-[320px] text-[15px] leading-[1.45] tracking-[-0.03em] text-black/75">
                Accept payments, manage sales, track performance, and simplify
                business operations with one connected POS and payment platform
                built for modern businesses.
              </p>

              {/* SOCIALS */}
              <div className="mt-7 flex items-center gap-4">
                <Link
                  href="/"
                  className="transition-all duration-300 hover:scale-110"
                >
                  <Facebook className="h-[28px] w-[28px] fill-[#2F7D22] text-[#2F7D22]" />
                </Link>

                <Link
                  href="/"
                  className="transition-all duration-300 hover:scale-110"
                >
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-[#2F7D22]"
                  >
                    <path
                      d="M18 3H21L14 10.91L22 21H15L9.5 14L3.5 21H0.5L8 12.5L0 3H7L12 9.3L18 3ZM16.5 19H18.5L6.5 5H4.3L16.5 19Z"
                      fill="currentColor"
                    />
                  </svg>
                </Link>

                <Link
                  href="/"
                  className="transition-all duration-300 hover:scale-110"
                >
                  <Instagram className="h-[28px] w-[28px] text-[#2F7D22]" />
                </Link>

                <Link
                  href="/"
                  className="transition-all duration-300 hover:scale-110"
                >
                  <Linkedin className="h-[28px] w-[28px] fill-[#2F7D22] text-[#2F7D22]" />
                </Link>
              </div>
            </div>

            {/* HARDWARE */}
            <div>
              <h3 className="text-[32px] font-medium  leading-[100%] tracking-[-0.04em] text-black">
                Hardware Devices
              </h3>

              {/* ALWAYS VISIBLE */}
              <div className="mt-6 flex flex-col gap-4">
                {[
                  "PAX A920",
                  "PAX E700",
                  "PAX E800",
                  "Kiosk",
                  "Kitchen Display System",
                  "Accessories",
                ].map((item, index) => (
                  <Link
                    key={index}
                    href="/"
                    className="text-[15px] leading-[100%] tracking-[-0.03em] text-black/80 transition-all duration-300 hover:text-[#39A935]"
                  >
                    {item}
                  </Link>
                ))}
              </div>

              {/* READ MORE BUTTON */}
              <button
                onClick={() =>
                  setShowMoreHardware(!showMoreHardware)
                }
                className="
                  mt-5
                  flex
                  items-center
                  gap-2
                  text-[15px]
                  font-medium
                  text-[#39A935]
                  transition-all
                  duration-300
                  hover:opacity-80
                "
              >
                {showMoreHardware ? "Show Less" : "Read More"}

                <span
                  className={`transition-transform duration-300 ${
                    showMoreHardware ? "rotate-180" : ""
                  }`}
                >
                  ↓
                </span>
              </button>

              {/* HIDDEN ITEMS */}
              <div
                className={`
                  overflow-hidden
                  transition-all
                  duration-500
                  ease-in-out
                  ${
                    showMoreHardware
                      ? "max-h-[500px] opacity-100 mt-5"
                      : "max-h-0 opacity-0"
                  }
                `}
              >
                <div className="flex flex-col gap-4">
                  {[
                    "Go",
                    "Compact",
                    "Flex Pocket",
                    "Flex",
                    "Mini",
                    "Station Solo",
                    "Station Duo",
                  ].map((item, index) => (
                    <Link
                      key={index}
                      href="/"
                      className="text-[15px] leading-[100%] tracking-[-0.03em] text-black/80 transition-all duration-300 hover:text-[#39A935]"
                    >
                      {item}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* HELP */}
            <div>
              <h3 className="text-[32px] font-semibold leading-[100%] tracking-[-0.04em] text-black">
                Help
              </h3>

              <div className="mt-6 flex flex-col gap-4">
                {[
                  "Help Center",
                  "FAQ",
                  "Contact us",
                  "HBOX Care",
                  "Contact sales",
                  "Small Business Resources",
                ].map((item, index) => (
                  <Link
                    key={index}
                    href="/"
                    className="text-[15px] leading-[100%] tracking-[-0.03em] text-black/80 transition-all duration-300 hover:text-[#39A935]"
                  >
                    {item}
                  </Link>
                ))}
              </div>
            </div>

            {/* ABOUT */}
            <div>
              <h3 className="text-[32px] font-semibold leading-[100%] tracking-[-0.04em] text-black">
                About
              </h3>

              <div className="mt-6 flex flex-col gap-4">
                {[
                  "Blog",
                  "Case studies",
                  "Careers",
                  "Intellectual Property",
                  "Referrals",
                ].map((item, index) => (
                  <Link
                    key={index}
                    href="/"
                    className="text-[15px] leading-[100%] tracking-[-0.03em] text-black/80 transition-all duration-300 hover:text-[#39A935]"
                  >
                    {item}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* DISCLAIMER */}
      <div className="border-t border-black/10 py-8">
        <Container>
          <div className="max-w-[1280px]">
            <p className="text-[15px] font-semibold leading-[1.4] tracking-[-0.03em] text-black">
              Disclaimer:
            </p>

            <p className="mt-1 text-[14px] leading-[1.45] tracking-[-0.03em] text-black/75">
              The logo, name, and graphics of HBOX PAY and its products &
              services are the trademarks of HBOX PAY company. All other
              company names, brand names, trademarks, and logos mentioned on
              this website are the property of their respective owners and do
              not constitute or imply endorsement, sponsorship or recommendation
              thereof by HBOX PAY and do not constitute or imply endorsement,
              sponsorship or recommendation of Branded Web-Studios by the
              respective trademark owner.
            </p>
          </div>
        </Container>
      </div>

      {/* BOTTOM FOOTER */}
      <div className="border-t border-black/10 py-6">
        <Container>
          <div className="flex flex-col items-center justify-between gap-5 md:flex-row">
            <p className="text-[14px] leading-[100%] tracking-[-0.03em] text-black/75">
              © 2026 HBOX Pay, LLC
            </p>

            <div className="flex flex-wrap items-center justify-center gap-6">
              {[
                "Terms & Conditions",
                "Privacy Policy",
                "Accessibility",
              ].map((item, index) => (
                <Link
                  key={index}
                  href="/"
                  className="text-[14px] leading-[100%] tracking-[-0.03em] text-black/75 transition-all duration-300 hover:text-[#39A935]"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
}