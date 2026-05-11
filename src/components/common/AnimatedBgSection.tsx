"use client";

import React, { ReactNode } from "react";
import Image from "next/image";

type AnimatedBgSectionProps = {
  imageUrl: string;
  className?: string;
  ratio?: string; // example: "16/9", "4/3"
  children?: ReactNode;
};

const AnimatedBgSection: React.FC<AnimatedBgSectionProps> = ({
  imageUrl,
  className = "",
  ratio = "16/9",
  children,
}) => {
  return (
    <div
      className={`relative w-full hidden md:block ${className}`}
      style={{ aspectRatio: ratio }}
    >
      {/* Background Image */}
      <Image
        src={imageUrl}
        alt="Background"
        fill
        priority
        className="object-contain object-center"
      />

      {/* Responsive Content Layer */}
      <div className="absolute inset-0 z-10 flex items-center">
        <div className="pl-[3%] sm:pl-[4%]">{children}</div>{" "}
      </div>
    </div>
  );
};

export default AnimatedBgSection;
