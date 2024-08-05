// src/components/common/care/PatientDashboard.tsx

import React from "react";
import { PatientDashboardData } from "../../../types/interfaces";

const PatientDashboard: React.FC<PatientDashboardData> = (props) => {
  return (
    <div className="patient-dashboard">
      <h2>Patient Dashboard</h2>
      <p>Welcome to your dashboard, {props.patientName}!</p>

      <div className="upcoming-appointments">
        <h3>Upcoming Appointments</h3>
        <ul>
          {props.upcomingAppointments.map((appointment, index) => (
            <li key={index}>
              <strong>{appointment.date}</strong> with {appointment.doctorName}{" "}
              - {appointment.purpose}
            </li>
          ))}
        </ul>
      </div>

      <div className="recent-test-results">
        <h3>Recent Test Results</h3>
        <ul>
          {props.recentTestResults.map((result, index) => (
            <li key={index}>
              <strong>{result.date}</strong> - {result.testName}:{" "}
              {result.result}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PatientDashboard;
