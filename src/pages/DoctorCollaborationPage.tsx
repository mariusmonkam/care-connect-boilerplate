// src/pages/DoctorCollaborationPage.tsx

import React from "react";
import PageConfigurator from "../components/PageConfigurator";
import "../styles/care/DoctorCollaborationPage.css";
import appData from "../data/appData";

const DoctorCollaborationPage: React.FC = () => {
  return (
    <PageConfigurator
      pageData={appData.pages.doctorCollaboration}
      pageName="doctorCollaboration"
    />
  );
};

export default DoctorCollaborationPage;
