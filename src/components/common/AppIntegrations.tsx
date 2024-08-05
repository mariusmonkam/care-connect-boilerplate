// src/components/common/AppIntegrations.tsx
import React from "react";
import "../../styles/AppIntegrations.css";

interface AppIntegration {
  name: string;
  logo: string;
}

interface AppIntegrationsProps {
  integrations: AppIntegration[];
}

const AppIntegrations: React.FC<AppIntegrationsProps> = ({ integrations }) => {
  return (
    <div className="app-integrations">
      {integrations.map((integration, index) => (
        <div key={index} className="integration">
          <img src={integration.logo} alt={integration.name} />
          <p>{integration.name}</p>
        </div>
      ))}
    </div>
  );
};

export default AppIntegrations;
