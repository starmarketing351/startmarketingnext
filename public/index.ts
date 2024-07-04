import { StaticImageData } from "next/image";

import Logo from "./heroimages/Logo.png";
import herobg from "./heroimages/hero-image.png";
import banner from "./heroimages/BannerImg2.jpg";

// Client Images
// Client Images
import client1 from "./testimonialsImg/client1.jpg";
import client2 from "./testimonialsImg/client2.jpg";
import client3 from "./testimonialsImg/client3.jpg";
import client4 from "./testimonialsImg/client4.jpg";
import client5 from "./testimonialsImg/client5.jpg";
import client6 from "./testimonialsImg/client6.jpg";
// Client Images
// Client Images

//award images
//award images

import awardimage1 from "./awardsvg/awardmedal.png";
import awardimage2 from "./awardsvg/no.1trophy.png";
import awardimage3 from "./awardsvg/ribbenaward.png";
import awardimage4 from "./awardsvg/shieldwithleaves.png";
//award images
//award images

// Industry Experience Phtos
// Industry Experience Phtos

import indexp1 from "./indExp/indExp1.jpg";
import indexp2 from "./indExp/indExp7.jpg";
import indexp3 from "./indExp/IndExp5.jpg";
import indexp4 from "./indExp/indExp3.jpg";
import indexp5 from "./indExp/indExp8.jpg";
import indexp6 from "./indExp/IndExp5.jpg";
import indexp7 from "./indExp/indExp6.jpg";
import indexp8 from "./indExp/indExp9.jpg";
import indexp9 from "./indExp/indExp10.jpg";
import indexp10 from "./indExp/indExp11.jpg";
import indexp11 from "./indExp/indExp12.jpg";

// Industry Experience Phtos
// Industry Experience Phtos

//  Parterns Images
//  Parterns Images

import digitalocean from "./partners/DigitalOcean.png";
import google from "./partners/Google.png";
import samsung from "./partners/SamsungKnox.png";

//  Parterns Images
//  Parterns Images

// service Images
// service Images

import serviceweb from "./serviceillustartion/app/app1.png";
import serviceapp from "./serviceillustartion/web/web2.jpg";
import servicedesign from "./serviceillustartion/graphic/graphic2.jpg";
import servicesass from "./serviceillustartion/sass/saas2.jpg";
import servicephtography from "./serviceillustartion/productsphography/digitalmarketing.png";

// service Images
// service Images

import webimage1 from "./serviceillustartion/app/app2.jpg";
import webimage2 from "./serviceillustartion/app/app3.jpg";
import webimage3 from "./serviceillustartion/app/app4.jpg";
import webimage4 from "./serviceillustartion/app/app1.png";
import appimage1 from "./serviceillustartion/web/web1.jpg";
import appimage2 from "./serviceillustartion/web/web2.jpg";
import appimage3 from "./serviceillustartion/web/web3.png";
import designimage1 from "./serviceillustartion/graphic/graphic1.jpg";
import designimage2 from "./serviceillustartion/graphic/graphic2.jpg";
import designimage3 from "./serviceillustartion/graphic/graphic3.jpg";
import designimage4 from "./serviceillustartion/graphic/graphic4.jpg";
import designimage5 from "./serviceillustartion/graphic/graphic5.jpg";
import sass1 from "./serviceillustartion/sass/saas1.jpg";
import sass2 from "./serviceillustartion/sass/saas2.jpg";
import sass3 from "./serviceillustartion/sass/saas3.jpg";
import productphoto1 from "./serviceillustartion/productsphography/productp1.jpg";
import productphoto2 from "./serviceillustartion/productsphography/productp2.jpg";
import productphoto3 from "./serviceillustartion/productsphography/productp3.jpg";
import productbanne from "./serviceillustartion/productsphography/digitalmarketing.png";

import {
  FaCode,
  FaMobile,
  FaHashtag,
  FaPaintBrush,
  FaCamera,
  FaCloud,
  FaWhatsapp,
} from "react-icons/fa";

