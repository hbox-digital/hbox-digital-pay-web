"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Container from "../Container";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

interface BigIdeaSectionProps {
  titleOne: string;
  titleTwo: string;
  titleThree?: string;
  titleFour?: string;
  paragraph: string;
  imageSrc: string;
  sideImageSrc?: string;
  buttons: { text: string; href?: string }[];
}

const BigIdeaSectionCTA = ({
  titleOne,
  titleTwo,
  titleThree,
  titleFour,
  paragraph,
  imageSrc,
  sideImageSrc,
  buttons,
}: BigIdeaSectionProps) => {
  return (
    <section className="overflow-hidden py-8 sm:py-10 md:py-14 lg:py-20">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 45 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-[34px] bg-[#0B0B0B]"
        >
          {/* BACKGROUND */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("${imageSrc}")`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          />

          {/* DARK OVERLAY */}
          <div className="absolute inset-0 bg-black/75" />

          {/* GOLD GLOW */}
          <div className="absolute -left-10 top-0 h-[300px] w-[300px] rounded-full bg-[#FDC700]/10 blur-[120px]" />

          {/* MAIN GRID */}
          <div className="relative z-10 grid min-h-[350px] grid-cols-1 lg:h-[352px] lg:grid-cols-12">
            {/* LEFT SIDE */}
            <div className="flex flex-col justify-center px-6 py-10 sm:px-8 md:px-12 lg:col-span-8 lg:px-14 lg:py-12">
              {/* HEADING */}
              <motion.h2
                initial={{ opacity: 0, x: -35 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="max-w-[760px] font-inter text-[38px] font-light leading-[42px] tracking-[-0.05em] text-white sm:text-[52px] sm:leading-[56px] md:text-[40px] md:leading-[40px]"
              >
                {titleOne}

                <br />

                <span className="font-semibold text-[#FDC700]">
                  {titleTwo}
                </span>

                {titleFour && (
                  <span className="font-semibold text-[#FDC700]">
                    {" "}
                    {titleFour}
                  </span>
                )}

                {titleThree && (
                  <>
                    <br />
                    {titleThree}
                  </>
                )}
              </motion.h2>

              {/* DESCRIPTION */}
              <motion.p
                initial={{ opacity: 0, x: -35 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="mt-5 max-w-[760px] font-inter text-[15px] font-normal leading-[1.6] tracking-[-0.03em] text-white/72 sm:text-[17px] md:text-[20px]"
              >
                {paragraph}
              </motion.p>

              {/* BUTTON */}
              <motion.div
                initial={{ opacity: 0, x: -35 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="mt-7 flex flex-wrap items-center gap-4"
              >
                {buttons.map((button, index) => (
                  <Link key={index} href={button.href || "/"}>
                    <button className="group flex h-[48px] items-center gap-3 rounded-full bg-[#F7D84D] px-5 text-[15px] font-medium tracking-[-0.03em] text-black transition-all duration-300 hover:scale-[1.03]">
                      <span>{button.text}</span>

                      <div className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-[#FFE98F] transition-all duration-300 group-hover:rotate-12">
                        <ExternalLink className="h-[16px] w-[16px] stroke-[2.2]" />
                      </div>
                    </button>
                  </Link>
                ))}
              </motion.div>
            </div>

            {/* RIGHT IMAGE */}
            {sideImageSrc && (
              <div className="relative hidden lg:col-span-4 lg:block right-10">
                <motion.div
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="absolute bottom-0 right-0 h-full w-[50%]"
                >
                  <Image
                    src={sideImageSrc}
                    alt="HBOX Digital"
                    fill
                    priority
                    className="object-contain object-bottom object-right"
                  />
                </motion.div>
              </div>
            )}
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default BigIdeaSectionCTA;