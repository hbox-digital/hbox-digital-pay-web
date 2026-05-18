"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { CheckCircle2, Home, ArrowRight } from "lucide-react";
import Container from "@/components/Container";

export default function ThankYouPage() {
  useEffect(() => {
    // Optional: Track conversion event
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", "conversion", {
        send_to: "AW-CONVERSION_ID/CONVERSION_LABEL",
        value: 1.0,
        currency: "USD",
      });
    }
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#f9fdf6] to-[#e8f5e0] px-4 py-20">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          {/* Success Icon */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              delay: 0.2,
              type: "spring",
              stiffness: 200,
              damping: 15,
            }}
            className="flex justify-center mb-8"
          >
            <div className="relative">
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 bg-[#53B033] opacity-20 rounded-full blur-2xl"
              />
              <CheckCircle2 className="w-24 h-24 text-[#53B033] relative z-10" />
            </div>
          </motion.div>

          {/* Thank You Message */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-4xl sm:text-5xl md:text-6xl font-light mb-6 text-gray-900"
          >
            Thank You for{" "}
            <span className="font-semibold text-[#53B033]">Reaching Out!</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-lg sm:text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed"
          >
            We've received your demo request and our team will be in touch with
            you shortly to schedule a meeting.
          </motion.p>

          {/* Info Box */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg mb-10 border border-gray-100"
          >
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              What happens next?
            </h2>
            <div className="space-y-4 text-left">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-[#B9F28F] flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-sm font-semibold text-gray-900">1</span>
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 mb-1">
                    Check Your Email
                  </h3>
                  <p className="text-gray-600 text-sm">
                    You'll receive a confirmation email shortly with next steps.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-[#B9F28F] flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-sm font-semibold text-gray-900">2</span>
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 mb-1">
                    We'll Reach Out
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Our team will contact you within 24 hours to schedule your
                    personalized demo.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-[#B9F28F] flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-sm font-semibold text-gray-900">3</span>
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 mb-1">
                    Get Started
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Discover how HBOX Pay can transform your business operations.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link href="/">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="group flex items-center gap-3 px-8 py-4 rounded-full bg-[linear-gradient(178.88deg,#8CEE54_-38.35%,#FFFFFF_285.31%)] text-black font-medium shadow-[0px_8px_30px_rgba(140,238,84,0.28)] transition-all"
              >
                <Home className="w-5 h-5" />
                <span>Back to Home</span>
              </motion.button>
            </Link>

            <Link href="/products">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="group flex items-center gap-3 px-8 py-4 rounded-full bg-white text-gray-900 font-medium border-2 border-gray-200 hover:border-[#53B033] transition-all"
              >
                <span>Explore Products</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </Link>
          </motion.div>

          {/* Additional Info */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="mt-12 text-sm text-gray-500"
          >
            Need immediate assistance?{" "}
            <Link
              href="/contact"
              className="text-[#53B033] underline hover:text-[#469929] font-medium"
            >
              Contact us directly
            </Link>
          </motion.p>
        </motion.div>
      </Container>
    </section>
  );
}
