"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import NewsletterForm from "../layouts/NewsletterForm";
import Link from "next/link";
import Image from "next/image";
import Container from "../Container";

const ComingSoon = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Set target date to January 1, 2026
    const targetDate = new Date("2026-01-01T00:00:00").getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatNumber = (num: number) => String(num).padStart(2, "0");

  return (
    <Container>
      <div className="min-h-screen flex flex-col items-center justify-center px-4 py-8 mt-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl w-full mx-auto text-center"
        >
          {/* Logo */}
          <div className="mb-6">
            <div className="inline-flex items-center gap-2 mb-4">
              <motion.div whileTap={{ scale: 0.95 }}>
                <Link href="/" className="flex items-center">
                  <Image
                    src="/images/header/logo.png"
                    alt="Hbox Digital"
                    width={300}
                    height={100}
                    className="h-12 w-auto dark:invert"
                    priority
                  />
                </Link>
              </motion.div>
            </div>
          </div>

          {/* Coming Soon Badge */}
          <div className="mb-4">
            <span className="text-sm text-primary">Coming Soon</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal mb-6 leading-tight">
            Something Amazing<br />Is On Its Way
          </h1>

          {/* Subtitle */}
          <p className="text-base text-primary mb-12 max-w-xl mx-auto">
            We're crafting an exceptional experience for you. Subscribe to be the first to know when we launch.
          </p>

          {/* Countdown Timer */}
          <div className="flex justify-center gap-4 mb-12">
            {[
              { label: "Days", value: timeLeft.days },
              { label: "Hours", value: timeLeft.hours },
              { label: "Minutes", value: timeLeft.minutes },
              { label: "Seconds", value: timeLeft.seconds },
            ].map((item, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="bg-white border border-gray-200 rounded-lg px-6 py-4 min-w-[80px]">
                  <span className="text-3xl font-normal text-black">
                    {formatNumber(item.value)}
                  </span>
                </div>
                <span className="text-xs text-gray-500 mt-2">{item.label}</span>
              </div>
            ))}
          </div>

          {/* Newsletter Form */}
          <div className="flex justify-center mb-8">
            <NewsletterForm
              buttonText="Notify Me"
              placeholder="Enter your email"
              successMessage="Thank you! We'll notify you when we launch."
              buttonClassName="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800 transition-colors h-12"
              inputClassName="h-12 px-4 border border-gray-300 rounded-md focus-visible:ring-1 focus-visible:ring-black focus-visible:ring-offset-0 max-w-sm"
            />
          </div>

          {/* Launch Info */}
          <p className="text-sm text-primary mb-16">
            In Development Launching January 2026
          </p>
        </motion.div>
      </div>
    </Container>
  );
};

export default ComingSoon;