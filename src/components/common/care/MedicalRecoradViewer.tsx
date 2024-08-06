import React from "react";
import { MedicalRecordViewerData } from "../../../types/interfaces";
import "../../../styles/care/PatientPortalPage.css";

const MedicalRecordViewer: React.FC<MedicalRecordViewerData> = ({
  records,
}) => {
  return (
    <div className="medical-record-viewer">
      <h2>Medical Records</h2>
      <ul>
        {records.map((record, index) => (
          <li key={index}>
            <strong>Date:</strong> {record.date} <br />
            <strong>Type:</strong> {record.type} <br />
            <strong>Details:</strong> {record.details} <br />
            <strong>Doctor:</strong> {record.doctorName}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MedicalRecordViewer;
