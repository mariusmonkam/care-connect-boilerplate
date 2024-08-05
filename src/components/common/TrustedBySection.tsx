import React from "react";
import "../../styles/TrustedBySection.css";

interface TrustedBySectionProps {
  logos: { src: string; alt: string }[];
}

const TrustedBySection: React.FC<TrustedBySectionProps> = ({ logos }) => {
  return (
    <section className="trusted-by">
      <h2 className="trusted-by-title">Trusted By Leading Companies</h2>
      <div className="trusted-by-logos">
        {logos.map((logo, index) => (
          <div key={index} className="trusted-by-logo">
            <img src={logo.src} alt={logo.alt} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrustedBySection;
