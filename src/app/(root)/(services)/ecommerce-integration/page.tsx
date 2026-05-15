import CtaBannerSection from "@/components/contact-us/CtaBannerSection";
import FaqSectionreuse from "@/components/contact-us/FaqSectionreuse";
import HeroSectionContact from "@/components/contact-us/hero-sec";
import InfoSplitSectiontwo from "@/components/products/InfoSplitSectiontwo";
import SupportProcessSectionpro from "@/components/products/SupportProcessproduct";
import FeatureCardsSection from "@/components/services/FeatureCardsSection";
import IndustriesSupportGrid from "@/components/services/IndustriesSupportGrid";
import ServicesGridSection from "@/components/services/ServicesGridSection";
import SingleFeatureSection from "@/components/services/SingleFeatureSection";
import InfoSplitSectiontthree from "@/components/solutions/InfoSplitSection";

const page = () => {
  return (
    <div>
<HeroSectionContact
  titleOne="Connect Online "
  titleHighlight="& In Store Business "
  titleTwo="Operations Seamlessly"
  description="HBOX Pay E Commerce Integration helps businesses connect online sales, payment processing, inventory management, and customer operations through one connected platform. Designed for modern retail, hospitality, and growing businesses, our integration solutions create a smoother experience between online and offline business operations."
  backgroundImage="https://cdn.hboxdigital.com/public/hbox-pay/images/service/Rectangle%2034624995%20(14).png"
  buttonText="Talk to Sales"
  buttonHref="/contact"
/>
<InfoSplitSectiontwo
  eyebrow=""
  title="Create a Connected "
  highlightText="Commerce Experience"
  image="https://cdn.hboxdigital.com/public/hbox-pay/images/service/Rectangle%2034625008%20(10).png"
  descriptionOne="HBOX Pay E Commerce Integration helps businesses unify online and in store operations through connected systems designed to improve visibility, simplify management, and support smoother business workflows."
  descriptionTwo="Whether selling through physical locations, online platforms, or both, businesses can manage operations more efficiently through one centralized ecosystem."
  descriptionThree=""
  imagePosition="left"
/>
<FeatureCardsSection
  cards={[
    {
      image:
        "https://cdn.hboxdigital.com/public/hbox-pay/images/service/Rectangle%20161123887%20(9).png",
      eyebrow: "",
      title: "E Commerce ",
      highlightText: "Integration Capabilities",
      description:
        "Connect digital and physical business operations through integrated systems designed to improve operational consistency and visibility.",
      listTitle: "Features Include",
      points: [
        "Connected sales channels",
        "Unified operational visibility",
        "Centralized business management",
        "Improved workflow efficiency",
      ],
    },
    {
      image:
        "https://cdn.hboxdigital.com/public/hbox-pay/images/service/Rectangle%20161123886%20(8).png",
      eyebrow: "",
      title: "Integrated ",
      highlightText: "Payment Processing",
      description:
        "Provide secure and seamless payment experiences across online and offline customer transactions.",
      listTitle: "Payment Benefits",
      points: [
        "Connected payment systems",
        "Secure transaction processing",
        "Multiple payment method support",
        "Consistent checkout experiences",
      ],
    },
    {
      image:
        "https://cdn.hboxdigital.com/public/hbox-pay/images/service/Rectangle%20161123889%20(10).png",
      eyebrow: "",
      title: "Real Time",
      highlightText: "Inventory Synchronization",
      description:
        "Maintain accurate inventory visibility across online and physical store operations through synchronized inventory management tools.",
      listTitle: "Inventory Features",
      points: [
        "Real time inventory updates",
        "Cross channel inventory visibility",
        "Stock synchronization",
        "Better inventory control",
      ],
    },
    {
      image:
        "https://cdn.hboxdigital.com/public/hbox-pay/images/service/Rectangle%20161123888%20(9).png",
      eyebrow: "",
      title: "Centralized ",
      highlightText: "Reporting & Insights",
      description:
        "Access business performance data across all sales channels through one connected reporting platform.",
      listTitle: "Reporting Advantages",
      points: [
        "Unified sales reporting",
        "Cross channel analytics",
        "Operational visibility",
        "Business performance insights",
      ],
    },
  ]}
/>

<SingleFeatureSection
  image="https://cdn.hboxdigital.com/public/hbox-pay/images/service/Rectangle%20161123890%20(7).png"
  eyebrow=""
  title="Customer "
  highlightText="Data Connectivity"
  description="Manage customer interactions and purchasing activity across online and in store environments through connected customer visibility tools."
  listTitle="Customer Management Features"
  points={[
    "Centralized customer visibility",
    "Purchase activity tracking",
    "Connected customer experiences",
    "Improved customer engagement",
  ]}
/>
      <IndustriesSupportGrid
        title="Designed for"
        highlightText="Multiple Industries"
        description="HBOX Pay Payment Processing solutions are designed for businesses operating in fast paced environments where secure and reliable transactions are essential."
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
            title: "Enterprise Operations",
            icon: "building",
          },
        ]}
      />
