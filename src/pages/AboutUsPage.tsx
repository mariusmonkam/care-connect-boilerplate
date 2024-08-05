// src/pages/AboutUsPage.tsx

import React from "react";
import { appData } from "../data/appData";
import PageConfigurator from "../components/PageConfigurator";
import "../styles/AboutUsPage.css";

const AboutUsPage: React.FC = () => {
  return <PageConfigurator pageData={appData.pages.about} pageName="about" />;
};

export default AboutUsPage;
