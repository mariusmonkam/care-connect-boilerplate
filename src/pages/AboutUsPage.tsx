// src/pages/AboutUsPage.tsx

import React from "react";
import PageConfigurator from "../components/PageConfigurator";
import "../styles/AboutUsPage.css";
import appData from "../data/appData";

const AboutUsPage: React.FC = () => {
  return <PageConfigurator pageData={appData.pages.about} pageName="about" />;
};

export default AboutUsPage;
