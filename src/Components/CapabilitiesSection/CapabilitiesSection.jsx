// Components/CapabilitiesSection/CapabilitiesSection.jsx
import React, { useEffect, useRef, useState } from 'react';
import capabilitiesImg from '../../assets/capabilities.jpeg';
import './CapabilitiesSection.scss';

const CapabilitiesSection = () => {
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
      { threshold: 0.2 } // trigger when 20% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section className="capabilities" id="capabilities" ref={sectionRef}>
      <div className={`capabilities__container ${isVisible ? 'animate' : ''}`}>
        {/* Left content */}
        <div className="capabilities__content">
          <p className={`capabilities__pre-title ${isVisible ? 'animate' : ''}`}>
            STRATEGIC CAPABILITIES
          </p>
          <h2 className={`capabilities__headline ${isVisible ? 'animate' : ''}`}>
            Perception Architecture.<br />Narrative Control.
          </h2>
          <p className={`capabilities__description ${isVisible ? 'animate' : ''}`}>
            Optivox is a boutique strategic communications and perception advisory institution for 
            those whose words, silence, timing, and public posture carry consequence. We advise leaders, 
            political offices, public institutions, family offices, and high‑trust ecosystems on narrative, 
            positioning, reputation, and public influence.
          </p>

          <p className={`capabilities__framework-title ${isVisible ? 'animate' : ''}`}>
            Our Framework Integrates:
          </p>
          <ul className={`capabilities__list ${isVisible ? 'animate' : ''}`}>
            <li>Political Communication Strategy</li>
            <li>Narrative &amp; Counter‑Narrative Design</li>
            <li>Leadership Positioning</li>
            <li>Crisis &amp; Reputation Management</li>
            <li>Public Image Architecture</li>
            <li>Digital Perception Alignment</li>
            <li>Media Narrative Coordination</li>
            <li>Stakeholder Communication Strategy</li>
            <li>Confidential High‑Trust Advisory</li>
          </ul>

          <a href="#capabilities" className={`capabilities__cta ${isVisible ? 'animate' : ''}`}>
            <span className="capabilities__cta-text">Explore Our Capabilities</span>
          </a>
        </div>

        {/* Right image */}
        <div className={`capabilities__image-wrapper ${isVisible ? 'animate' : ''}`}>
          <img 
            src={capabilitiesImg} 
            alt="Strategic capabilities visual representation" 
            className="capabilities__image"
            loading='lazy'
          />
        </div>
      </div>
    </section>
  );
};

export default CapabilitiesSection;