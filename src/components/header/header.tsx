// components/layout/Header.tsx

"use client";

import Link from "next/link";
import {
  Menu,
  X,
  ChevronRight,
  ChevronDown,
  Phone,
} from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import Container from "../Container";

const navLinks = [
  {
    label: "Products",
    href: "/products",
  },
  {
    label: "Solutions",
    href: "/solutions",
  },
  {
    label: "Pricing",
    href: "/contact",
  },
  {
    label: "Services",
    href: "/services",
    dropdown: [
      {
        title: "POS Software",
        href: "/pos-software",
      },
      {
        title: "Ecommerce Integration",
        href: "/ecommerce-integration",
      },
      {
        title: "Customer Management CRM",
        href: "/customer-management-crm",
      },
      {
        title: "Employee Management",
        href: "/employee-management",
      },
      {
        title: "Inventory Management",
        href: "/inventory-management",
      },
      {
        title: "Payment Processing",
        href: "/payment-processing",
      },
      {
        title: "Invoicing & Accounting",
        href: "/invoicing-accounting",
      },
      {
        title: "Loyalty Programs",
        href: "/loyalty-programs",
      },
      {
        title: "Multi Store Management",
        href: "/multi-store-management",
      },
      {
        title: "Analytics & Reporting",
        href: "/analytics-reporting",
      },
      {
        title: "Hardware Solutions",
        href: "/hardware-solutions",
      },
      {
        title: "Business Financing",
        href: "/business-financing",
      },
    ],
  },
];

