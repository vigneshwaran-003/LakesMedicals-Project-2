import React from "react";
import "./Header.css";
import { HashLink as Link } from "react-router-hash-link";


const Header = () => {
  return (
    <header>
      <div className="header-container">
        {/* Logo */}
        <div className="header-logo">
          <span className="material-symbols-outlined">
            local_hospital
          </span>
          <span className="logo-text">Lakes Medical</span>
        </div>

        <nav className="header-nav">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link smooth to="/#services">Services</Link>
      <Link smooth to="/#doctors">Doctors</Link>
      <Link smooth to="/#contact">Contact</Link>
    </nav>

        {/* <nav className="header-nav">
          <a href="#home">Home</a>
          <a href="#about">About Us</a>
          <a href="#services">Services</a>
          <a href="#doctors">Doctors</a>
          <a href="#contact">Contact</a>
        </nav> */}

        <div class="hero-buttons">

  <a href="tel:0862560068" class="btn btn-outline">
    <span class="material-symbols-outlined">call</span>
    <span>08 6256 0068</span>
  </a>
  <a href="#book" class="btn btn-primary">
    <span class="material-symbols-outlined">calendar_month</span>
    <span>Book Appointment</span>
  </a>
</div>

      </div>
    </header>
  );
};

export default Header;