export {
  Logo,
  banner,
  client1,
  client2,
  client3,
  client4,
  client5,
  client6,
  herobg,
  samsung,
  digitalocean,
  webimage1,
  webimage2,
  webimage3,
  webimage4,
  appimage1,
  appimage2,
  appimage3,
  designimage1,
  designimage2,
  designimage3,
  designimage4,
  designimage5,
  sass1,
  sass2,
  sass3,
  productphoto1,
  productphoto2,
  productphoto3,
  productbanne,
  google,
  serviceapp,
  servicedesign,
  servicephtography,
  servicesass,
  serviceweb,
};

export const bannerData = {
  header: "Digital Transformation",
  para: "We simplify the digital transformation journeys of businesses through smart and innovative software solutions.",
  services: [
    {
      title: "Web Development",
      path: "/services/web-development",
      icon: FaCode,
    },
    {
      title: "App Development",
      path: "/services/app-development",
      icon: FaMobile,
    },
    {
      title: "Social Media Marketing",
      path: "/services/social-media-marketing",
      icon: FaHashtag,
    },
    {
      title: "Graphics Design",
      path: "/services/graphics-design",
      icon: FaPaintBrush,
    },
    {
      title: "Product Photography",
      path: "/services/product-photography",
      icon: FaCamera,
    },
    {
      title: "SaaS Development",
      path: "/services/saas-development",
      icon: FaCloud,
    },
  ],
};

import { HomeIcon, SettingsIcon, InfoIcon, PhoneIcon } from "lucide-react";
import { IconType } from "react-icons";

interface LinkInterface {
  title: string;
  path: string;
}

export interface NavigationProps {
  id: number;
  path: string;
  label: string;
  icon?: React.ElementType;
  links?: LinkInterface[];
  isScrolled?: boolean;
}

export const NavLinks: NavigationProps[] = [
  { id: 1, label: "Home", path: "/", icon: HomeIcon },
  {
    id: 2,
    label: "Services",
    path: "/services",
    icon: SettingsIcon,
    links: [
      { title: "Web Development", path: "/services/web-development" },
      { title: "App Development", path: "/services/app-development" },
      {
        title: "Social Media Marketing",
        path: "/services/social-media-marketing",
      },
      { title: "Graphics Design", path: "/services/graphics-design" },
      { title: "Product Photography", path: "/services/product-photography" },
      { title: "SaaS Development", path: "/services/saas-development" },
    ],
  },
  { id: 3, label: "About", path: "/about", icon: InfoIcon },
  { id: 4, label: "Contact", path: "/contact", icon: PhoneIcon },
];

export interface ServiceInterface {
  id: number;
  image: string | StaticImageData;
  title: string;
  description: string;
}

export const services: ServiceInterface[] = [
  {
    id: 1,
    image: serviceweb,
    title: "Web Development",
    description:
      "Whether you need a corporate website, an e-commerce platform, or a complex web application, our team has the expertise to bring your vision to life. We leverage the latest technologies and best practices to ensure your website is fast, secure, and scalable.",
  },
  {
    id: 2,
    image: serviceapp,
    title: "Mobile Development",
    description:
      "Our mobile development team specializes in creating high-performance, feature-rich mobile applications for both iOS and Android platforms. We ensure your app provides an intuitive user experience, seamless performance, and robust security.",
  },
  {
    id: 3,
    image: servicedesign,
    title: "Digital Marketing",
    description:
      "Our digital marketing services help you reach your target audience effectively through SEO, social media, content marketing, and PPC campaigns. We use data-driven strategies to boost your online presence and drive conversions.",
  },
  {
    id: 4,
    image: servicesass,
    title: "Digital Marketing",
    description:
      "Our digital marketing services help you reach your target audience effectively through SEO, social media, content marketing, and PPC campaigns. We use data-driven strategies to boost your online presence and drive conversions.",
  },
  {
    id: 5,
    image: servicephtography,
    title: "Digital Marketing",
    description:
      "Our digital marketing services help you reach your target audience effectively through SEO, social media, content marketing, and PPC campaigns. We use data-driven strategies to boost your online presence and drive conversions.",
  },
];

