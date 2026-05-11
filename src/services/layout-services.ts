const homePageSchema = () => {
  return [
    {
      id: "website-schema",
      content: JSON.stringify({
        "@context": "https://schema.org/",
        "@type": "WebSite",
        name: "Hbox Digital",
        url: "https://www.hboxdigital.com/",
        potentialAction: {
          "@type": "SearchAction",
          target: "{search_term_string}",
          "query-input": "required name=search_term_string",
        },
      }),
    },
    {
      id: "corporation-schema",
      content: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Corporation",
        name: "Hbox Digital",
        alternateName: "Hbox Digital",
        url: "https://www.hboxdigital.com/",
        logo: "https://www.hboxdigital.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FGianthboxdigitalLogo.58c69a65.png&w=1920&q=75",
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+92 347 3360853",
          contactType: "customer service",
          areaServed: "GB",
          availableLanguage: "en",
        },
        sameAs: [
          "https://www.instagram.com/hboxdigital/",
          "https://www.linkedin.com/company/hboxdigital/",
        ],
      }),
    },
  ];
};

const blogPageSchema = () => {
  return [
    {
      id: "blog-schema",
      content: JSON.stringify({
        "@context": "https://schema.org/",
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://www.hboxdigital.com/",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Blogs",
            item: "https://www.hboxdigital.com/blogs",
          },
        ],
      }),
    },
  ];
};

const portfolioPageSchema = () => {
  return [
    {
      id: "portfolio-breadcrumb",
      content: JSON.stringify({
        "@context": "https://schema.org/",
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://www.hboxdigital.com/",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Portfolio",
            item: "https://www.hboxdigital.com/portfolio",
          },
        ],
      }),
    },
    {
      id: "portfolio-page",
      content: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        name: "Portfolio - Hbox Digital",
        description:
          "Explore our portfolio of web development projects, SaaS applications, and custom software solutions built with cutting-edge technologies.",
        url: "https://www.hboxdigital.com/portfolio",
        publisher: {
          "@type": "Organization",
          name: "Hbox Digital",
          logo: {
            "@type": "ImageObject",
            url: "https://www.hboxdigital.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FGianthboxdigitalLogo.58c69a65.png&w=1920&q=75",
          },
        },
      }),
    },
  ];
};

const aboutUsPageSchema = () => {
  return [
    {
      id: "about-us-breadcrumb",
      content: JSON.stringify({
        "@context": "https://schema.org/",
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://www.hboxdigital.com/",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "About Us",
            item: "https://www.hboxdigital.com/about-us",
          },
        ],
      }),
    },
    {
      id: "courses-page",
      content: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        name: "Courses - Hbox Digital",
        description:
          "Learn web development, full-stack programming, and modern technologies with expert-led courses from Hbox Digital.",
        url: "https://www.hboxdigital.com/courses",
        publisher: {
          "@type": "Organization",
          name: "Hbox Digital",
          logo: {
            "@type": "ImageObject",
            url: "https://www.hboxdigital.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FGianthboxdigitalLogo.58c69a65.png&w=1920&q=75",
          },
        },
      }),
    },
  ];
};

const contactPageSchema = () => {
  return [
    {
      id: "contact-breadcrumb",
      content: JSON.stringify({
        "@context": "https://schema.org/",
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://www.hboxdigital.com/",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Contact",
            item: "https://www.hboxdigital.com/contact",
          },
        ],
      }),
    },
    {
      id: "contact-page",
      content: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "ContactPage",
        name: "Contact Us - Hbox Digital",
        description:
          "Get in touch with Hbox Digital for web development, SaaS solutions, and custom software development services.",
        url: "https://www.hboxdigital.com/contact",
        mainEntity: {
          "@type": "Organization",
          name: "Hbox Digital",
          email: "info@hboxdigital.com",
          telephone: "+92-347-3360853",
          address: {
            "@type": "PostalAddress",
            addressCountry: "PK",
          },
          contactPoint: {
            "@type": "ContactPoint",
            telephone: "+92-347-3360853",
            contactType: "customer service",
            email: "info@hboxdigital.com",
            availableLanguage: ["English", "Urdu"],
          },
        },
      }),
    },
  ];
};

const privacyPolicyPageSchema = () => {
  return [
    {
      id: "privacy-policy",
      content: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: "Privacy Policy - Hbox Digital",
        url: "https://www.hboxdigital.com/privacy-policy",
        description:
          "Privacy policy for Hbox Digital. Information about data collection, usage, cookies and user rights.",
      }),
    },
  ];
};

const termsAndConditionsPageSchema = () => {
  return [
    {
      id: "terms-conditions",
      content: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: "Terms & Conditions - Hbox Digital",
        url: "https://www.hboxdigital.com/terms-and-conditions",
        description:
          "Terms and conditions for using Hbox Digital including service terms, liability, and user responsibilities.",
      }),
    },
  ];
};



export const getSchema = () => {
  return [
    {
      tag: "/",
      schema: homePageSchema(),
    },
    {
      tag: "/blogs",
      schema: blogPageSchema(),
    },
    {
      tag: "/portfolio",
      schema: portfolioPageSchema(),
    },
    {
      tag: "/about-us",
      schema: aboutUsPageSchema(),
    },
    {
      tag: "/contact",
      schema: contactPageSchema(),
    },
    {
      tag: "/privacy-policy",
      schema: privacyPolicyPageSchema(),
    },
    {
      tag: "/terms-and-conditions",
      schema: termsAndConditionsPageSchema(),
    },
  ];
};
