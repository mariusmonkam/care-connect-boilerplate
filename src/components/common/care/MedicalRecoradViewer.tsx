// In src/components/common/MedicalRecordViewer.tsx

import React from "react";
import { MedicalRecordViewerData } from "../../../types/interfaces";

const MedicalRecordViewer: React.FC<MedicalRecordViewerData> = (props) => {
  return (
    <div className="medical-record-viewer">
      <h2>Medical Record Viewer</h2>
      {/* Example content: Replace with actual rendering logic */}
      <p>View medical records for {props?.patientId}!</p>
    </div>
  );
};

export default MedicalRecordViewer;