export const achievementData = [
  { label: "Years in Business", value: "5+" },
  { label: "Solution Experts", value: "850+" },
  { label: "Happy Clients", value: "500+" },
  { label: "Offices Worldwide", value: "2" },
];

export const achievementContent: ServiceInterface[] = [
  {
    id: 1,
    image: awardimage1,
    title: "Experties.com",
    description: "Best Digital Marketing Agencies India ",
  },
  {
    id: 2,
    image: awardimage2,
    title: "Top Developers",
    description: "The Genuine Quality Developers",
  },
  {
    id: 3,
    image: awardimage3,
    title: "Top Eccomerce",
    description: "Top Ecommerce Development Companies",
  },
  {
    id: 4,
    image: awardimage4,
    title: "Top Companies",
    description: "Top Development Companies",
  },
];

export interface ContactInfo {
  type: string;
  value: string;
}

export interface Link {
  title: string;
  path: string;
}

export interface FooterSection {
  label: string;
  info?: string;
  contact?: ContactInfo[];
  links?: Link[];
  text?: string;
}

export const footerContent: FooterSection[] = [
  {
    label: "Contact",
    info: "fatehpur road sikar rajasthan,",
    contact: [
      { type: "email", value: "manger@wingstarnarketing.com" },
      { type: "phone", value: "8000189694" },
      { type: "phone", value: "8209326351" },
    ],
  },
  {
    label: "Company",
    links: [
      { title: "Home", path: "/" },
      { title: "About", path: "/about" },
      { title: "Contact", path: "/contact" },
    ],
  },
  {
    label: "Resources",
    links: [
      { title: "Terms and Services", path: "/terms" },
      { title: "Privacy Policy", path: "/privacy" },
    ],
  },
  {
    label: "Our Services",
    links: [
      { title: "Web Development", path: "/services/web-development" },
      { title: "App Development", path: "/services/app-development" },
      {
        title: "Social Media Marketing",
        path: "/services/social-media-marketing",
      },
      { title: "Graphics Design", path: "/services/graphics-design" },
      { title: "Product Photography", path: "/services/product-photography" },
      { title: "SaaS Development", path: "/services/saas-development" },
    ],
  },
  {
    label: "Copyright",
    text: "© 2023 Star Marketing",
  },
];

// types.ts
export interface TermsContent {
  section: string;
  content: string;
  points?: string[];
  note?: string;
}

export const termsOfServiceContent: TermsContent[] = [
  {
    section: "Introduction",
    content:
      "Welcome to Star Marketing. These Terms of Service ('Terms') govern your use of our website and software development services.",
  },
  {
    section: "Acceptance of Terms",
    content:
      "By accessing our website and using our services, you agree to these Terms.",
  },
  {
    section: "Description of Service",
    content:
      "Star Marketing offers web software development services including Website Development, Web Application Development, Digital Marketing, SEO, and Mobile Application Development.",
  },
  {
    section: "New Features",
    content:
      "Any new features or tools added to the current service are also subject to these Terms of Service.",
  },
  {
    section: "Privacy Policy",
    content:
      "Our Privacy Policy explains how we collect and use your personal data.",
  },
  {
    section: "User Obligations",
    content: "Use of the service is subject to compliance with these Terms.",
  },
  {
    section: "Hyperlinking to our Content",
    content: "The following entities may hyperlink to our website:",
    points: [
      "Government agencies",
      "Search engines",
      "News organizations",
      "Online directory distributors when listing us",
      "Systemwide Accredited Businesses",
    ],
    note: "Non-profit organizations, charity shopping malls, and charity fundraising groups may not hyperlink to our website.",
  },
];

