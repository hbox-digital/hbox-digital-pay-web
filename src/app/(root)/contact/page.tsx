import CheckoutExperienceSection from "@/components/contact-us/CheckoutExperienceSection";
import CtaBannerSection from "@/components/contact-us/CtaBannerSection";
import FaqSectionreuse from "@/components/contact-us/FaqSectionreuse";
import HeroSectionContact from "@/components/contact-us/hero-sec";
import InfoSplitSection from "@/components/contact-us/InfoSplitSection";
import SupportProcessSection from "@/components/contact-us/SupportProcessSection";
import WhyBusinessesSection from "@/components/contact-us/WhyBusinessesSection";
import FaqSection from "@/components/home/FaqSection";
import {
  Headphones,
  Users,
  BadgeCheck,
} from "lucide-react";

const page = () => {
  return (
    <div>
      <HeroSectionContact
  titleOne="Contact the"
  titleHighlight=" Right Team "
  titleTwo="at HBOX Pay"
  description="Whether you need help with payment processing, POS hardware setup, account assistance, or onboarding support, the HBOX Pay team is here to help your business move faster and operate with confidence.HBOX Pay supports businesses with responsive customer service, operational guidance, and payment solutions designed for modern business environments."
  backgroundImage="https://cdn.hboxdigital.com/public/hbox-pay/images/Rectangle%2034624995%20(3).png"
  buttonText="Get Started"
  buttonHref="/contact"
/>
<CheckoutExperienceSection />
<InfoSplitSection
  title="Sales & "
  highlightText="Business Solutions"
  image="https://cdn.hboxdigital.com/public/hbox-pay/images/Rectangle%2034624996.png"
  imagePosition="left"
  descriptionOne="Speak with the HBOX Pay sales team to explore POS systems, payment processing solutions, hardware recommendations, and operational tools built around your business needs."
  descriptionTwo="Whether you operate a single location or manage multiple stores, our team helps you identify the right setup for long term scalability and smoother daily operations."
/>

<InfoSplitSection
  title="Customer "
  highlightText="Support"
  image="https://cdn.hboxdigital.com/public/hbox-pay/images/Rectangle%2034624997.png"
  imagePosition="right"
  descriptionOne="Need help with your account, onboarding, software guidance, or payment related questions? The HBOX Pay customer service team is available to support businesses with quick and practical assistance."
  descriptionTwo="Our support process is focused on minimizing downtime and helping businesses continue operating without disruption."
/>

<InfoSplitSection
  title="Technical "
  highlightText="Assistance"
  image="https://cdn.hboxdigital.com/public/hbox-pay/images/Rectangle%2034624998.png"
  imagePosition="left"
  descriptionOne="Get help with POS hardware, payment terminals, kiosk systems, software troubleshooting, and operational setup support."
  descriptionTwo="HBOX Pay works closely with businesses to ensure systems remain connected, reliable, and optimized for day to day operations."
/>

<InfoSplitSection
  title="Partnership & "
  highlightText="Business Inquiries"
  image="https://cdn.hboxdigital.com/public/hbox-pay/images/Rectangle%2034624999.png"
  imagePosition="right"
  descriptionOne="Interested in partnerships, referrals, integrations, or operational collaborations? Connect with the HBOX Pay team to explore opportunities designed around business growth and scalable payment solutions."
  descriptionTwo=""
/>
<WhyBusinessesSection
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
 <CtaBannerSection
  title="Need Help Choosing the Right"
  highlightText="POS or Payment Solution?"
  description="Connect with the HBOX Pay team to explore payment systems, POS hardware, and operational tools designed around modern business workflows."
  backgroundImage="https://cdn.hboxdigital.com/public/hbox-pay/images/Rectangle%2034624963.png"
  buttonText="Contact Sales"
  buttonHref="/contact"
/>
<FaqSectionreuse
  title="Frequently Asked"
  highlightText="Questions"
  faqs={[
  {
    question:
      "How quickly does the HBOX Pay support team respond?",
    answer:
      "Response times may vary depending on the request type, but the HBOX Pay support team focuses on providing timely assistance for operational and payment related inquiries.",
  },
  {
    question:
      "Can I request a demo before getting started?",
    answer:
      "Yes. Businesses can contact the HBOX Pay sales team to explore demos, solution walkthroughs, and operational guidance before implementation.",
  },
  {
    question:
      "Does HBOX Pay provide onboarding support?",
    answer:
      "Yes. HBOX Pay supports businesses during onboarding, setup, hardware configuration, and operational implementation.",
  },
  {
    question:
      "Can I get help with POS hardware installation?",
    answer:
      "Yes. The HBOX Pay team provides assistance for supported hardware systems including payment terminals, kiosks, and POS environments.",
  },
  {
    question:
      "Does HBOX Pay support multi location businesses?",
    answer:
      "Yes. HBOX Pay solutions are designed to support both single location businesses and multi store operations.",
  },
  {
    question:
      "How can I contact HBOX Pay sales?",
    answer:
      "Businesses can connect with the HBOX Pay sales team through the Contact Sales page for product guidance, payment solutions, and operational consultations.",
  },
]}
/>
    </div>
  );
};

export default page;