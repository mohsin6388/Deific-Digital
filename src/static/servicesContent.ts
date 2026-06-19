
// export type ServiceContent = {
//   title: string;
//   tagline: string;
//   description: string;
//   // Future me aur fields add kar sakte ho: heroImage, features list, faqs, etc.
// };
 
// export const servicesContent: Record<string, ServiceContent> = {

//   "android-app-development": {
//     title: "AI Integration Services",
//     tagline: "Seamlessly bring AI into your existing systems",
//     description:
//       "We help businesses integrate AI capabilities into their existing software, workflows, and platforms without disrupting current operations. Our team ensures smooth, scalable, and secure AI adoption tailored to your specific business needs.",
//   },
//   "ios-app-development": {
//     title: "Chatbots & Virtual Assistants",
//     tagline: "Automate conversations, delight your customers",
//     description:
//       "From customer support bots to intelligent virtual assistants, we build conversational AI solutions that understand context, respond naturally, and reduce response time across your support channels.",
//   },
//   "hybrid-app-development": {
//     title: "Automation",
//     tagline: "Let machines handle the repetitive work",
//     description:
//       "We design intelligent automation workflows that eliminate manual, repetitive tasks — from document processing to data entry — freeing up your team to focus on higher-value work.",
//   },
//   "cross-platform-app-development": {
//     title: "Generative AI Solutions",
//     tagline: "Create content, code, and ideas at scale",
//     description:
//       "We build custom generative AI tools for content creation, code generation, image synthesis, and more — tailored to fit your brand voice and business workflows.",
//   },


//   "ai-integration-service": {
//     title: "AI Integration Services",
//     tagline: "Seamlessly bring AI into your existing systems",
//     description:
//       "We help businesses integrate AI capabilities into their existing software, workflows, and platforms without disrupting current operations. Our team ensures smooth, scalable, and secure AI adoption tailored to your specific business needs.",
//   },
//   "chatbots-virtual-assistants": {
//     title: "Chatbots & Virtual Assistants",
//     tagline: "Automate conversations, delight your customers",
//     description:
//       "From customer support bots to intelligent virtual assistants, we build conversational AI solutions that understand context, respond naturally, and reduce response time across your support channels.",
//   },
//   "automation": {
//     title: "Automation",
//     tagline: "Let machines handle the repetitive work",
//     description:
//       "We design intelligent automation workflows that eliminate manual, repetitive tasks — from document processing to data entry — freeing up your team to focus on higher-value work.",
//   },
//   "generative-ai-solution": {
//     title: "Generative AI Solutions",
//     tagline: "Create content, code, and ideas at scale",
//     description:
//       "We build custom generative AI tools for content creation, code generation, image synthesis, and more — tailored to fit your brand voice and business workflows.",
//   },


//   "search-engine-optimization": {
//     title: "Automation",
//     tagline: "Let machines handle the repetitive work",
//     description:
//       "We design intelligent automation workflows that eliminate manual, repetitive tasks — from document processing to data entry — freeing up your team to focus on higher-value work.",
//   },
//   "social-media-marketing": {
//     title: "Generative AI Solutions",
//     tagline: "Create content, code, and ideas at scale",
//     description:
//       "We build custom generative AI tools for content creation, code generation, image synthesis, and more — tailored to fit your brand voice and business workflows.",
//   },

  
//   "meta-ads": {
//     title: "Automation",
//     tagline: "Let machines handle the repetitive work",
//     description:
//       "We design intelligent automation workflows that eliminate manual, repetitive tasks — from document processing to data entry — freeing up your team to focus on higher-value work.",
//   },
//   "google-my-business-optimization": {
//     title: "Generative AI Solutions",
//     tagline: "Create content, code, and ideas at scale",
//     description:
//       "We build custom generative AI tools for content creation, code generation, image synthesis, and more — tailored to fit your brand voice and business workflows.",
//   },
 
//   // -------------------------------------------------------------
//   // NAYA SERVICE ADD KARNE KA EXAMPLE (copy-paste karke use karo)
//   // -------------------------------------------------------------
//   // "your-new-slug": {
//   //   title: "Service Name",
//   //   tagline: "Short one-liner",
//   //   description: "Detailed paragraph about this service.",
//   // },




