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
  titleOne="Build Customer "
  titleHighlight="Loyalty That Drives "
  titleTwo="Repeat Business"
  description="From rewards programs and customer incentives to personalized engagement opportunities, HBOX Pay helps businesses turn everyday transactions into long term customer relationships."
  backgroundImage="https://cdn.hboxdigital.com/public/hbox-pay/images/service/Rectangle%2034624995%20(13).png"
  buttonText="Talk to Sales"
  buttonHref="/contact"
/>
<InfoSplitSectiontwo
  eyebrow=""
  title="Turn One Time Customers "
  highlightText="Into Loyal Customers"
  image="https://cdn.hboxdigital.com/public/hbox-pay/images/service/Rectangle%2034625008%20(9).png"
  descriptionOne="HBOX Pay Loyalty Programs help businesses create rewarding customer experiences that increase engagement, strengthen retention, and encourage repeat purchases through one connected platform."
  descriptionTwo="Whether operating a single location or multiple business branches, businesses can manage loyalty programs efficiently while delivering more personalized customer experiences."
  descriptionThree=""
  imagePosition="right"
/>
<FeatureCardsSection
  cards={[
    {
      image:
        "https://cdn.hboxdigital.com/public/hbox-pay/images/service/Rectangle%20161123887%20(8).png",
      eyebrow: "",
      title: "Loyalty Program ",
      highlightText: "Capabilities",
      description:
        "Create rewards based experiences that encourage customers to return and engage more frequently with your business.",
      listTitle: "Features Include",
      points: [
        "Points based rewards",
        "Customer incentives",
        "Repeat purchase rewards",
        "Customer engagement programs",
      ],
    },
    {
      image:
        "https://cdn.hboxdigital.com/public/hbox-pay/images/service/Rectangle%20161123886%20(7).png",
      eyebrow: "",
      title: "Personalized Customer ",
      highlightText: "Experiences",
      description:
        "Deliver more meaningful customer interactions through loyalty solutions designed to support personalized engagement and retention.",
      listTitle: "Benefits",
      points: [
        "Better customer engagement",
        "Personalized rewards opportunities",
        "Improved customer experiences",
        "Long term customer retention",
      ],
    },
    {
      image:
        "https://cdn.hboxdigital.com/public/hbox-pay/images/service/Rectangle%20161123889%20(9).png",
      eyebrow: "",
      title: "Customer Activity ",
      highlightText: "Tracking",
      description:
        "Monitor customer participation, purchase behavior, and loyalty activity through centralized tracking tools.",
      listTitle: "Tracking Features",
      points: [
        "Customer purchase visibility",
        "Loyalty activity tracking",
        "Reward usage monitoring",
        "Customer engagement insights",
      ],
    },
    {
      image:
        "https://cdn.hboxdigital.com/public/hbox-pay/images/service/Rectangle%20161123888%20(8).png",
      eyebrow: "",
      title: "Multi Location Loyalty ",
      highlightText: "Management",
      description:
        "Manage loyalty programs across multiple business locations through one centralized system.",
      listTitle: "Multi Store Benefits",
      points: [
        "Centralized loyalty management",
        "Consistent customer experiences",
        "Connected customer engagement",
        "Unified loyalty visibility",
      ],
    },
  ]}
/>

<SingleFeatureSection
  image="https://cdn.hboxdigital.com/public/hbox-pay/images/service/Rectangle%20161123890%20(6).png"
  eyebrow=""
  title="Flexible Loyalty"
  highlightText=" Solutions"
  description="Build loyalty programs that align with your business goals and customer engagement strategies."
  listTitle="Flexibility Advantages"
  points={[
    "Scalable loyalty programs",
    "Customer focused experiences",
    "Adaptable engagement tools",
    "Business growth support",
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
  highlightText="HBOX Pay Loyalty Programs"
  description="HBOX Pay combines customer rewards, engagement tools, and operational simplicity to help businesses create meaningful customer relationships and improve retention."
  cards={[
    {
      title: "Better Customer Retention",
      description:
        "Encourage repeat business through rewards and loyalty focused customer experiences.",
      icon: "transaction",
    },
    {
      title: "Stronger Customer Engagement",
      description:
        "Create more personalized interactions that improve customer satisfaction and long term loyalty.",
      icon: "performance",
    },
    {
      title: "Centralized Loyalty Management",
      description:
        "Manage customer rewards and loyalty programs across one or multiple business locations through a connected platform.",
      icon: "integration",
    },
    {
      title: "Scalable Loyalty Solutions",
      description:
        "Loyalty tools designed to support growing businesses and evolving customer engagement strategies.",
      icon: "business",
    },
  ]}
/>
      <CtaBannerSection
        title="Create Stronger Customer "
        highlightText="Relationships with HBOX Pay"
        description="Explore loyalty solutions designed to improve customer retention, increase engagement, and support long term business growth."
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
        "1.What are HBOX Pay Loyalty Programs?",
      answer:
        "HBOX Pay Loyalty Programs are customer engagement solutions designed to help businesses reward customers, improve retention, and encourage repeat purchases.",
    },
    {
      question:
        "2.Can businesses create rewards programs for customers?",
      answer:
        "Yes. Businesses can create customer rewards and loyalty experiences designed to increase engagement and repeat business.",
    },
    {
      question:
        "3.Can loyalty programs be managed across multiple locations?",
      answer:
        "Yes. HBOX Pay supports centralized loyalty management across multiple business branches and locations.",
    },
    {
      question:
        "4.Can businesses track customer loyalty activity?",
      answer:
        "Yes. Businesses can monitor customer participation, purchase activity, and reward engagement through centralized tracking tools.",
    },
    {
      question:
        "5.Which industries can use HBOX Pay Loyalty Programs?",
      answer:
        "Our loyalty solutions are designed for retail stores, restaurants, hospitality businesses, supermarkets, service providers, and enterprise operations.",
    },
    {
      question:
        "6.Are HBOX Pay Loyalty Programs easy to manage?",
      answer:
        "Yes. The platform is designed with a user friendly interface that simplifies loyalty management and customer engagement workflows.",
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
