// Navigation data for header and footer

export const servicesData = {
  categories: [
    {
      title: "Design",
      links: [
        { name: "Web Design", href: "/services/design/#web-design" },
        { name: "Mobile App Design", href: "/services/design/#mobile-app-design" },
        { name: "UI/UX Design", href: "/services/design/#ui-ux-design" },
        { name: "Branding", href: "/services/design/#branding" },
      ],
    },
    {
      title: "Development",
      links: [
        { name: "Web Development", href: "/services/web-development" },
        { name: "Mobile App Development", href: "/services/mobile-app-development" },
        { name: "E-commerce Development", href: "/services/ecommerce-development" },
        { name: "CMS Development", href: "/services/cms-development" },
      ],
    },
    {
      title: "Marketing",
      links: [
        { name: "SEO", href: "/services/seo" },
        { name: "Social Media Marketing", href: "/services/social-media-marketing" },
        { name: "Content Marketing", href: "/services/content-marketing" },
        { name: "Email Marketing", href: "/services/email-marketing" },
      ],
    },
    {
      title: "Animation",
      links: [
        { name: "2D Animation", href: "/services/2d-animation" },
        { name: "3D Animation", href: "/services/3d-animation" },
        { name: "Motion Graphics", href: "/services/motion-graphics" },
        { name: "Video Editing", href: "/services/video-editing" },
      ],
    },
  ],
};

export const companyData = {
  sections: [
    {
      title: "About",
      links: [
        { name: "About Us", href: "/about" },
        { name: "Our Team", href: "/team" },
        { name: "Our Process", href: "/process" },
      ],
    },
    {
      title: "Career",
      links: [
        { name: "Job Openings", href: "/careers" },
        { name: "Life at Hbox", href: "/culture" },
        { name: "Benefits", href: "/benefits" },
      ],
    },
    {
      title: "Contact",
      links: [
        { name: "Contact Us", href: "/contact" },
        { name: "Support", href: "/support" },
        { name: "Partners", href: "/partners" },
      ],
    },
  ],
};

interface HireDevelopersSection {
  video: string;
  sections: {
    title: string;
    slug: string;
    description?: string;
    links: {
      name: string;
      slug: string;
      description?: string;
      image?: string;
    }[];
  }[];
}


