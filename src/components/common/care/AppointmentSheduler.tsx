// In src/components/common/AppointmentScheduler.tsx

import React from "react";
import { AppointmentSchedulerData } from "../../../types/interfaces";

const AppointmentScheduler: React.FC<AppointmentSchedulerData> = (props) => {
  return (
    <div className="appointment-scheduler">
      <h2>Appointment Scheduler</h2>
      {/* Example content: Replace with actual rendering logic */}
      <p>Schedule your appointments here!</p>
    </div>
  );
};

export default AppointmentScheduler;
