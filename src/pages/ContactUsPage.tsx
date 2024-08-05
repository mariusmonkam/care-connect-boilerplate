// src/pages/AboutUsPage.tsx

import React from "react";
import { appData } from "../data/appData";
import PageConfigurator from "../components/PageConfigurator";

const ContactUsPage: React.FC = () => {
  return (
    <PageConfigurator pageData={appData.pages.contact} pageName="contact" />
  );
};

export default ContactUsPage;