export const hireDevelopersData : HireDevelopersSection = {
  video: "https://video.wixstatic.com/video/a2f04e_8647970fc223480dbd48352c8cae5637/1080p/mp4/file.mp4",
  sections: [
    {
      title: "Backend Technologies",
      slug: "backend",
      description: "Hire skilled backend developers proficient in server-side technologies to build robust and scalable applications.",
      links: [
        { name: "Node.js Developer", slug: "nodejs-developer" , description: "Our NodeJS developers help you build fast, secure, and scalable applications that stand strong as your business grows.", image: "/images/hire-developers/backend/nodejs.png"},
        { name: "Python Developer", slug: "python-developer" ,description: "Our Python developers help you build robust, scalable, and secure applications that power everything from simple APIs to large-scale enterprise systems." , image: "/images/hire-developers/backend/python.png"},
        { name: "Django Developer", slug: "django-developer" ,description: "Our Django developers help you build secure, scalable, and maintainable web applications that meet your business needs." , image: "/images/hire-developers/backend/django.png"},
        { name: "AI/ML Developer", slug: "aiml-developer" ,description: "Our AI/ML developers help you build intelligent applications that leverage the power of artificial intelligence and machine learning to drive innovation and business growth." , image: "/images/hire-developers/backend/aiml.png"},
        { name: "Java Developer", slug: "java-developer" ,description: "Our Java developers help you build robust, scalable, and secure applications that power everything from enterprise systems to mobile apps." , image: "/images/hire-developers/backend/java.png"},
        { name: "Data Engineer", slug: "data-engineer" ,description: "Our Data Engineers help you design, build, and maintain scalable data pipelines and architectures that enable efficient data processing and analysis." , image: "/images/hire-developers/backend/data-engineer.png"},
        { name: "DevOps Engineer", slug: "devops-engineer" ,description: "Our DevOps Engineers help you streamline your software development and deployment processes, ensuring faster delivery and higher quality applications." , image: "/images/hire-developers/backend/devops.png"},
      ],
    },
    {
      title: "Frontend Technologies",
      slug: "frontend",
      description: "Hire skilled frontend developers proficient in client-side technologies to create engaging and responsive user interfaces.",
      links: [
        { name: "JavaScript Developer", slug: "javascript-developer", description: "Our JavaScript developers help you build dynamic, interactive, and responsive web applications that deliver exceptional user experiences." , image: "/images/hire-developers/frontend/javascript-developer.png"},
        { name: "ReactJS Developer", slug: "reactjs-developer", description: "Build highly interactive user interfaces with great speed and efficiency by hiring our ReactJS developers." , image: "/images/hire-developers/frontend/reactjs-developer.png"},
        { name: "Vue.JS Developer", slug: "vuejs-developer" , description: "Create stunning and high-performance web applications by hiring our expert Vue.js developers." , image: "/images/hire-developers/frontend/vuejs-developer.png"},
        { name: "Typescript Developer", slug: "typescript-developer", description: "Enhance your web applications with type safety and scalability by hiring our skilled TypeScript developers." , image: "/images/hire-developers/frontend/typescript-developer.png"},
        { name: "UI/UX Designer", slug: "uiux-designer", description: "Craft visually appealing and user-friendly designs by hiring our talented UI/UX designers." , image: "/images/hire-developers/frontend/uiux-designer.png"},
      ],
    },
    {
      title: "Mobile Technologies",
      slug: "mobile-apps",
      description: "Hire skilled mobile app developers proficient in building native and cross-platform applications for iOS and Android.",
      links: [
        { name: "React Native Developer", slug: "react-native-developer" , description: "Our React Native developers help you build high-performance, cross-platform mobile applications that deliver a native-like experience on both iOS and Android devices." , image: "/images/hire-developers/mobile/react-native-developer.png"},
        { name: "iOS Developers", slug: "ios-developer" , description: "Our iOS developers help you create stunning, high-performance mobile applications that provide an exceptional user experience on Apple devices." , image: "/images/hire-developers/mobile/ios-developer.png"},
        { name: "Android Developers", slug: "android-developer" , description: "Our Android developers help you build robust, scalable, and user-friendly mobile applications that run seamlessly on a wide range of Android devices." , image: "/images/hire-developers/mobile/android-developer.png"},
      ],
    },
    {
      title: "CMS Developers",
      slug: "cms",
      description: "Hire skilled CMS developers proficient in managing and customizing content management systems like WordPress and Shopify.",
      links: [
        { name: "WordPress Developer", slug: "wordpress-developer", description: "Our WordPress developers help you create custom, scalable, and user-friendly websites that meet your unique business needs." , image: "/images/hire-developers/cms/wordpress-developer.png"},
        { name: "Shopify Developer", slug: "shopify-developer" , description: "Our Shopify developers help you build and customize high-converting e-commerce stores that drive sales and enhance customer experience." , image: "/images/hire-developers/cms/shopify-developer.png"},
      ],
    },
    {
      title: "Cloud Developer",
      slug: "cloud-developers",
      description: "Hire skilled cloud developers proficient in cloud platforms to design, implement, and manage cloud-based solutions.",
      links: [
        { name: "AWS/GCP", slug: "aws-gcp" , description: "Our AWS/GCP developers help you design, deploy, and manage scalable and secure cloud solutions that drive business growth and innovation.", image: "/images/hire-developers/cloud/aws-gcp.png" },
        { name: "Azure", slug: "azure" , description: "Our Azure developers help you build, deploy, and manage applications and services on the Microsoft Azure cloud platform, enabling you to leverage its full potential for your business needs.", image: "/images/hire-developers/cloud/azure.png" },
      ],
    },
    {
      title: "Hire by Role",
      slug: "hire-by-role",
      description: "Hire skilled professionals for key roles to lead and manage your tech projects effectively.",
      links: [
        { name: "CTO", slug: "cto" ,description: "Our CTOs help you align technology strategies with business goals, drive innovation, and lead your tech teams to success." , image: "/images/hire-developers/hire-by-role/cto.png"},
        { name: "Product Manager", slug: "product-manager" , description: "Our Product Managers help you define product vision, strategy, and roadmap, ensuring successful product development and market fit." , image: "/images/hire-developers/hire-by-role/product-manager.png"},
        { name: "SaaS Developer", slug: "saas" , description: "Our SaaS developers help you build scalable, secure, and user-friendly software-as-a-service applications that meet your business needs." , image: "/images/hire-developers/hire-by-role/saas.png"},
        { name: "MERN Stack Developers", slug: "mern" , description: "Our MERN Stack developers help you build full-stack web applications using MongoDB, Express.js, React.js, and Node.js, delivering seamless user experiences and robust backend functionality." , image: "/images/hire-developers/hire-by-role/mern.png"},
        { name: "QA Testers", slug: "qa" , description: "Our QA Testers help you ensure the quality, reliability, and performance of your software applications through rigorous testing and quality assurance processes." , image: "/images/hire-developers/hire-by-role/qa.png"},
      ],
    },
  ],
};


