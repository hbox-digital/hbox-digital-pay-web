import CtaBannerSection from "@/components/contact-us/CtaBannerSection";
import FaqSectionreuse from "@/components/contact-us/FaqSectionreuse";
import HeroSectionContact from "@/components/contact-us/hero-sec";
import HardwareTabsSection from "@/components/products/HardwareTabsSection";
import IndustriesSupportSection from "@/components/products/IndustriesSupportSection";
import InfoSplitSectiontwo from "@/components/products/InfoSplitSectiontwo";
import SupportProcessSectionpro from "@/components/products/SupportProcessproduct";

const page = () => {
  return (
    <div>
      <HeroSectionContact
        titleOne="Modern POS Hardware "
        titleHighlight="Built for Real "
        titleTwo="Business Operations"
        description="HBOX Pay hardware solutions are designed to support fast transactions, smoother workflows, and reliable day to day business operations. From smart payment terminals to self ordering kiosks and integrated POS systems, our hardware ecosystem helps businesses operate with greater speed, flexibility, and control."
        backgroundImage="https://cdn.hboxdigital.com/public/hbox-pay/images/Rectangle%2034624995.png"
        buttonText="Get Started"
        buttonHref="/contact"
      />
      <InfoSplitSectiontwo
        eyebrow="Hardware Overview"
        title="Reliable Hardware Designed for"
        highlightText="Modern Workflows"
        image="https://cdn.hboxdigital.com/public/hbox-pay/images/Rectangle%2034625008.png"
        descriptionOne="Business hardware should do more than process payments. It should improve operational flow, reduce delays, simplify staff workflows, and create a smoother customer experience."
        descriptionTwo="HBOX Pay hardware solutions are selected to support fast paced environments where reliability, connectivity, and performance directly impact daily business operations."
        descriptionThree="Our hardware ecosystem supports businesses with integrated payment experiences, operational flexibility, and scalable deployment across growing business environments."
        //   imagePosition="right"
      />
<HardwareTabsSection
  tabs={[
    {
      title: "Mobile POS Systems",
      eyebrow: "Our Hardware Categories",
      contentTitle: "Mobile",
      highlightText: "POS Systems",
      descriptionOne:
        "Mobile POS systems help businesses accept payments from anywhere while maintaining flexibility across daily operations. These solutions are ideal for restaurants, delivery operations, events, pop up environments, and businesses that require mobility without sacrificing transaction speed.",
      descriptionTwo: "",
      image:
        "https://cdn.hboxdigital.com/public/hbox-pay/images/payment-terminal-mockup%201.png",
    },
    {
      title: "Countertop POS Systems",
      eyebrow: "Our Hardware Categories",
      contentTitle: "Countertop",
      highlightText: "POS Systems",
      descriptionOne:
        "Countertop POS systems provide stable and efficient payment processing for retail stores, restaurants, and customer facing businesses that require reliable checkout experiences.",
      descriptionTwo:
        "These systems are designed to support consistent operations, integrated workflows, and faster transaction handling during busy business hours.",
      image:
        "https://cdn.hboxdigital.com/public/hbox-pay/images/payment-terminal-mockup%201.png",
    },
    {
      title: "Smart Payment Terminals",
      eyebrow: "Our Hardware Categories",
      contentTitle: "Smart Payment",
      highlightText: "Terminals",
      descriptionOne:
        "Smart payment terminals combine payment processing with operational functionality, helping businesses simplify transactions while supporting modern payment methods and customer convenience.",
      descriptionTwo:
        "These devices are designed for businesses that require fast and secure payment acceptance across different operational environments.",
      image:
        "https://cdn.hboxdigital.com/public/hbox-pay/images/payment-terminal-mockup%201.png",
    },
    {
      title: "Self Ordering Kiosks",
      eyebrow: "Our Hardware Categories",
      contentTitle: "Self Ordering",
      highlightText: "Kiosks",
      descriptionOne:
        "Self ordering kiosks help businesses reduce wait times, improve ordering efficiency, and create smoother customer experiences in high traffic environments.",
      descriptionTwo:
        "Kiosk systems are commonly used across restaurants, quick service businesses, and retail operations looking to streamline ordering workflows.",
      image:
        "https://cdn.hboxdigital.com/public/hbox-pay/images/payment-terminal-mockup%201.png",
    },
    {
      title: "Kitchen Display Systems",
      eyebrow: "Our Hardware Categories",
      contentTitle: "Kitchen Display",
      highlightText: "Systems",
      descriptionOne:
        "Kitchen display systems help restaurants manage orders more efficiently by improving communication between front of house and kitchen operations.",
      descriptionTwo:
        "These systems support faster order visibility, better workflow management, and improved operational coordination during peak hours.",
      image:
        "https://cdn.hboxdigital.com/public/hbox-pay/images/payment-terminal-mockup%201.png",
    },
    {
      title: "Peripheral & Accessory Solutions",
      eyebrow: "Our Hardware Categories",
      contentTitle: "Peripheral &",
      highlightText: "Accessory Solutions",
      descriptionOne:
        "HBOX Pay also supports businesses with operational accessories including receipt printers, barcode scanners, cash drawers, and connected hardware environments designed to improve daily business efficiency.",
      descriptionTwo: "",
      image:
        "https://cdn.hboxdigital.com/public/hbox-pay/images/payment-terminal-mockup%201.png",
    },
  ]}
/>
    <InfoSplitSectiontwo
  eyebrow="Our Featured Hardware"
  title="PAX "
  highlightText="A920"
  image="https://cdn.hboxdigital.com/public/hbox-pay/images/Rectangle%2034624997.png"
  descriptionOne="The PAX A920 combines mobility with payment functionality, helping businesses process transactions quickly while maintaining operational flexibility."
  descriptionTwo="Its portable design makes it ideal for restaurants, tableside payments, delivery services, and businesses operating beyond traditional checkout counters."
  descriptionThree=""
  imagePosition="right"
/>

<InfoSplitSectiontwo
  eyebrow="Our Featured Hardware"
  title="PAX "
  highlightText="E700"
  image="https://cdn.hboxdigital.com/public/hbox-pay/images/Rectangle%2034625011.png"
  descriptionOne="The PAX E700 supports businesses that require larger display environments, integrated payment experiences, and modern operational functionality within customer facing spaces."
  descriptionTwo="Its design supports retail operations, hospitality businesses, and service based environments focused on improving customer interaction."
  descriptionThree=""
  imagePosition="left"
/>

<InfoSplitSectiontwo
  eyebrow="Our Featured Hardware"
  title="Self Ordering "
  highlightText="Kiosk Systems"
  image="https://cdn.hboxdigital.com/public/hbox-pay/images/Rectangle%2034625012.png"
  descriptionOne="Self ordering kiosks help businesses manage high customer volumes while improving operational speed and reducing manual ordering bottlenecks."
  descriptionTwo="These systems support better ordering experiences while helping staff focus on operational efficiency and customer service."
  descriptionThree=""
  imagePosition="right"
/>

<InfoSplitSectiontwo
  eyebrow="Our Featured Hardware"
  title="Kitchen "
  highlightText="Display Systems"
  image="https://cdn.hboxdigital.com/public/hbox-pay/images/Rectangle%2034625013.png"
  descriptionOne="Kitchen display systems improve order visibility and workflow coordination inside restaurant environments."
  descriptionTwo="By reducing manual communication gaps, these systems help businesses maintain smoother operations and faster order handling."
  descriptionThree=""
  imagePosition="left"
/>
      <SupportProcessSectionpro
        title="Why Businesses Choose"
        highlightText="HBOX Pay Hardware"
        cards={[
          {
            title: "Reliable Performance",
            description:
              "HBOX Pay hardware is designed to support stable day to day business operations in fast paced environments.",
            icon: "performance",
          },
          {
            title: "Faster Transactions",
            description:
              "Modern payment systems help businesses reduce checkout friction and improve transaction efficiency.",
            icon: "transaction",
          },
          {
            title: "Integrated Operations",
            description:
              "Our hardware ecosystem works alongside POS software, inventory management, reporting tools, and customer systems.",
            icon: "integration",
          },
          {
            title: "Scalable Business Support",
            description:
              "Whether operating a single location or expanding across multiple stores, HBOX Pay hardware solutions are built for scalability.",
            icon: "business",
          },
        ]}
      />
      <IndustriesSupportSection
        title="Industries"
        highlightText="We Support"
        cards={[
          {
            title: "Retail Businesses",
            description:
              "Support faster checkout experiences, inventory workflows, and customer transactions through integrated hardware environments.",
            icon: "retail",
          },
          {
            title: "Restaurants & Cafes",
            description:
              "Improve order management, payment handling, and customer service through connected restaurant hardware systems.",
            icon: "restaurant",
          },
          {
            title: "Service Businesses",
            description:
              "Create smoother payment experiences while supporting operational flexibility across customer facing environments.",
            icon: "service",
          },
          {
            title: "Multi Location Operations",
            description:
              "Maintain centralized hardware environments and operational consistency across growing business networks.",
            icon: "multiLocation",
          },
        ]}
      />
      <InfoSplitSectiontwo
        eyebrow="Hardware & Software Integration"
        title="Connected Systems for "
        highlightText="Smarter Operations"
        image="https://cdn.hboxdigital.com/public/hbox-pay/images/Rectangle%2034625026.png"
        descriptionOne="HBOX Pay hardware solutions are designed to work alongside payment processing, POS software, inventory management, analytics, employee management, CRM tools, and multi store operations."
        descriptionTwo="This integrated approach helps businesses reduce operational silos while creating a more connected business environment."
        descriptionThree=""
        imagePosition="left"
      />
      <CtaBannerSection
        title="Build a Faster and More Reliable "
        highlightText="Checkout Experience"
        description="Explore hardware solutions designed to support modern payments, smoother workflows, and scalable business operations."
        backgroundImage="https://cdn.hboxdigital.com/public/hbox-pay/images/Rectangle%2034625007.png"
        buttonText="Contact Sales"
        buttonHref="/contact"
      />
      <FaqSectionreuse
        title="Frequently Asked"
        highlightText="Questions"
        faqs={[
          {
            question: "What types of businesses can use HBOX Pay hardware?",
            answer:
              "HBOX Pay provides timely support through dedicated sales and customer support channels depending on your business requirements and service level.",
          },
          {
            question: "Can HBOX Pay hardware support mobile payments?",
            answer:
              "Yes, businesses can request a product demo to explore HBOX Pay payment systems, POS hardware, and operational tools before onboarding.",
          },
          {
            question: "Does the hardware integrate with POS software?",
            answer:
              "Yes, our onboarding team helps businesses set up hardware, payment systems, and operational workflows for a smooth launch experience.",
          },
          {
            question:
              "Can businesses scale hardware across multiple locations?",
            answer:
              "HBOX Pay assists businesses with POS hardware recommendations, setup guidance, and operational support during installation.",
          },
          {
            question: "Do you provide assistance with hardware setup?",
            answer:
              "Yes, HBOX Pay solutions are designed to support growing businesses and multi location operations with scalable tools.",
          },
          {
            question:
              "Which industries benefit most from kiosk and display systems?",
            answer:
              "Businesses can connect with the HBOX Pay sales team through the contact page, support channels, or scheduled consultation requests.",
          },
        ]}
      />
    </div>
  );
};

export default page;
