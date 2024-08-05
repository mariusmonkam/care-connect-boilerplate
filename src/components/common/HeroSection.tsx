import React from "react";
import { HeroSectionData } from "../../types/interfaces";
import "../../styles/HeroSection.css";

const HeroSection: React.FC<HeroSectionData> = ({
  title,
  subtitle,
  ctaText,
  image,
}) => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">{title}</h1>
        <p className="hero-subtitle">{subtitle}</p>
        <button className="hero-cta">{ctaText}</button>
      </div>
      <div className="hero-image-wrapper">
        <img className="hero-image" src={image} alt={title} />
      </div>
    </section>
  );
};

export default HeroSection;
