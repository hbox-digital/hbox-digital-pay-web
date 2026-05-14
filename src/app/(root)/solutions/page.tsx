import CtaBannerSection from "@/components/contact-us/CtaBannerSection";
import FaqSectionreuse from "@/components/contact-us/FaqSectionreuse";
import HeroSectionContact from "@/components/contact-us/hero-sec";
import IndustriesSupportSection from "@/components/solutions/IndustriesSupportSection";
import InfoSplitSectiontthree from "@/components/solutions/InfoSplitSection";
import PerformanceGridSection from "@/components/solutions/PerformanceGridSection";



const page = () => {
  return (
    <div>
      <HeroSectionContact
  titleOne="Smart Payment "
  titleHighlight="Solutions Built "
  titleTwo="for Modern Business"
  description="HBOX Pay delivers advanced payment technology designed to simplify operations, accelerate transactions, and improve customer experiences. From smart Android POS systems to scalable payment infrastructure, our solutions combine performance, flexibility, and reliability for retail, hospitality, and enterprise businesses."
  backgroundImage="https://cdn.hboxdigital.com/public/hbox-pay/images/Rectangle%2034624995%20(1).png"
  buttonText="Get Started"
  buttonHref="/contact"
/>
<InfoSplitSectiontthree
  eyebrow="Flexible Solutions for Growing Businesses"
  title="Retail"
  highlightText="Payment Solutions"
  image="https://cdn.hboxdigital.com/public/hbox-pay/images/Rectangle%2034624996%20(1).png"
  imagePosition="left"

  descriptionOne="Create faster checkout experiences and manage day to day operations with smart retail payment systems designed for modern businesses."

  descriptionTwo="HBox Pay provides Android POS devices and payment hardware that help retailers process transactions quickly, reduce downtime, and improve customer service. From small stores to multi location retail operations, our solutions support flexible payment acceptance and smooth business operations."

  descriptionThree=""

  keyBenefits={[
    "Faster checkout experiences",
    "Reliable payment processing",
    "Smart Android POS systems",
    "Inventory and transaction management support",
    "Flexible hardware options for different store setups",
  ]}
/>

<InfoSplitSectiontthree
  eyebrow="Flexible Solutions for Growing Businesses"
  title="Restaurant & "
  highlightText="Hospitality Solutions"
  image="https://cdn.hboxdigital.com/public/hbox-pay/images/Rectangle%2034625028.png"
  imagePosition="right"

  descriptionOne="Keep service moving with portable and wireless payment systems built for restaurants, cafes, and hospitality businesses."

  descriptionTwo="HBox Pay helps businesses reduce wait times, improve table side payments, and deliver seamless customer experiences with reliable payment technology. Our wireless POS terminals support fast transactions and flexible payment acceptance across busy service environments."

  descriptionThree=""

//   keyBenefits={[
//     "Faster checkout experiences",
//     "Reliable payment processing",
//     "Smart Android POS systems",
//     "Inventory and transaction management support",
//     "Flexible hardware options for different store setups",
//   ]}

  extraLists={[
    {
      title: "Ideal for",
      items: [
        "Restaurants",
        "Cafes",
        "Food chains",
        "Hotels",
        "Hospitality businesses",
      ],
    },
    {
      title: "Features",
      items: [
        "Portable payment terminals",
        "Wireless payment support",
        "Contactless transactions",
        "Easy staff mobility",
        "Fast and secure payments",
      ],
    },
  ]}
/>
<InfoSplitSectiontthree
  eyebrow="Flexible Solutions for Growing Businesses"
  title="Self Service & "
  highlightText="Kiosk Solutions"
  image="https://cdn.hboxdigital.com/public/hbox-pay/images/Rectangle%2034625029.png"
  imagePosition="left"

  descriptionOne="Improve customer convenience with self service POS kiosks designed for high traffic business environments."

  descriptionTwo="HBox Pay kiosk solutions help businesses reduce queues, speed up ordering processes, and create efficient customer journeys. Built with modern touchscreen interfaces and secure payment technology, our kiosk systems support a smooth self service experience."

  descriptionThree=""

//   keyBenefits={[
//     "Faster checkout experiences",
//     "Reliable payment processing",
//     "Smart Android POS systems",
//     "Inventory and transaction management support",
//     "Flexible hardware options for different store setups",
//   ]}
extraLists={[
  {
    title: "Perfect For",
    items: [
      "Quick service restaurants",
      "Shopping malls",
      "Ticketing systems",
      "Service centers",
      "Retail self checkout stations",
    ],
  },
  {
    title: "Advantages",
    items: [
      "Faster customer flow",
      "Reduced waiting times",
      "Easy self checkout experience",
      "Modern touchscreen POS systems",
      "Secure payment processing",
    ],
  },
]}
/>
<InfoSplitSectiontthree
  eyebrow="Flexible Solutions for Growing Businesses"
  title="Enterprise "
  highlightText="Payment Infrastructure"
  image="https://cdn.hboxdigital.com/public/hbox-pay/images/Rectangle%2034625030.png"
  imagePosition="right"

  descriptionOne="Manage payments across multiple business locations with scalable payment infrastructure designed for enterprise operations."

  descriptionTwo="HBox Pay supports businesses that require centralized payment management, reliable hardware deployment, and consistent transaction performance across large operations. Our enterprise solutions are designed for scalability, security, and long term operational efficiency."

  descriptionThree=""

keyBenefits={[
  "Multi location deployment",
  "Centralized management support",
  "Secure transaction processing",
  "Reliable hardware performance",
  "Scalable payment systems",
]}

/>
<PerformanceGridSection
  title="Built for Reliability and"
  highlightText="Performance"
  description="HBOXPay combines modern payment technology with dependable hardware solutions to help businesses operate more efficiently."
  cards={[
    {
      title: "Fast Transactions",
      description:
        "Reduce checkout delays and improve customer satisfaction with optimized payment processing systems.",
      icon: "zap",
    },
    {
      title: "Flexible Hardware Options",
      description:
        "Choose from countertop devices, portable payment terminals, and self service kiosks based on your business requirements.",
      icon: "smartphone",
    },
    {
      title: "Secure Payment Technology",
      description:
        "Protect customer data with advanced payment security and encrypted transaction processing.",
      icon: "shield",
    },
    {
      title: "Easy Integration",
      description:
        "Integrate payment systems into existing workflows and operational environments with minimal disruption.",
      icon: "workflow",
    },
    {
      title: "Reliable Connectivity",
      description:
        "Maintain stable transactions with dependable wireless and network connectivity support.",
      icon: "wifi",
    },
  ]}
/>

<IndustriesSupportSection
  title="Industries"
  highlightText="We Support"
  description="HBOXPay solutions are designed for a wide range of industries and business environments."
  industries={[
    {
      title: "Retail Stores",
      icon: "store",
    },
    {
      title: "Restaurants",
      icon: "restaurant",
    },
    {
      title: "Cafes",
      icon: "cafe",
    },
    {
      title: "Supermarkets",
      icon: "supermarket",
    },
    {
      title: "Hospitality Businesses",
      icon: "hotel",
    },
    {
      title: "Service Providers",
      icon: "service",
    },
    {
      title: "Enterprise Operations",
      icon: "enterprise",
    },
    {
      title: "Events and Pop Up Businesses",
      icon: "event",
    },
  ]}
/>
 <CtaBannerSection
  title="Ready to Upgrade Your "
  highlightText="Payment Experience?"
  description="Talk to our team and discover payment solutions designed to support your business growth."
  backgroundImage="https://cdn.hboxdigital.com/public/hbox-pay/images/Rectangle%2034625007.png"
  buttonText="Contact Sales"
  buttonHref="/contact"
/>
<FaqSectionreuse
 title="Frequently Asked"
highlightText="Questions"
faqs={[
  {
    question:
      "What industries does HBOXPay support?",
    answer:
      "HBOXPay solutions are designed for retail stores, restaurants, cafes, hospitality businesses, supermarkets, service providers, and enterprise operations that require reliable and scalable payment technology.",
  },
  {
    question:
      "What types of payment hardware does HBOXPay offer?",
    answer:
      "HBOXPay provides smart Android POS systems, portable payment terminals, countertop devices, and self service kiosk solutions designed for modern business environments.",
  },
  {
    question:
      "Do HBOXPay solutions support contactless payments?",
    answer:
      "Yes. HBOXPay solutions support contactless payments, mobile wallets, QR payments, and traditional card transactions for a seamless customer experience.",
  },
  {
    question:
      "Can HBOXPay solutions scale with growing businesses?",
    answer:
      "Absolutely. Our payment infrastructure is built to support businesses as they expand operations, add locations, and manage higher transaction volumes.",
  },
  {
    question:
      "Can businesses use HBOXPay across multiple locations?",
    answer:
      "Yes. HBOXPay supports multi location deployment and centralized payment management for businesses operating across multiple branches or business environments.",
  },
  {
    question:
      "Does HBOXPay offer self service payment solutions?",
    answer:
      "Yes. HBOXPay provides self service kiosk and touchscreen POS solutions that help businesses improve efficiency and reduce customer wait times.",
  },
  {
    question:
      "How can businesses get started with HBOXPay?",
    answer:
      "Businesses can contact our sales team to explore payment solutions, discuss operational requirements, and find the right POS hardware for their business needs.",
  },
]}
/>
{/* <WhyBusinessesSection
  title="Why Businesses"
  highlightText="Contact HBOX Pay"
  description="Businesses rely on HBOX Pay for more than payment processing alone. From onboarding support to operational guidance, our team helps companies simplify transactions, manage hardware environments, and improve customer experiences across daily operations."
  backgroundImage="https://cdn.hboxdigital.com/public/hbox-pay/images/Rectangle%2034625000.png"
/>
<SupportProcessSection
  title="Our Support"
  highlightText="Process"
  description="Whether you are upgrading your POS system, expanding locations, improving checkout speed, or implementing integrated business tools, HBOX Pay provides support focused on practical business outcomes."
  cards={[
    {
      title: "Reach Out",
      description:
        "Contact the HBOX Pay team through sales or customer support channels depending on your business requirements.",
      icon: "headphones",
    },
    {
      title: "Connect With the Right Team",
      description:
        "Our specialists guide you toward the right payment, POS, or operational solutions tailored to your business.",
      icon: "users",
    },
    {
      title: "Get Business Focused Support",
      description:
        "Receive onboarding, setup guidance, troubleshooting, and long-term operational support from experienced experts.",
      icon: "badgeCheck",
    },
  ]}
/>

 */}
    </div>
  );
};

export default page;