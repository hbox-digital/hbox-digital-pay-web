import ArticlesSplitSection from "@/components/blog/ArticlesSplitSection";
import InsightsSection from "@/components/blog/InsightsModernSection";
import InsightsModernSection from "@/components/blog/InsightsModernSection";
import InsightsSubscribeSection from "@/components/blog/InsightsSubscribeSection";
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
      <InsightsSection />
      <ArticlesSplitSection />
      <InsightsSubscribeSection />
      <FaqSectionreuse
  title="Frequently Asked"
  highlightText="Questions"
  faqs={[
    {
      question:
        "1.What topics does the HBOX Pay blog cover?",
      answer:
        "The HBOX Pay blog covers payment technology, POS systems, restaurant solutions, retail operations, business growth strategies, hardware solutions, and modern commerce trends.",
    },
    {
      question:
        "2.How often will new articles and resources be published?",
      answer:
        "New insights, guides, and industry updates will be added regularly to help businesses stay informed about payment technology and operational best practices.",
    },
    {
      question:
        "3.Who is the HBOX Pay blog designed for?",
      answer:
        "The blog is designed for business owners, restaurant operators, retailers, hospitality businesses, and professionals looking to improve operations through modern payment and business solutions.",
    },
    {
      question:
        "4.Can businesses learn about HBOX Pay products and services through the blog?",
      answer:
        "Yes. The blog includes educational content, operational insights, product related resources, and business solutions designed to help businesses make informed decisions.",
    },
  ]}
/>
    </div>
  );
};

export default page;