export default function Header() {
  const pathname = usePathname();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(
    null
  );
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
      setOpenMobileDropdown(null);
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 z-50 w-full border-b border-[#7ED957] bg-white transition-all duration-300 ${
          scrolled ? "bg-white/95 shadow-md backdrop-blur-sm" : ""
        }`}
      >
        <Container className="flex h-[68px] items-center justify-between">
          {/* LEFT */}
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

            {/* DESKTOP NAV */}
            <nav className="hidden items-center gap-8 lg:flex">
              {navLinks.map((item) => {
                const isActive =
                  pathname === item.href ||
                  item.dropdown?.some((subItem) => pathname === subItem.href);

                return (
                  <div key={item.label} className="group/nav relative">
                    <Link
                      href={item.href}
                      className={`relative flex items-center gap-1 text-[16.28px] font-normal transition-colors duration-300 ${
                        isActive
                          ? "text-[#45890F]"
                          : "text-black hover:text-[#45890F]"
                      }`}
                    >
                      {item.label}

                      {item.dropdown && (
                        <ChevronDown className="h-4 w-4 transition-transform duration-300 group-hover/nav:rotate-180" />
                      )}

                      <span
                        className={`absolute bottom-[-4px] left-0 h-[2px] bg-[#45890F] transition-all duration-300 ${
                          isActive ? "w-full" : "w-0 group-hover/nav:w-full"
                        }`}
                      />
                    </Link>

                    {/* SERVICES DROPDOWN */}
                    {item.dropdown && (
                      <div className="pointer-events-none fixed left-0 top-[68px] z-50 w-full translate-y-1 opacity-0 transition-all duration-300 group-hover/nav:pointer-events-auto group-hover/nav:translate-y-0 group-hover/nav:opacity-100">
                        {/* Invisible hover bridge */}
                        <div className="absolute -top-8 left-0 h-8 w-full" />

                        <div className="w-full border-b border-black/5 bg-white shadow-[0_14px_35px_rgba(0,0,0,0.04)]">
                          <Container>
                            <div className="grid min-h-[150px] grid-cols-[190px_1fr]">
                              {/* LEFT TITLE */}
                              <div className="flex items-start gap-12 border-r border-black/10 py-8 pr-8">
                                <h3 className="text-[20px] font-semibold leading-none text-black">
                                  Services
                                </h3>

                                <ChevronRight className="mt-[3px] h-4 w-4 text-[#45890F]" />
                              </div>

                              {/* RIGHT LINKS */}
                              <motion.div
                                initial={{ opacity: 0, y: 8 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.22 }}
                                className="grid grid-cols-4 gap-x-14 gap-y-7 py-8 pl-8"
                              >
                                {item.dropdown.map((subItem) => {
                                  const isSubActive =
                                    pathname === subItem.href;

                                  return (
                                    <Link
                                      key={subItem.title}
                                      href={subItem.href}
                                      className={`text-[14px] font-normal leading-none tracking-[-0.02em] transition-colors duration-300 ${
                                        isSubActive
                                          ? "font-medium text-[#2F8429]"
                                          : "text-black/80 hover:text-[#2F8429]"
                                      }`}
                                    >
                                      {subItem.title}
                                    </Link>
                                  );
                                })}
                              </motion.div>
                            </div>
                          </Container>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </nav>
          </div>

          {/* RIGHT */}
          <div className="flex items-center gap-6">
            <div className="hidden items-center gap-5 md:flex">
              <Link
                href="/contact"
                className={`relative text-[16.32px] font-normal transition-colors duration-300 ${
                  pathname === "/contact"
                    ? "text-[#45890F]"
                    : "text-black hover:text-[#45890F]"
                }`}
              >
                Contact Us
              </Link>
            </div>

            <div className="hidden items-center gap-5 md:flex">
              <Link
                href="/support"
                className={`relative text-[16.32px] font-normal transition-colors duration-300 ${
                  pathname === "/support"
                    ? "text-[#45890F]"
                    : "text-black hover:text-[#45890F]"
                }`}
              >
                Support
              </Link>
            </div>

            <Link
              href="tel:+16053076026"
              aria-label="Call HBOX Pay"
              className="group hidden items-center gap-2 rounded-full px-2 py-2 transition duration-300 xl:flex"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-full">
                <Phone className="h-4 w-4 text-[#171717] transition-colors duration-300 group-hover:text-[#A9EF7D]" />
              </span>
            </Link>

            {/* MOBILE MENU BUTTON */}
            <button
              type="button"
              aria-label="Menu"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="relative z-50 flex items-center justify-center text-black transition-colors duration-300 hover:text-[#45890F] lg:hidden"
            >
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="h-[20px] w-[20px]" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="h-[20px] w-[20px]" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </Container>
      </header>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* BACKDROP */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm lg:hidden"
            />

            {/* PANEL */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{
                type: "spring",
                damping: 25,
                stiffness: 200,
              }}
              className="fixed bottom-0 left-0 top-0 z-40 w-[85%] max-w-[340px] bg-white shadow-2xl lg:hidden"
            >
              <div className="flex h-full flex-col">
                {/* HEADER */}
                <div className="border-b border-gray-100 p-6">
                  <div className="flex items-center justify-between">
                    <Image
                      src="https://cdn.hboxdigital.com/public/hbox-pay/images/HBOX%20Pay%20logo.png"
                      alt="HBOX Pay"
                      width={100}
                      height={30}
                      className="h-[30px] w-[100px] object-contain"
                    />

                    <button
                      type="button"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="-mr-2 p-2 text-black transition-colors hover:text-[#45890F]"
                      aria-label="Close menu"
                    >
                      <X className="h-[20px] w-[20px]" />
                    </button>
                  </div>
                </div>

                {/* NAVIGATION */}
                <nav className="flex-1 overflow-y-auto">
                  <div className="space-y-2 p-6">
                    {navLinks.map((item, index) => {
                      const isActive =
                        pathname === item.href ||
                        item.dropdown?.some(
                          (subItem) => pathname === subItem.href
                        );

                      const isDropdownOpen = openMobileDropdown === item.label;

                      return (
                        <motion.div
                          key={item.label}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.05 }}
                          className="space-y-2"
                        >
                          {item.dropdown ? (
                            <button
                              type="button"
                              onClick={() =>
                                setOpenMobileDropdown(
                                  isDropdownOpen ? null : item.label
                                )
                              }
                              className={`group flex w-full items-center justify-between py-3 text-[16px] font-normal transition-colors duration-300 ${
                                isActive || isDropdownOpen
                                  ? "text-[#45890F]"
                                  : "text-black hover:text-[#45890F]"
                              }`}
                            >
                              <span>{item.label}</span>

                              <ChevronDown
                                className={`h-4 w-4 transition-transform duration-300 ${
                                  isDropdownOpen
                                    ? "rotate-180 text-[#45890F]"
                                    : "text-black"
                                }`}
                              />
                            </button>
                          ) : (
                            <Link
                              href={item.href}
                              onClick={() => setIsMobileMenuOpen(false)}
                              className={`group flex items-center justify-between py-3 text-[16px] font-normal transition-colors duration-300 ${
                                isActive
                                  ? "text-[#45890F]"
                                  : "text-black hover:text-[#45890F]"
                              }`}
                            >
                              <span>{item.label}</span>

                              <ChevronRight
                                className={`h-4 w-4 transition-all duration-300 ${
                                  isActive
                                    ? "translate-x-1 opacity-100 text-[#45890F]"
                                    : "opacity-0 group-hover:translate-x-1 group-hover:opacity-100"
                                }`}
                              />
                            </Link>
                          )}

                          {/* MOBILE SERVICES SUB LINKS */}
                          <AnimatePresence>
                            {item.dropdown && isDropdownOpen && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{
                                  duration: 0.25,
                                  ease: "easeInOut",
                                }}
                                className="overflow-hidden"
                              >
                                <div className="ml-2 space-y-2 border-l border-gray-200 pl-4">
                                  {item.dropdown.map((subItem) => {
                                    const isSubActive =
                                      pathname === subItem.href;

                                    return (
                                      <Link
                                        key={subItem.title}
                                        href={subItem.href}
                                        onClick={() => {
                                          setIsMobileMenuOpen(false);
                                          setOpenMobileDropdown(null);
                                        }}
                                        className={`flex items-center gap-2 rounded-lg py-2 text-[14px] transition-colors duration-300 ${
                                          isSubActive
                                            ? "text-[#45890F]"
                                            : "text-gray-600 hover:text-[#45890F]"
                                        }`}
                                      >
                                        <ChevronRight className="h-3 w-3" />
                                        {subItem.title}
                                      </Link>
                                    );
                                  })}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </motion.div>
                      );
                    })}
                  </div>

                  {/* DIVIDER */}
                  <div className="my-2 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

                  {/* EXTRA LINKS */}
                  <div className="space-y-4 p-6">
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      <Link
                        href="/contact"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`flex items-center gap-2 py-2 text-[15px] font-medium transition-colors duration-300 ${
                          pathname === "/contact"
                            ? "text-[#45890F]"
                            : "text-black hover:text-[#45890F]"
                        }`}
                      >
                        <span>Contact Us</span>
                      </Link>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.35 }}
                    >
                      <Link
                        href="/support"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`flex items-center gap-2 py-2 text-[15px] font-medium transition-colors duration-300 ${
                          pathname === "/support"
                            ? "text-[#45890F]"
                            : "text-black hover:text-[#45890F]"
                        }`}
                      >
                        <span>Support</span>
                      </Link>
                    </motion.div>

                    {/* CONTACT */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.4 }}
                      className="mt-6 border-t border-gray-100 pt-6"
                    >
                      <p className="mb-2 text-[12px] text-gray-400">
                        Need help?
                      </p>

                      <Link
                        href="mailto:sales@hboxpay.com"
                        className="text-[13px] text-black transition-colors hover:text-[#45890F]"
                      >
                      sales@hboxpay.com
                      </Link>
                    </motion.div>
                  </div>
                </nav>

                {/* FOOTER */}
                <div className="border-t border-gray-100 p-6">
                  <div className="flex items-center justify-center gap-4">
                    <span className="text-[11px] text-gray-400">
                      © 2026 HBOX Digital LLC
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}