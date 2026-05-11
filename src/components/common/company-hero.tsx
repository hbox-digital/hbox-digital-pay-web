"use server";

import Link from "next/link";
import { Button } from "../ui/button";
import Container from "../Container";
import ButtonDefault from "./ButtonDefault";

interface CompanyHeroSectionProps {
  heading: string;
  text: string;
  buttonInfo?: {
    label: string;
    link: string;
  };
  videoSrc?: string; // 👈 optional background video
}

const CompanyHeroSection = ({
  heading,
  text,
  buttonInfo,
  videoSrc = "https://cdn.hboxdigital.com/public/videos/hero-videos/design-hero.mp4", // default video
}: CompanyHeroSectionProps) => {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src={videoSrc}
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full  md:bg-linear-to-t md:from-background md:to-background/70  h-full bg-linear-to-b from-black/80 to-black/40" />

      {/* Content */}
      <Container>
        <div className="relative z-10 flex justify-center items-center flex-col py-20 md:py-32">
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight max-w-7xl text-center mb-6">
            {heading}
          </h1>

          <p className="text-base md:text-lg lg:text-xl max-w-6xl leading-relaxed text-center mb-8">
            {text}
          </p>

          {buttonInfo && (
            <ButtonDefault name={buttonInfo.label} link={buttonInfo.link} />
          )}
        </div>
      </Container>
    </section>
  );
};

export default CompanyHeroSection;