<SupportProcessSectionpro
  title="Why Businesses Choose "
  highlightText="HBOX Pay E Commerce Integration"
  description="HBOX Pay combines payment technology, operational visibility, and system connectivity to help businesses manage commerce more efficiently across every sales channel."
  cards={[
    {
      title: "Seamless Channel Integration",
      description:
        "Connect online and in store business operations through one unified ecosystem.",
      icon: "transaction",
    },
    {
      title: "Better Operational Visibility",
      description:
        "Access centralized reporting, inventory tracking, and customer visibility across all channels.",
      icon: "performance",
    },
    {
      title: "Improved Customer Experiences",
      description:
        "Deliver smoother customer journeys through connected payment and operational systems.",
      icon: "integration",
    },
    {
      title: "Scalable Commerce Infrastructure",
      description:
        "Integration solutions designed to support growing businesses and expanding commerce operations.",
      icon: "business",
    },
  ]}
/>
      <CtaBannerSection
        title="Build a More Connected "
        highlightText="Commerce Experience"
        description="Explore integration solutions designed to simplify operations, improve visibility, and support seamless online and in store business management."
        backgroundImage="https://cdn.hboxdigital.com/public/hbox-pay/images/Rectangle%2034625007.png"
        buttonText="Request a Demo"
        buttonHref="/contact"
      />
<FaqSectionreuse
  title="Frequently Asked"
  highlightText="Questions"
  faqs={[
    {
      question:
        "1.What is HBOX Pay E-Commerce Integration?",
      answer:
        "HBOX Pay E Commerce Integration is a solution designed to connect online and in store business operations through integrated payment, inventory, reporting, and customer management systems.",
    },
    {
      question:
        "2.Can businesses connect online and physical store operations?",
      answer:
        "Yes. HBOX Pay helps businesses unify digital and physical operations through one connected platform.",
    },
    {
      question:
        "3.Does the system support synchronized inventory management?",
      answer:
        "Yes. Businesses can maintain real time inventory visibility across online and offline sales channels.",
    },
    {
      question:
        "4.Can businesses access centralized reporting across all channels?",
      answer:
        "Yes. HBOX Pay provides unified reporting and operational visibility across connected sales environments.",
    },
    {
      question:
        "5.Which industries can use HBOX Pay E Commerce Integration?",
      answer:
        "Our integration solutions are designed for retail stores, online businesses, hospitality businesses, service providers, and enterprise operations.",
    },
    {
      question:
        "6.Is HBOX Pay E Commerce Integration scalable?",
      answer:
        "Yes. The platform is designed to support growing businesses and expanding multi-channel commerce operations.",
    },
  ]}
/>
      {/* <InfoSplitSectiontwo
        eyebrow=""
        title="Integrated Services for "
        highlightText="Smarter Business Management"
        image="https://cdn.hboxdigital.com/public/hbox-pay/images/Rectangle%2034625008.png"
        descriptionOne="Modern businesses need more than standalone payment systems. They need connected tools that improve visibility, simplify operations, and create seamless customer experiences across every touchpoint."
        descriptionTwo="HBOXPay combines payment infrastructure, smart business tools, and scalable technology into one connected ecosystem designed to support growing businesses in fast moving industries."
        descriptionThree=""
        imagePosition="right"
      />
      
 */}
    </div>
  );
};

export default page;
