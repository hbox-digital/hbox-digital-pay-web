// components/common/ServicesGridSection.tsx

"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Container from "../Container";

interface ServiceCard {
  title: string;
  description: string;
  image: string;
  active?: boolean;
}

interface ServicesGridSectionProps {
  title: string;
  highlightText: string;
  services: ServiceCard[];
}

export default function ServicesGridSection({
  title,
  highlightText,
  services,
}: ServicesGridSectionProps) {
  return (
    <section className="overflow-hidden bg-[#Fff] py-6 sm:py-6 md:py-10 lg:py-12">
      <Container>
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2
            className="
              font-inter
              text-[38px]
              font-light
              leading-[42px]
              tracking-[-0.04em]
              text-black

              sm:text-[48px]
              sm:leading-[54px]

              md:text-[60px]
              md:leading-[68px]
            "
          >
            {title}{" "}

            <span className="font-semibold text-[#3A922B]">
              {highlightText}
            </span>
          </h2>
        </motion.div>

        {/* GRID */}
        {/* GRID */}
<div
  className="
    mt-14
    grid
    gap-5

    sm:grid-cols-2

    lg:grid-cols-3
  "
>
  {services.map((service, index) => (
    <motion.div
      key={index}
      initial={{
        opacity: 0,
        y: 40,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{ once: true }}
      transition={{
        duration: 0.7,
        delay: index * 0.05,
      }}
      whileHover={{
        y: -8,
      }}
      className="
        group
        relative
        overflow-hidden
        rounded-[28px]
        bg-[#F5F5F5]
        p-5
        transition-all
        duration-500

        hover:bg-[linear-gradient(180deg,#F5F5F5_0%,#DDF7CF_100%)]
      "
    >
      {/* TOP IMAGE */}
      <motion.div
        whileHover={{
          scale: 1.05,
          rotate: -2,
        }}
        transition={{
          duration: 0.4,
        }}
        className="
          relative
          ml-auto
          h-[110px]
          w-[180px]

          md:h-[130px]
          md:w-[220px]
        "
      >
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="
            object-contain
            object-right
            transition-transform
            duration-500

            group-hover:scale-105
          "
        />
      </motion.div>

      {/* CONTENT */}
      <div className="mt-4">
        <h3
          className="
            font-inter
            text-[23px]
            font-medium
            leading-[1.1]
            tracking-[-0.04em]
            text-black

            md:text-[25px]
            lg:text-[27px]
          "
        >
          {service.title}
        </h3>

        <p
          className="
            mt-5
            max-w-[95%]
            font-inter
            text-[15px]
            font-normal
            leading-[1.35]
            tracking-[-0.03em]
            text-black

            md:text-[20px]
          "
        >
          {service.description}
        </p>
      </div>

      {/* BOTTOM GLOW */}
      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          left-0
          h-[120px]
          w-full
          bg-[linear-gradient(180deg,rgba(221,247,207,0)_0%,rgba(221,247,207,0.9)_100%)]
          opacity-0
          transition-opacity
          duration-500

          group-hover:opacity-100
        "
      />
    </motion.div>
  ))}
</div>
      </Container>
    </section>
  );
}