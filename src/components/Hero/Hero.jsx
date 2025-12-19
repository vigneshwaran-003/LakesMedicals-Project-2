import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container">

        {/* LEFT CONTENT */}
        <div className="hero-content">
          <h1>Your Health, Our Priority.</h1>

          <p>
            Providing compassionate, comprehensive, and high-quality medical care
            for you and your family.
          </p>

          <div className="hero-buttons">
            <button className="btn-primary">Book Appointment</button>
            <button className="btn-outline">Call Us</button>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="hero-image"></div>

      </div>
    </section>
  );
};

export default Hero;
