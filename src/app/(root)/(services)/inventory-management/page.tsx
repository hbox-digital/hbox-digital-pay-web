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
        titleOne="Smarter Inventory "
        titleHighlight="Management for "
        titleTwo="Modern Businesses"
        description="hbox pay Inventory Management helps businesses track stock, monitor product movement, and maintain better operational control through a centralized and easy to manage system. Designed for retail, hospitality, supermarkets, and multi location businesses."
        backgroundImage="https://cdn.hboxdigital.com/public/hbox-pay/images/Rectangle%2034624995%20(8).png"
        buttonText="Talk to Sales "
        buttonHref="/contact"
      />
      <InfoSplitSectiontwo
        eyebrow=""
        title="Simplify "
        highlightText="Inventory Operations"
        image="https://cdn.hboxdigital.com/public/hbox-pay/images/Rectangle%2034625008%20(4).png"
        descriptionOne="hbox pay Inventory Management is designed to help businesses maintain accurate inventory visibility while simplifying daily operations across products, locations, and sales channels. Whether managing a single store or multiple business locations, businesses can track inventory in real time and make informed operational decisions through one connected platform."
        descriptionTwo=""
        descriptionThree=""
        imagePosition="right"
      />
      <FeatureCardsSection
        cards={[
          {
            image:
              "https://cdn.hboxdigital.com/public/hbox-pay/images/Rectangle%20161123887%20(3).png",
            eyebrow: "Key Features",
            title: "Real Time ",
            highlightText: "Inventory Tracking",
            description:
              "Monitor stock levels and product movement instantly through a centralized inventory system designed for operational visibility and accuracy.",
            listTitle: "Features Include",
            points: [
              "Real time stock updates",
              "Product movement tracking",
              "Inventory visibility across locations",
              "Improved stock accuracy",
            ],
          },
          {
            image:
              "https://cdn.hboxdigital.com/public/hbox-pay/images/Rectangle%20161123886%20(2).png",
            eyebrow: "Key Features",
            title: "Low Stock & ",
            highlightText: "Inventory Alerts",
            description:
              "Stay informed about inventory changes and avoid stock shortages through automated low stock notifications and inventory alerts.",
            listTitle: "Benefits",
            points: [
              "Low stock monitoring",
              "Faster restocking decisions",
              "Reduced inventory shortages",
              "Better operational planning",
            ],
          },
          {
            image:
              "https://cdn.hboxdigital.com/public/hbox-pay/images/Rectangle%20161123889%20(4).png",
            eyebrow: "Key Features",
            title: "Multi Location ",
            highlightText: "Inventory Management",
            description:
              "Manage inventory across multiple stores and business locations while maintaining centralized control and visibility.",
            listTitle: "Multi Store Features",
            points: [
              "Centralized inventory management",
              "Multi branch stock visibility",
              "Unified inventory reporting",
              "Scalable inventory operations",
            ],
          },
          {
            image:
              "https://cdn.hboxdigital.com/public/hbox-pay/images/Rectangle%20161123888%20(3).png",
            eyebrow: "Key Features",
            title: "Product & ",
            highlightText: "Category Management",
            description:
              "Organize products efficiently through simplified product management tools designed for easier inventory control and operational consistency.",
            listTitle: "Management Tools",
            points: [
              "Product categorization",
              "Inventory organization",
              "Product tracking",
              "Simplified stock management",
            ],
          },
        ]}
      />

<SingleFeatureSection
  image="https://cdn.hboxdigital.com/public/hbox-pay/images/Rectangle%20161123890%20(2).png"
  eyebrow="Key Features"
  title="Reporting & Inventory "
  highlightText="Insights"
  description="Access inventory reports and operational insights designed to help businesses improve stock planning and inventory performance."
  listTitle="Reporting Features"
  points={[
    "Inventory summaries",
    "Product performance tracking",
    "Stock movement reports",
    "Operational insights",
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
  title="Why Businesses Choose "
  highlightText="hbox pay Inventory Management"
  description="hbox pay combines real time tracking, centralized management, and operational simplicity to help businesses maintain better inventory control."
  cards={[
    {
      title: "Real Time Inventory Updates",
      description:
        "Track inventory changes instantly and maintain accurate stock visibility across business operations.",
      icon: "transaction",
    },
    {
      title: "Simplified Stock Management",
      description:
        "Manage products, inventory categories, and stock movement through an easy to use platform.",
      icon: "performance",
    },
    {
      title: "Centralized Operational Control",
      description:
        "Monitor inventory across single or multiple locations through one connected system.",
      icon: "integration",
    },
    {
      title: "Scalable Inventory Solutions",
      description:
        "Inventory tools designed to support growing businesses and expanding operations.",
      icon: "business",
    },
  ]}
/>
      <CtaBannerSection
        title="Take Control of Your "
        highlightText="Inventory Operations"
        description="Discover inventory management solutions designed to improve visibility, simplify operations, and support business growth."
        backgroundImage="https://cdn.hboxdigital.com/public/hbox-pay/images/Rectangle%2034625007%20(2).png"
        buttonText="Request a Demo"
        buttonHref="/contact"
      />
<FaqSectionreuse
  title="Frequently Asked"
  highlightText="Questions"
  faqs={[
    {
      question: "1. What is hbox pay Inventory Management?",
      answer:
        "hbox pay Inventory Management is a system designed to help businesses track stock, manage inventory, monitor product movement, and improve operational visibility.",
    },
    {
      question: "2. Can businesses manage inventory across multiple locations?",
      answer:
        "Yes. hbox pay supports multi location inventory management with centralized visibility and reporting.",
    },
    {
      question: "3. Does the system provide real time inventory tracking?",
      answer:
        "Yes. Businesses can monitor stock levels and inventory activity in real time.",
    },
    {
      question: "4. Can businesses receive low stock alerts?",
      answer:
        "Yes. The system provides inventory notifications and low stock alerts to help businesses maintain inventory availability.",
    },
    {
      question:
        "5. Which industries can use hbox pay Inventory Management?",
      answer:
        "Our inventory solutions are designed for retail stores, supermarkets, restaurants, hospitality businesses, and service based operations.",
    },
    {
      question:
        "6. Is hbox pay Inventory Management easy to use?",
      answer:
        "Yes. The platform is designed with a user friendly interface that simplifies inventory management and operational workflows.",
    },
  ]}
/>
 
    </div>
  );
};

export default page;
