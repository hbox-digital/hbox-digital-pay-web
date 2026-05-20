// components/layout/Footer.tsx

"use client";

import Container from "@/components/Container";
import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Linkedin } from "lucide-react";

const hardwareLinks = [
  {
    label: "PAX A920",
    href: "#",
  },
  {
    label: "PAX E700",
    href: "#",
  },
  {
    label: "PAX E800",
    href: "#",
  },
  {
    label: "Kiosk",
    href: "/products/self-order-kiosk",
  },
  {
    label: "Kitchen Display System",
    href: "/products/kitchen-display-system",
  },
  {
    label: "Accessories",
    href: "/accessories",
  },
];

const helpLinks = [
  {
    label: "Help Center",
    href: "/support",
  },
  {
    label: "FAQ",
    href: "/faqs",
  },
  {
    label: "Contact us",
    href: "/contact",
  },
  {
    label: "Contact sales",
    href: "/contact-sales",
  },
  {
    label: "Small Business Resources",
    href: "/small-business-resources",
  },
];

const aboutLinks = [
  {
    label: "Blog",
    href: "/blog",
  },
];

export default function Footer() {
  return (
    <footer className="overflow-hidden border-t border-black/10 bg-white text-black">
      {/* TOP FOOTER */}
      <div className="border-b border-black/10">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.35fr_0.8fr_0.8fr_0.8fr]">
            {/* BRAND */}
            <div className="px-0 py-8 lg:border-r lg:border-black/10 lg:pr-10">
              <Link href="/" className="inline-flex">
                <Image
                  src="https://cdn.hboxdigital.com/public/hbox-pay/images/HBOX%20Pay%20logo.png"
                  alt="HBOX Pay"
                  width={120}
                  height={35}
                  className="h-auto w-[120px] object-contain"
                />
              </Link>

              <p className="mt-4 max-w-[460px] text-[16px] leading-[1.55] tracking-[-0.02em] text-black">
                Accept payments, manage sales, track performance, and simplify
                business operations with one connected POS and payment platform
                built for modern businesses.
              </p>

              <div className="mt-7">
                <h4 className="text-[20px] font-semibold leading-none text-black">
                  Contact Us
                </h4>

                <Link
                  href="tel:+16052991570"
                  className="mt-3 inline-block text-[16px] leading-none text-black transition-colors duration-300 hover:text-[#2F7D22]"
                >
                +1-605-307-6026
                </Link>
              </div>

              <div className="mt-7">
                <div className="flex items-center gap-2">
                  <Image
                    src="https://cdn.hboxdigital.com/public/hbox-pay/images/service/Ellipse%206386.png"
                    alt="United States"
                    width={30}
                    height={30}
                    className="h-[30px] w-[30px] object-contain"
                  />

                  <h4 className="text-[20px] font-semibold leading-none text-black">
                    United States
                  </h4>
                </div>

                <p className="mt-3  text-[16px] leading-[1.45] tracking-[-0.02em] text-black">
                  11 Apex Dr Suite 300-A, Marlborough,
                  <br />
                  MA 01752, United States
                </p>
              </div>

              {/* SOCIALS */}
              <div className="mt-7 flex items-center gap-5">
                <Link
                  href="/"
                  aria-label="Facebook"
                  className="text-[#2F7D22] transition-all duration-300 hover:scale-110 hover:text-[#1F6217]"
                >
                  <Facebook className="h-[17px] w-[17px] fill-current stroke-[2]" />
                </Link>

                <Link
                  href="/"
                  aria-label="X"
                  className="text-[#2F7D22] transition-all duration-300 hover:scale-110 hover:text-[#1F6217]"
                >
                  <svg
                    width="17"
                    height="17"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18 3H21L14 10.91L22 21H15L9.5 14L3.5 21H0.5L8 12.5L0 3H7L12 9.3L18 3ZM16.5 19H18.5L6.5 5H4.3L16.5 19Z"
                      fill="currentColor"
                    />
                  </svg>
                </Link>

                <Link
                  href="/"
                  aria-label="Instagram"
                  className="text-[#2F7D22] transition-all duration-300 hover:scale-110 hover:text-[#1F6217]"
                >
                  <Instagram className="h-[17px] w-[17px] stroke-[2]" />
                </Link>

                <Link
                  href="/"
                  aria-label="LinkedIn"
                  className="text-[#2F7D22] transition-all duration-300 hover:scale-110 hover:text-[#1F6217]"
                >
                  <Linkedin className="h-[17px] w-[17px] fill-current stroke-[2]" />
                </Link>
              </div>
            </div>

            {/* HARDWARE */}
            <div className="border-t border-black/10 px-0 py-8 md:border-t-0 md:px-8 lg:border-r lg:border-black/10 lg:px-10">
              <h3 className="text-[20px] font-medium leading-none tracking-[-0.03em] text-black">
                Hardware Devices
              </h3>

              <div className="mt-6 flex flex-col gap-5">
                {hardwareLinks.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="text-[16px] leading-none tracking-[-0.02em] text-black transition-colors duration-300 hover:text-[#2F7D22]"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* HELP */}
            <div className="border-t border-black/10 px-0 py-8 md:border-t-0 md:px-8 lg:border-r lg:border-black/10 lg:px-10">
              <h3 className="text-[20px] font-medium leading-none tracking-[-0.03em] text-black">
                Help
              </h3>

              <div className="mt-6 flex flex-col gap-5">
                {helpLinks.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="text-[16px] leading-none tracking-[-0.02em] text-black transition-colors duration-300 hover:text-[#2F7D22]"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* ABOUT */}
            <div className="border-t border-black/10 px-0 py-8 md:border-t-0 md:px-8 lg:px-10">
              <h3 className="text-[20px] font-medium leading-none tracking-[-0.03em] text-black">
                About
              </h3>

              <div className="mt-6 flex flex-col gap-5">
                {aboutLinks.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="text-[16px] leading-none tracking-[-0.02em] text-black transition-colors duration-300 hover:text-[#2F7D22]"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* DISCLAIMER */}
      <div className="border-b border-black/10 py-4">
        <Container>
          <div className="">
            <p className="text-[16px] leading-[1.4] tracking-[-0.02em] text-black">
              <span className="font-medium">Disclaimer:</span>
              <br />
              The logo, name, and graphics of HBOX PAY and its products and services are the trademarks of HBOX LLC. All other company names, brand names, trademarks, and logos mentioned on this website are the property of their respective owners and do not constitute or imply any endorsement, sponsorship, or recommendation by HBOX LLC. Likewise, the mention of any third-party trademarks or brand names does not constitute or imply endorsement, sponsorship, or recommendation of HBOX LLC by the respective trademark owners.
            </p>
          </div>
        </Container>
      </div>

      {/* BOTTOM FOOTER */}
      <div className="py-5">
        <Container>
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-[15px] leading-none tracking-[-0.02em] text-black">
              © 2026 HBOX LLC
            </p>

            <div className="flex flex-wrap items-center justify-center gap-6">
              <Link
                href="/terms-conditions"
                className="text-[15px] leading-none tracking-[-0.02em] text-black transition-colors duration-300 hover:text-[#2F7D22]"
              >
                Terms & Conditions
              </Link>

              <Link
                href="/privacy-policy"
                className="text-[15px] leading-none tracking-[-0.02em] text-black transition-colors duration-300 hover:text-[#2F7D22]"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
}