import {
  Globe,
  Briefcase,
  Users,
  type LucideIcon,
} from "lucide-react";

// ─── Types ─────────────────────────────────────────────────────────────

export interface StatItem {
  icon: LucideIcon;
  value: string;
  label: string;
}

export interface ProcessStep {
  icon: string;
  title: string;
  desc: string;
}

export interface ProjectItem {
  title: string;
  img: string;
  desc: string;
}

export interface ServiceContent {
  // Hero section
  badge: string;
  title: string;
  highlight: string; // gradient highlighted part of the heading
  tagline: string;
  description: string;
  heroImage: string;

  // Stats
  stats: StatItem[];

  // Overview section
  overviewTitle: string;
  overviewParagraphs: string[];
  overviewBadges: string[];

  // Why choose us
  whyChooseTitle: string;
  whyChooseDesc: string;
  whyChooseTags: string[];

  // Process steps ("How we develop")
  processHeading: string;
  processSteps: ProcessStep[];

  // Services list
  servicesHeading: string;
  servicesIntro: string;
  servicesList: string[];

  // Process phases
  processPhases: string[];

  // Projects
  projects: ProjectItem[];
}

// ─── Content per slug ────────────────────────────────────────────────

export const servicesContent: Record<string, ServiceContent> = {
  "android-app-development": {
    badge: "Android App Development",
    title: "Ranked among top 10 best",
    highlight: "Android App Development Company",
    tagline: "Build powerful, scalable Android apps",
    description:
      "For individuals, startups, enterprises and leading organizations. We offer android app development services for smart phones, tablets, wearables.",
    heroImage: "https://picsum.photos/seed/phone/500/500",

    stats: [
      { icon: Globe, value: "10+", label: "Industries" },
      { icon: Briefcase, value: "450", label: "Products Built" },
      { icon: Users, value: "70+", label: "Strong Team" },
    ],

    overviewTitle: "Deific Digital",
    overviewParagraphs: [
      "\u201CEvery success is built on the ability to do better than good enough\u201D \u2013 these words hold true in the world of Android app development. As a leading Android app development company, Deific Digital has consistently delivered high-quality, innovative mobile applications that stand out in the competitive market.",
      "With a team of proficient developers and designers, we have built over 400 apps that are not only technically robust but also visually appealing. Our apps are listed on Google Play and have been widely appreciated by users and clients alike. We cater to startups, medium and large enterprises, offering end-to-end Android development services.",
    ],
    overviewBadges: [
      "Google Play Certified",
      "7+ Years Experience",
      "400+ Apps Delivered",
    ],

    whyChooseTitle: "Why Choose Us?",
    whyChooseDesc:
      "We are a leader among the Android App development companies for more than 7 years and have built over 400 apps following a test driven approach. \u201COur work is done when it serves your purpose\u201D so we dedicate full heartedly to deliver our best when it comes to android app development services. Our standardized tools hand held by our expert android app developers satisfies the client by developing the best android apps.",
    whyChooseTags: [
      "Hybrid app development",
      "Ionic app development",
      "Native app development",
      "On demand app development",
      "Cross platform app development",
    ],

    processHeading: "Develop?",
    processSteps: [
      {
        icon: "\uD83D\uDCA1",
        title: "Understanding what you want",
        desc: "\u2018Customer is the King\u2019 and to satisfy the king is our ultimate goal. Hence, we listen, understand and analyze your professional need, purpose and accomplishments from an Android app.",
      },
      {
        icon: "\uD83C\uDFA8",
        title: "Design Your App",
        desc: "With an in-depth primer of the best techniques and creative app design, we provide a proposal to the client that best ensembles their professional goals.",
      },
      {
        icon: "\uD83D\uDCF1",
        title: "Prototype the App",
        desc: "With an unremitting vision to grow, we prototype our own Apps and upgrade the same for an even better result. We account functionality on board after client\u2019s feedback prior the final production.",
      },
      {
        icon: "\uD83D\uDCBB",
        title: "Developing code",
        desc: "We rely on best Android coding practices in the industry that stupefies over other Android app development companies in the same. Some of our successful applications include Angular Js, Node Js, Django and React, etc.",
      },
      {
        icon: "\uD83E\uDDEA",
        title: "Testing the App",
        desc: "In the course of developing apps for Android, we follow a systematic App testing life cycle. We endure all the steps which include user requirement analysis, test planning, test analysis, test design, test execution and bug reporting, etc.",
      },
      {
        icon: "\uD83D\uDE80",
        title: "Ready to launch",
        desc: "After performing all the development procedures, we launch our App legitimately in the market. Being a committed Android App development firm, we also provide support, maintenance and after sale services as per the market demand.",
      },
    ],

    servicesHeading: "Android Mobile App Development",
    servicesIntro:
      "Your search of leading the Android App Development Company may get a halt at Deific Digital. Demand of mobile application is raging in almost all the businesses today and so we do, to design extensively innovative and gratifying applications. Our Android application development services encompass:",
    servicesList: [
      "Native android App development",
      "Mobile game development",
      "Wearables",
      "Cross platform",
      "Android Specific UX/UI Design",
      "Android app test automation",
      "App support, maintenance and optimization and much more",
    ],

    processPhases: [
      "Mobile App Strategy",
      "Mobile App design",
      "Mobile App prototype",
      "Mobile App Architecture",
      "Mobile App development",
      "Mobile App testing",
      "Mobile App delivery and launch",
      "Mobile App support and maintenance",
      "Mobile App performance and monitoring",
    ],

    projects: [
      {
        title: "MySwaasth: Personal Health Partner",
        img: "https://picsum.photos/seed/health/400/250",
        desc: "Health & Wellness",
      },
      {
        title: "Pelotea: Football Made Social",
        img: "https://picsum.photos/seed/football/400/250",
        desc: "Sports Social Network",
      },
      {
        title: "Agro: Dignifying Agriculture",
        img: "https://picsum.photos/seed/agriculture/400/250",
        desc: "Agri-Tech",
      },
    ],
  },

  "ios-app-development": {
    badge: "Chatbots & Virtual Assistants",
    title: "Ranked among top 10 best",
    highlight: "Conversational AI Development Company",
    tagline: "Automate conversations, delight your customers",
    description:
      "From customer support bots to intelligent virtual assistants, we build conversational AI solutions that understand context, respond naturally, and reduce response time across your support channels.",
    heroImage: "https://picsum.photos/seed/chatbot/500/500",

    stats: [
      { icon: Globe, value: "10+", label: "Industries" },
      { icon: Briefcase, value: "300", label: "Bots Deployed" },
      { icon: Users, value: "70+", label: "Strong Team" },
    ],

    overviewTitle: "Deific Digital",
    overviewParagraphs: [
      "\u201CEvery success is built on the ability to do better than good enough\u201D \u2013 these words hold true in the world of conversational AI. As a leading chatbot development company, Deific Digital has consistently delivered high-quality, intelligent virtual assistants that stand out in the competitive market.",
      "With a team of proficient AI engineers and designers, we have built bots that are not only technically robust but also conversationally natural. Our solutions are deployed across web, WhatsApp, and in-app channels and have been widely appreciated by users and clients alike.",
    ],
    overviewBadges: [
      "NLP Certified Team",
      "5+ Years Experience",
      "300+ Bots Deployed",
    ],

    whyChooseTitle: "Why Choose Us?",
    whyChooseDesc:
      "We are a leader among chatbot and virtual assistant development companies and have built hundreds of bots following a conversation-first approach. \u201COur work is done when it serves your purpose\u201D so we dedicate full heartedly to deliver our best when it comes to conversational AI services.",
    whyChooseTags: [
      "Customer support bots",
      "WhatsApp business bots",
      "Voice assistants",
      "Multilingual chatbots",
      "Enterprise virtual assistants",
    ],

    processHeading: "Build?",
    processSteps: [
      {
        icon: "\uD83D\uDCA1",
        title: "Understanding your use case",
        desc: "We listen, understand and analyze your support workflows and customer pain points before designing any conversation.",
      },
      {
        icon: "\uD83D\uDDE3\uFE0F",
        title: "Designing conversation flows",
        desc: "We map out intents, entities, and dialogue flows that feel natural and guide the user toward resolution quickly.",
      },
      {
        icon: "\uD83E\uDD16",
        title: "Prototype the bot",
        desc: "We build a working prototype so you can test the tone and flow before full-scale development begins.",
      },
      {
        icon: "\uD83D\uDCBB",
        title: "Developing & training the model",
        desc: "We rely on best-in-class NLP frameworks to train models that understand context and intent accurately.",
      },
      {
        icon: "\uD83E\uDDEA",
        title: "Testing the bot",
        desc: "We run the bot through real conversation scenarios, edge cases, and load testing before going live.",
      },
      {
        icon: "\uD83D\uDE80",
        title: "Ready to launch",
        desc: "After performing all the development procedures, we deploy the bot and provide ongoing tuning and support.",
      },
    ],

    servicesHeading: "Chatbot & Virtual Assistant Development",
    servicesIntro:
      "Your search for a leading conversational AI company may get a halt at Deific Digital. Demand for automated, intelligent support is rising across every industry, and so we design extensively innovative and helpful assistants. Our chatbot development services encompass:",
    servicesList: [
      "Customer support chatbots",
      "WhatsApp & Messenger bots",
      "Voice-enabled virtual assistants",
      "Multilingual conversational AI",
      "Bot analytics & optimization",
      "Live agent handoff integration",
      "Bot support, maintenance and optimization and much more",
    ],

    processPhases: [
      "Conversation Strategy",
      "Dialogue Design",
      "Bot Prototype",
      "NLP Architecture",
      "Bot Development",
      "Conversation Testing",
      "Bot Delivery and launch",
      "Bot support and maintenance",
      "Bot performance and monitoring",
    ],

    projects: [
      {
        title: "MySwaasth: AI Health Assistant",
        img: "https://picsum.photos/seed/healthbot/400/250",
        desc: "Health & Wellness Bot",
      },
      {
        title: "Pelotea: Fan Engagement Bot",
        img: "https://picsum.photos/seed/sportsbot/400/250",
        desc: "Sports Engagement",
      },
      {
        title: "Agro: Farmer Support Assistant",
        img: "https://picsum.photos/seed/agribot/400/250",
        desc: "Agri-Tech Support",
      },
    ],
  },

  "hybrid-app-development": {
    badge: "Automation",
    title: "Ranked among top 10 best",
    highlight: "Business Automation Company",
    tagline: "Let machines handle the repetitive work",
    description:
      "We design intelligent automation workflows that eliminate manual, repetitive tasks \u2014 from document processing to data entry \u2014 freeing up your team to focus on higher-value work.",
    heroImage: "https://picsum.photos/seed/automation/500/500",

    stats: [
      { icon: Globe, value: "10+", label: "Industries" },
      { icon: Briefcase, value: "250", label: "Workflows Automated" },
      { icon: Users, value: "70+", label: "Strong Team" },
    ],

    overviewTitle: "Deific Digital",
    overviewParagraphs: [
      "\u201CEvery success is built on the ability to do better than good enough\u201D \u2013 these words hold true in the world of business automation. As a leading automation company, Deific Digital has consistently delivered high-quality workflow solutions that stand out in the competitive market.",
      "With a team of proficient automation engineers, we have built workflows that are not only technically robust but also easy for non-technical teams to manage. Our solutions have been widely appreciated by users and clients alike across industries.",
    ],
    overviewBadges: [
      "RPA Certified Team",
      "6+ Years Experience",
      "250+ Workflows Delivered",
    ],

    whyChooseTitle: "Why Choose Us?",
    whyChooseDesc:
      "We are a leader among automation companies and have built hundreds of workflows following a process-first approach. \u201COur work is done when it serves your purpose\u201D so we dedicate full heartedly to deliver our best when it comes to automation services.",
    whyChooseTags: [
      "Document processing automation",
      "Data entry automation",
      "Workflow orchestration",
      "RPA bots",
      "Integration automation",
    ],

    processHeading: "Automate?",
    processSteps: [
      {
        icon: "\uD83D\uDCA1",
        title: "Understanding your workflow",
        desc: "We listen, understand and analyze your current manual processes to identify where automation will have the biggest impact.",
      },
      {
        icon: "\uD83E\uDDE9",
        title: "Designing the automation",
        desc: "We map out the steps, triggers, and exceptions so the automated workflow handles real-world scenarios reliably.",
      },
      {
        icon: "\uD83D\uDCF1",
        title: "Prototype the workflow",
        desc: "We build a working prototype so you can validate the logic before full-scale automation rollout.",
      },
      {
        icon: "\uD83D\uDCBB",
        title: "Developing the automation",
        desc: "We rely on best automation practices and tools to build reliable, maintainable workflows.",
      },
      {
        icon: "\uD83E\uDDEA",
        title: "Testing the workflow",
        desc: "We run the automation through real data and edge cases to ensure accuracy before going live.",
      },
      {
        icon: "\uD83D\uDE80",
        title: "Ready to launch",
        desc: "After performing all the development procedures, we deploy the automation and provide ongoing support.",
      },
    ],

    servicesHeading: "Business Process Automation",
    servicesIntro:
      "Your search for a leading automation company may get a halt at Deific Digital. Demand for efficient, error-free operations is rising across every business, and so we design extensively reliable automation. Our automation services encompass:",
    servicesList: [
      "Document & invoice processing automation",
      "Data entry & migration automation",
      "Workflow orchestration",
      "RPA bot development",
      "Third-party system integrations",
      "Automation monitoring dashboards",
      "Automation support, maintenance and optimization and much more",
    ],

    processPhases: [
      "Automation Strategy",
      "Workflow Design",
      "Automation Prototype",
      "Automation Architecture",
      "Automation Development",
      "Automation Testing",
      "Automation delivery and launch",
      "Automation support and maintenance",
      "Automation performance and monitoring",
    ],

    projects: [
      {
        title: "MySwaasth: Records Automation",
        img: "https://picsum.photos/seed/healthauto/400/250",
        desc: "Health Records Automation",
      },
      {
        title: "Pelotea: Match Data Automation",
        img: "https://picsum.photos/seed/sportsauto/400/250",
        desc: "Sports Data Pipeline",
      },
      {
        title: "Agro: Supply Chain Automation",
        img: "https://picsum.photos/seed/agriauto/400/250",
        desc: "Agri Supply Automation",
      },
    ],
  },

  "cross-platform-app-development": {
    badge: "Generative AI Solutions",
    title: "Ranked among top 10 best",
    highlight: "Generative AI Solutions Company",
    tagline: "Create content, code, and ideas at scale",
    description:
      "We build custom generative AI tools for content creation, code generation, image synthesis, and more \u2014 tailored to fit your brand voice and business workflows.",
    heroImage: "https://picsum.photos/seed/genai/500/500",

    stats: [
      { icon: Globe, value: "10+", label: "Industries" },
      { icon: Briefcase, value: "180", label: "AI Tools Built" },
      { icon: Users, value: "70+", label: "Strong Team" },
    ],

    overviewTitle: "Deific Digital",
    overviewParagraphs: [
      "\u201CEvery success is built on the ability to do better than good enough\u201D \u2013 these words hold true in the world of generative AI. As a leading generative AI company, Deific Digital has consistently delivered high-quality, innovative AI tools that stand out in the competitive market.",
      "With a team of proficient AI engineers and designers, we have built generative tools that are not only technically robust but also tailored to brand voice. Our solutions have been widely appreciated by users and clients alike across industries.",
    ],
    overviewBadges: [
      "AI Certified Team",
      "4+ Years Experience",
      "180+ AI Tools Delivered",
    ],

    whyChooseTitle: "Why Choose Us?",
    whyChooseDesc:
      "We are a leader among generative AI companies and have built dozens of tools following a research-driven approach. \u201COur work is done when it serves your purpose\u201D so we dedicate full heartedly to deliver our best when it comes to generative AI services.",
    whyChooseTags: [
      "Content generation tools",
      "Code generation assistants",
      "Image synthesis tools",
      "Custom fine-tuned models",
      "Brand-voice AI tools",
    ],

    processHeading: "Create?",
    processSteps: [
      {
        icon: "\uD83D\uDCA1",
        title: "Understanding your goals",
        desc: "We listen, understand and analyze the kind of content, code, or media you want the AI to generate.",
      },
      {
        icon: "\uD83C\uDFA8",
        title: "Designing the AI experience",
        desc: "We design prompts, pipelines and interfaces that fit naturally into your existing workflow.",
      },
      {
        icon: "\uD83D\uDCF1",
        title: "Prototype the tool",
        desc: "We build a working prototype so you can test output quality before full-scale development.",
      },
      {
        icon: "\uD83D\uDCBB",
        title: "Developing the model pipeline",
        desc: "We rely on best practices in prompt engineering and fine-tuning to build reliable generative pipelines.",
      },
      {
        icon: "\uD83E\uDDEA",
        title: "Testing the outputs",
        desc: "We evaluate outputs for quality, safety, and consistency across many real-world scenarios before launch.",
      },
      {
        icon: "\uD83D\uDE80",
        title: "Ready to launch",
        desc: "After performing all the development procedures, we deploy the tool and provide ongoing tuning and support.",
      },
    ],

    servicesHeading: "Generative AI Tool Development",
    servicesIntro:
      "Your search for a leading generative AI company may get a halt at Deific Digital. Demand for AI-generated content and code is rising across every business, and so we design extensively creative AI tools. Our generative AI services encompass:",
    servicesList: [
      "AI content generation tools",
      "Code generation assistants",
      "Image & design synthesis",
      "Custom fine-tuned models",
      "Prompt engineering & optimization",
      "Brand-voice tuned AI tools",
      "AI tool support, maintenance and optimization and much more",
    ],

    processPhases: [
      "AI Strategy",
      "AI Experience design",
      "AI Prototype",
      "AI Architecture",
      "AI Development",
      "AI Testing",
      "AI delivery and launch",
      "AI support and maintenance",
      "AI performance and monitoring",
    ],

    projects: [
      {
        title: "MySwaasth: AI Health Content",
        img: "https://picsum.photos/seed/healthgenai/400/250",
        desc: "Health Content Generation",
      },
      {
        title: "Pelotea: AI Match Highlights",
        img: "https://picsum.photos/seed/sportsgenai/400/250",
        desc: "Sports Content AI",
      },
      {
        title: "Agro: AI Crop Reports",
        img: "https://picsum.photos/seed/agrigenai/400/250",
        desc: "Agri Content AI",
      },
    ],
  },
};

