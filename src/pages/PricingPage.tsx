// src/pages/AboutUsPage.tsx

import React from "react";
import { appData } from "../data/appData";
import PageConfigurator from "../components/PageConfigurator";

const PricingPage: React.FC = () => {
  return (
    <PageConfigurator pageData={appData.pages.pricing} pageName="pricing" />
  );
};

export default PricingPage;
