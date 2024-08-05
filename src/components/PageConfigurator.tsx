// src/components/PageConfigurator.tsx

import React from "react";
import HeroSection from "./common/HeroSection";
import TrustedBySection from "./common/TrustedBySection";
import FeatureSection from "./common/FeatureSection";
import BlogPreview from "./common/BlogPreview";
import CallToAction from "./common/CallToAction";
import UserReviews from "./common/UserReviews";
import AppIntegrations from "./common/AppIntegrations";
import PricingTiers from "./common/PricingTiers";
import FeatureComparison from "./common/FeatureComparison";
import FAQ from "./common/FAQ";
import ContactForm from "./common/ContactForm";
import ContactInfo from "./common/ContactInfo";
import BlogPost from "./common/BlogPost";
import MissionSection from "./common/MissionSection";
import TeamSection from "./common/TeamSection";

// Import medical-specific components
import PatientDashboard from "./common/care/PatientDashboard";
import DoctorCollaborationBoard from "./common/care/DoctorCollaborationBoard";

import {
  HomePageData,
  ContactPageData,
  AboutPageData,
  HeroSectionData,
  TrustedBySectionData,
  FeatureSectionData,
  BlogPreviewData,
  CallToActionData,
  UserReviewsData,
  AppIntegrationsData,
  PricingTiersData,
  FeatureComparisonData,
  FAQData,
  ContactInfoData,
  BlogPostData,
  PatientDashboardData,
  DoctorCollaborationBoardData,
  MedicalRecordViewerData,
  AppointmentSchedulerData,
} from "../types/interfaces";
import "../styles/PageConfigurator.css";
import MedicalRecordViewer from "./common/care/MedicalRecoradViewer";
import AppointmentScheduler from "./common/care/AppointmentSheduler";

interface PageConfiguratorProps {
  pageData: HomePageData | ContactPageData | AboutPageData;
  pageName: string;
}

const PageConfigurator: React.FC<PageConfiguratorProps> = ({
  pageData,
  pageName,
}) => {
  const commonPageStyles = "page";

  if (
    pageName !== "contact" &&
    pageName !== "about" &&
    "sections" in pageData
  ) {
    return (
      <div className={`${commonPageStyles} ${pageName}`}>
        {pageData.sections.map((section, index: number) => {
          switch (section.type) {
            case "HeroSection":
              return (
                <HeroSection key={index} {...(section as HeroSectionData)} />
              );
            case "TrustedBySection":
              return (
                <TrustedBySection
                  key={index}
                  {...(section as TrustedBySectionData)}
                />
              );
            case "FeatureSection":
              return (
                <FeatureSection
                  key={index}
                  {...(section as FeatureSectionData)}
                />
              );
            case "BlogPreview":
              return (
                <BlogPreview key={index} {...(section as BlogPreviewData)} />
              );
            case "CallToAction":
              return (
                <CallToAction key={index} {...(section as CallToActionData)} />
              );
            case "UserReviews":
              return (
                <UserReviews key={index} {...(section as UserReviewsData)} />
              );
            case "AppIntegrations":
              return (
                <AppIntegrations
                  key={index}
                  {...(section as AppIntegrationsData)}
                />
              );
            case "PricingTiers":
              return (
                <PricingTiers key={index} {...(section as PricingTiersData)} />
              );
            case "FeatureComparison":
              return (
                <FeatureComparison
                  key={index}
                  {...(section as FeatureComparisonData)}
                />
              );
            case "FAQ":
              return <FAQ key={index} {...(section as FAQData)} />;

            case "PatientDashboard":
              return (
                <PatientDashboard
                  key={index}
                  {...(section as PatientDashboardData)}
                />
              );
            case "DoctorCollaborationBoard":
              return (
                <DoctorCollaborationBoard
                  key={index}
                  {...(section as DoctorCollaborationBoardData)}
                />
              );
            case "MedicalRecordViewer":
              return (
                <MedicalRecordViewer
                  key={index}
                  {...(section as MedicalRecordViewerData)}
                />
              );
            case "AppointmentScheduler":
              return (
                <AppointmentScheduler
                  key={index}
                  {...(section as AppointmentSchedulerData)}
                />
              );
            default:
              return null;
          }
        })}
      </div>
    );
  }

  if (pageName === "contact") {
    return (
      <div className={commonPageStyles}>
        <ContactInfo {...(pageData as ContactPageData)} />
        <ContactForm />
      </div>
    );
  }

  if (pageName === "about") {
    return (
      <div className={commonPageStyles}>
        <MissionSection {...(pageData as AboutPageData).mission} />
        <CallToAction {...(pageData as AboutPageData).callToAction} />
      </div>
    );
  }

  return null;
};

export default PageConfigurator;
