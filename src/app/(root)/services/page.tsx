import CtaBannerSection from "@/components/contact-us/CtaBannerSection";
import FaqSectionreuse from "@/components/contact-us/FaqSectionreuse";
import HeroSectionContact from "@/components/contact-us/hero-sec";
import InfoSplitSectiontwo from "@/components/products/InfoSplitSectiontwo";
import SupportProcessSectionpro from "@/components/products/SupportProcessproduct";
import ServicesGridSection from "@/components/services/ServicesGridSection";
import InfoSplitSectiontthree from "@/components/solutions/InfoSplitSection";

const page = () => {
  return (
    <div>
      <HeroSectionContact
        titleOne="Payment Solutions "
        titleHighlight="Built for "
        titleTwo="Modern Business Operations"
        description="HBOXPay provides integrated solutions ranging from POS software and payment processing to inventory management and business financing, helping businesses streamline operations and support modern commerce across retail, hospitality, and enterprise environments."
        backgroundImage="https://cdn.hboxdigital.com/public/hbox-pay/images/Rectangle%2034624995%20(2).png"
        buttonText="Talk to Sales"
        buttonHref="/contact"
      />
      <InfoSplitSectiontwo
        eyebrow=""
        title="Integrated Services for "
        highlightText="Smarter Business Management"
        image="https://cdn.hboxdigital.com/public/hbox-pay/images/Rectangle%2034625008.png"
        descriptionOne="Modern businesses need more than standalone payment systems. They need connected tools that improve visibility, simplify operations, and create seamless customer experiences across every touchpoint."
        descriptionTwo="HBOXPay combines payment infrastructure, smart business tools, and scalable technology into one connected ecosystem designed to support growing businesses in fast moving industries."
        descriptionThree=""
        imagePosition="right"
      />
      <ServicesGridSection
        title="Our"
        highlightText="Services"
        services={[
          {
            title: "POS Software",
            description:
              "Modern POS software designed to simplify sales, transaction management, reporting, and daily business operations through an intuitive and scalable platform.",
            image:
              "https://cdn.hboxdigital.com/public/hbox-pay/images/image%20973.png",
          },
          {
            title: "Payment Processing",
            description:
              "Fast, secure, and reliable payment processing solutions supporting card payments, contactless transactions, QR payments, and digital wallets.",
            image:
              "https://cdn.hboxdigital.com/public/hbox-pay/images/image%20962.png",
            active: true,
          },
          {
            title: "Hardware Solutions",
            description:
              "Smart Android POS devices, portable payment terminals, countertop systems, and self service kiosks built for modern business environments.",
            image:
              "https://cdn.hboxdigital.com/public/hbox-pay/images/image%20964.png",
          },
          {
            title: "Inventory Management",
            description:
              "Track inventory, monitor stock movement, and maintain better operational control with real time inventory management tools.",
            image:
              "https://cdn.hboxdigital.com/public/hbox-pay/images/image%20965.png",
          },
          {
            title: "Analytics & Reporting",
            description:
              "Access transaction insights, operational reports, and business analytics designed to support smarter decision making.",
            image:
              "https://cdn.hboxdigital.com/public/hbox-pay/images/Group%201597884664.png",
          },
          {
            title: "Employee Management",
            description:
              "Manage staff access, monitor operational activity, and streamline workforce management through centralized employee tools.",
            image:
              "https://cdn.hboxdigital.com/public/hbox-pay/images/image%20967.png",
          },
          {
            title: "Multi Store Management",
            description:
              "Control operations across multiple business locations with centralized management and scalable payment infrastructure.",
            image:
              "https://cdn.hboxdigital.com/public/hbox-pay/images/image%20966.png",
          },
          {
            title: "Customer Management (CRM)",
            description:
              "Build stronger customer relationships through customer data management, purchase tracking, and engagement tools.",
            image:
              "https://cdn.hboxdigital.com/public/hbox-pay/images/image%20974.png",
          },
          {
            title: "Loyalty Programs",
            description:
              "Increase customer retention with loyalty systems, rewards programs, and customer engagement solutions.",
            image:
              "https://cdn.hboxdigital.com/public/hbox-pay/images/image%20968.png",
          },
          {
            title: "E-commerce Integration",
            description:
              "Connect online and offline business operations with integrated e-commerce payment and management solutions.",
            image:
              "https://cdn.hboxdigital.com/public/hbox-pay/images/image%20970.png",
          },
          {
            title: "Invoicing & Accounting",
            description:
              "Simplify invoicing, payment tracking, and financial workflows with integrated accounting support tools.",
            image:
              "https://cdn.hboxdigital.com/public/hbox-pay/images/image%20971.png",
          },
          {
            title: "Business Financing",
            description:
              "Access flexible business financing solutions designed to support operational growth and business expansion opportunities.",
            image:
              "https://cdn.hboxdigital.com/public/hbox-pay/images/image%20972.png",
          },
        ]}
      />
      <InfoSplitSectiontthree
        eyebrow=""
        title="Built for Performance"
        highlightText=" Across Industries"
        image="https://cdn.hboxdigital.com/public/hbox-pay/images/Rectangle%2034625061.png"
        imagePosition="left"
        descriptionOne="HBOXPay solutions support businesses operating in fast paced industries that require reliable payment technology and operational efficiency."
        descriptionTwo=""
        descriptionThree=""
        keyBenefits={[
          "Retail Stores",
          "Restaurants & Cafes",
          "Hospitality Businesses",
          "Supermarkets",
          "Service Businesses",
          "Enterprise Operations",
          "Multi Location Businesses",
        ]}
      />
      <SupportProcessSectionpro
        title="Built Around "
        highlightText="Modern Business Needs"
        description=""
        cards={[
          {
            title: "Connected Business Ecosystem",
            description:
              "Manage payments, reporting, operations, and customer experiences through integrated solutions designed to work together flawlessly .",
            icon: "integration",
          },
          {
            title: "Scalable Infrastructure",
            description:
              "Technology designed to support businesses from single store operations to large scale enterprise environments.",
            icon: "business",
          },
          {
            title: "Reliable Performance",
            description:
              "Built for high volume environments requiring stable transactions and operational consistency.",
            icon: "performance",
          },
          {
            title: "Modern Business Tools",
            description:
              "Access payment systems and operational features designed for modern commerce and evolving customer expectations.",
            icon: "transaction",
          },
        ]}
      />
      <CtaBannerSection
        title="Build Smarter Business"
        highlightText=" Operations with HBOXPay"
        description="Explore integrated payment and business management solutions designed for modern commerce."
        backgroundImage="https://cdn.hboxdigital.com/public/hbox-pay/images/Rectangle%2034625007.png"
        buttonText="Get Started"
        buttonHref="/contact"
      />
      <FaqSectionreuse
        title="Frequently Asked"
        highlightText="Questions"
        faqs={[
          {
            question: "1.What services does HBOXPay provide?",
            answer:
              "HBOXPay offers integrated payment and business management solutions including POS software, payment processing, hardware systems, inventory management, CRM tools, loyalty programs, and business financing solutions.",
          },
          {
            question: "2.Are HBOXPay solutions suitable for small businesses?",
            answer:
              "Yes. HBOXPay solutions are designed to support businesses of all sizes, from small retail stores to enterprise operations.",
          },
          {
            question: "3.Can HBOXPay support multi location businesses?",
            answer:
              "Yes. Our solutions support centralized management and scalable operations across multiple business locations.",
          },
          {
            question:
              "4.Does HBOXPay provide both hardware and software solutions?",
            answer:
              "Yes. HBOXPay offers integrated hardware and software solutions designed to work together seamlessly.",
          },
          {
            question: "5.Are HBOXPay payment systems secure?",
            answer:
              "Yes. HBOXPay solutions use secure transaction processing and advanced payment security technologies to help protect business and customer data.",
          },
          {
            question: "6. Can HBOXPay solutions scale as businesses grow?",
            answer:
              "Yes. HBOXPay solutions are built to support growing businesses with scalable technology, flexible infrastructure, and tools designed to adapt to changing operational needs.",
          },
        ]}
      />
    </div>
  );
};

export default page;
