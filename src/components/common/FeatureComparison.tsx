// src/components/common/FeatureComparison.tsx
import React from "react";

interface FeatureComparisonProps {
  features: { feature: string; description: string }[];
}

const FeatureComparison: React.FC<FeatureComparisonProps> = ({ features }) => {
  return (
    <div className="feature-comparison">
      {features.map((feature, index) => (
        <div key={index} className="feature">
          <h3>{feature.feature}</h3>
          <p>{feature.description}</p>
        </div>
      ))}
    </div>
  );
};

export default FeatureComparison;
