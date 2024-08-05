// src/components/common/PricingTiers.tsx
import React from "react";
import "../../styles/PricingTiers.css";

interface PricingTier {
  name: string;
  price: string;
  features: string[];
}

interface PricingTiersProps {
  tiers: PricingTier[];
}

const PricingTiers: React.FC<PricingTiersProps> = ({ tiers }) => {
  return (
    <section className="pricing-tiers">
      {tiers.map((tier, index) => (
        <div key={index} className="tier">
          <h3 className="tier-name">{tier.name}</h3>
          <p className="tier-price">{tier.price}</p>
          <ul className="tier-features">
            {tier.features.map((feature, i) => (
              <li key={i}>{feature}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
};

export default PricingTiers;
