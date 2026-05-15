import CtaBannerSection from "@/components/contact-us/CtaBannerSection";
import FaqSectionreuse from "@/components/contact-us/FaqSectionreuse";
import HeroSectionContact from "@/components/contact-us/hero-sec";
import InfoSplitSectiontwo from "@/components/products/InfoSplitSectiontwo";
import SupportProcessSectionpro from "@/components/products/SupportProcessproduct";
import FeatureCardsSection from "@/components/services/FeatureCardsSection";
import IndustriesSupportGrid from "@/components/services/IndustriesSupportGrid";
import ServicesGridSection from "@/components/services/ServicesGridSection";
import SingleFeatureSection from "@/components/services/SingleFeatureSection";
import HardwareSystemFeatures from "@/components/solutions/HardwareSystemFeatures";
import InfoSplitSectiontthree from "@/components/solutions/InfoSplitSection";

const page = () => {
  return (
    <div>
      <HeroSectionContact
        titleOne="Faster Ordering. "
        titleHighlight="Smarter Customer"
        titleTwo=" Experiences."
        description="HBOX Pay Kiosk Solutions help businesses simplify self ordering, reduce queues, and improve customer flow through modern self service technology built for fast paced environments. Designed for restaurants, retail stores, hospitality businesses, and high traffic operations."
        backgroundImage="https://cdn.hboxdigital.com/public/hbox-pay/images/service/Rectangle%2034624995%20(18).png"
        buttonText="Talk to Sales"
        buttonHref="/contact"
      />
      <InfoSplitSectiontthree
        eyebrow=""
        title="Why Self Service Kiosks"
        highlightText=" Matter for Your Business"
        image="https://cdn.hboxdigital.com/public/hbox-pay/images/service/Rectangle%2034625008%20(14).png"
        imagePosition="right"
        descriptionOne="HBOX Pay Kiosk Solutions help businesses streamline ordering and payment workflows through a connected self service experience that allows customers to browse, order, and pay independently. This not only improves operational speed but also helps staff focus on service quality and day to day business operations."
        descriptionTwo="Whether managing a quick service restaurant, café, retail environment, or high traffic business location, self service kiosks help create a more efficient and modern customer experience."
        descriptionThree=""
        extraLists={[
          {
            title: "Business Benefits",
            items: [
              "Faster customer ordering",
              "Reduced waiting times",
              "Improved operational efficiency",
              "Better customer flow management",
            ],
          },
          {
            title: "Features",
            items: [
              "Simplified self checkout experiences",
              "Reduced pressure on front line staff",
              "Modern customer interaction experience",
            ],
          },
        ]}
      />
            <SingleFeatureSection
        image="https://cdn.hboxdigital.com/public/hbox-pay/images/service/Rectangle%20161123902.png"
        eyebrow="Kiosk Hardware Overview"
        title="Built for High Traffic "
        highlightText="Self Service Environments"
        description="HBOX Pay Kiosk Solutions combine modern self ordering technology with integrated payment hardware designed to support faster customer interactions and smoother business operations. Built for reliability, ease of use, and operational efficiency, the kiosk system is designed to perform consistently in busy retail, restaurant, and hospitality environments."
        listTitle=""
        points={[
        ]}
      />
      <HardwareSystemFeatures />
<FeatureCardsSection
  cards={[
    {
      image:
        "https://cdn.hboxdigital.com/public/hbox-pay/images/service/Rectangle%20161123887%20(13).png",
      eyebrow: "Kiosk Solution Capabilities",
      title: "Faster Self ",
      highlightText: "Ordering Experiences",
      description:
        "Allow customers to browse, customize, and place orders independently through an intuitive self service interface.",
      listTitle: "Features Include",
      points: [
        "Self service ordering",
        "Faster checkout flow",
        "Simplified navigation",
        "Improved customer convenience",
      ],
    },
    {
      image:
        "https://cdn.hboxdigital.com/public/hbox-pay/images/service/Rectangle%20161123886%20(12).png",
      eyebrow: "Kitchen Display System Capabilities",
      title: "Integrated ",
      highlightText: "Payment Processing",
      description:
        "Support secure and seamless payments directly through the kiosk system using modern payment technology.",
      listTitle: "Payment Benefits",
      points: [
        "Contactless payment support",
        "Card payment acceptance",
        "Integrated payment processing",
        "Secure transaction management",
      ],
    },
    {
      image:
        "https://cdn.hboxdigital.com/public/hbox-pay/images/service/Rectangle%20161123889%20(14).png",
      eyebrow: "Kitchen Display System Capabilities",
      title: "Improved ",
      highlightText: "Operational Efficiency",
      description:
        "Reduce front counter congestion and help staff focus on food preparation, customer support, and operational tasks.",
      listTitle: "Efficiency Advantages",
      points: [
        "Reduced queue times",
        "Faster customer flow",
        "Improved operational organization",
        "Better service management",
      ],
    },
    {
      image:
        "https://cdn.hboxdigital.com/public/hbox-pay/images/service/Rectangle%20161123888%20(13).png",
      eyebrow: "Kitchen Display System Capabilities",
      title: "Modern ",
      highlightText: "Customer Experience",
      description:
        "Deliver a more interactive and technology driven experience that aligns with modern customer expectations.",
      listTitle: "Experience Features",
      points: [
        "Touchscreen ordering experience",
        "Faster order completion",
        "Simplified customer interactions",
        "Modern self service environment",
      ],
    },
  ]}
/>
<InfoSplitSectiontthree
  eyebrow="Kitchen Display System Capabilities"
  title="Scalable Multi "
  highlightText="Location Support"
  image="https://cdn.hboxdigital.com/public/hbox-pay/images/service/Rectangle%20161123890%20(10).png"
  imagePosition="left"
  descriptionOne="Deploy kiosk systems across one or multiple business locations while maintaining operational consistency and centralized visibility."
  descriptionTwo=""
  descriptionThree=""
  extraLists={[
    {
      title: "Multi Store Features",
      items: [
        "Connected operational systems",
        "Centralized kiosk management",
        "Consistent customer experiences",
        "Scalable deployment support",
      ],
    },
  ]}
/>

<SupportProcessSectionpro
  title="Built for Faster & Smarter "
  highlightText="Customer Experiences"
  description="HBOX Pay combines modern self service technology with connected payment systems designed to help businesses improve efficiency and customer satisfaction."
  cards={[
    {
      title: "Streamlined Ordering Workflows",
      description:
        "Create faster customer journeys through connected self ordering and payment experiences.",
      icon: "transaction",
    },
    {
      title: "Reduced Operational Bottlenecks",
      description:
        "Help reduce queues and improve front counter efficiency during busy business hours.",
      icon: "performance",
    },
    {
      title: "Modern Self Service Technology",
      description:
        "Deliver customer experiences built around speed, convenience, and ease of use.",
      icon: "integration",
    },
    {
      title: "Scalable Business Solutions",
      description:
        "Kiosk systems designed to support growing businesses and expanding operational environments.",
      icon: "business",
    },
  ]}
/>
      <CtaBannerSection
        title="Upgrade Customer Experiences with HBOX"
        highlightText=" Pay Kiosk Solutions"
        description="Explore self service kiosk systems designed to improve operational efficiency, simplify ordering, and support faster customer interactions."
        backgroundImage="https://cdn.hboxdigital.com/public/hbox-pay/images/Rectangle%2034625007.png"
        buttonText="Request a Demo"
        buttonHref="/contact"
      />
<FaqSectionreuse
  title="Frequently Asked"
  highlightText="Questions"
  faqs={[
    {
      question: "1.What are HBOX Pay Kiosk Solutions?",
      answer:
        "HBOX Pay Kiosk Solutions are self service ordering and payment systems designed to help businesses improve customer flow, reduce queues, and simplify operational workflows.",
    },
    {
      question:
        "2.Can customers place orders directly through the kiosk?",
      answer:
        "Yes. Customers can browse products, customize orders, and complete transactions independently through the self ordering interface.",
    },
    {
      question:
        "3.Do HBOX Pay kiosks support contactless payments?",
      answer:
        "Yes. The kiosks support contactless payments, card transactions, and integrated payment processing.",
    },
    {
      question:
        "4.Which businesses can use HBOX Pay Kiosk Solutions?",
      answer:
        "Our kiosk systems are designed for restaurants, cafés, retail stores, hospitality businesses, food chains, and high traffic customer environments.",
    },
    {
      question:
        "5.Can kiosk systems be deployed across multiple locations?",
      answer:
        "Yes. HBOX Pay supports scalable kiosk deployment across multiple business locations and operations.",
    },
    {
      question:
        "6.Are HBOX Pay kiosks easy for customers to use?",
      answer:
        "Yes. The kiosks are designed with user-friendly touchscreen interfaces that simplify ordering and payment experiences.",
    },
  ]}
/>

      
    </div>
  );
};

export default page;
