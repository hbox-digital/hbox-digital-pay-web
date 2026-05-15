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
        titleOne="Keep Your Kitchen "
        titleHighlight="Running Faster, Smarter,"
        titleTwo=" and More Organized"
        description="HBOX Pay Kitchen Display System (KDS) helps restaurants streamline kitchen operations through real time order visibility, faster communication, and smarter workflow management. Built for modern food service environments, our KDS replaces traditional paper tickets with a connected digital system designed to improve order accuracy, reduce delays, and support faster service during busy hours."
        backgroundImage="https://cdn.hboxdigital.com/public/hbox-pay/images/service/Rectangle%2034624995%20(17).png"
        buttonText="Talk to Sales"
        buttonHref="/contact"
      />
      <InfoSplitSectiontthree
        eyebrow=""
        title="Why Your Business Needs "
        highlightText="a Kitchen Display System"
        image="https://cdn.hboxdigital.com/public/hbox-pay/images/service/Rectangle%2034624995%20(17).png"
        imagePosition="right"
        descriptionOne="HBOX Pay Kitchen Display System helps restaurants create a more connected kitchen workflow by sending orders directly from the POS system to digital kitchen displays in real time. This allows kitchen staff to manage incoming orders more efficiently, reduce manual errors, and improve coordination between front of house and back of house operations."
        descriptionTwo="The result is a faster, more organized kitchen experience that helps businesses improve efficiency while delivering better service to customers."
        descriptionThree=""
        extraLists={[
          {
            title: "Business Benefits",
            items: [
              "Faster kitchen workflows",
              "Improved order accuracy",
              "Better communication between teams",
              "Reduced preparation delays",
            ],
          },
          {
            title: "Features",
            items: [
              "Organized order management",
              "Real time kitchen visibility",
              "Improved customer experience",
            ],
          },
        ]}
      />
      <InfoSplitSectiontthree
        eyebrow=""
        title="Smart Digital Order "
        highlightText="Management for Busy Kitchens"
        image="https://cdn.hboxdigital.com/public/hbox-pay/images/service/Rectangle%2034625071.png"
        imagePosition="left"
        descriptionOne="HBOX Pay KDS is designed for restaurants that need speed, visibility, and operational consistency during high volume service periods. Orders are displayed instantly through an organized digital interface, helping kitchen teams prioritize tasks, track preparation progress, and maintain smoother workflows across every station."
        descriptionTwo="Integrated directly with HBOX Pay POS systems, the Kitchen Display System creates a connected restaurant ecosystem where orders move seamlessly from customer checkout to kitchen preparation without unnecessary delays or manual processes."
        descriptionThree=""
        extraLists={[
          {
            title: "Product Features",
            items: [
              "Real time order synchronization",
              "Digital kitchen ticket management",
              "Touchscreen kitchen display",
              "POS system integration",
            ],
          },
          {
            title: "Features",
            items: [
              "Live order tracking",
              "Workflow prioritization tools",
              "Multi station kitchen support",
            ],
          },
        ]}
      />
      <FeatureCardsSection
  cards={[
    {
      image:
        "https://cdn.hboxdigital.com/public/hbox-pay/images/service/Rectangle%20161123887%20(12).png",
      eyebrow: "Kitchen Display System Capabilities",
      title: "Real Time Order ",
      highlightText: "Visibility",
      description:
        "Instantly display incoming orders across kitchen stations to improve speed, coordination, and workflow efficiency.",
      listTitle: "Features Include",
      points: [
        "Live order updates",
        "Instant kitchen visibility",
        "Faster ticket management",
        "Organized preparation flow",
      ],
    },
    {
      image:
        "https://cdn.hboxdigital.com/public/hbox-pay/images/service/Rectangle%20161123886%20(11).png",
      eyebrow: "Kitchen Display System Capabilities",
      title: "Faster Kitchen ",
      highlightText: "Communication",
      description:
        "Reduce communication gaps between front of house staff and kitchen teams through connected order management.",
      listTitle: "Communication Benefits",
      points: [
        "Better workflow coordination",
        "Reduced verbal communication errors",
        "Faster operational response",
        "Improved staff collaboration",
      ],
    },
    {
      image:
        "https://cdn.hboxdigital.com/public/hbox-pay/images/service/Rectangle%20161123889%20(13).png",
      eyebrow: "Kitchen Display System Capabilities",
      title: "Improved ",
      highlightText: "Order Accuracy",
      description:
        "Digital order management reduces the risk of missed tickets, incorrect preparation, and operational inconsistencies during busy hours.",
      listTitle: "Accuracy Advantages",
      points: [
        "Clear digital order displays",
        "Reduced manual mistakes",
        "Organized kitchen workflows",
        "Better preparation consistency",
      ],
    },
    {
      image:
        "https://cdn.hboxdigital.com/public/hbox-pay/images/service/Rectangle%20161123888%20(12).png",
      eyebrow: "Kitchen Display System Capabilities",
      title: "Optimized ",
      highlightText: "Kitchen Efficiency",
      description:
        "Help staff process orders faster and manage preparation priorities more effectively during peak service periods.",
      listTitle: "Efficiency Features",
      points: [
        "Faster preparation workflows",
        "Better station coordination",
        "Reduced operational delays",
        "Smoother kitchen performance",
      ],
    },
  ]}
