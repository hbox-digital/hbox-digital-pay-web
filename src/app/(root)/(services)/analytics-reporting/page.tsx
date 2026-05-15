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
        titleOne="Turn Business Data "
        titleHighlight="Into Smarter Decisions"
        titleTwo=""
        description="HBOXPay Analytics & Reporting gives businesses real time visibility into sales, transactions, operational performance, and customer activity through centralized reporting tools designed for modern business operations. From daily transaction summaries to performance insights across multiple locations, businesses can access the information they need to make faster and more informed decisions."
        backgroundImage="https://cdn.hboxdigital.com/public/hbox-pay/images/Rectangle%2034624995%20(9).png"
        buttonText="Talk to Sales"
        buttonHref="/contact"
      />
<InfoSplitSectiontwo
  eyebrow=""
  title="Better Visibility Across Your "
  highlightText="Business Operations"
  image="https://cdn.hboxdigital.com/public/hbox-pay/images/Rectangle%2034625008%20(5).png"
  descriptionOne="Analytics & Reporting helps businesses monitor transactions, track sales performance, and gain better operational visibility through one connected platform. From daily reporting to multi location insights, businesses can access real time data designed to support smarter decisions and long term growth."
  descriptionTwo=""
  descriptionThree=""
  imagePosition="right"
/>
<FeatureCardsSection
  cards={[
    {
      image:
        "https://cdn.hboxdigital.com/public/hbox-pay/images/Rectangle%20161123887%20(4).png",
      eyebrow: "Analytics & Reporting Capabilities",
      title: "Real Time Sales",
      highlightText: "Reporting",
      description:
        "Access live sales data and transaction activity through centralized reporting dashboards designed for fast and accurate business visibility.",
      listTitle: "Features Include",
      points: [
        "Real time sales tracking",
        "Transaction summaries",
        "Daily and monthly reporting",
        "Business performance visibility",
      ],
    },
    {
      image:
        "https://cdn.hboxdigital.com/public/hbox-pay/images/Rectangle%20161123886%20(3).png",
      eyebrow: "Analytics & Reporting Capabilities",
      title: "Business Performance",
      highlightText: "Insights",
      description:
        "Monitor operational trends and understand how different areas of the business are performing through easy to analyze reporting tools.",
      listTitle: "Insights Include",
      points: [
        "Product performance tracking",
        "Operational activity monitoring",
        "Sales trend visibility",
        "Business growth analysis",
      ],
    },
    {
      image:
        "https://cdn.hboxdigital.com/public/hbox-pay/images/Rectangle%20161123889%20(5).png",
      eyebrow: "Analytics & Reporting Capabilities",
      title: "Multi Location",
      highlightText: "Reporting",
      description:
        "Manage reporting and operational visibility across multiple business locations through centralized analytics tools.",
      listTitle: "Multi Store Benefits",
      points: [
        "Centralized reporting dashboards",
        "Multi branch performance visibility",
        "Unified transaction reporting",
        "Scalable operational insights",
      ],
    },
    {
      image:
        "https://cdn.hboxdigital.com/public/hbox-pay/images/Rectangle%20161123888%20(4).png",
      eyebrow: "Analytics & Reporting Capabilities",
      title: "Transaction & Payment",
      highlightText: "Analytics",
      description:
        "Track transaction performance and payment activity to better understand customer purchasing behavior and operational efficiency.",
      listTitle: "Analytics Features",
      points: [
        "Transaction monitoring",
        "Payment activity tracking",
        "Operational reporting",
        "Customer transaction insights",
      ],
    },

  ]}
/>

<SingleFeatureSection
  image="https://cdn.hboxdigital.com/public/hbox-pay/images/Rectangle%20161123890%20(3).png"
  eyebrow=""
  title="Easy to Understand "
  highlightText="Reporting"
  description="Access simplified reports designed to help businesses make informed decisions without unnecessary complexity."
  listTitle="Reporting Advantages"
  points={[
    "User friendly dashboards",
    "Organized business data",
    "Clear reporting visibility",
    "Faster operational analysis",
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
  highlightText="HBOXPay Analytics & Reporting"
  description="HBOXPay combines real time reporting, operational insights, and centralized visibility to help businesses improve decision making and operational performance."
  cards={[
    {
      title: "Real Time Operational Insights",
      description:
        "Monitor business performance instantly through centralized reporting tools and live operational visibility.",
      icon: "transaction",
    },
    {
      title: "Simplified Business Reporting",
      description:
        "Access organized and easy to understand reports designed for faster analysis and smarter planning.",
      icon: "performance",
    },
    {
      title: "Centralized Data Management",
      description:
        "Manage reporting across one or multiple locations through a connected analytics platform.",
      icon: "integration",
    },
    {
      title: "Scalable Reporting Solutions",
      description:
        "Reporting tools designed to support growing businesses and expanding operational requirements.",
      icon: "business",
    },
  ]}
/>
      <CtaBannerSection
        title="Make Better Business "
        highlightText=" Decisions with Real Time Insights"
        description="Explore analytics and reporting solutions designed to improve visibility, simplify operations, and support smarter business growth."
        backgroundImage="https://cdn.hboxdigital.com/public/hbox-pay/images/Rectangle%2034625007.png"
        buttonText="Get Started"
        buttonHref="/contact"
      />
<FaqSectionreuse
  title="Frequently Asked"
  highlightText="Questions"
  faqs={[
    {
      question: "1.What is HBOXPay Analytics & Reporting?",
      answer:
        "HBOXPay Analytics & Reporting is a business reporting solution that helps businesses track sales, monitor transactions, analyze operational performance, and access real time business insights.",
    },
    {
      question: "2.Can businesses monitor sales in real time?",
      answer:
        "Yes. Businesses can access real time sales tracking and live transaction reporting through centralized dashboards.",
    },
    {
      question:
        "3.Does HBOXPay support reporting for multiple locations?",
      answer:
        "Yes. Businesses operating across multiple locations can manage centralized reporting and operational visibility from one platform.",
    },
    {
      question: "4.What types of reports are available?",
      answer:
        "HBOXPay provides sales reports, transaction summaries, operational insights, payment analytics, and business performance reporting.",
    },
    {
      question: "5.Is the reporting system easy to use?",
      answer:
        "Yes. The platform is designed with user friendly dashboards and simplified reporting tools for easier business analysis.",
    },
    {
      question:
        "6.Which industries can use HBOXPay Analytics & Reporting?",
      answer:
        "Our reporting solutions are designed for retail stores, hospitality businesses, restaurants, supermarkets, service providers, and enterprise operations.",
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
