import React from "react";
import "../../styles/MissionSection.css";
import { MissionData } from "../../types/interfaces";

const MissionSection: React.FC<MissionData> = ({ title, description }) => {
  return (
    <section className="about-mission">
      <div className="mission-content">
        <h2 className="mission-title">{title}</h2>
        <p className="mission-description">{description}</p>
      </div>
    </section>
  );
};

export default MissionSection;
