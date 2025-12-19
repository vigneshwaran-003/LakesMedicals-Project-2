import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">

        {/* Logo */}
        <div className="header-logo">
          <h2>Lakes Medicals</h2>
        </div>

        {/* Navigation */}
        <nav className="header-nav">
          <a href="/" className="nav-link">Home</a>
          <a href="/about" className="nav-link">About</a>
          <a href="/services" className="nav-link">Services</a>
          <a href="/doctors" className="nav-link">Doctors</a>
          <a href="/contact" className="nav-link">Contact</a>
        </nav>

        {/* Actions */}
        <div className="header-actions">
          <a href="/appointment" className="btn-primary">
            Book Appointment
          </a>

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
    </header>
  );
};

export default Header;
