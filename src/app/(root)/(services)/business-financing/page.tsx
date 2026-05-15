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
  titleOne="Flexible Business "
  titleHighlight="Financing Designed "
  titleTwo="for Growth"
  description="HBOX Pay Business Financing helps businesses access funding solutions designed to support growth, improve cash flow, and manage operational expansion more efficiently. Whether upgrading payment hardware, expanding locations, increasing inventory. Our financing solutions are built to support modern businesses at every stage of growth."
  backgroundImage="https://cdn.hboxdigital.com/public/hbox-pay/images/service/Rectangle%2034624995%20(16).png"
  buttonText="Talk to Sales"
  buttonHref="/contact"
/>
<InfoSplitSectiontwo
  eyebrow=""
  title="Support Your Business "
  highlightText="Growth with Greater Flexibility"
  image="https://cdn.hboxdigital.com/public/hbox-pay/images/service/Rectangle%2034625008%20(12).png"
  descriptionOne="HBOX Pay Business Financing helps businesses access financing solutions designed to support operational stability and long term growth."
  descriptionTwo="From payment technology upgrades to business expansion initiatives, businesses can access funding opportunities that align with evolving operational needs."
  descriptionThree=""
  imagePosition="left"
/>
<FeatureCardsSection
  cards={[
    {
      image:
        "https://cdn.hboxdigital.com/public/hbox-pay/images/service/Rectangle%20161123887%20(11).png",
      eyebrow: "",
      title: "Business Financing ",
      highlightText: "Capabilities",
      description:
        "Access financing options designed to support different business goals, operational requirements, and growth strategies.",
      listTitle: "Features Include",
      points: [
        "Business growth financing",
        "Operational funding support",
        "Flexible financing options",
        "Business expansion assistance",
      ],
    },
    {
      image:
        "https://cdn.hboxdigital.com/public/hbox-pay/images/service/Rectangle%20161123886%20(10).png",
      eyebrow: "",
      title: "Hardware & ",
      highlightText: "Technology Financing",
      description:
        "Support business upgrades and payment technology investments through financing solutions designed for operational improvement.",
      listTitle: "Financing Benefits",
      points: [
        "Payment hardware financing",
        "Technology upgrade support",
        "Operational investment flexibility",
        "Modern infrastructure support",
      ],
    },
    {
      image:
        "https://cdn.hboxdigital.com/public/hbox-pay/images/service/Rectangle%20161123889%20(12).png",
      eyebrow: "",
      title: "Business Expansion ",
      highlightText: "Support",
      description:
        "Access financial solutions designed to help businesses scale operations and support long term business growth.",
      listTitle: "Expansion Features",
      points: [
        "Growth focused funding",
        "Multi location expansion support",
        "Operational scaling assistance",
        "Flexible business investment solutions",
      ],
    },
    {
      image:
        "https://cdn.hboxdigital.com/public/hbox-pay/images/service/Rectangle%20161123888%20(11).png",
      eyebrow: "",
      title: "Simplified Financing ",
      highlightText: "Process",
      description:
        "Designed to help businesses explore financing opportunities through a straightforward and business focused process.",
      listTitle: "Advantages",
      points: [
        "Streamlined financing support",
        "Business focused solutions",
        "Flexible operational funding",
        "Simplified business financing access",
      ],
    },
  ]}
/>

<SingleFeatureSection
  image="https://cdn.hboxdigital.com/public/hbox-pay/images/service/Rectangle%20161123890%20(8).png"
  eyebrow=""
  title="Scalable Financial "
  highlightText="Support"
  description="Financing solutions designed to support businesses as operational requirements and growth opportunities continue to evolve."
  listTitle="Scalability Benefits"
  points={[
    "Long term business support",
    "Growth aligned financing",
    "Flexible operational funding",
    "Scalable financial solutions",
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
  highlightText="HBOX Pay Business Financing"
  description="HBOX Pay combines operational understanding with flexible financing support designed to help businesses invest in growth with greater confidence."
  cards={[
    {
      title: "Flexible Business Support",
      description:
        "Access financing opportunities designed around real operational and business requirements.",
      icon: "transaction",
    },
    {
      title: "Growth Focused Solutions",
      description:
        "Support expansion, operational upgrades, and business development through scalable financing options.",
      icon: "performance",
    },
    {
      title: "Simplified Financial Access",
      description:
        "Explore financing opportunities through a streamlined and business focused process.",
      icon: "integration",
    },
    {
      title: "Scalable Business Financing",
      description:
        "Financing solutions designed to support businesses as they continue to grow and evolve.",
      icon: "business",
    },
  ]}
/>
      <CtaBannerSection
        title="Invest in Business "
        highlightText="Growth with HBOX Pay"
        description="Explore financing solutions designed to support expansion, operational flexibility, and long term business success."
        backgroundImage="https://cdn.hboxdigital.com/public/hbox-pay/images/Rectangle%2034625007.png"
        buttonText="Request a Consultation"
        buttonHref="/contact"
      />
<FaqSectionreuse
  title="Frequently Asked"
  highlightText="Questions"
  faqs={[
    {
      question:
        "1.What is HBOX Pay Business Financing?",
      answer:
        "HBOX Pay Business Financing provides funding solutions designed to help businesses support growth, improve operational flexibility, and invest in expansion opportunities.",
    },
    {
      question:
        "2.What can businesses use financing for?",
      answer:
        "Businesses can use financing for operational growth, payment hardware upgrades, technology investments, inventory expansion, and business development initiatives.",
    },
    {
      question:
        "3.Are financing solutions available for growing businesses?",
      answer:
        "Yes. HBOX Pay financing solutions are designed to support businesses at different stages of growth and expansion.",
    },
    {
      question:
        "4.Can businesses finance payment hardware and technology upgrades?",
      answer:
        "Yes. Financing options are available to support payment hardware, POS systems, and operational technology investments.",
    },
    {
      question:
        "5.Which industries can use HBOX Pay Business Financing?",
      answer:
        "Our financing solutions are designed for retail stores, restaurants, hospitality businesses, service providers, supermarkets, and enterprise operations.",
    },
    {
      question:
        "6.Is the financing process designed for business flexibility?",
      answer:
        "Yes. HBOX Pay financing solutions are built to provide businesses with flexible funding opportunities aligned with operational requirements and growth plans.",
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
