// src/components/common/FAQ.tsx
import React, { useState } from "react";
import { FAQData } from "../../types/interfaces";
import "../../styles/FAQ.css";

const FAQItemComponent: React.FC<{
  question: string;
  answer: string;
  isOpen: boolean;
  toggle: () => void;
}> = ({ question, answer, isOpen, toggle }) => {
  return (
    <div className={`faq-item ${isOpen ? "open" : ""}`}>
      <button className="faq-question" onClick={toggle}>
        <h3>{question}</h3>
        <span className="faq-icon">{isOpen ? "−" : "+"}</span>
      </button>
      <div className={`faq-answer ${isOpen ? "open" : ""}`}>
        <p>{answer}</p>
      </div>
    </div>
  );
};

const FAQ: React.FC<FAQData> = ({ faqs }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="faq-container">
        <h2 className="faq-title">Frequently Asked Questions</h2>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <FAQItemComponent
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              toggle={() => toggleFAQ(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
