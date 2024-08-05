// src/types/interfaces.ts

// Base type for sections with common properties
export interface BaseSectionData {
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
  imagePosition: "left" | "right";
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

export interface UserReviewsData extends BaseSectionData {
  type: "UserReviews";
  reviews: Array<{
    reviewer: string;
    review: string;
  }>;
}

export interface AppIntegrationsData extends BaseSectionData {
  type: "AppIntegrations";
  integrations: Array<{
    name: string;
    logo: string;
  }>;
}

export interface PricingTiersData extends BaseSectionData {
  type: "PricingTiers";
  tiers: Array<{
    name: string;
    price: string;
    features: string[];
  }>;
}

export interface FeatureComparisonData extends BaseSectionData {
  type: "FeatureComparison";
  features: Array<{
    feature: string;
    description: string;
  }>;
}

export interface FAQData extends BaseSectionData {
  type: "FAQ";
  title: string;
  subtitle: string;
  faqs: Array<{
    question: string;
    answer: string;
  }>;
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

// New interfaces for medical-specific components
export interface PatientDashboardData extends BaseSectionData {
  type: "PatientDashboard";
  patientName: string;
  upcomingAppointments: Array<{
    date: string;
    doctorName: string;
    purpose: string;
  }>;
  recentTestResults: Array<{
    date: string;
    testName: string;
    result: string;
  }>;
}

export interface DoctorCollaborationBoardData extends BaseSectionData {
  type: "DoctorCollaborationBoard";
  cases: Array<{
    id: string;
    patientName: string;
    condition: string;
    status: string;
  }>;
}

export interface MedicalRecordViewerData extends BaseSectionData {
  type: "MedicalRecordViewer";
  patientId: string;
  records: Array<{
    date: string;
    type: string;
    details: string;
  }>;
}

export interface AppointmentSchedulerData extends BaseSectionData {
  type: "AppointmentScheduler";
  availableSlots: Array<{
    date: string;
    time: string;
    doctorName: string;
  }>;
}

// Page data interfaces
export interface HomePageData {
  sections: (
    | HeroSectionData
    | FeatureSectionData
    | CallToActionData
    | PatientDashboardData
    | AppointmentSchedulerData
  )[];
}

export interface PatientFollowUpPageData {
  sections: (
    | HeroSectionData
    | FeatureSectionData
    | PatientDashboardData
    | MedicalRecordViewerData
  )[];
}

export interface DoctorCollaborationPageData {
  sections: (
    | HeroSectionData
    | FeatureSectionData
    | DoctorCollaborationBoardData
  )[];
}

export interface PatientPortalPageData {
  sections: (
    | HeroSectionData
    | FeatureSectionData
    | PatientDashboardData
    | AppointmentSchedulerData
    | MedicalRecordViewerData
  )[];
}

export interface AboutPageData {
  hero: HeroSectionData;
  mission: { title: string; description: string };
  team: Array<{ name: string; role: string; image: string }>;
  callToAction: CallToActionData;
}

export interface ContactPageData {
  address: string;
  phone: string;
  email: string;
  sections: (ContactInfoData | CallToActionData)[];
}

// Footer data interface
export interface FooterLink {
  name: string;
  href: string;
}

export interface FooterData {
  companyInfo: string;
  companyLinks: FooterLink[];
  socialLinks: FooterLink[];
  legalLinks: FooterLink[];
}

// Theme interface
export interface Theme {
  "background-color": string;
  "body-background-color": string;
  "text-color": string;
  "cta-background-color": string;
  "cta-text-color": string;
  "cta-button-background-color": string;
  "cta-button-text-color": string;
  "cta-button-hover-background-color": string;
  "contact-form-background-color": string;
  "submit-button-background-color": string;
  "submit-button-text-color": string;
  "submit-button-hover-background-color": string;
  "feature-heading-color": string;
  "feature-text-color": string;
  "footer-background-color": string;
  "footer-text-color": string;
  "footer-link-color": string;
  "footer-icon-color": string;
  "header-background-color": string;
  "header-text-color": string;
  "header-link-color": string;
  "header-link-hover-color": string;
  "hero-background-color": string;
  "hero-text-color": string;
}

// Main App Data interface
export interface AppData {
  companyName: string;
  navigation: Array<{ name: string; href: string }>;
  pages: {
    home: HomePageData;
    patientFollowUp: PatientFollowUpPageData;
    doctorCollaboration: DoctorCollaborationPageData;
    patientPortal: PatientPortalPageData;
    about: AboutPageData;
    contact: ContactPageData;
  };
  footer: FooterData;
  theme: Theme;
}

// Additional interfaces for future development

export interface User {
  id: string;
  name: string;
  email: string;
  role: "patient" | "doctor" | "nurse" | "admin";
}

export interface Patient extends User {
  dateOfBirth: string;
  medicalHistory: string[];
  currentMedications: string[];
}

export interface Doctor extends User {
  specialty: string;
  licenseNumber: string;
}

export interface Appointment {
  id: string;
  patientId: string;
  doctorId: string;
  date: string;
  time: string;
  purpose: string;
  status: "scheduled" | "completed" | "cancelled";
}

export interface MedicalRecord {
  id: string;
  patientId: string;
  date: string;
  type: string;
  details: string;
  doctorId: string;
}

export interface TestResult {
  id: string;
  patientId: string;
  testName: string;
  date: string;
  result: string;
  doctorId: string;
}

export interface Prescription {
  id: string;
  patientId: string;
  doctorId: string;
  medicationName: string;
  dosage: string;
  frequency: string;
  startDate: string;
  endDate: string;
}

export interface CollaborationCase {
  id: string;
  patientId: string;
  primaryDoctorId: string;
  collaboratingDoctors: string[];
  condition: string;
  status: "open" | "in-progress" | "resolved";
  notes: string[];
}
