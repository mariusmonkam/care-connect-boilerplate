import React from "react";
import { AppointmentSchedulerData } from "../../../types/interfaces";
import "../../../styles/care/PatientPortalPage.css";

const AppointmentScheduler: React.FC<AppointmentSchedulerData> = ({
  availableSlots,
  scheduledAppointments,
}) => {
  return (
    <div className="appointment-scheduler">
      <h2>Available Slots</h2>
      <div className="slots">
        {availableSlots.map((slot, index) => (
          <div key={index} className="slot-card">
            <strong>Date:</strong> {slot.date} <br />
            <strong>Time:</strong> {slot.time} <br />
            <strong>Doctor:</strong> {slot.doctorName} <br />
            <strong>Specialization:</strong> {slot.specialization}
          </div>
        ))}
      </div>

      <h2>Scheduled Appointments</h2>
      <ul>
        {scheduledAppointments.map((appointment, index) => (
          <li key={index}>
            <strong>Date:</strong> {appointment.date} <br />
            <strong>Time:</strong> {appointment.time} <br />
            <strong>Doctor:</strong> {appointment.doctorName} <br />
            <strong>Purpose:</strong> {appointment.purpose} <br />
            <strong>Status:</strong>{" "}
            <span className={`status ${appointment.status}`}>
              {appointment.status}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AppointmentScheduler;
