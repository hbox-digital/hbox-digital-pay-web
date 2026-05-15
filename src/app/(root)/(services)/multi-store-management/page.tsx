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
  titleOne="Centralized Multi "
  titleHighlight="Store Management for "
  titleTwo="Growing Businesses"
  description="HBOX Pay Multi Store Management helps businesses manage operations across multiple locations through one connected and centralized platform. Designed for retail chains, hospitality groups, supermarkets, and expanding businesses, our solutions provide greater visibility, operational consistency, and simplified management across every branch."
  backgroundImage="https://cdn.hboxdigital.com/public/hbox-pay/images/service/Rectangle%2034624995%20(11).png"
  buttonText="Talk to Sales"
  buttonHref="/contact"
/>
<InfoSplitSectiontwo
  eyebrow=""
  title="Manage Multiple Locations"
  highlightText=" with Greater Control"
  image="https://cdn.hboxdigital.com/public/hbox-pay/images/service/Rectangle%2034625008%20(7).png"
  descriptionOne="HBOX Pay Multi Store Management simplifies multi location operations by bringing payments, reporting, inventory, and workforce visibility into one connected system designed for modern business environments."
  descriptionTwo=""
  descriptionThree=""
  imagePosition="right"
/>
<FeatureCardsSection
  cards={[
    {
      image:
        "https://cdn.hboxdigital.com/public/hbox-pay/images/service/Rectangle%20161123887%20(6).png",
      eyebrow: "",
      title: "Multi Store ",
      highlightText: "Management Capabilities",
      description:
        "Manage multiple stores and business locations through one centralized platform designed for better operational control and visibility.",
      listTitle: "Features Include",
      points: [
        "Centralized operational management",
        "Unified business visibility",
        "Simplified location management",
        "Connected business operations",
      ],
    },
    {
      image:
        "https://cdn.hboxdigital.com/public/hbox-pay/images/service/Rectangle%20161123886%20(5).png",
      eyebrow: "",
      title: "Multi Location ",
      highlightText: "Reporting",
      description:
        "Access centralized reports and operational insights across all business branches through connected reporting tools.",
      listTitle: "Reporting Benefits",
      points: [
        "Unified reporting dashboards",
        "Multi branch performance visibility",
        "Centralized sales tracking",
        "Operational reporting insights",
      ],
    },
    {
      image:
        "https://cdn.hboxdigital.com/public/hbox-pay/images/service/Rectangle%20161123889%20(7).png",
      eyebrow: "",
      title: "Inventory Visibility ",
      highlightText: "Across Locations",
      description:
        "Monitor inventory levels and stock movement across multiple stores to maintain better inventory accuracy and operational planning.",
      listTitle: "Inventory Features",
      points: [
        "Cross location inventory tracking",
        "Centralized stock visibility",
        "Inventory movement monitoring",
        "Better inventory coordination",
      ],
    },
    {
      image:
        "https://cdn.hboxdigital.com/public/hbox-pay/images/service/Rectangle%20161123888%20(6).png",
      eyebrow: "",
      title: "Workforce & Employee ",
      highlightText: "Management",
      description:
        "Manage employees across different business locations while maintaining operational consistency and workforce visibility.",
      listTitle: "Management Advantages",
      points: [
        "Multi branch employee visibility",
        "Centralized workforce management",
        "Operational consistency",
        "Simplified employee coordination",
      ],
    },

  ]}
/>

<SingleFeatureSection
  image="https://cdn.hboxdigital.com/public/hbox-pay/images/service/Rectangle%20161123890%20(4).png"
  eyebrow=""
  title="Scalable "
  highlightText="Business Operations"
  description="Support business growth with infrastructure designed to scale alongside expanding operations and increasing operational demands."
  listTitle="Scalability Features"
  points={[
    "Flexible business expansion support",
    "Connected operational systems",
    "Scalable management tools",
    "Long term operational flexibility",
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
  highlightText="HBOX PayPay Multi Store Management"
  description="HBOX Pay combines centralized management, operational visibility, and scalable infrastructure to help businesses manage multi location operations more efficiently."
  cards={[
    {
      title: "Centralized Operational Visibility",
      description:
        "Monitor business performance, transactions, and operational activity across all locations through one connected platform.",
      icon: "transaction",
    },
    {
      title: "Better Business Coordination",
      description:
        "Maintain operational consistency and simplify management across multiple business branches.",
      icon: "performance",
    },
    {
      title: "Real Time Reporting & Insights",
      description:
        "Access live operational data and reporting tools designed to support faster and smarter decision making.",
      icon: "integration",
    },
    {
      title: "Flexible Growth Support",
      description:
        "Solutions designed to support businesses as they expand operations and increase operational complexity.",
      icon: "business",
    },
  ]}
/>
      <CtaBannerSection
        title="Simplify Multi Location"
        highlightText=" Business Operations"
        description="Explore centralized management solutions designed to improve visibility, operational efficiency, and business scalability."
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
        "1.What is HBOX Pay Multi Store Management?",
      answer:
        "HBOX Pay Multi Store Management is a centralized solution designed to help businesses manage operations, reporting, inventory, and workforce visibility across multiple locations.",
    },
    {
      question:
        "2.Can businesses monitor all locations from one system?",
      answer:
        "Yes. Businesses can manage and monitor multiple stores through one centralized platform.",
    },
    {
      question:
        "3.Does the system support centralized reporting?",
      answer:
        "Yes. HBOX Pay provides unified reporting and operational visibility across all business locations.",
    },
    {
      question:
        "4.Can inventory be managed across multiple stores?",
      answer:
        "Yes. Businesses can monitor inventory levels and stock movement across different locations through centralized inventory management tools.",
    },
    {
      question:
        "5.Which industries can use HBOX Pay Multi Store Management?",
      answer:
        "Our solutions are designed for retail chains, hospitality groups, restaurants, supermarkets, franchise businesses, and enterprise operations.",
    },
    {
      question:
        "6.Is HBOX Pay Multi Store Management scalable?",
      answer:
        "Yes. The platform is designed to support growing businesses and expanding multi location operations.",
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
