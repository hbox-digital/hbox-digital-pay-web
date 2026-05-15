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
  titleOne="Smarter Employee Management "
  titleHighlight="for Modern Business Operations"
  titleTwo=""
  description="HBOXPay Employee Management helps businesses simplify staff operations, manage employee access, and improve workforce visibility through one centralized platform. Designed for retail, hospitality, service businesses, and multi location operations, our employee management tools help businesses maintain better control over daily operations while improving efficiency across teams."
  backgroundImage="https://cdn.hboxdigital.com/public/hbox-pay/images/Rectangle%2034624995%20(10).png"
  buttonText="Talk to Sales"
  buttonHref="/contact"
/>
<InfoSplitSectiontwo
  eyebrow=""
  title="Simplify Workforce "
  highlightText="Operations"
  image="https://cdn.hboxdigital.com/public/hbox-pay/images/Rectangle%2034625008%20(6).png"
  descriptionOne="Managing employees across busy business environments can become difficult without the right systems in place. Manual processes, limited visibility, and disconnected workflows often create operational inefficiencies that impact productivity and accountability."
  descriptionTwo="Whether managing a single team or multiple business locations, businesses can maintain better operational control and improve staff management through one connected system."
  descriptionThree=""
  imagePosition="left"
/>
<FeatureCardsSection
  cards={[
    {
      image:
        "https://cdn.hboxdigital.com/public/hbox-pay/images/Rectangle%20161123887%20(5).png",
      eyebrow: "",
      title: "Role Based ",
      highlightText: "Access Control",
      description:
        "Manage employee permissions and system access through customizable role based controls designed to improve operational security and workflow management.",
      listTitle: "Features Include",
      points: [
        "Employee role management",
        "Permission based access",
        "Operational security controls",
        "Simplified staff administration",
      ],
    },
    {
      image:
        "https://cdn.hboxdigital.com/public/hbox-pay/images/Rectangle%20161123886%20(4).png",
      eyebrow: "",
      title: "Staff Activity ",
      highlightText: "Monitoring",
      description:
        "Track employee activity and operational actions to maintain better visibility across daily business operations.",
      listTitle: "Benefits",
      points: [
        "Staff activity tracking",
        "Operational transparency",
        "Improved accountability",
        "Better workforce visibility",
      ],
    },
    {
      image:
        "https://cdn.hboxdigital.com/public/hbox-pay/images/Rectangle%20161123889%20(6).png",
      eyebrow: "",
      title: "Centralized Workforce ",
      highlightText: "Management",
      description:
        "Manage employees across one or multiple business locations through a connected and centralized platform.",
      listTitle: "Management Features",
      points: [
        "Centralized employee controls",
        "Multi location staff visibility",
        "Simplified workforce organization",
        "Scalable management tools",
      ],
    },
    {
      image:
        "https://cdn.hboxdigital.com/public/hbox-pay/images/Rectangle%20161123888%20(5).png",
      eyebrow: "",
      title: "Operational ",
      highlightText: "Efficiency Tools",
      description:
        "Support smoother business operations through workforce management tools designed to improve organization and reduce operational complexity.",
      listTitle: "Advantages",
      points: [
        "Improved workflow management",
        "Better operational coordination",
        "Simplified daily processes",
        "Organized employee management",
      ],
    },
  ]}
/>

<SingleFeatureSection
  image="https://cdn.hboxdigital.com/public/hbox-pay/images/Rectangle%20161123890%20(3).png"
  eyebrow=""
  title="Secure Staff Access "
  highlightText="Management"
  description="Maintain operational control through secure employee access settings designed to protect business systems and sensitive operational data."
  listTitle="Security Features"
  points={[
    "Controlled system access",
    "Staff permission settings",
    "Secure operational management",
    "Protected business workflows",
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
  highlightText="HBOXPay Employee Management"
  description="HBOXPay combines workforce management tools, operational controls, and centralized employee visibility to help businesses manage teams more efficiently."
  cards={[
    {
      title: "Simplified Staff Management",
      description:
        "Manage employee operations through one organized and easy to use platform.",
      icon: "transaction",
    },
    {
      title: "Better Operational Visibility",
      description:
        "Track employee activity and maintain greater transparency across business operations.",
      icon: "performance",
    },
    {
      title: "Centralized Workforce Control",
      description:
        "Manage employees across single or multiple business locations from one connected system.",
      icon: "integration",
    },
    {
      title: "Scalable Management Solutions",
      description:
        "Employee management tools designed to support growing teams and expanding business operations.",
      icon: "business",
    },
  ]}
/>
      <CtaBannerSection
        title="Manage Your Workforce y"
        highlightText="with Greater Efficienc"
        description="Explore employee management solutions designed to simplify operations, improve workforce visibility, and support modern business environments."
        backgroundImage="https://cdn.hboxdigital.com/public/hbox-pay/images/Rectangle%2034625007.png"
        buttonText="Get Started"
        buttonHref="/contact"
      />
<FaqSectionreuse
  title="Frequently Asked"
  highlightText="Questions"
  faqs={[
    {
      question: "1. What is HBOXPay Employee Management?",
      answer:
        "HBOXPay Employee Management is a workforce management solution designed to help businesses manage employee access, monitor staff activity, and improve operational visibility.",
    },
    {
      question: "2. Can businesses manage employees across multiple locations?",
      answer:
        "Yes. HBOXPay supports centralized employee management for businesses operating across multiple locations.",
    },
    {
      question: "3. Does the system support role based access controls?",
      answer:
        "Yes. Businesses can assign employee permissions and manage access through customizable role based settings.",
    },
    {
      question: "4.Can businesses monitor staff activity?",
      answer:
        "Yes. The platform includes staff activity tracking tools designed to improve operational visibility and accountability.",
    },
    {
      question:
        "5. Which industries can use HBOXPay Employee Management?",
      answer:
        "Our employee management solutions are designed for retail stores, restaurants, hospitality businesses, supermarkets, service providers, and enterprise operations.",
    },
    {
      question:
        "6. Is HBOXPay Employee Management easy to use?",
      answer:
        "Yes. The platform is designed with a user-friendly interface that simplifies workforce management and daily operational tasks.",
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