export const testimonials: ServiceInterface[] = [
  {
    id: 1,
    image: client1,
    title: "Shreeniwas Rawat",
    description:
      "Working with Star Marketing has been an absolute pleasure. They understood our vision perfectly and delivered a stunning website that exceeded our expectations. The team was professional, responsive, and went above and beyond to ensure we were happy with the final product. Highly recommend!",
  },

  {
    id: 2,
    image: client3,
    title: "Abdx Pvt Ltd",
    description:
      "From start to finish, the team at Star Marketing was fantastic. They communicated effectively, met all deadlines, and created a website that perfectly aligns with our brand identity. Their expertise and creativity are truly commendable. We couldn't be happier with our new site!",
  },
  {
    id: 3,
    image: client4,
    title: "Surendra Singh",
    description:
      "Star Marketing's professionalism and efficiency made the entire process of developing our website smooth and stress-free. They were always available to answer questions and provide updates. The final product is a sleek, modern website that has already received great feedback from our users.",
  },
  {
    id: 4,
    image: client5,
    title: "Saravan Haritwal",
    description:
      "We approached Star Marketing with a complex project, and they delivered innovative solutions that met all our requirements. Their support throughout the development process was fantastic, and they were always willing to make adjustments as needed. The app they developed is exactly what we needed to take our business to the next level.",
  },
  {
    id: 5,
    image: client6,
    title: "Sikandar Ali",
    description:
      "Star Marketing brought our ideas to life with their remarkable creativity and technical expertise. The website they developed for us is not only visually stunning but also highly functional and easy to navigate. Their team was attentive to our needs and delivered a product that truly represents our brand. We couldn't be more pleased!",
  },
  {
    id: 6,
    image: client2,
    title: "Sarika",
    description:
      "Star Marketing completely transformed our online presence with their app development services. The app is user-friendly, visually appealing, and packed with features that our customers love. Their attention to detail and commitment to quality is unparalleled. We're thrilled with the results!",
  },
];

export interface sections {
  tag: string;
  para: string;
}

export interface SpecialityAbout {
  heading1: string;
  heading2: string;
  sections: sections[];
}

export const SpecialityAbout: SpecialityAbout[] = [
  {
    heading1:
      "At Star Marketing, we believe that every brand has the potential to shine brilliantly in its own unique way.",
    heading2:
      "Founded on the principles of innovation, creativity, and dedication, we've embarked on a mission to help businesses of all sizes reach for the stars and beyond.",
    sections: [
      {
        tag: "Innovative Solutions",
        para: "At Star Marketing, we don't just follow trends – we set them. Our team is constantly exploring new ideas and technologies to ensure that your brand stays ahead of the curve in a rapidly evolving marketplace.",
      },
      {
        tag: "Tailored Approach",
        para: "We understand that every brand is unique, which is why we take a personalized approach to every project. From the initial consultation to the final deliverables, we work closely with you to understand your goals and tailor our strategies to meet your specific needs.",
      },
      {
        tag: "Proven Track Record",
        para: "With years of experience in the industry, we have a proven track record of delivering results for our clients. Whether it's increasing brand awareness, driving website traffic, or boosting sales, we have the expertise and the know-how to make it happen.",
      },
      {
        tag: "Creative Excellence",
        para: "Creativity is at the heart of everything we do. From captivating visuals to compelling storytelling, we believe in pushing the boundaries of creativity to create unforgettable brand experiences that resonate with your audience.",
      },
      {
        tag: "Transparent Communication",
        para: "Communication is key to a successful partnership, which is why we prioritize transparency every step of the way. From project timelines to budget considerations, you can trust us to keep you informed and involved throughout the entire process.",
      },
      {
        tag: "Dedicated Support",
        para: "Our team of dedicated professionals is here to support you every step of the way. Whether you have a question, a concern, or just need some guidance, we're always here to help. Your success is our top priority, and we'll do whatever it takes to ensure that you achieve your goals.",
      },
    ],
  },
];

interface AboutCommitsInterface {
  id: number;
  tag: string;
  para: string;
}

