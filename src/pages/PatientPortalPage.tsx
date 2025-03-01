// src/pages/PatientPortalPage.tsx

import React from "react";
import PageConfigurator from "../components/PageConfigurator";
import appData from "../data/appData";

const PatientPortalPage: React.FC = () => {
  return (
    <PageConfigurator
      pageData={appData.pages.patientPortal}
      pageName="patientPortal"
    />
  );
};

export default PatientPortalPage;
