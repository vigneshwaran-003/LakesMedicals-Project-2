import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container">

        {/* LEFT CONTENT */}
        <div className="hero-content">
          <h1>
            Compassionate <br />
            Care for a Healthier <br />
            Community.
          </h1>

          <p>
            Your trusted local GP practice, dedicated to providing
            high-quality, accessible healthcare for you and your family.
          </p>

          <div className="hero-actions">
            <button className="btn-primary">
              📅 Book Appointment
            </button>

            <button
            onClick={() => (window.location.href = "tel:+919876543210")}
            className="btn-phone"
            >
              <svg viewBox="0 0 512 512" fill="currentColor">
               <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" />
              </svg>
              +91 9876543210
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="hero-image-wrapper">
          <div className="hero-image-container">
            <img
              src="https://storage.googleapis.com/uxpilot-auth.appspot.com/60e8cf70ce-b67862b057878cc17372.png"
              alt="Doctors consultation"
              className="hero-image"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
