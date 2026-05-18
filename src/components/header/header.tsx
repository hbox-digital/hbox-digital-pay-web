// components/layout/Header.tsx

"use client";

import Link from "next/link";
import {
  Search,
  Menu,
  X,
  ChevronRight,
  ChevronDown,
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
        title: "Payment Processing",
        href: "/payment-processing",
      },
      {
        title: "Hardware Solutions",
        href: "/hardware-solutions",
      },
      {
        title: "Inventory Management",
        href: "/inventory-management",
      },
      {
        title: "Analytics & Reporting",
        href: "/analytics-reporting",
      },
      {
        title: "Employee Management",
        href: "/employee-management",
      },
      {
        title: "Multi Store Management",
        href: "/multi-store-management",
      },
      {
        title: "Customer Management CRM",
        href: "/customer-management-crm",
      },
      {
        title: "Loyalty Programs",
        href: "/loyalty-programs",
      },
      {
        title: "Ecommerce Integration",
        href: "/ecommerce-integration",
      },
      {
        title: "Invoicing & Accounting",
        href: "/invoicing-accounting",
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

  const [isMobileMenuOpen, setIsMobileMenuOpen] =
    useState(false);

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
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

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 z-50 w-full border-b border-[#7ED957] bg-white transition-all duration-300 ${
          scrolled
            ? "bg-white/95 shadow-md backdrop-blur-sm"
            : ""
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
                  item.dropdown?.some(
                    (subItem) =>
                      pathname === subItem.href
                  );

                return (
                  <div
                    key={item.label}
                    className="group/nav relative"
                  >
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
                          isActive
                            ? "w-full"
                            : "w-0 group-hover/nav:w-full"
                        }`}
                      />
                    </Link>

                    {/* SERVICES DROPDOWN */}
                    {item.dropdown && (
                      <div className="pointer-events-none absolute  top-full  z-50  -translate-x-1/2 pt-5 opacity-0 transition-all duration-300 group-hover/nav:pointer-events-auto group-hover/nav:opacity-100">
                        <motion.div
                          initial={{ opacity: 0, y: 12 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.25 }}
                          className=" border border-white/10 rounded-4xl w-[55vw] bg-gradient-to-t from-[#A3EC68] to-[#FFFFFF] p-4 "
                        >
                          <Container>
                          <div className="grid grid-cols-3 gap-3">
                            {item.dropdown.map(
                              (subItem) => {
                                const isSubActive =
                                  pathname ===
                                  subItem.href;

                                return (
                                  <Link
                                    key={subItem.title}
                                    href={
                                      subItem.href
                                    }
                                    className={`group/item flex min-h-[43px] items-center rounded-[8px] bg-[#F5F5F5] px-3 transition-all duration-300 hover:bg-[#151515] ${
                                      isSubActive
                                        ? "bg-[#151515]"
                                        : ""
                                    }`}
                                  >
                                    <div className="flex items-center gap-3">
                                      <span className="flex h-[23px] w-[23px] items-center justify-center rounded-[4px] bg-[#45890F] transition-transform duration-300 group-hover/item:scale-105">
                                        <ChevronRight className="h-4 w-4 stroke-[2.5] text-black" />
                                      </span>

                                      <span
                                        className={`text-[12px] font-semibold uppercase tracking-[0.02em] transition-colors duration-300 ${
                                          isSubActive
                                            ? "text-[#45890F]"
                                            : "text-black group-hover/item:text-[#95ce66]"
                                        }`}
                                      >
                                        {
                                          subItem.title
                                        }
                                      </span>
                                    </div>
                                  </Link>
                                );
                              }
                            )}
                          </div>
                          </Container>
                        </motion.div>
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

            {/* SEARCH */}
            {/* <button
              aria-label="Search"
              className="flex items-center justify-center text-black transition-colors duration-300 hover:text-[#45890F]"
            >
              <Search className="h-[16px] w-[16px] stroke-[1.7]" />
            </button> */}

            {/* MOBILE MENU BUTTON */}
            <button
              aria-label="Menu"
              onClick={() =>
                setIsMobileMenuOpen(
                  !isMobileMenuOpen
                )
              }
              className="relative z-50 flex items-center justify-center text-black transition-colors duration-300 hover:text-[#45890F] lg:hidden"
            >
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{
                      rotate: -90,
                      opacity: 0,
                    }}
                    animate={{
                      rotate: 0,
                      opacity: 1,
                    }}
                    exit={{
                      rotate: 90,
                      opacity: 0,
                    }}
                    transition={{
                      duration: 0.2,
                    }}
                  >
                    <X className="h-[20px] w-[20px]" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{
                      rotate: 90,
                      opacity: 0,
                    }}
                    animate={{
                      rotate: 0,
                      opacity: 1,
                    }}
                    exit={{
                      rotate: -90,
                      opacity: 0,
                    }}
                    transition={{
                      duration: 0.2,
                    }}
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
              onClick={() =>
                setIsMobileMenuOpen(false)
              }
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
                      onClick={() =>
                        setIsMobileMenuOpen(false)
                      }
                      className="-mr-2 p-2 text-black transition-colors hover:text-[#45890F]"
                    >
                      <X className="h-[20px] w-[20px]" />
                    </button>
                  </div>
                </div>

                {/* NAVIGATION */}
                <nav className="flex-1 overflow-y-auto">
                  <div className="space-y-2 p-6">
                    {navLinks.map(
                      (item, index) => {
                        const isActive =
                          pathname === item.href ||
                          item.dropdown?.some(
                            (subItem) =>
                              pathname ===
                              subItem.href
                          );

                        return (
                          <motion.div
                            key={item.label}
                            initial={{
                              opacity: 0,
                              x: -20,
                            }}
                            animate={{
                              opacity: 1,
                              x: 0,
                            }}
                            transition={{
                              delay:
                                index * 0.05,
                            }}
                            className="space-y-2"
                          >
                            <Link
                              href={item.href}
                              onClick={() =>
                                setIsMobileMenuOpen(
                                  false
                                )
                              }
                              className={`group flex items-center justify-between py-3 text-[16px] font-normal transition-colors duration-300 ${
                                isActive
                                  ? "text-[#45890F]"
                                  : "text-black hover:text-[#45890F]"
                              }`}
                            >
                              <span>
                                {item.label}
                              </span>

                              {item.dropdown ? (
                                <ChevronDown
                                  className={`h-4 w-4 transition-all duration-300 ${
                                    isActive
                                      ? "text-[#45890F]"
                                      : "text-black"
                                  }`}
                                />
                              ) : (
                                <ChevronRight
                                  className={`h-4 w-4 transition-all duration-300 ${
                                    isActive
                                      ? "translate-x-1 opacity-100 text-[#45890F]"
                                      : "opacity-0 group-hover:translate-x-1 group-hover:opacity-100"
                                  }`}
                                />
                              )}
                            </Link>

                            {/* MOBILE SERVICES SUB LINKS */}
                            {item.dropdown && (
                              <div className="ml-2 space-y-2 border-l border-gray-200 pl-4">
                                {item.dropdown.map(
                                  (subItem) => {
                                    const isSubActive =
                                      pathname ===
                                      subItem.href;

                                    return (
                                      <Link
                                        key={
                                          subItem.title
                                        }
                                        href={
                                          subItem.href
                                        }
                                        onClick={() =>
                                          setIsMobileMenuOpen(
                                            false
                                          )
                                        }
                                        className={`flex items-center gap-2 rounded-lg py-2 text-[14px] transition-colors duration-300 ${
                                          isSubActive
                                            ? "text-[#45890F]"
                                            : "text-gray-600 hover:text-[#45890F]"
                                        }`}
                                      >
                                        <ChevronRight className="h-3 w-3" />
                                        {
                                          subItem.title
                                        }
                                      </Link>
                                    );
                                  }
                                )}
                              </div>
                            )}
                          </motion.div>
                        );
                      }
                    )}
                  </div>

                  {/* DIVIDER */}
                  <div className="my-2 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

                  {/* EXTRA LINKS */}
                  <div className="space-y-4 p-6">
                    <motion.div
                      initial={{
                        opacity: 0,
                        x: -20,
                      }}
                      animate={{
                        opacity: 1,
                        x: 0,
                      }}
                      transition={{
                        delay: 0.3,
                      }}
                    >
                      <Link
                        href="/contact"
                        onClick={() =>
                          setIsMobileMenuOpen(
                            false
                          )
                        }
                        className={`flex items-center gap-2 py-2 text-[15px] font-medium transition-colors duration-300 ${
                          pathname === "/contact"
                            ? "text-[#45890F]"
                            : "text-black hover:text-[#45890F]"
                        }`}
                      >
                        <span>
                          Contact Us
                        </span>
                      </Link>
                    </motion.div>

                    <motion.div
                      initial={{
                        opacity: 0,
                        x: -20,
                      }}
                      animate={{
                        opacity: 1,
                        x: 0,
                      }}
                      transition={{
                        delay: 0.35,
                      }}
                    >
                      <Link
                        href="/support"
                        onClick={() =>
                          setIsMobileMenuOpen(
                            false
                          )
                        }
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
                      initial={{
                        opacity: 0,
                      }}
                      animate={{
                        opacity: 1,
                      }}
                      transition={{
                        delay: 0.4,
                      }}
                      className="mt-6 border-t border-gray-100 pt-6"
                    >
                      <p className="mb-2 text-[12px] text-gray-400">
                        Need help?
                      </p>

                      <Link
                        href="mailto:support@hboxpay.com"
                        className="text-[13px] text-black transition-colors hover:text-[#45890F]"
                      >
                        support@hboxpay.com
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