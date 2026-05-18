import BuildSolutionSection from "@/components/privacy-policy/BuildSolutionSection";
import PrivacyPolicySection from "@/components/privacy-policy/privacy-policy";
import ResourcesBenefitsSection from "@/components/privacy-policy/ResourcesBenefitsSection";
import ResourcesHeroSection from "@/components/privacy-policy/ResourcesHeroSection";
import WhatWeOfferSection from "@/components/privacy-policy/WhatWeOfferSection";

const page = () => {
  return (
    <div>
<ResourcesHeroSection />
<ResourcesBenefitsSection />
<WhatWeOfferSection />
<BuildSolutionSection />
    </div>
  );
};

export default page;
