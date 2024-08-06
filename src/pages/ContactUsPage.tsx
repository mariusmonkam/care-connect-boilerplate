import React from "react";
import "../styles/global.css";
import PageConfigurator from "../components/PageConfigurator";
import appData from "../data/appData";

const ContactUsPage: React.FC = () => {
  return (
    <PageConfigurator pageData={appData.pages.contact} pageName="contact" />
  );
};

export default ContactUsPage;
