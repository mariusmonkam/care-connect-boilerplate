// src/components/common/CallToAction.tsx
import React from "react";
import "../../styles/CallToAction.css";

interface CallToActionProps {
  title: string;
  ctaText: string;
}

const CallToAction: React.FC<CallToActionProps> = ({ title, ctaText }) => {
  return (
    <div className="call-to-action">
      <h2>{title}</h2>
      <button className="cta-button">{ctaText}</button>
    </div>
  );
};

export default CallToAction;
