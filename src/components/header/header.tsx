// components/layout/Header.tsx

"use client";

import Link from "next/link";
import Container from "@/components/Container";
import { Search, ShoppingCart, Menu, X, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Prevent body scroll when mobile menu is open
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

  // Detect scroll for header background
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`w-full border-b border-[#7ED957] bg-white transition-all duration-300 sticky top-0 z-50 ${
          scrolled ? "shadow-md bg-white/95 backdrop-blur-sm" : ""
        }`}
      >
        <Container className="flex h-[68px] items-center justify-between">
          {/* Left side with logo */}
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

            {/* Desktop Navigation */}
            <nav className="hidden items-center gap-8 lg:flex">
              {navLinks.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="relative text-[16.28px] font-normal text-black transition-colors duration-200 hover:text-[#45890F] group"
                >
                  {item.label}
                  <span className="absolute bottom-[-2px] left-0 w-0 h-[2px] bg-[#45890F] transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
            </nav>
          </div>

          {/* Right side with actions */}
          <div className="flex items-center gap-6">
            <div className="hidden items-center gap-5 md:flex">
              <Link
                href="/contact"
                className="text-[16.32px] font-normal text-black transition-colors duration-200 hover:text-[#45890F]"
              >
                Contact Us
              </Link>
            </div>
            <div className="hidden items-center gap-5 md:flex">
              <Link
                href="#"
                className="text-[16.32px] font-normal text-black transition-colors duration-200 hover:text-[#45890F]"
              >
                Support
              </Link>
            </div>

            <button
              aria-label="Search"
              className="flex items-center justify-center text-black transition-colors duration-200 hover:text-[#45890F]"
            >
              <Search className="h-[16px] w-[16px] stroke-[1.7]" />
            </button>

            {/* <button
              aria-label="Cart"
              className="flex items-center justify-center text-black transition-colors duration-200 hover:text-[#45890F] relative"
            >
              <ShoppingCart className="h-[16px] w-[16px] stroke-[1.7]" />
              <span className="absolute -top-2 -right-2 h-4 w-4 bg-[#7ED957] rounded-full text-[10px] text-white flex items-center justify-center">
                0
              </span>
            </button> */}

            {/* Mobile Menu Button */}
            <button
              aria-label="Menu"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="flex items-center justify-center text-black transition-colors duration-200 hover:text-[#45890F] lg:hidden relative z-50"
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

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 left-0 bottom-0 w-[85%] max-w-[320px] bg-white z-40 lg:hidden shadow-2xl"
            >
              <div className="flex flex-col h-full">
                {/* Menu Header */}
                <div className="p-6 border-b border-gray-100">
                  <div className="flex items-center justify-between">
                    <Image
                      src="https://cdn.hboxdigital.com/public/hbox-pay/images/HBOX%20Pay%20logo.png"
                      alt="HBOX Pay"
                      width={100}
                      height={30}
                      className="h-[30px] w-[100px] object-contain"
                    />
                    <button
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="p-2 -mr-2 text-black hover:text-[#45890F] transition-colors"
                    >
                      <X className="h-[20px] w-[20px]" />
                    </button>
                  </div>
                </div>

                {/* Navigation Links */}
                <nav className="flex-1 overflow-y-auto">
                  <div className="p-6 space-y-2">
                    {navLinks.map((item, index) => (
                      <motion.div
                        key={item.label}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                      >
                        <Link
                          href={item.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="flex items-center justify-between py-3 text-[16px] font-normal text-black transition-colors duration-200 hover:text-[#45890F] group"
                        >
                          <span>{item.label}</span>
                          <ChevronRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-all duration-200 group-hover:translate-x-1" />
                        </Link>
                      </motion.div>
                    ))}
                  </div>

                  {/* Divider */}
                  <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent my-2"></div>

                  {/* Mobile Auth Links */}
                  <div className="p-6 space-y-4">
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      <Link
                        href="#"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="flex items-center gap-2 py-2 text-[15px] font-medium text-black transition-colors duration-200 hover:text-[#45890F]"
                      >
                        <span>Sign in</span>
                      </Link>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.35 }}
                    >
                      <Link
                        href="#"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="flex items-center gap-2 py-2 text-[15px] font-medium text-black transition-colors duration-200 hover:text-[#45890F]"
                      >
                        <span>Support</span>
                      </Link>
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.4 }}
                      className="pt-6 mt-6 border-t border-gray-100"
                    >
                      <p className="text-[12px] text-gray-400 mb-2">
                        Need help?
                      </p>
                      <Link
                        href="mailto:support@hboxpay.com"
                        className="text-[13px] text-black hover:text-[#45890F] transition-colors"
                      >
                        support@hboxpay.com
                      </Link>
                    </motion.div>
                  </div>
                </nav>

                {/* Menu Footer */}
                <div className="p-6 border-t border-gray-100">
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
