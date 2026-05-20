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
  titleOne="Build Stronger "
  titleHighlight="Customer Relationships "
  titleTwo="with Smarter CRM Tools"
  description="HBOX Pay Customer Management (CRM) helps businesses better understand, manage, and engage their customers through one connected platform. Designed for retail, hospitality, service businesses, and multi location operations."
  backgroundImage="https://cdn.hboxdigital.com/public/hbox-pay/images/service/Rectangle%2034624995%20(12).png"
  buttonText="Get Started"
  buttonHref="/contact"
/>
<InfoSplitSectiontwo
  eyebrow=""
  title="Create Better "
  highlightText="Customer Experiences"
  image="https://cdn.hboxdigital.com/public/hbox-pay/images/service/Rectangle%2034625008%20(8).png"
  descriptionOne="HBOX Pay CRM solutions bring customer data, purchase activity, and engagement tools into one centralized system designed to help businesses build stronger customer relationships and improve customer satisfaction across every interaction."
  descriptionTwo=""
  descriptionThree=""
  imagePosition="left"
/>
<FeatureCardsSection
  cards={[
    {
      image:
        "https://cdn.hboxdigital.com/public/hbox-pay/images/service/Rectangle%20161123887%20(7).png",
      eyebrow: "",
      title: "Customer Management ",
      highlightText: "Capabilities",
      description:
        "Manage customer information through organized profiles that provide better visibility into customer interactions and purchasing activity.",
      listTitle: "Features Include",
      points: [
        "Customer profile management",
        "Purchase history visibility",
        "Customer activity tracking",
        "Organized customer records",
      ],
    },
    {
      image:
        "https://cdn.hboxdigital.com/public/hbox-pay/images/service/Rectangle%20161123886%20(6).png",
      eyebrow: "",
      title: "Purchase & Transaction ",
      highlightText: "Tracking",
      description:
        "Monitor customer transactions and purchasing behavior to better understand customer preferences and business trends.",
      listTitle: "Benefits",
      points: [
        "Purchase tracking",
        "Customer spending insights",
        "Transaction visibility",
        "Improved customer understanding",
      ],
    },
    {
      image:
        "https://cdn.hboxdigital.com/public/hbox-pay/images/service/Rectangle%20161123889%20(8).png",
      eyebrow: "",
      title: "Customer Engagement ",
      highlightText: "Tools",
      description:
        "Support better customer communication and engagement through tools designed to improve customer experiences and retention.",
      listTitle: "Engagement Features",
      points: [
        "Customer interaction visibility",
        "Personalized customer experiences",
        "Improved relationship management",
        "Customer retention support",
      ],
    },
    {
      image:
        "https://cdn.hboxdigital.com/public/hbox-pay/images/service/Rectangle%20161123888%20(7).png",
      eyebrow: "",
      title: "Loyalty & Retention ",
      highlightText: "Support",
      description:
        "Strengthen customer relationships through loyalty focused tools designed to encourage repeat business and customer engagement.",
      listTitle: "Loyalty Advantages",
      points: [
        "Customer retention support",
        "Repeat customer visibility",
        "Loyalty integration capabilities",
        "Long term customer engagement",
      ],
    },
  ]}
/>

<SingleFeatureSection
  image="https://cdn.hboxdigital.com/public/hbox-pay/images/service/Rectangle%20161123890%20(5).png"
  eyebrow=""
  title="Multi Location"
  highlightText=" Customer Visibility"
  description="Access customer information across multiple business locations through one connected CRM platform."
  listTitle="Multi Store Features"
  points={[
    "Centralized customer visibility",
    "Connected customer data",
    "Unified customer management",
    "Consistent customer experiences",
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
  highlightText="HBOX Pay CRM"
  description="HBOX Pay combines customer visibility, engagement tools, and operational simplicity to help businesses create better customer experiences and long term loyalty."
  cards={[
    {
      title: "Better Customer Visibility",
      description:
        "Understand customer behavior and purchasing activity through centralized customer insights.",
      icon: "transaction",
    },
    {
      title: "Improved Customer Engagement",
      description:
        "Build stronger customer relationships through organized engagement and communication tools.",
      icon: "performance",
    },
    {
      title: "Centralized Customer Management",
      description:
        "Manage customer information across one or multiple business locations through a connected platform.",
      icon: "integration",
    },
    {
      title: "Scalable CRM Solutions",
      description:
        "CRM tools designed to support growing businesses and evolving customer engagement strategies.",
      icon: "business",
    },
  ]}
/>
      <CtaBannerSection
        title="Strengthen Customer Relationships "
        highlightText="with HBOX Pay CRM"
        description="Explore customer management solutions designed to improve engagement, simplify customer visibility, and support long term business growth."
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
        "1.What is HBOX Pay Customer Management (CRM)?",
      answer:
        "HBOX Pay CRM is a customer management solution designed to help businesses manage customer information, track purchase activity, and improve customer engagement.",
    },
    {
      question:
        "2.Can businesses track customer purchase history?",
      answer:
        "Yes. Businesses can monitor customer transactions and purchase activity through centralized customer profiles.",
    },
    {
      question:
        "3.Does HBOX Pay CRM support multi location businesses?",
      answer:
        "Yes. Customer information and engagement visibility can be managed across multiple business locations through one connected platform.",
    },
    {
      question:
        "4. Can businesses improve customer retention with HBOX Pay CRM?",
      answer:
        "Yes. The platform includes customer engagement and loyalty support tools designed to help businesses strengthen customer relationships and encourage repeat business.",
    },
    {
      question:
        "5. Which industries can use HBOX Pay CRM solutions?",
      answer:
        "Our CRM solutions are designed for retail stores, restaurants, hospitality businesses, service providers, supermarkets, and enterprise operations.",
    },
    {
      question:
        "6. Is HBOX Pay CRM easy to use?",
      answer:
        "Yes. The platform is designed with a user friendly interface that simplifies customer management and engagement workflows.",
    },
  ]}
/>
      {/* <InfoSplitSectiontwo
        eyebrow=""
        title="Integrated Services for "
        highlightText="Smarter Business Management"
        image="https://cdn.hboxdigital.com/public/hbox-pay/images/Rectangle%2034625008.png"
        descriptionOne="Modern businesses need more than standalone payment systems. They need connected tools that improve visibility, simplify operations, and create seamless customer experiences across every touchpoint."
        descriptionTwo="hbox pay combines payment infrastructure, smart business tools, and scalable technology into one connected ecosystem designed to support growing businesses in fast moving industries."
        descriptionThree=""
        imagePosition="right"
      />
      
 */}
    </div>
  );
};

export default page;
