// In src/components/common/DoctorCollaborationBoard.tsx

import React from "react";
import { DoctorCollaborationBoardData } from "../../../types/interfaces";

const DoctorCollaborationBoard: React.FC<DoctorCollaborationBoardData> = (
  props
) => {
  return (
    <div className="doctor-collaboration-board">
      <h2>Doctor Collaboration Board</h2>
      {/* Example content: Replace with actual rendering logic */}
      <p>Collaborate with your team, {props?.type}!</p>
    </div>
  );
};

export default DoctorCollaborationBoard;
