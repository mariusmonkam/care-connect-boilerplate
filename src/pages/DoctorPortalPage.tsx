// src/pages/DoctorPortalPage.tsx

import React from "react";
import PageConfigurator from "../components/PageConfigurator";
import "../styles/care/DoctorPortalPage.css";
import appData from "../data/appData";

const DoctorPortalPage: React.FC = () => {
  return (
    <PageConfigurator
      pageData={appData.pages.doctorPortal}
      pageName="doctorPortal"
    />
  );
};

export default DoctorPortalPage;
