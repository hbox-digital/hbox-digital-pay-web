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
        titleOne="Secure Payment Processing "
        titleHighlight="Built for Modern Businesses "
        titleTwo="for Modern Business Operations"
        description="From card payments and contactless transactions to digital wallets and QR payments, hbox pay provides businesses with the flexibility and reliability needed to deliver smooth payment experiences every day."
        backgroundImage="https://cdn.hboxdigital.com/public/hbox-pay/images/Rectangle%2034624995%20(5).png"
        buttonText="Talk to Sales"
        buttonHref="/contact"
      />
      <InfoSplitSectiontwo
        eyebrow=""
        title="Simplify Every "
        highlightText="Transaction"
        image="https://cdn.hboxdigital.com/public/hbox-pay/images/Rectangle%2034625008%20(2).png"
        descriptionOne="Modern businesses need payment systems that are fast, secure, and dependable. Delayed transactions, limited payment options, and unreliable systems create friction that impacts both operations and customer experience."
        descriptionTwo="Whether operating in store, mobile, or across multiple business locations, businesses can process payments confidently through a secure and scalable payment infrastructure."
        descriptionThree=""
        imagePosition="left"
      />
<FeatureCardsSection
  cards={[
    {
      image:
        "https://cdn.hboxdigital.com/public/hbox-pay/images/Rectangle%20161123887%20(2).png",
      eyebrow: "",
      title: "Fast & Reliable",
      highlightText: "Transactions",
      description:
        "Deliver seamless payment experiences with optimized transaction processing designed to reduce delays and improve checkout efficiency.",
      listTitle: "Features Include",
      points: [
        "Fast payment authorization",
        "Reliable transaction processing",
        "Stable payment connectivity",
        "Smooth checkout experiences",
      ],
    },
    {
      image:
        "https://cdn.hboxdigital.com/public/hbox-pay/images/Rectangle%20161123886%20(1).png",
      eyebrow: "",
      title: "Multiple",
      highlightText: "Payment Methods",
      description:
        "Support modern customer payment preferences with flexible payment acceptance options designed for today’s commerce environments.",
      listTitle: "Supported Payments",
      points: [
        "Credit & debit cards",
        "Contactless payments",
        "QR payments",
        "Digital wallets",
        "Mobile payments",
      ],
    },
  ]}
/>
<FeatureCardsSection
  cards={[
    {
      image:
        "https://cdn.hboxdigital.com/public/hbox-pay/images/Rectangle%20161123889%20(3).png",
      eyebrow: "",
      title: "Secure Payment",
      highlightText: "Infrastructure",
      description:
        "Protect transactions and customer information with advanced payment security technologies and encrypted processing systems.",
      listTitle: "Security Features",
      points: [
        "Encrypted payment processing",
        "Secure transaction management",
        "Fraud protection support",
        "Reliable payment infrastructure",
      ],
    },
    {
      image:
        "https://cdn.hboxdigital.com/public/hbox-pay/images/Rectangle%20161123888%20(2).png",
      eyebrow: "",
      title: "Flexible Business",
      highlightText: "Integration",
      description:
        "Integrate payment processing solutions into existing business operations and payment environments with minimal disruption.",
      listTitle: "Integration Benefits",
      points: [
        "POS system compatibility",
        "Multi device support",
        "Flexible deployment options",
        "Scalable infrastructure",
      ],
    },
  ]}
/>
      <SingleFeatureSection
        image="https://cdn.hboxdigital.com/public/hbox-pay/images/Rectangle%20161123890%20(1).png"
        eyebrow=""
        title="Multi Location "
        highlightText="Payment Support"
        description="Manage transactions across multiple business locations while maintaining operational consistency and centralized visibility"
        listTitle="Multi Business Capabilities"
        points={[
  "Centralized payment visibility",
  "Unified transaction reporting",
  "Scalable payment management",
  "Consistent transaction performance",
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
  title="Built for Real Business Environments"
  highlightText=""
  description="hbox pay combines modern software functionality with a user friendly experience designed to support daily business operations without unnecessary complexity."
  cards={[
    {
      title: "Easy to Use",
      description:
        "Clean and intuitive software designed for fast adoption and efficient day to day use.",
      icon: "transaction",
    },
    {
      title: "Reliable Performance",
      description:
        "Stable transaction processing and dependable system performance designed for busy business environments.",
      icon: "performance",
    },
    {
      title: "Flexible & Scalable",
      description:
        "Solutions designed to grow alongside business operations and changing operational requirements.",
      icon: "business",
    },
    {
      title: "Connected Business Tools",
      description:
        "Manage payments, inventory, reporting, and customer operations through one integrated platform.",
      icon: "integration",
    },
  ]}
/>
      <CtaBannerSection
        title="Upgrade Your Business"
        highlightText=" with Smarter POS Software"
        description="Discover a POS system designed to simplify operations, improve efficiency, and support modern business growth."
        backgroundImage="https://cdn.hboxdigital.com/public/hbox-pay/images/Rectangle%2034625007.png"
        buttonText="Get Started"
        buttonHref="/contact"
      />
      <FaqSectionreuse
  title="Frequently Asked"
  highlightText="Questions"
  faqs={[
    {
      question: "1.What is hbox pay POS Software?",
      answer:
        "hbox pay POS Software is a business management platform designed to help businesses process transactions, manage inventory, track sales, and simplify daily operations.",
    },
    {
      question: "2.What industries can use hbox pay POS Software?",
      answer:
        "Our POS software is designed for retail stores, restaurants, cafes, hospitality businesses, supermarkets, and service based businesses.",
    },
    {
      question: "3.Does the software support multiple business locations?",
      answer:
        "Yes. hbox pay supports multi store management with centralized operational visibility and reporting.",
    },
    {
      question: "4.Can businesses track inventory through the POS system?",
      answer:
        "Yes. The software includes inventory management tools that help businesses monitor stock levels and product movement in real time.",
    },
    {
      question: "5.Does hbox pay POS Software support contactless payments?",
      answer:
        "Yes. The system supports contactless transactions, QR payments, digital wallets, and traditional card payments.",
    },
    {
      question: "6.Is hbox pay POS Software easy to use?",
      answer:
        "Yes. The platform is designed with a user friendly interface that helps businesses manage operations efficiently without complicated workflows.",
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
