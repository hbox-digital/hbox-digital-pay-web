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
        titleOne="The Accessories Behind Better "
        titleHighlight="Business Operations"
        titleTwo=""
        description="Complete your payment system with smart POS accessories designed to keep your business running faster, smoother, and more efficiently."
        backgroundImage="https://cdn.hboxdigital.com/public/hbox-pay/images/service/Rectangle%2034624995%20(16).png"
        buttonText="Shop Accessories"
        buttonHref="/contact"
      />
      <InfoSplitSectiontwo
        eyebrow=""
        title="Product "
        highlightText="Overview"
        image="https://cdn.hboxdigital.com/public/hbox-pay/images/Rectangle%2034625008%20(18).png"
        descriptionOne="HBOX Pay accessories are built to enhance your POS system and simplify daily operations. From receipt printers and cash drawers to barcode scanners and charging solutions, every accessory is designed to integrate seamlessly with your payment setup."
        descriptionTwo="Whether you run a retail store, restaurant, cafe, or service business, the right accessories help create faster checkouts, better organization, and smoother customer experiences."
        descriptionThree=""
        imagePosition="left"
      />
      <FeatureCardsSection
        cards={[
          {
            image:
              "https://cdn.hboxdigital.com/public/hbox-pay/images/Rectangle%20161123887%20(14).png",
            eyebrow: "Newland N910",
            title: "Smart Portable Payments ",
            highlightText: "for Modern Business",
            description:
              "The Newland N910 is a compact Android payment terminal designed for businesses that need fast, flexible, and secure mobile payments. Built for daily business operations, it combines wireless connectivity, touchscreen functionality, and reliable payment processing into one portable device.",
            listTitle: "Features Include",
            points: [
              "Portable wireless payment terminal",
              "Accept tap, swipe, chip, and mobile wallet payments",
              "Android powered smart POS experience",
              "Compact lightweight design",
              "Secure encrypted transactions",
              "Built for mobile business operations",
            ],
          },
          {
            image:
              "https://cdn.hboxdigital.com/public/hbox-pay/images/Rectangle%20161123886%20(13).png",
            eyebrow: "Poynt C",
            title: "Compact POS Built for ",
            highlightText: "Faster Checkout",
            description:
              "The Poynt C delivers a sleek and modern payment experience in a compact countertop design. Built for businesses that want efficient checkout operations without bulky hardware, it combines smart payment technology with fast transaction processing.",
            listTitle: "Key Features",
            points: [
              "Compact countertop payment solution",
              "Smart touchscreen POS interface",
              "Fast and reliable payment processing",
              "Supports contactless and mobile payments",
              "Cloud connected business operations",
              "Modern design for retail and hospitality",
            ],
          },
          {
            image:
              "https://cdn.hboxdigital.com/public/hbox-pay/images/Rectangle%20161123889%20(15).png",
            eyebrow: "A920 Pro",
            title: "Advanced Mobile POS for",
            highlightText: "Fast Moving Businesses",
            description:
              "The A920 Pro is a next generation Android payment terminal designed for businesses that require speed, mobility, and high performance processing. With upgraded functionality and seamless payment capabilities, it helps businesses deliver faster customer experiences.",
            listTitle: "Key Features",
            points: [
              "Advanced Android smart POS terminal",
              "Portable wireless payment processing",
              "Built in receipt printing",
              "Faster performance for busy environments",
              "Secure payment technology",
              "Supports all modern payment methods",
            ],
          },
          {
            image:
              "https://cdn.hboxdigital.com/public/hbox-pay/images/Rectangle%20161123890%20(11).png",
            eyebrow: "E500",
            title: "Compact Payments ",
            highlightText: "Made Simple",
            description:
              "The e500 is a sleek and space saving POS solution built for businesses that need reliable payment processing in a compact setup. Designed for smooth checkout experiences, it helps businesses process transactions quickly and efficiently.",
            listTitle: "Key Features",
            points: [
              " Compact countertop POS design",
              "Fast secure payment processing",
              "Modern touchscreen experience",
              "Supports contactless and digital payments",
              "Reliable performance for daily operations",
              "Ideal for small business environments",
            ],
          },
        ]}
      />

<SingleFeatureSection
  image="https://cdn.hboxdigital.com/public/hbox-pay/images/service/Rectangle%20161123890%20(8).png"
  eyebrow="Clover Mini 3rd Generation"
  title="Big POS Performance in "
  highlightText="a Compact Setup"
  description="The Clover Mini 3rd Generation delivers powerful payment processing and business management tools in a compact countertop design. Built for growing businesses, it combines speed, flexibility, and modern checkout experiences into one smart POS system."
  listTitle="Key Features"
  points={[
    "Compact all in one POS system",
    "Fast checkout and payment processing",
    "Accepts tap, chip, swipe, and mobile payments",
    "Modern touchscreen interface",
    "Business management and reporting tools",
    "Perfect for retail and restaurant operations",
  ]}
/>
<SupportProcessSectionpro
  title="Why Businesses Choose "
  highlightText="HBOX Pay Accessories"
  description="HBOX Pay accessories are designed to support smoother operations, faster transactions, and better compatibility across modern business environments."
  cards={[
    {
      title: "Seamless POS Compatibility",
      description:
        "Designed to work smoothly with HBOX Pay POS systems and payment devices.",
      icon: "transaction",
    },
    {
      title: "Faster Checkout Experience",
      description:
        "Reduce delays and improve transaction speed at the counter.",
      icon: "performance",
    },
    {
      title: "Built for Daily Operations",
      description:
        "Reliable hardware accessories made for high usage environments.",
      icon: "integration",
    },
    {
      title: "Professional Setup",
      description:
        "Create a clean, organized, and customer friendly checkout experience.",
      icon: "business",
    },
    
  ]}
/>
      <IndustriesSupportGrid
        title="Best "
        highlightText="For"
        description=""
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

      <CtaBannerSection
        title="Build a Smarter "
        highlightText="Checkout Experience"
        description="Complete your POS setup with reliable accessories designed to improve speed, organization, and customer experience across your business."
        backgroundImage="https://cdn.hboxdigital.com/public/hbox-pay/images/Rectangle%2034625007.png"
        buttonText="Shop Accessories"
        buttonHref="/contact"
      />
<FaqSectionreuse
  title="Frequently Asked"
  highlightText="Questions"
  faqs={[
    {
      question:
        "1.Are HBOX Pay accessories compatible with all HBOX POS systems?",
      answer:
        "Most HBOX Pay accessories are designed for seamless compatibility with supported POS devices and payment terminals.",
    },
    {
      question:
        "2.Can I purchase accessories separately?",
      answer:
        "Yes. Businesses can purchase accessories individually based on operational needs.",
    },
    {
      question:
        "3.What accessories are available for retail businesses?",
      answer:
        "Retail businesses can use receipt printers, barcode scanners, cash drawers, POS stands, and connectivity accessories.",
    },
    {
      question:
        "4.Do the accessories support high volume business operations?",
      answer:
        "Yes. HBOX Pay accessories are built for reliable daily performance in busy business environments.",
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
