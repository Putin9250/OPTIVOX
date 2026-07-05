// Components/SelectiveEngagementSection/SelectiveEngagementSection.jsx
import React, { useEffect, useRef, useState } from 'react';
import engagementImg from '../../assets/engagement.jpeg'; // adjust path as needed
import './SelectiveEngagementSection.scss';

const SelectiveEngagementSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => { if (sectionRef.current) observer.unobserve(sectionRef.current); };
  }, []);

  return (
    <section className="engagement" id="engagement" ref={sectionRef}>
      <div className={`engagement__container ${isVisible ? 'animate' : ''}`}>
        {/* Left image */}
        <div className={`engagement__image-wrapper ${isVisible ? 'animate' : ''}`}>
          <img 
            src={engagementImg} 
            alt="Discreet high-level advisory" 
            className="engagement__image"
            loading='lazy'
          />
        </div>

        {/* Right content */}
        <div className="engagement__content">
          <p className={`engagement__pre-title ${isVisible ? 'animate' : ''}`}>
            SELECTIVE ENGAGEMENT
          </p>
          <h2 className={`engagement__headline ${isVisible ? 'animate' : ''}`}>
            Absolute Discretion.<br />Deliberate Focus.
          </h2>
          <p className={`engagement__description ${isVisible ? 'animate' : ''}`}>
            OPTIVOX operates through a strictly limited portfolio of mandates to ensure principal‑level
            attention, strategic alignment, rapid response and complete confidentiality. Each engagement
            is structured around trust, consequence, long‑term positioning and the engineering of a
            definitive advantage.
          </p>

          <a href="#contact" className={`engagement__cta ${isVisible ? 'animate' : ''}`}>
            <span className="engagement__cta-text">Request a Private Consultation</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default SelectiveEngagementSection;