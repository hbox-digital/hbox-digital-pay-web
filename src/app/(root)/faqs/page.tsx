import CtaBannerSection from "@/components/contact-us/CtaBannerSection";
import FaqSectionreuse from "@/components/contact-us/FaqSectionreuse";
import HeroSectionContact from "@/components/contact-us/hero-sec";
import InfoSplitSection from "@/components/contact-us/InfoSplitSection";
import SupportProcessSection from "@/components/contact-us/SupportProcessSection";
import WhyBusinessesSection from "@/components/contact-us/WhyBusinessesSection";
import AnswersSupportSection from "@/components/faqs/AnswersSupportSection";
import FAQCategorySection from "@/components/faqs/FAQCategorySection";
import FaqSection from "@/components/home/FaqSection";
import {
  Headphones,
  Users,
  BadgeCheck,
} from "lucide-react";

const page = () => {
  return (
    <div>
<AnswersSupportSection />
<FAQCategorySection />
      <CtaBannerSection
        title="Still Have "
        highlightText="Questions?"
        description="Our team is here to help you explore the right payment and business solutions for your operations."
        backgroundImage="https://cdn.hboxdigital.com/public/hbox-pay/images/Rectangle%2034625007.png"
        buttonText="Contact Sales"
        buttonHref="/contact"
      />
    </div>
  );
};

export default page;