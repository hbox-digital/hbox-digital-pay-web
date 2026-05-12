// components/home/TrustedBanner.tsx

"use client";

import Container from "../Container";
import { motion } from "framer-motion";

export default function TrustedBanner() {
  return (
    <section className="overflow-hidden bg-[linear-gradient(178.88deg,#8CEE54_-38.35%,#FFFFFF_285.31%)] relative">
      {/* SUBTLE ANIMATED GLOW */}
      <motion.div
        animate={{
          opacity: [0.15, 0.3, 0.15],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.35),transparent_70%)]"
      />

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
            ease: "easeOut",
          }}
          whileHover={{
            scale: 1.01,
          }}
          className="flex min-h-[52px] items-center justify-center px-4 py-3 sm:min-h-[60px] md:min-h-[74px] lg:min-h-[88px]"
        >
          <motion.p
            animate={{
              opacity: [1, 0.92, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-full text-center text-[13px] font-medium leading-[100%] tracking-[-0.04em] text-black sm:text-[16px] md:text-[22px] lg:text-[23px] xl:text-[26px]"
          >
            Trusted by growing businesses across retail, restaurants, and
            modern service industries.
          </motion.p>
        </motion.div>
      </Container>
    </section>
  );
}