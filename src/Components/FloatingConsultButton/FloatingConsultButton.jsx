// Components/FloatingConsultButton/FloatingConsultButton.jsx
import React from 'react';
import './FloatingConsultButton.scss';

const FloatingConsultButton = () => {
  return (
    <div className="fab-consult">
      <a
        href="#contact"
        className="fab-consult__button"
        aria-label="Request a Private Consultation – jump to contact section"
      >
        {/* Icon – appears on the left when expanded */}
        <span className="fab-consult__icon" aria-hidden="true">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
            <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
            <path d="M9 14h6" />
            <path d="M9 18h4" />
          </svg>
        </span>
        {/* Text – shown only on hover / expand */}
        <span className="fab-consult__text">Request a Private Consultation</span>
      </a>
    </div>
  );
};

export default FloatingConsultButton;