import React from "react";
import { PatientDashboardData } from "../../../types/interfaces";

const PatientDashboard: React.FC<PatientDashboardData> = ({
  patientName,
  upcomingAppointments,
  recentTestResults,
  medications,
  recentVisits,
}) => {
  return (
    <div className="patient-dashboard">
      <h2>Welcome, {patientName}</h2>
      <div className="dashboard-sections">
        <section className="section">
          <h3>Upcoming Appointments</h3>
          <ul>
            {upcomingAppointments.map((appointment, index) => (
              <li key={index}>
                <strong>Date:</strong> {appointment.date} <br />
                <strong>Doctor:</strong> {appointment.doctorName} <br />
                <strong>Purpose:</strong> {appointment.purpose}
              </li>
            ))}
          </ul>
        </section>

        <section className="section">
          <h3>Recent Test Results</h3>
          <ul>
            {recentTestResults.map((result, index) => (
              <li key={index}>
                <strong>Date:</strong> {result.date} <br />
                <strong>Test:</strong> {result.testName} <br />
                <strong>Result:</strong> {result.result}
              </li>
            ))}
          </ul>
        </section>

        <section className="section">
          <h3>Medications</h3>
          <ul>
            {medications.map((medication, index) => (
              <li key={index}>
                <strong>Name:</strong> {medication.name} <br />
                <strong>Dosage:</strong> {medication.dosage} <br />
                <strong>Frequency:</strong> {medication.frequency}
              </li>
            ))}
          </ul>
        </section>

        <section className="section">
          <h3>Recent Visits</h3>
          <ul>
            {recentVisits.map((visit, index) => (
              <li key={index}>
                <strong>Date:</strong> {visit.date} <br />
                <strong>Doctor:</strong> {visit.doctorName} <br />
                <strong>Summary:</strong> {visit.visitSummary}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
};

export default PatientDashboard;
