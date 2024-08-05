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
import {
  HomePageData,
  PricingPageData,
  ContactPageData,
  BlogPageData,
  ProductPageData,
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
} from "../types/interfaces";
import "../styles/PageConfigurator.css";

interface PageConfiguratorProps {
  pageData:
    | HomePageData
    | PricingPageData
    | ContactPageData
    | BlogPageData
    | ProductPageData
    | AboutPageData;
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
        {pageData.sections.map((section, index) => {
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
            case "BlogPost":
              return <BlogPost key={index} {...(section as BlogPostData)} />;
            default:
              return null;
          }
        })}
      </div>
    );
  }

  if (pageName === "contact") {
    if (
      "address" in pageData &&
      "phone" in pageData &&
      "email" in pageData &&
      "sections" in pageData
    ) {
      const contactData = pageData as ContactPageData;
      return (
        <div className={`${commonPageStyles} ${pageName}`}>
          <ContactForm />
          <ContactInfo
            address={contactData.address}
            phone={contactData.phone}
            email={contactData.email}
          />
          {contactData.sections.map((section, index) => {
            switch (section.type) {
              case "ContactInfo":
                return (
                  <ContactInfo key={index} {...(section as ContactInfoData)} />
                );
              case "CallToAction":
                return (
                  <CallToAction
                    key={index}
                    {...(section as CallToActionData)}
                  />
                );
              default:
                return null;
            }
          })}
        </div>
      );
    }
  }

  if (pageName === "about") {
    if (
      "hero" in pageData &&
      "mission" in pageData &&
      "team" in pageData &&
      "callToAction" in pageData
    ) {
      const aboutData = pageData as AboutPageData;
      return (
        <div className={`${commonPageStyles} ${pageName}`}>
          <HeroSection {...aboutData.hero} />
          <MissionSection {...aboutData.mission} />
          <TeamSection team={aboutData.team} />
          <CallToAction {...aboutData.callToAction} />
        </div>
      );
    }
  }

  return null;
};

export default PageConfigurator;
