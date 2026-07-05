// HeroPage.jsx
import React, { useState, useEffect } from "react";
import HeroImg from "../../assets/Hero.jpeg";
import "./Hero.scss";
import Logo from "../../assets/Logo.png"

const Hero = ({ isLoaded }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [bgLoaded, setBgLoaded] = useState(false); // tracks background image load

  // Preload the background image asynchronously
  useEffect(() => {
    const img = new Image();
    img.src = HeroImg;
    img.onload = () => setBgLoaded(true);
    // If the image is already cached (e.g., browser cache), onload may fire immediately.
    if (img.complete) setBgLoaded(true);
  }, []);

  // Lock body scroll while modal is open
  useEffect(() => {
    document.body.style.overflow = isModalOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isModalOpen]);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Consultation request submitted:", formData);
    setFormData({ name: "", email: "", message: "" });
    closeModal();
  };

  return (
    <>
      <section
        className={`hero ${isLoaded ? "hero--visible" : ""} ${bgLoaded ? "hero--bg-loaded" : ""}`}
        style={bgLoaded ? { backgroundImage: `url(${HeroImg})` } : {}}
      >
        <div className="hero__overlay"></div>
        <div className="hero__container">
          <div className="hero__content">
            <div className={`hero__crest ${isLoaded ? "animate" : ""}`}>
              <div className="">
                              <img src={Logo} alt="Logo" style={{borderRadius:'50%'}} className="hero__crest-mark"/>
                
              </div>
              <div className="hero__crest-title">OPTIVOX</div>
              <div className="hero__crest-subtitle">Strategies &amp; Communication</div>
              <div className="hero__crest-tagline">
                <span className="hero__crest-tagline-line" aria-hidden="true"></span>
                Shaping Influence. Defining Impact
                <span className="hero__crest-tagline-line" aria-hidden="true"></span>
              </div>
            </div>

            <h1 className={`hero__heading ${isLoaded ? "animate" : ""}`}>
              Influence <em>is</em>
              <br />
              <span className="hero__typing-wrap">
                <span className="hero__typing">rarely accidental.</span>
              </span>
            </h1>

            <p className={`hero__subtext ${isLoaded ? "animate" : ""}`}>
              It is designed, positioned, and sustained.
            </p>

            <div className={`hero__divider ${isLoaded ? "animate" : ""}`} aria-hidden="true">
              <span className="hero__divider-line"></span>
              <span className="hero__divider-diamond"></span>
              <span className="hero__divider-line"></span>
            </div>

            <a href="#approach" className={`hero__cta ${isLoaded ? "animate" : ""}`} onClick={openModal}>
              <span className="hero__cta-text">Explore Our Approach</span>
            </a>
          </div>
        </div>
      </section>

      {/* Modal */}
      <div className={`modal-overlay ${isModalOpen ? "modal-overlay--open" : ""}`} onClick={closeModal} role="presentation">
        <div className="modal" role="dialog" aria-modal="true" aria-labelledby="modal-title" onClick={(e) => e.stopPropagation()}>
          <button className="modal__close" onClick={closeModal} aria-label="Close modal">&times;</button>
          <h2 id="modal-title" className="modal__title">Request a Private Consultation</h2>
          <p className="modal__subtitle">Share a few details and our team will be in touch shortly.</p>
          <form className="modal__form" onSubmit={handleSubmit}>
            <div className="modal__field">
              <label htmlFor="name">Name</label>
              <input id="name" name="name" type="text" placeholder="Your full name" value={formData.name} onChange={handleChange} required />
            </div>
            <div className="modal__field">
              <label htmlFor="email">Email</label>
              <input id="email" name="email" type="email" placeholder="you@company.com" value={formData.email} onChange={handleChange} required />
            </div>
            <div className="modal__field">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="4" placeholder="Tell us about your requirements" value={formData.message} onChange={handleChange} required></textarea>
            </div>
            <button type="submit" className="modal__submit">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Hero;