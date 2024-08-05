// src/pages/PatientFollowUpPage.tsx

import React from "react";
import PageConfigurator from "../components/PageConfigurator";
import "../styles/care/PatientFollowUpPage.css";
import appData from "../data/appData";

const PatientFollowUpPage: React.FC = () => {
  return (
    <PageConfigurator
      pageData={appData.pages.patientFollowUp}
      pageName="patientFollowUp"
    />
  );
};

export default PatientFollowUpPage;
