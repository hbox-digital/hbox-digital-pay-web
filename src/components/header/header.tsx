// components/layout/Header.tsx

"use client";

import Link from "next/link";
import Container from "@/components/Container";
import { Search, ShoppingCart } from "lucide-react";
import Image from "next/image";

const navLinks = [
  {
    label: "Products",
    href: "#",
  },
  {
    label: "Solutions",
    href: "#",
  },
  {
    label: "Hardware",
    href: "#",
  },
  {
    label: "Pricing",
    href: "#",
  },
  {
    label: "Resources",
    href: "#",
  },
];

export default function Header() {
  return (
    <header className="w-full border-t border-[#7ED957] bg-white">
      <Container className="flex h-[68px] items-center justify-between">
        <div className="flex items-center gap-14">
          <Link href="/" className="flex items-center">
            <Image
              src="https://cdn.hboxdigital.com/public/hbox-pay/images/HBOX%20Pay%20logo.png"
              alt="HBOX Pay"
              width={138}
              height={40}
              priority
              className="h-[39.63px] w-[138px] object-contain"
            />
          </Link>

          <nav className="hidden items-center gap-8 lg:flex">
            {navLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-[12px] font-normal text-black transition-opacity duration-200 hover:opacity-60"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-6">
          <div className="hidden items-center gap-5 md:flex">
            <Link
              href="#"
              className="text-[12px] font-normal text-black transition-opacity duration-200 hover:opacity-60"
            >
              Sign in
            </Link>

            <Link
              href="#"
              className="text-[12px] font-normal text-black transition-opacity duration-200 hover:opacity-60"
            >
              Support
            </Link>
          </div>

          <button
            aria-label="Search"
            className="flex items-center justify-center text-black transition-opacity duration-200 hover:opacity-60"
          >
            <Search className="h-[16px] w-[16px] stroke-[1.7]" />
          </button>

          <button
            aria-label="Cart"
            className="flex items-center justify-center text-black transition-opacity duration-200 hover:opacity-60"
          >
            <ShoppingCart className="h-[16px] w-[16px] stroke-[1.7]" />
          </button>
        </div>
      </Container>
    </header>
  );
}