export const AboutCommits: AboutCommitsInterface[] = [
  {
    id: 1,
    tag: "Our Team:",
    para: "At Star Marketing, we believe that the true magic happens when talented individuals come together as a cohesive team. Our team is comprised of passionate marketers, creative designers, strategic thinkers, and technical wizards, all united by a shared vision of helping brands reach their full potential. With diverse backgrounds and expertise, we bring a wealth of knowledge and perspective to every project, ensuring that we deliver results that exceed expectations.",
  },
  {
    id: 2,
    tag: "Our Values:",
    para: "At the heart of everything we do are our core values: integrity, creativity, collaboration, and excellence. These values guide us in every decision we make and every action we take, both internally and externally. We believe in conducting business with honesty and transparency, in pushing the boundaries of creativity to inspire and engage audiences, in working together as a team to achieve common goals, and in striving for excellence in everything we do.",
  },
];

export interface AppBenifitsPoints {
  tag: string;
  content: string;
}

export interface AppBenifits {
  section: string;
  benefitPoints: AppBenifitsPoints[];
}

export interface AppServiceInterface {
  headerSection: string;
  headerContent?: string;
  serviceBenefits?: AppBenifits;
}

export const appServiceArray: AppServiceInterface[] = [
  {
    headerSection: "App Development",
    headerContent:
      "In today's digital world, mobile applications are essential tools for businesses and individuals. Custom app development offers tailored solutions to address unique needs and goals, whether you're a startup or an established enterprise.",
  },
  {
    headerSection: "The Benefits of Mobile-First Web Application Design",
    serviceBenefits: {
      section: "Benefits",
      benefitPoints: [
        {
          tag: "Improved User Experience (UX)",
          content:
            "Mobile-first design creates cleaner, more intuitive interfaces, enhancing the user experience across all devices.",
        },
        {
          tag: "Faster Loading Times",
          content:
            "Prioritizing performance optimization results in lighter web pages that load quickly, benefiting all users.",
        },
        {
          tag: "Responsive Design",
          content:
            "A mobile-first approach ensures a consistent and enjoyable experience on any device.",
        },
        {
          tag: "SEO Benefits",
          content:
            "Mobile-friendly websites rank higher on search engines, boosting your site's visibility.",
        },
        {
          tag: "Increased Reach",
          content:
            "With more people using mobile devices, a mobile-first approach maximizes your reach and user base.",
        },
        {
          tag: "Enhanced Accessibility",
          content:
            "Designing for mobile encourages adherence to accessibility standards, benefiting all users.",
        },
        {
          tag: "Cost-Efficiency",
          content:
            "Focusing on core features first streamlines development and reduces costs, ensuring agility and scalability.",
        },
        {
          tag: "Competitive Advantage",
          content:
            "Delivering a superior mobile experience helps differentiate your application and attract more users.",
        },
      ],
    },
  },
  {
    headerSection: "Tailored Solutions for Every Business",
    headerContent:
      "Off-the-shelf solutions can be limiting. Custom app development brings your vision to life with a solution crafted to meet your specific requirements. From user interfaces to backend systems, everything is designed with your business objectives in mind.",
  },
  {
    headerSection: "Seamless Integration and Scalability",
    headerContent:
      "Custom apps integrate seamlessly with existing systems and processes. They can scale to accommodate growth and evolving requirements, ensuring long-term viability and flexibility.",
  },
  {
    headerSection: "Robust Security and Compliance",
    headerContent:
      "Custom app development implements robust security measures tailored to your needs, protecting user data and mitigating risks. Compliance with industry regulations ensures trust and peace of mind.",
  },
];

export interface WebBenefitPoint {
  tag: string;
  content: string;
}

export interface WebBenefits {
  section: string;
  benefitPoints: WebBenefitPoint[];
}

export interface WebServiceSection {
  headerSection: string;
  headerContent?: string;
  serviceBenefits?: WebBenefits[];
}

