// src/pages/AboutUsPage.tsx

import React from "react";
import PageConfigurator from "../components/PageConfigurator";
import "../styles/AboutUsPage.css";
import appData from "../data/appData";

const HomePage: React.FC = () => {
  return <PageConfigurator pageData={appData.pages.home} pageName="home" />;
};

export default HomePage;
