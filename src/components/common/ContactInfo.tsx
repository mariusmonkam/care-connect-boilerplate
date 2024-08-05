import React from "react";
import "../../styles/ContactInfo.css";

interface ContactInfoProps {
  address: string;
  phone: string;
  email: string;
}

const ContactInfo: React.FC<ContactInfoProps> = ({ address, phone, email }) => {
  return (
    <div className="contact-info">
      <h2>Contact Information</h2>
      <div className="info-item">
        <span className="icon">&#x1F4CD;</span>
        <span className="info-text">{address}</span>
      </div>
      <div className="info-item">
        <span className="icon">&#x1F4DE;</span>
        <span className="info-text">{phone}</span>
      </div>
      <div className="info-item">
        <span className="icon">&#x1F4E7;</span>
        <span className="info-text">{email}</span>
      </div>
    </div>
  );
};

export default ContactInfo;
