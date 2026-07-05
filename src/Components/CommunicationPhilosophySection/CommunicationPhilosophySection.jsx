// Components/CommunicationPhilosophySection/CommunicationPhilosophySection.jsx
import React, { useEffect, useRef, useState } from 'react';
import philosophyImg from '../../assets/philosophy.jpeg'; // adjust path as needed
import './CommunicationPhilosophySection.scss';

const CommunicationPhilosophySection = () => {
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
    <section className="philosophy" id="philosophy" ref={sectionRef}>
      <div className={`philosophy__container ${isVisible ? 'animate' : ''}`}>
        {/* Left content */}
        <div className="philosophy__content">
          <p className={`philosophy__pre-title ${isVisible ? 'animate' : ''}`}>
            COMMUNICATION PHILOSOPHY
          </p>
          <h2 className={`philosophy__headline ${isVisible ? 'animate' : ''}`}>
            Mastering Perception.<br />Securing Authority.
          </h2>
          <p className={`philosophy__description ${isVisible ? 'animate' : ''}`}>
            Influence requires more than visibility alone. It is shaped through credibility, timing,
            restraint, and message control. OPTIVOX studies how public interpretation forms — and
            intervenes before it hardens into perception.
          </p>

          <p className={`philosophy__axioms-title ${isVisible ? 'animate' : ''}`}>
            THE CORE AXIOMS
          </p>
          <ul className={`philosophy__list ${isVisible ? 'animate' : ''}`}>
            <li>Credibility Precedes Visibility</li>
            <li>Silence Has Strategic Value</li>
            <li>Timing Shapes Interpretation</li>
            <li>Narrative Requires Discipline</li>
            <li>Trust Compounds Over Time</li>
            <li>Public Posture Must Be Deliberate</li>
            <li>Reputation Is Built Before Crisis</li>
          </ul>

          <a href="#philosophy" className={`philosophy__cta ${isVisible ? 'animate' : ''}`}>
            <span className="philosophy__cta-text">Explore Our Philosophy</span>
          </a>
        </div>

        {/* Right image */}
        <div className={`philosophy__image-wrapper ${isVisible ? 'animate' : ''}`}>
          <img 
            src={philosophyImg} 
            alt="Strategic communication philosophy" 
            className="philosophy__image"
            loading='lazy'
          />
        </div>
      </div>
    </section>
  );
};

export default CommunicationPhilosophySection;