export const webServiceArray: WebServiceSection[] = [
  {
    headerSection: "Introduction",
    headerContent:
      "In today's digital age, having a strong online presence is crucial. This guide provides an overview of web development, highlighting its importance and key aspects.",
  },
  {
    headerSection: "The Significance of Web Development",
    headerContent:
      "Web development involves designing, building, and maintaining websites to ensure functionality and user-friendliness. Understanding web development is essential for businesses and aspiring developers alike.",
  },
  {
    headerSection: "Front-End Development",
    headerContent:
      "Front-end development focuses on the visible part of a website. It involves HTML, CSS, and JavaScript to create structure, layout, and interactivity, ensuring an optimal user experience.",
  },
  {
    headerSection: "Back-End Development",
    headerContent:
      "Back-end development works behind the scenes, involving server-side scripting, databases, and server management. Common languages include Python, Ruby, PHP, and Node.js.",
  },
  {
    headerSection: "Full-Stack Development",
    headerContent:
      "Full-stack developers are proficient in both front-end and back-end technologies, making them versatile and capable of handling every aspect of a website.",
  },
  {
    headerSection: "Content Management Systems (CMS)",
    headerContent:
      "CMS platforms like WordPress, Joomla, and Drupal offer user-friendly interfaces and pre-built themes, simplifying the web development process for those with limited coding knowledge.",
  },
  {
    headerSection: "Mastering Web Development",
    serviceBenefits: [
      {
        section: "Mastering Web Development",
        benefitPoints: [
          {
            tag: "Learn the Basics",
            content:
              "Start with HTML, CSS, and JavaScript through online tutorials, coding bootcamps, and courses.",
          },
          {
            tag: "Practice, Practice, Practice",
            content:
              "Create personal projects and build websites to apply your knowledge and gain real-world experience.",
          },
          {
            tag: "Stay Updated",
            content:
              "Keep up with new technologies and trends by following blogs, attending conferences, and participating in online communities.",
          },
          {
            tag: "Work with Others",
            content:
              "Collaborate with developers and designers on open-source projects to expand your skills and network.",
          },
          {
            tag: "Explore Specializations",
            content:
              "Consider specializing in areas like web design, e-commerce, or mobile app development to cater to specific market demands.",
          },
        ],
      },
    ],
  },
  {
    headerSection: "SEO and Web Development",
    serviceBenefits: [
      {
        section: "SEO and Web Development",
        benefitPoints: [
          {
            tag: "Page Load Speed",
            content:
              "Faster loading pages are favored by search engines and users.",
          },
          {
            tag: "Mobile Responsiveness",
            content:
              "Websites must be mobile-friendly to rank well as mobile traffic grows.",
          },
          {
            tag: "Optimized Content",
            content:
              "Use relevant keywords and high-quality content to attract organic traffic.",
          },
          {
            tag: "Properly Structured HTML",
            content:
              "Clean, semantic HTML code is easier for search engines to understand.",
          },
          {
            tag: "User Experience",
            content:
              "A well-designed, user-friendly website encourages longer visits and lowers bounce rates.",
          },
        ],
      },
    ],
  },
];

export interface MarketingPoint {
  tag: string;
  content: string;
}

export interface MarketingInterface {
  section: string;
  content?: string;
  points?: MarketingPoint[];
}

export const starMarketingGraphicContent: MarketingInterface[] = [
  {
    section: "Introduction",
    content:
      "At Star Marketing, we are your partner for creative graphic design solutions. From logo design to brand identity, we help businesses create memorable and impactful visuals.",
  },
  {
    section: "Logo Design",
    content:
      "Our logo design services create memorable brand identities. We work closely with clients to craft logos that reflect their values and resonate with their audience.",
  },
  {
    section: "Packaging Design",
    content:
      "Our packaging design services create visually appealing and functional packaging that enhances product appeal. We design packaging that stands out and communicates your brand effectively.",
  },
  {
    section: "Brand Identity",
    content:
      "Our brand identity services include logos, color schemes, typography, and imagery to represent your brand's essence. We establish strong, consistent identities that resonate with your audience.",
  },
  {
    section: "What We Offer",
    points: [
      {
        tag: "Professional Logo Design",
        content: "Crafting logos that make a lasting impression.",
      },
      {
        tag: "Stunning Graphics for Social Media",
        content: "Creating eye-catching visuals for social platforms.",
      },
      {
        tag: "Eye-Catching Marketing Materials",
        content: "Designing marketing materials that attract attention.",
      },
      {
        tag: "Custom Illustrations and Artwork",
        content:
          "Providing unique illustrations and artwork tailored to your needs.",
      },
    ],
  },
  {
    section: "Why Choose Us?",
    points: [
      {
        tag: "Years of Experience",
        content:
          "Leveraging years of industry experience for top-notch solutions.",
      },
      {
        tag: "Creative Solutions",
        content: "Offering tailored creative solutions that fit your brand.",
      },
      {
        tag: "Fast Turnaround",
        content: "Delivering quick results without compromising quality.",
      },
    ],
  },
  {
    section: "How We Work",
    points: [
      {
        tag: "Schedule a Consultation",
        content: "Book a meeting with our design experts.",
      },
      {
        tag: "Collaborate on Vision",
        content: "Work together on your vision and goals.",
      },
      {
        tag: "Bring Ideas to Life",
        content: "Watch as we transform your ideas into reality.",
      },
    ],
  },
];