/>

      <SingleFeatureSection
        image="https://cdn.hboxdigital.com/public/hbox-pay/images/service/Rectangle%20161123890%20(9).png"
        eyebrow="Kitchen Display System Capabilities"
        title="Scalable Multi "
        highlightText="Location Support"
        description="Manage kitchen workflows across one or multiple restaurant locations through connected operational systems."
        listTitle="Multi Store Features"
        points={[
          "Centralized workflow visibility",
          "Consistent operational management",
          "Connected restaurant systems",
          "Scalable kitchen infrastructure",
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
  title="Built for High Performance "
  highlightText="Kitchen Operations "
  description="HBOX Pay combines modern restaurant technology with practical operational tools designed to support fast paced kitchen environments."
  cards={[
    {
      title: "Connected Restaurant Ecosystem",
      description:
        "Integrate kitchen operations directly with POS systems for smoother communication and order management.",
      icon: "transaction",
    },
    {
      title: "Reliable Performance During Peak Hours",
      description:
        "Built for busy food service environments where speed and consistency are critical.",
      icon: "performance",
    },
    {
      title: "Smarter Workflow Management",
      description:
        "Help kitchen teams stay organized and prioritize orders more efficiently through digital workflows.",
      icon: "integration",
    },
    {
      title: "Scalable Restaurant Technology",
      description:
        "Solutions designed to support growing restaurant operations and expanding service environments.",
      icon: "business",
    },
  ]}
/>
      <CtaBannerSection
        title="Upgrade Your Kitchen "
        highlightText="Workflow with HBOX Pay"
        description="Discover Kitchen Display System solutions designed to improve speed, communication, and operational efficiency across modern restaurant environments."
        backgroundImage="https://cdn.hboxdigital.com/public/hbox-pay/images/Rectangle%2034625007.png"
        buttonText="Contact Sales "
        buttonHref="/contact"
      />
<FaqSectionreuse
  title="Frequently Asked"
  highlightText="Questions"
  faqs={[
    {
      question: "1.What is a Kitchen Display System?",
      answer:
        "A Kitchen Display System is a digital order management solution that replaces paper tickets by displaying customer orders directly on kitchen screens in real time.",
    },
    {
      question:
        "2.How does HBOX Pay KDS improve restaurant operations?",
      answer:
        "HBOX  Pay KDS improves workflow visibility, reduces communication delays, increases order accuracy, and helps kitchen staff manage orders more efficiently.",
    },
    {
      question:
        "3.Can the Kitchen Display System integrate with POS software?",
      answer:
        "Yes. HBOX Pay KDS integrates with compatible POS systems for seamless real time order synchronization.",
    },
    {
      question:
        "4.Is the Kitchen Display System suitable for multi location restaurants?",
      answer:
        "Yes. The system supports scalable kitchen management across multiple restaurant locations and operations.",
    },
    {
      question:
        "5.Which businesses can use HBOX Pay KDS?",
      answer:
        "Our Kitchen Display System is designed for restaurants, cafés, quick service restaurants, cloud kitchens, food chains, and hospitality businesses.",
    },
    {
      question:
        "6.Does the system completely replace paper tickets?",
      answer:
        "Yes. HBOX Pay KDS replaces traditional paper ticket workflows with a connected digital kitchen management system.",
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
