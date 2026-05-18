import CtaBannerSection from "@/components/contact-us/CtaBannerSection";
import FaqSectionreuse from "@/components/contact-us/FaqSectionreuse";
import HeroSectionContact from "@/components/contact-us/hero-sec";
import InfoSplitSection from "@/components/contact-us/InfoSplitSection";
import SupportProcessSection from "@/components/contact-us/SupportProcessSection";
import WhyBusinessesSection from "@/components/contact-us/WhyBusinessesSection";
import AnswersSupportSection from "@/components/faqs/AnswersSupportSection";
import FAQCategorySection from "@/components/faqs/FAQCategorySection";
import FaqSection from "@/components/home/FaqSection";
import HelpResourcesSection from "@/components/support/HelpResourcesSection";
import HelpResourcesSectiontwo from "@/components/support/HelpResourcesSectiontwo";
import {
  Headphones,
  Users,
  BadgeCheck,
} from "lucide-react";

const page = () => {
  return (
    <div>
      <HelpResourcesSectiontwo />
{/* <HelpResourcesSection/> */}
<FaqSectionreuse
  title="Frequently Asked"
  highlightText="Questions"
  faqs={[
    {
      question:
        "1.How can I contact HBOX Pay support?",
      answer:
        "Customers can contact the HBOX Pay support team through the Help Centre or by reaching out through our contact channels for technical and operational assistance.",
    },
    {
      question:
        "2.Can HBOX Pay help with hardware setup?",
      answer:
        "Yes. HBOX Pay provides support resources and setup guidance for compatible hardware devices and payment systems.",
    },
    {
      question:
        "3.Where can I find troubleshooting guides?",
      answer:
        "Troubleshooting resources, setup documentation, and operational support materials are available throughout the Help Centre.",
    },
    {
      question:
        "4.Does HBOX Pay provide support for POS software?",
      answer:
        "Yes. Businesses can access support for POS software setup, transaction management, reporting tools, and operational workflows.",
    },
    {
      question:
        "5.Still Need Help?",
      answer:
        "Get in touch with the HBOX Pay support team for additional support, operational guidance, and business assistance.",
    },
  ]}
/>
      <CtaBannerSection
        title="Still Need "
        highlightText="Help?"
        description="Get in touch with the HBOX Pay support team for additional support, operational guidance, and business assistance."
        backgroundImage="https://cdn.hboxdigital.com/public/hbox-pay/images/Rectangle%2034625007.png"
        buttonText="Contact Sales"
        buttonHref="/contact"
      />
    </div>
  );
};

export default page;