export const saasDevelopmentPlatformContent: MarketingInterface[] = [
  {
    section: "Introduction",
    content:
      "Welcome to our SaaS development platform! We offer tools and services to help businesses build, deploy, and manage software applications in the cloud. Accelerate development, reduce costs, and scale effortlessly with our platform.",
  },
  {
    section: "Features",
    points: [
      {
        tag: "Scalable Infrastructure",
        content:
          "Handle increased traffic and workload without downtime with our highly scalable infrastructure.",
      },
      {
        tag: "Developer-Friendly Tools",
        content:
          "Streamline development with our range of developer-friendly tools and APIs.",
      },
      {
        tag: "Automated Deployment",
        content:
          "Deploy applications to the cloud effortlessly with our automated deployment pipelines.",
      },
      {
        tag: "Monitoring and Analytics",
        content:
          "Gain insights into application performance and usage with comprehensive monitoring and analytics.",
      },
      {
        tag: "Security and Compliance",
        content:
          "Ensure robust security and compliance with industry standards and regulations.",
      },
    ],
  },
  {
    section: "Pricing Plans",
    points: [
      {
        tag: "Basic Plan",
        content:
          "Ideal for startups and small businesses, offering essential features at an affordable price.",
      },
      {
        tag: "Pro Plan",
        content:
          "For growing businesses, includes additional features and resources to support scaling needs.",
      },
      {
        tag: "Enterprise Plan",
        content:
          "Tailored for large enterprises, offering custom solutions, dedicated support, and advanced features.",
      },
    ],
  },
  {
    section: "Getting Started",
    points: [
      {
        tag: "Sign Up",
        content: "Create an account on our platform to begin your journey.",
      },
      {
        tag: "Explore Documentation",
        content:
          "Access resources to learn more about our services and how to use them.",
      },
      {
        tag: "Support Team",
        content: "Connect with our support team for assistance and guidance.",
      },
    ],
  },
  {
    section: "Advanced Development Tools",
    points: [
      {
        tag: "Integrated Development Environment (IDE)",
        content:
          "Streamline your workflow with a powerful IDE featuring code highlighting, version control, and real-time collaboration.",
      },
      {
        tag: "CI/CD",
        content:
          "Automate build, test, and deployment processes with our CI/CD pipelines for rapid and reliable delivery.",
      },
      {
        tag: "Containerization and Orchestration",
        content:
          "Use Docker and Kubernetes to package and deploy applications efficiently.",
      },
    ],
  },
  {
    section: "Customization and Extensibility",
    points: [
      {
        tag: "Customizable Templates",
        content:
          "Kickstart projects with customizable templates and themes for a polished look.",
      },
      {
        tag: "Plugin Ecosystem",
        content:
          "Extend platform functionality with a rich ecosystem of plugins and extensions.",
      },
    ],
  },
  {
    section: "Collaboration and Team Management",
    points: [
      {
        tag: "Role-Based Access Control (RBAC)",
        content:
          "Define granular permissions to manage user roles within your organization.",
      },
      {
        tag: "Team Collaboration Features",
        content:
          "Enhance teamwork with shared workspaces, task management, and real-time messaging.",
      },
    ],
  },
  {
    section: "Educational Resources",
    points: [
      {
        tag: "Tutorials and Guides",
        content:
          "Access a comprehensive library of tutorials, guides, and documentation.",
      },
      {
        tag: "Webinars and Workshops",
        content:
          "Participate in interactive webinars and workshops hosted by industry experts.",
      },
    ],
  },
];

