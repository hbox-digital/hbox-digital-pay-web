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
  titleOne="Simplify Financial "
  titleHighlight="Operations with Smarter "
  titleTwo="Invoicing & Accounting Tools"
  description="HBOX Pay Invoicing & Accounting solutions help businesses manage invoices, track payments, monitor financial activity, and maintain better operational visibility through one connected platform. Designed for growing operations, our tools simplify everyday financial workflows while supporting more organized business management."
  backgroundImage="https://cdn.hboxdigital.com/public/hbox-pay/images/service/Rectangle%2034624995%20(15).png"
  buttonText="Talk to Sales"
  buttonHref="/contact"
/>
<InfoSplitSectiontwo
  eyebrow=""
  title="Streamline Everyday "
  highlightText="Financial Management"
  image="https://cdn.hboxdigital.com/public/hbox-pay/images/service/Rectangle%2034625008%20(11).png"
  descriptionOne="HBOX Pay Invoicing & Accounting solutions help businesses simplify financial workflows through connected tools designed to improve organization, operational visibility, and payment management across daily business operations."
  descriptionTwo=""
  descriptionThree=""
  imagePosition="right"
/>
<FeatureCardsSection
  cards={[
    {
      image:
        "https://cdn.hboxdigital.com/public/hbox-pay/images/service/Rectangle%20161123887%20(10).png",
      eyebrow: "",
      title: "Invoicing & ",
      highlightText: "Accounting Capabilities",
      description:
        "Generate and manage invoices efficiently through tools designed to simplify billing and payment workflows.",
      listTitle: "Features Include",
      points: [
        "Invoice generation",
        "Payment tracking",
        "Billing management",
        "Organized financial records",
      ],
    },
    {
      image:
        "https://cdn.hboxdigital.com/public/hbox-pay/images/service/Rectangle%20161123886%20(9).png",
      eyebrow: "",
      title: "Payment ",
      highlightText: "Tracking & Visibility",
      description:
        "Monitor transactions and payment activity through centralized tools designed to improve financial visibility and operational accuracy.",
      listTitle: "Benefits",
      points: [
        "Payment monitoring",
        "Transaction visibility",
        "Improved financial organization",
        "Better operational tracking",
      ],
    },
    {
      image:
        "https://cdn.hboxdigital.com/public/hbox-pay/images/service/Rectangle%20161123889%20(11).png",
      eyebrow: "",
      title: "Financial ",
      highlightText: "Reporting Tools",
      description:
        "Access reporting tools that provide better visibility into financial activity and business performance.",
      listTitle: "Reporting Features",
      points: [
        "Financial summaries",
        "Transaction reporting",
        "Revenue visibility",
        "Business activity insights",
      ],
    },
    {
      image:
        "https://cdn.hboxdigital.com/public/hbox-pay/images/service/Rectangle%20161123888%20(10).png",
      eyebrow: "",
      title: "Centralized ",
      highlightText: "Financial Management",
      description:
        "Manage invoicing and accounting operations across one or multiple business locations through a connected platform.",
      listTitle: "Management Advantages",
      points: [
        "Centralized operational visibility",
        "Unified financial management",
        "Multi location support",
        "Simplified workflow management",
      ],
    },
  ]}
/>

<SingleFeatureSection
  image="https://cdn.hboxdigital.com/public/hbox-pay/images/service/Rectangle%20161123890%20(7).png"
  eyebrow=""
  title="Organized "
  highlightText="Business Operations"
  description="Reduce manual processes and improve operational efficiency through connected invoicing and accounting systems."
  listTitle="Customer Management Features"
  points={[
    "Simplified financial workflows",
    "Better organization",
    "Improved operational efficiency",
    "Reduced manual management",
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
  highlightText="HBOX Pay Invoicing & Accounting"
  description="HBOX Pay combines invoicing tools, payment visibility, and financial reporting solutions designed to help businesses manage operations more efficiently."
  cards={[
    {
      title: "Simplified Invoice Management",
      description:
        "Create, manage, and track invoices through one connected system.",
      icon: "transaction",
    },
    {
      title: "Better Financial Visibility",
      description:
        "Monitor payments, transactions, and operational activity with centralized reporting tools.",
      icon: "performance",
    },
    {
      title: "Improved Operational Efficiency",
      description:
        "Reduce manual financial processes and simplify everyday accounting workflows.",
      icon: "integration",
    },
    {
      title: "Scalable Financial Solutions",
      description:
        "Tools designed to support growing businesses and expanding operational requirements.",
      icon: "business",
    },
  ]}
/>
      <CtaBannerSection
        title="Simplify Financial "
        highlightText="Operations with HBOX Pay"
        description="Explore invoicing and accounting solutions designed to improve organization, simplify workflows, and support modern business operations."
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
        "1.What is HBOX Pay Invoicing & Accounting?",
      answer:
        "HBOX Pay Invoicing & Accounting is a financial management solution designed to help businesses manage invoices, track payments, monitor transactions, and improve financial organization.",
    },
    {
      question:
        "2.Can businesses generate invoices through the platform?",
      answer:
        "Yes. Businesses can create and manage invoices through connected invoicing tools designed to simplify billing workflows.",
    },
    {
      question:
        "3.Does the system support payment tracking?",
      answer:
        "Yes. Businesses can monitor payment activity and transaction visibility through centralized tracking tools.",
    },
    {
      question:
        "4.Can businesses access financial reports?",
      answer:
        "Yes. HBOX Pay provides financial summaries, transaction reporting, and operational insights through connected reporting tools.",
    },
    {
      question:
        "5.Which industries can use HBOX Pay Invoicing & Accounting solutions?",
      answer:
        "Our solutions are designed for retail stores, hospitality businesses, restaurants, service providers, supermarkets, and enterprise operations.",
    },
    {
      question:
        "6.Is HBOX Pay Invoicing & Accounting easy to manage?",
      answer:
        "Yes. The platform is designed with a user friendly interface that simplifies invoicing and financial management workflows.",
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
