import React from "react";
import { TeamMemberData } from "../../types/interfaces";
import "../../styles/TeamSection.css";

interface TeamSectionProps {
  team: TeamMemberData[];
}

const TeamSection: React.FC<TeamSectionProps> = ({ team }) => {
  return (
    <section className="about-team">
      <h2 className="team-title">Meet Our Team</h2>
      <div className="team-members">
        {team.map((member, index) => (
          <div key={index} className="team-member">
            <div className="team-member-image-wrapper">
              <img
                src={member.image}
                alt={member.name}
                className="team-member-image"
              />
            </div>
            <h3 className="team-member-name">{member.name}</h3>
            <p className="team-member-role">{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
