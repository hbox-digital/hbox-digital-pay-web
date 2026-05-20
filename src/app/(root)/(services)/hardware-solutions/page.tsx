import CtaBannerSection from "@/components/contact-us/CtaBannerSection";
import FaqSectionreuse from "@/components/contact-us/FaqSectionreuse";
import HeroSectionContact from "@/components/contact-us/hero-sec";
import InfoSplitSectiontwo from "@/components/products/InfoSplitSectiontwo";
import SupportProcessSectionpro from "@/components/products/SupportProcessproduct";
import FeatureCardsSection from "@/components/services/FeatureCardsSection";
import HardwareSolutionsSection from "@/components/services/HardwareSolutionsSection";
import IndustriesSupportGrid from "@/components/services/IndustriesSupportGrid";
import ServicesGridSection from "@/components/services/ServicesGridSection";
import SingleFeatureSection from "@/components/services/SingleFeatureSection";

const page = () => {
  return (
    <div>
      <HeroSectionContact
        titleOne="Smart Payment Hardware "
        titleHighlight="Built for Modern Business Environments"
        titleTwo=""
        description="Whether managing retail checkouts, hospitality operations, or enterprise environments, hbox pay hardware solutions are designed to keep businesses connected, efficient, and ready for growth."
        backgroundImage="https://cdn.hboxdigital.com/public/hbox-pay/images/Rectangle%2034624995%20(6).png"
        buttonText="Talk to Sales"
        buttonHref="/contact"
      />
       <InfoSplitSectiontwo
        eyebrow=""
        title="Hardware Designed for"
        highlightText=" Real Business Operations"
        image="https://cdn.hboxdigital.com/public/hbox-pay/images/Rectangle%2034625008%20(3).png"
        descriptionOne="Modern businesses need hardware that performs consistently in fast paced environments. hbox pay combines advanced payment technology with modern device design to help businesses simplify operations, improve mobility, and create seamless checkout experiences."
        descriptionTwo="Our hardware lineup supports retail stores, restaurants, hospitality businesses, service providers, and multi location operations looking for reliable payment infrastructure and scalable deployment options."
        descriptionThree=""
        imagePosition="left"
      />
<HardwareSolutionsSection
  title="Our Hardware"
  highlightText="Solutions"
  hardware={[
    {
      name: "PAX A920",
      description:
        "A portable Android smart POS terminal designed for businesses that require mobility, flexibility, and fast payment processing. The PAX A920 combines touchscreen functionality with wireless payment capabilities in a compact handheld design.",
      idealFor: [
        "Restaurants",
        "Delivery services",
        "Pop up stores",
        "Retail environments",
        "Mobile businesses",
      ],
      keyBenefits: [
        "Portable payment processing",
        "Contactless payment support",
        "Android based system",
        "Wireless connectivity",
        "Compact and modern design",
      ],
    },
    {
      name: "PAX E700",
      description:
        "A powerful countertop payment solution designed for businesses that need stable performance and modern checkout functionality. The PAX E700 delivers secure transaction processing with an intuitive touchscreen experience.",
      idealFor: [
        "Retail stores",
        "Supermarkets",
        "Hospitality businesses",
        "Service counters",
      ],
      keyBenefits: [
        "Large touchscreen interface",
        "Fast transaction processing",
        "Modern countertop design",
        "Secure payment technology",
        "Reliable operational performance",
      ],
    },
    {
      name: "PAX E800",
      description:
        "An advanced payment terminal built for high volume environments requiring enhanced functionality and business performance. The PAX E800 supports efficient payment workflows and modern customer interaction experiences.",
      idealFor: [
        "Enterprise retail",
        "Large hospitality operations",
        "Multi location businesses",
        "High traffic checkout areas",
      ],
      keyBenefits: [
        "High performance processing",
        "Modern user interface",
        "Flexible payment acceptance",
        "Built for busy operations",
        "Scalable business support",
      ],
    },
  ]}
/>
       <InfoSplitSectiontwo
        eyebrow=""
        title="Self Service "
        highlightText="Kiosk Solutions"
        image="https://cdn.hboxdigital.com/public/hbox-pay/images/Rectangle%2034624997%20(1).png"
        descriptionOne="Modern self service kiosk systems designed to improve customer flow, reduce waiting times, and create efficient ordering and payment experiences."
        descriptionTwo="HBOX Pay kiosk solutions help businesses automate customer interactions through touchscreen interfaces and secure payment technology."
        descriptionThree=""
        imagePosition="right"
      />
             <InfoSplitSectiontwo
        eyebrow=""
        title="Kitchen Display System "
        highlightText="(KDS)"
        image="https://cdn.hboxdigital.com/public/hbox-pay/images/Rectangle%2034624998%20(1).png"
        descriptionOne="Smart kitchen display systems designed to improve communication between front of house and kitchen operations while supporting faster order management and workflow visibility."
        descriptionTwo="Built for restaurants and hospitality environments that require operational efficiency during busy service hours."
        descriptionThree=""
        imagePosition="left"
      />
<ServicesGridSection
  title="Accessories"
  highlightText="Complete Your Hardware Setup"
  services={[
    {
      title: "Compact",
      description:
        "A streamlined and space efficient solution designed for businesses that require minimal hardware footprint without compromising functionality.",
      image:
        "https://cdn.hboxdigital.com/public/hbox-pay/images/image%20975.png",
    },
    {
      title: "Flex Pocket",
      description:
        "Portable and lightweight payment hardware designed for businesses requiring mobile payment flexibility and on the go transaction processing.",
      image:
        "https://cdn.hboxdigital.com/public/hbox-pay/images/image%20976.png",
    },
    {
      title: "Flex",
      description:
        "A flexible payment setup designed to support dynamic business environments and evolving operational needs.",
      image:
        "https://cdn.hboxdigital.com/public/hbox-pay/images/image%20977.png",
    },
    {
      title: "Mini",
      description:
        "Compact payment hardware designed for small counters, mobile businesses, and space conscious environments.",
      image:
        "https://cdn.hboxdigital.com/public/hbox-pay/images/image%20978.png",
    },
    {
      title: "Station Solo",
      description:
        "A standalone business station designed for streamlined payment and checkout operations.",
      image:
        "https://cdn.hboxdigital.com/public/hbox-pay/images/image%20979.png",
    },
    {
      title: "Station Duo",
      description:
        "A dual display hardware solution designed to improve customer interaction and support enhanced checkout experiences.",
      image:
        "https://cdn.hboxdigital.com/public/hbox-pay/images/image%20980.png",
    },
  ]}
/>
 <IndustriesSupportGrid
        title="Designed for"
        highlightText="Multiple Industries"
        description="HBOX Pay POS Software is built to support businesses operating in fast paced environments where speed, accuracy, and reliability matter."
        industries={[
          {
            title: "Retail Stores",
            icon: "store",
          },
          {
            title: "Restaurants & Cafes",
            icon: "restaurant",
          },
          {
            title: "Hospitality Businesses",
            icon: "hotel",
          },
          {
            title: "Supermarkets",
            icon: "supermarket",
          },
          {
            title: "Service Businesses",
            icon: "service",
          },
          {
            title: "Multi Location Operations",
            icon: "building",
          },
        ]}
      />
      <CtaBannerSection
        title="Upgrade Your Business "
        highlightText="with Smarter Payment Hardware"
        description="Explore reliable hardware solutions designed for modern commerce, seamless transactions, and operational efficiency."
        backgroundImage="https://cdn.hboxdigital.com/public/hbox-pay/images/Rectangle%2034625007%20(2).png"
        buttonText="Contact Sales"
        buttonHref="/contact"
      />
<FaqSectionreuse
  title="Frequently Asked"
  highlightText="Questions"
  faqs={[
    {
      question: "1.What types of hardware does hbox pay provide?",
      answer:
        "hbox pay offers Android POS devices, countertop payment terminals, portable payment systems, self service kiosks, kitchen display systems, and business accessories.",
    },
    {
      question: "2.Are hbox pay devices suitable for mobile businesses?",
      answer:
        "Yes. Devices like the PAX A920 and Flex Pocket are designed for portable and mobile payment environments.",
    },
    {
      question: "3.Do hbox pay devices support contactless payments?",
      answer:
        "Yes. Our payment hardware supports contactless payments, QR transactions, digital wallets, and traditional card payments.",
    },
    {
      question:
        "4.Can hbox pay hardware support multi location businesses?",
      answer:
        "Yes. Our hardware solutions are designed for scalable deployment across multiple business locations and enterprise operations.",
    },
    {
      question:
        "5.Are hbox pay hardware systems compatible with POS software?",
      answer:
        "Yes. hbox pay hardware is designed to integrate with compatible POS software and payment systems.",
    },
    {
      question:
        "6.Which industries can use hbox pay hardware solutions?",
      answer:
        "Our hardware solutions support retail, hospitality, restaurants, supermarkets, service businesses, and enterprise operations.",
    },
  ]}
/>
      {/*
      <FeatureCardsSection
        cards={[
          {
            image:
              "https://cdn.hboxdigital.com/public/hbox-pay/images/Rectangle%20161123887%20(1).png",
            eyebrow: "Key Features",
            title: "Fast & Seamless",
            highlightText: "Checkout",
            description:
              "Process transactions quickly with an optimized checkout experience designed to reduce wait times and improve customer satisfaction.",
            listTitle: "Features Include",
            points: [
              "Card and contactless payment support",
              "QR and digital wallet payments",
              "Fast transaction processing",
              "Easy to navigate interface",
            ],
          },
          {
            image:
              "https://cdn.hboxdigital.com/public/hbox-pay/images/Rectangle%20161123886.png",
            eyebrow: "Key Features",
            title: "Real Time",
            highlightText: "Inventory Management",
            description:
              "Track inventory levels, monitor stock movement, and maintain better visibility across products and locations through real time inventory tracking tools.",
            listTitle: "Benefits",
            points: [
              "Inventory monitoring",
              "Low stock alerts",
              "Product tracking",
              "Improved stock accuracy",
            ],
          },
        ]}
      />
      <FeatureCardsSection
        cards={[
          {
            image:
              "https://cdn.hboxdigital.com/public/hbox-pay/images/Rectangle%20161123889%20(1).png",
            eyebrow: "Key Features",
            title: "Advanced Reporting &",
            highlightText: "Analytics",
            description:
              "Access detailed reports and business insights that help businesses understand sales performance, transaction activity, and operational trends.",
            listTitle: "Reporting Tools",
            points: [
              "Sales reports",
              "Transaction summaries",
              "Product performance insights",
              "Business activity tracking",
            ],
          },
          {
            image:
              "https://cdn.hboxdigital.com/public/hbox-pay/images/Rectangle%20161123888%20(1).png",
            eyebrow: "Key Features",
            title: "Employee &",
            highlightText: "Access Management",
            description:
              "Manage employee access, permissions, and operational activity through centralized staff management controls.",
            listTitle: "Management Features",
            points: [
              "Role based permissions",
              "Staff activity tracking",
              "Operational visibility",
              "Simplified workforce management",
            ],
          },
        ]}
      />
      <SingleFeatureSection
        image="https://cdn.hboxdigital.com/public/hbox-pay/images/Rectangle%20161123890.png"
        eyebrow="Key Features"
        title="Multi Store"
        highlightText="Management"
        description="Manage multiple business locations from one centralized platform while maintaining operational consistency and visibility."
        listTitle="Multi Location Support"
        points={[
          "Centralized management",
          "Multi branch visibility",
          "Unified reporting",
          "Scalable operations",
        ]}
      />
     
<SupportProcessSectionpro
  title="Why Businesses Choose hbox pay Payment Processing"
  highlightText=""
  description="hbox pay combines modern payment technology with scalable infrastructure designed to support smooth and uninterrupted business transactions."
  cards={[
    {
      title: "Seamless Payment Experiences",
      description:
        "Provide customers with fast and convenient payment options across multiple transaction methods.",
      icon: "transaction",
    },
    {
      title: "Reliable Processing Performance",
      description:
        "Maintain stable and dependable payment operations during busy business hours and high transaction volumes.",
      icon: "performance",
    },
    {
      title: "Flexible Payment Solutions",
      description:
        "Accept payments through multiple channels and devices based on your business requirements.",
      icon: "integration",
    },
    {
      title: "Scalable Infrastructure",
      description:
        "Payment systems designed to support growing businesses and expanding operations.",
      icon: "business",
    },
  ]}
/>

<FaqSectionreuse
  title="Frequently Asked"
  highlightText="Questions"
  faqs={[
    {
      question: "1.What payment methods does hbox pay support?",
      answer:
        "hbox pay supports credit cards, debit cards, contactless payments, QR payments, digital wallets, and mobile payment solutions.",
    },
    {
      question: "2.Are hbox pay payment systems secure?",
      answer:
        "Yes. hbox pay uses secure payment technologies and encrypted transaction processing to help protect payment and customer data.",
    },
    {
      question:
        "3.Can businesses process payments across multiple locations?",
      answer:
        "Yes. Our payment infrastructure supports centralized management for businesses operating across multiple locations.",
    },
    {
      question: "4.Does hbox pay support contactless payments?",
      answer:
        "Yes. Businesses can accept contactless card payments and digital wallet transactions through supported payment devices.",
    },
    {
      question: "5.Can hbox pay integrate with POS systems?",
      answer:
        "Yes. hbox pay Payment Processing solutions are designed to integrate with compatible POS systems and business operations.",
    },
    {
      question:
        "6.Is hbox pay suitable for small and growing businesses?",
      answer:
        "Yes. Our payment solutions are designed to support businesses of all sizes, from small businesses to enterprise operations.",
    },
  ]}
/> */}
    </div>
  );
};

export default page;
