// src/components/common/FeatureSection.tsx
import React from "react";
import "../../styles/FeatureSection.css";
import { FeatureSectionData } from "../../types/interfaces";

const FeatureSection: React.FC<FeatureSectionData> = ({
  title,
  description,
  image,
  ctaText,
  imagePosition = "left", // Default position if not provided
}) => {
  return (
    <section className={`feature-section ${imagePosition}`}>
      <div className="content-in-feature-section">
        <div className="image-wrapper">
          <img src={image} alt={title} />
        </div>
        <div className="content">
          <h2>{title}</h2>
          <p>{description}</p>
          <button className="cta-button">{ctaText}</button>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
