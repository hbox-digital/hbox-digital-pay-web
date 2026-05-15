import CtaBannerSection from "@/components/contact-us/CtaBannerSection";
import FaqSectionreuse from "@/components/contact-us/FaqSectionreuse";
import HeroSectionContact from "@/components/contact-us/hero-sec";
import InfoSplitSectiontwo from "@/components/products/InfoSplitSectiontwo";
import SupportProcessSectionpro from "@/components/products/SupportProcessproduct";
import FeatureCardsSection from "@/components/services/FeatureCardsSection";
import IndustriesSupportGrid from "@/components/services/IndustriesSupportGrid";
import SingleFeatureSection from "@/components/services/SingleFeatureSection";

const page = () => {
  return (
    <div>
      <HeroSectionContact
        titleOne="Smart POS "
        titleHighlight="Software Built "
        titleTwo="for Modern Business Operations"
        description="HBOXPay POS Software helps businesses simplify sales, manage transactions efficiently, and improve daily operations through a powerful and easy to use platform. Designed for retail, hospitality, and multi location businesses, our POS system combines speed, flexibility, and real time business visibility in one connected solution."
        backgroundImage="https://cdn.hboxdigital.com/public/hbox-pay/images/Rectangle%2034624995%20(4).png"
        buttonText="Talk to Sales"
        buttonHref="/contact"
      />
      <InfoSplitSectiontwo
        eyebrow=""
        title="Simplify the Way "
        highlightText="Your Business Operates"
        image="https://cdn.hboxdigital.com/public/hbox-pay/images/Rectangle%2034625008%20(1).png"
        descriptionOne="Modern businesses need more than basic billing systems. They need connected tools that support sales, inventory, staff management, customer engagement, and reporting without slowing down operations."
        descriptionTwo="HBOXPay POS Software is designed to help businesses manage everyday tasks more efficiently while maintaining fast and reliable transaction performance across every touchpoint."
        descriptionThree="Whether operating a single store or multiple business locations, businesses can manage operations through one centralized platform built for flexibility and scalability."
        imagePosition="left"
      />
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
<SupportProcessSectionpro
  title="Why Businesses Choose HBOXPay Payment Processing"
  highlightText=""
  description="HBOXPay combines modern payment technology with scalable infrastructure designed to support smooth and uninterrupted business transactions."
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
      <CtaBannerSection
        title="Power Faster & More Secure "
        highlightText="Transactions with HBOXPay"
        description="Explore payment processing solutions designed for modern business operations and seamless customer experiences."
        backgroundImage="https://cdn.hboxdigital.com/public/hbox-pay/images/Rectangle%2034625007%20(1).png"
        buttonText="Get Started"
        buttonHref="/contact"
      />
<FaqSectionreuse
  title="Frequently Asked"
  highlightText="Questions"
  faqs={[
    {
      question: "1.What payment methods does HBOXPay support?",
      answer:
        "HBOXPay supports credit cards, debit cards, contactless payments, QR payments, digital wallets, and mobile payment solutions.",
    },
    {
      question: "2.Are HBOXPay payment systems secure?",
      answer:
        "Yes. HBOXPay uses secure payment technologies and encrypted transaction processing to help protect payment and customer data.",
    },
    {
      question:
        "3.Can businesses process payments across multiple locations?",
      answer:
        "Yes. Our payment infrastructure supports centralized management for businesses operating across multiple locations.",
    },
    {
      question: "4.Does HBOXPay support contactless payments?",
      answer:
        "Yes. Businesses can accept contactless card payments and digital wallet transactions through supported payment devices.",
    },
    {
      question: "5.Can HBOXPay integrate with POS systems?",
      answer:
        "Yes. HBOXPay Payment Processing solutions are designed to integrate with compatible POS systems and business operations.",
    },
    {
      question:
        "6.Is HBOXPay suitable for small and growing businesses?",
      answer:
        "Yes. Our payment solutions are designed to support businesses of all sizes, from small businesses to enterprise operations.",
    },
  ]}
/>
    </div>
  );
};

export default page;
