// src/types/interfaces.ts

// Base type for sections with common properties
interface BaseSectionData {
  type: string;
}

// Define each section's data type
export interface HeroSectionData extends BaseSectionData {
  type: "HeroSection";
  title: string;
  subtitle: string;
  ctaText: string;
  image: string;
}

export interface TrustedBySectionData extends BaseSectionData {
  type: "TrustedBySection";
  logos: Array<{ src: string; alt: string }>;
}

export interface FeatureSectionData extends BaseSectionData {
  type: "FeatureSection";
  title: string;
  description: string;
  image: string;
  ctaText: string;
  imagePosition: "left" | "right"; // Adjust if needed
}

export interface BlogPreviewData extends BaseSectionData {
  type: "BlogPreview";
  posts: Array<{
    title: string;
    excerpt: string;
    date: string;
    author: string;
    image?: string;
  }>;
}

export interface CallToActionData extends BaseSectionData {
  type: "CallToAction";
  title: string;
  ctaText: string;
}

export interface MissionData {
  title: string;
  description: string;
}

export interface TeamMemberData {
  name: string;
  role: string;
  image: string;
}

export interface UserReview {
  reviewer: string;
  review: string;
}

export interface UserReviewsData extends BaseSectionData {
  type: "UserReviews";
  reviews: UserReview[];
}

export interface AppIntegration {
  name: string;
  logo: string;
}

export interface AppIntegrationsData extends BaseSectionData {
  type: "AppIntegrations";
  integrations: AppIntegration[];
}

export interface PricingTiersData extends BaseSectionData {
  type: "PricingTiers";
  tiers: Array<{ name: string; price: string; features: string[] }>;
}

export interface FeatureComparisonData extends BaseSectionData {
  type: "FeatureComparison";
  features: Array<{ feature: string; description: string }>;
}

export interface FAQData extends BaseSectionData {
  type: "FAQ";
  faqs: Array<{ question: string; answer: string }>;
}

export interface ContactInfoData extends BaseSectionData {
  type: "ContactInfo";
  address: string;
  phone: string;
  email: string;
}

export interface BlogPostData extends BaseSectionData {
  type: "BlogPost";
  title: string;
  content: string;
  date: string;
  author: string;
}

// Page data interfaces
export interface HomePageData {
  sections: (
    | HeroSectionData
    | TrustedBySectionData
    | FeatureSectionData
    | BlogPreviewData
    | CallToActionData
    | UserReviewsData
    | AppIntegrationsData
    | PricingTiersData
    | FeatureComparisonData
    | FAQData
  )[];
}

export interface PricingPageData {
  sections: (HeroSectionData | PricingTiersData | CallToActionData | FAQData)[];
}

export interface ContactPageData {
  address: string;
  phone: string;
  email: string;
  sections: (ContactInfoData | CallToActionData)[];
}

export interface BlogPageData {
  sections: (BlogPostData | BlogPreviewData)[];
}

export interface ProductPageData {
  sections: (HeroSectionData | FeatureSectionData | CallToActionData)[];
}

export interface AboutPageData {
  hero: HeroSectionData;
  mission: { title: string; description: string };
  team: Array<{ name: string; role: string; image: string }>;
  callToAction: CallToActionData;
}

// src/types/interfaces.ts

export interface FooterLink {
  name: string;
  href: string;
}

export interface FooterData {
  companyInfo: string;
  socialLinks: FooterLink[];
  legalLinks: FooterLink[];
  companyLinks: FooterLink[];
  integrationsLinks: FooterLink[];
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQData extends BaseSectionData {
  type: "FAQ";
  title: string;
  subtitle: string;
  faqs: FAQItem[];
}

// interfaces.ts
export interface Theme {
  "background-color"?: string;
  "body-background-color"?: string;
  "text-color"?: string;
  "cta-background-color"?: string;
  "cta-text-color"?: string;
  "cta-button-background-color"?: string;
  "cta-button-text-color"?: string;
  "cta-button-hover-background-color"?: string;
  "contact-form-background-color"?: string;
  "submit-button-background-color"?: string;
  "submit-button-text-color"?: string;
  "submit-button-hover-background-color"?: string;
  "feature-heading-color"?: string;
  "feature-text-color"?: string;
  "footer-background-color"?: string;
  "footer-text-color"?: string;
  "footer-link-color"?: string;
  "footer-icon-color"?: string;
  "header-background-color"?: string;
  "header-text-color"?: string;
  "header-link-color"?: string;
  "header-link-hover-color"?: string;
  "hero-background-color"?: string;
  "hero-text-color"?: string;
}

// Main App Data
export interface AppData {
  companyName: string;
  navigation: Array<{ name: string; href: string }>;
  pages: {
    home: HomePageData;
    pricing: PricingPageData;
    contact: ContactPageData;
    blog: BlogPageData;
    product: ProductPageData;
    about: AboutPageData;
  };
  footer: FooterData;
  theme: Theme;
}
