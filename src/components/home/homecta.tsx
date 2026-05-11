"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Container from "../Container";
import Link from "next/link";
import BookDiscoveryCallBtnTwo from "../common/BookDiscoveryCallBtnTwo";
import BookDiscoveryCallBtn from "../common/BookDiscoveryCallBtn";
import { ArrowUpRight } from "lucide-react";

interface BigIdeaSectionProps {
  titleOne: string;
  titleTwo: string;
  titleThree?: string;
  titleFour?: string;
  paragraph: string;
  imageSrc: string;
  sideImageSrc?: string;
  buttons: { text: string;  }[];
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
    <section className="py-10 md:py-20 px-4 md:px-10 flex justify-center items-center h-200">
        <Container> 
      
      {/* MAIN CONTAINER */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="mx-auto z-1 flex flex-col items-center w-full bg-black rounded-[32px]  overflow-visible relative"
        style={{
          minHeight: 400,
          backgroundImage: `url("${imageSrc}")`, // ✅ FIXED
          backgroundSize: "100% 100%",
          backgroundPosition: "center",
        }}
      >

        {/* ✅ PREMIUM GRADIENT OVERLAY */}
        {/* <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent z-0" /> */}

        <Container className="md:px-10 relative  z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between w-full h-full xl:h-[542px] py-10 lg:py-0">

            {/* ================= LEFT CONTENT ================= */}
            <div className="flex-1  flex flex-col justify-center max-w-[100%] lg:max-w-[50%] text-center lg:text-left">

              <motion.h3
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-white leading-tight"
              >
                {titleOne}{" "}
                <span className="text-yellow-400">
                  {titleTwo} {titleFour}
                </span>
                <br />
                {titleThree}
              </motion.h3>

              <motion.p
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="text-white mb-6 leading-relaxed text-sm md:text-base"
              >
                {paragraph}
              </motion.p>

              {/* BUTTONS */}
<div className="flex gap-4 mt-2 justify-center lg:justify-start flex-wrap">
  {buttons.map((button, index) => (
    
    <button className="group flex h-[46px] w-[321px] items-center justify-center gap-[10px] rounded-[24px] bg-[linear-gradient(178.88deg,#FFC400_-38.35%,#FFFFFF_285.31%)] px-[20px] py-[10px] text-[16.28px] font-medium leading-[16px] tracking-[-0.03em] text-black transition-all duration-300 hover:scale-[1.02]">
  <span>Explore HBOX Digital</span>

  <ArrowUpRight className="h-[20px] w-[20px] stroke-[2.3] text-black transition-transform duration-300 group-hover:rotate-45" />
</button>
    
  ))}
</div>

            </div>

            {/* ================= RIGHT IMAGE ================= */}
            {sideImageSrc && (
              <div className="flex-1 flex justify-center lg:justify-end mt-8 lg:mt-0">
                <Image
                  src={sideImageSrc} // ✅ NO decodeURI needed
                  alt="side image"
                  width={650}
                  height={800}
                  // unoptimized
                  className="object-contain w-full max-w-[400px] md:max-w-[500px] lg:max-w-[600px] md:h-120 "
                  priority
                />
              </div>
            )}

          </div>
        </Container>
      </motion.div>
       </Container> 
    </section>
  );
};

export default BigIdeaSectionCTA;