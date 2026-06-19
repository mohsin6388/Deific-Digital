
export type ServiceItem = {
  label: string;
  to: string;
};
 
export type ServiceColumn = {
  title: string;
  items?: ServiceItem[];       // list wale column ke liye
  description?: string;        // description wale column ke liye
  to?: string;                 // description wale column ka link
};
 
export const servicesMenu: ServiceColumn[] = [
  {
    title: "Mobile App Design",
    items: [
      { label: "Android App Development", to: "/services/android-app-development" },
      { label: "iOS App Development", to: "/services/ios-app-development" },
      { label: "Hybrid App Development", to: "/services/hybrid-app-development" },
      { label: "Cross Platform App Development", to: "/services/cross-platform-app-development" },
    ],
  },
  {
    title: "AI & ML",
    items: [
      { label: "AI Integration Services", to: "/services/ai-integration-service" },
      { label: "Chatbots & Virtual Assistants", to: "/services/chatbots-virtual-assistants" },
      { label: "Automation", to: "/services/automation" },
      { label: "Generative AI Solutions", to: "/services/generative-ai-solution" },
    ],
  },
  {
    title: "Digital Marketing",
    items: [
      { label: "SEO (Search Engine Optimization", to: "/services/search-engine-optimization" },
      { label: "Social Media Marketing", to: "/services/social-media-marketing" },
      { label: "Meta Ads", to: "/services/meta-ads" },
      { label: "GMB Optimization", to: "/services/google-my-business-optimization" },
    ],
  },
  {
    title: "MVP Development",
    description:
      "Innotical's Minimum Viable Product (MVP) development services are designed to cater to a diverse range of businesses, offering customized solutions to meet your specific requirements.",
    to: "/services/mvp-development",
  },
  {
    title: "Startup Idea Validation",
    description:
      "Start up valuation is the process of determining the worth of a startup company. This is typically done in order to help the company raise capital, secure financing, or attract investment.",
    to: "/services/startup-idea-validation",
  },
 
  // -----------------------------------------------------------------
  // YAHAN NAYA COLUMN ADD KARNE KA EXAMPLE (copy-paste karke use karo)
  // -----------------------------------------------------------------
  // List wala column:
  // {
  //   title: "Web Development",
  //   items: [
  //     { label: "Frontend Development", to: "/services/frontend-development" },
  //     { label: "Backend Development", to: "/services/backend-development" },
  //   ],
  // },
  //
  // Description wala column:
  // {
  //   title: "UI/UX Design",
  //   description: "Apna description yahan likho.",
  //   to: "/services/ui-ux-design",
  // },
];
 