// src/pages/AboutUsPage.tsx

import React from "react";
import { appData } from "../data/appData";
import PageConfigurator from "../components/PageConfigurator";
import "../styles/AboutUsPage.css";

const HomePage: React.FC = () => {
  return <PageConfigurator pageData={appData.pages.home} pageName="home" />;
};

export default HomePage;