// Aliases — same content reused for duplicate slugs in your routing
servicesContent["ai-integration-service"] = servicesContent["android-app-development"];
servicesContent["chatbots-virtual-assistants"] = servicesContent["ios-app-development"];
servicesContent["automation"] = servicesContent["hybrid-app-development"];
servicesContent["generative-ai-solution"] = servicesContent["cross-platform-app-development"];
servicesContent["search-engine-optimization"] = servicesContent["hybrid-app-development"];
servicesContent["social-media-marketing"] = servicesContent["cross-platform-app-development"];
servicesContent["meta-ads"] = servicesContent["hybrid-app-development"];
servicesContent["google-my-business-optimization"] = servicesContent["cross-platform-app-development"];

// -------------------------------------------------------------
// NAYA SERVICE ADD KARNE KA EXAMPLE (copy-paste karke use karo)
// -------------------------------------------------------------
// servicesContent["your-new-slug"] = {
//   badge: "Service Badge",
//   title: "Ranked among top 10 best",
//   highlight: "Your Service Highlight",
//   tagline: "Short one-liner",
//   description: "Detailed paragraph about this service.",
//   heroImage: "https://picsum.photos/seed/yourseed/500/500",
//   stats: [...],
//   overviewTitle: "Deific Digital",
//   overviewParagraphs: ["...", "..."],
//   overviewBadges: ["...", "...", "..."],
//   whyChooseTitle: "Why Choose Us?",
//   whyChooseDesc: "...",
//   whyChooseTags: ["...", "..."],
//   processHeading: "...",
//   processSteps: [...],
//   servicesHeading: "...",
//   servicesIntro: "...",
//   servicesList: [...],
//   processPhases: [...],
//   projects: [...],
// };