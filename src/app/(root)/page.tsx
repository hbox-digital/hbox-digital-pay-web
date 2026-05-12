import Container from "@/components/Container";
import Allcourcarts from "@/components/home/allcourcarts";
import BusinessSolutionsSection from "@/components/home/BusinessSolutionsSection";
import BusinessTypesSection from "@/components/home/BusinessTypesSection";
import CoreServiceCard from "@/components/home/CoreServiceCard";
import CtaSection from "@/components/home/CtaSection-center";
import FaqSection from "@/components/home/FaqSection";
import HardwareSliderSection from "@/components/home/HardwareSliderSection";
import HeroSection from "@/components/home/HeroSection";
import BigIdeaSectionCTA from "@/components/home/homecta";
import KioskSection from "@/components/home/KioskSection";
import KitchenDisplaySection from "@/components/home/KitchenDisplaySection";
import OperationsSection from "@/components/home/OperationsSection";
import TrustedBanner from "@/components/home/TrustedBanner";
import TwoCoreServiceCard from "@/components/home/TwoCoreServiceCard";
import WhyChooseSection from "@/components/home/WhyChooseSection";
import React from "react";

const page = () => {
  return (
    <div>
      <HeroSection />
      <BusinessSolutionsSection />
      <TrustedBanner />
     <Allcourcarts />
      <BigIdeaSectionCTA
        titleOne="Built by the Team Behind "
        titleTwo="HBOX Digital"
        paragraph="From payment systems to custom software and mobile applications, HBOX Digital builds technology solutions that help businesses operate smarter and scale faster."
        imageSrc="https://cdn.hboxdigital.com/public/hbox-pay/images/Rectangle%2034624993.png"
        sideImageSrc="https://cdn.hboxdigital.com/public/hbox-pay/images/Phone%20-%20Mockup%20-%20IV%20(1).png"
        buttons={[{ text: "Explore HBOX Digital" }]}
      />
      <OperationsSection />
      <BusinessTypesSection />
      <KitchenDisplaySection />
      <HardwareSliderSection />
      <KioskSection />
      <WhyChooseSection />
      <FaqSection />
      <CtaSection />
    </div>
  );
};

export default page;