export interface industryExperienceInterface {
  id: number;
  image: string | StaticImageData;
  title: string;
  description: string;
}

export const industryExperience: industryExperienceInterface[] = [
  {
    id: 1,
    image: indexp1,
    description:
      "Extensive teamwork and collaboration experience in diverse environments.",
    title: "Teamwork Skills",
  },
  {
    id: 2,
    image: indexp2,
    description:
      "In-depth knowledge of industry-specific tools and technologies.",
    title: "Technical Expertise",
  },
  {
    id: 3,
    image: indexp3,
    description:
      "Proven track record of delivering projects on time and within budget.",
    title: "Project Management",
  },
  {
    id: 4,
    image: indexp4,
    description:
      "Strong analytical skills with a focus on problem-solving and decision-making.",
    title: "Analytical Abilities",
  },
  {
    id: 5,
    image: indexp5,
    description:
      "Effective communication skills for interacting with clients and stakeholders.",
    title: "Communication Skills",
  },
  {
    id: 6,
    image: indexp6,
    description:
      "Adaptability to changing environments and continuous learning mindset.",
    title: "Adaptability",
  },
];

import swhatsapp from "./serviceillustartion/sserviceicons/swhatsapp.jpg";
import stwitter from "./serviceillustartion/sserviceicons/stwitter2.jpg";
import slinkdin from "./serviceillustartion/sserviceicons/slinkdin.jpg";
import sdicord from "./serviceillustartion/sserviceicons/sdiscord.jpg";
import syoutube from "./serviceillustartion/sserviceicons/syoutube.jpg";
import ssocial from "./serviceillustartion/sserviceicons/Social.jpg";

export interface aboutNavigationInterface {
  id: number;
  name: string;
  label: StaticImageData | string;
  description: string;
  path: string;
}

export const aboutNavigation: aboutNavigationInterface[] = [
  {
    id: 1,
    name: "Whatsapp",
    label: swhatsapp,
    description: "Contact us on WhatsApp",
    path: "/contact",
  },
  {
    id: 2,
    name: "Twitter",
    label: stwitter,
    description: "Follow us on Twitter",
    path: "/twitter",
  },
  {
    id: 3,
    name: "LinkedIn",
    label: slinkdin,
    description: "Connect with us on LinkedIn",
    path: "/linkedin",
  },
  {
    id: 4,
    name: "Discord",
    label: sdicord,
    description: "Join our Discord community",
    path: "/discord",
  },
  {
    id: 5,
    name: "YouTube",
    label: syoutube,
    description: "Watch our videos on YouTube",
    path: "/youtube",
  },
  {
    id: 6,
    name: "Social Media",
    label: ssocial,
    description: "Follow us on all social media platforms",
    path: "/social",
  },
];


export interface servicesNavigation {
  id: number;
  title: string;
  image: StaticImageData | string;
  path: string;
}

export const servicesNavigation: servicesNavigation[] = [
  {
    id: 1,
    image: serviceweb,
    title: "Web Development",
    path: "/services/app-development",
  },
  {
    id: 2,
    image: serviceapp,
    title: "",
    path: "/services/web-development",
  },
  {
    id: 3,
    image: servicedesign,
    title: "Digital Marketing",
    path: "/services/graphic-design",
  },
  {
    id: 4,
    image: servicesass,
    title: "Digital Marketing",
    path: "/services/sass-development",
  },
  {
    id: 5,
    image: servicephtography,
    path: "/services/social-media-marketing",
    title: "Digital Marketing",
  },
  {
    id: 5,
    image: productphoto1,
    path: "/services/product-photography",
    title: "Digital Marketing",
  },
];
