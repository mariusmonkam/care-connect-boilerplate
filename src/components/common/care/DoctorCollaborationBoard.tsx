// In src/components/common/DoctorCollaborationBoard.tsx

import React from "react";
import {
  DoctorCollaborationBoardData,
  CaseData,
} from "../../../types/interfaces";

const DoctorCollaborationBoard: React.FC<DoctorCollaborationBoardData> = (
  props
) => {
  return (
    <div className="doctor-collaboration-board">
      <h2>Doctor Collaboration Board</h2>
      <div className="cases-container">
        {props.cases.map((caseData: CaseData) => (
          <div key={caseData.id} className="case-card">
            <div className="case-header">
              <h3>Patient: {caseData.patientName}</h3>
              <span className={`status ${caseData.status.toLowerCase()}`}>
                {caseData.status}
              </span>
            </div>
            <div className="case-body">
              <p>
                <strong>Condition:</strong> {caseData.condition}
              </p>
              <p>
                <strong>Last Updated:</strong> {caseData.lastUpdated}
              </p>
              <div className="case-notes">
                <h4>Notes:</h4>
                <ul>
                  {caseData.notes.map((note, index) => (
                    <li key={index}>{note}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DoctorCollaborationBoard;
