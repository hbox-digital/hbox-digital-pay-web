import CtaBannerSection from "@/components/contact-us/CtaBannerSection";
import FaqSectionreuse from "@/components/contact-us/FaqSectionreuse";
import BuildSolutionSection from "@/components/privacy-policy/BuildSolutionSection";
import PrivacyPolicySection from "@/components/privacy-policy/privacy-policy";
import ResourcesBenefitsSection from "@/components/privacy-policy/ResourcesBenefitsSection";
import ResourcesHeroSection from "@/components/privacy-policy/ResourcesHeroSection";
import WhatWeOfferSection from "@/components/privacy-policy/WhatWeOfferSection";
import ResourcesBenefitstwo from "@/components/small-business-resources/ResourcesBenefitstwo";
import ResourcesHeroSectiontwo from "@/components/small-business-resources/ResourcesHeroSectiontwo";

const page = () => {
  return (
    <div>
<ResourcesHeroSectiontwo />
<ResourcesBenefitstwo />
 <CtaBannerSection
  title="Starting a "
  highlightText="New Business?"
  description="Get expert guidance on payment solutions, POS systems, hardware setup, and business operations designed to help you launch with confidence."
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
        "1.What type of resources does HBOX Pay provide?",
      answer:
        "HBOX Pay provides business guides, payment technology insights, operational resources, hardware information, and growth focused content for modern businesses.",
    },
    {
      question:
        "2.Who are these resources designed for?",
      answer:
        "Our resources are designed for small businesses, retail stores, restaurants, hospitality businesses, service providers, and growing operations.",
    },
    {
      question:
        "3.Are HBOX Pay resources free to access?",
      answer:
        "Yes. Businesses can explore educational resources and operational insights through the HBOX Pay resource center.",
    },
    {
      question:
        "4.Do the resources cover payment technology and POS systems?",
      answer:
        "Yes. HBOX Pay resources include payment solutions, POS systems, business operations, and modern commerce topics.",
    },
  ]}
/>
{/* <WhatWeOfferSection />
<BuildSolutionSection /> */}
    </div>
  );
};

export default page;
