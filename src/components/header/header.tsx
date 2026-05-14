// components/layout/Header.tsx

"use client";

import Link from "next/link";
import Container from "@/components/Container";
import {
  Search,
  Menu,
  X,
  ChevronRight,
} from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

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
    href: "#",
  },
  {
    label: "Services",
    href: "/services",
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
                  pathname === item.href;

                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={`group relative text-[16.28px] font-normal transition-colors duration-300 ${
                      isActive
                        ? "text-[#45890F]"
                        : "text-black hover:text-[#45890F]"
                    }`}
                  >
                    {item.label}

                    <span
                      className={`absolute bottom-[-4px] left-0 h-[2px] bg-[#45890F] transition-all duration-300 ${
                        isActive
                          ? "w-full"
                          : "w-0 group-hover:w-full"
                      }`}
                    />
                  </Link>
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
            <button
              aria-label="Search"
              className="flex items-center justify-center text-black transition-colors duration-300 hover:text-[#45890F]"
            >
              <Search className="h-[16px] w-[16px] stroke-[1.7]" />
            </button>

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
              className="fixed bottom-0 left-0 top-0 z-40 w-[85%] max-w-[320px] bg-white shadow-2xl lg:hidden"
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
                      className="p-2 -mr-2 text-black transition-colors hover:text-[#45890F]"
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
                          pathname === item.href;

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

                              <ChevronRight
                                className={`h-4 w-4 transition-all duration-300 ${
                                  isActive
                                    ? "translate-x-1 opacity-100 text-[#45890F]"
                                    : "opacity-0 group-hover:translate-x-1 group-hover:opacity-100"
                                }`}
                              />
                            </Link>
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
                      © 2026 HBOX Pay
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