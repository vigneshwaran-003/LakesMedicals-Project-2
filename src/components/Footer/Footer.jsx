import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer id="footer" className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          
          <div className="footer-brand">
            <div className="brand-header">
              <span className="material-symbols-outlined">local_hospital</span>
              <span className="brand-name">Lakes Medical</span>
            </div>
            <p className="brand-text">
              Your trusted local GP practice, dedicated to providing high-quality healthcare.
            </p>
          </div>
          
          <div className="footer-links">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#doctors">Doctors</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          
          <div className="footer-contact">
            <h3>Contact Info</h3>
            <ul>
              <li>
                <span className="material-symbols-outlined">location_on</span>
                <span>1 South Lake Drive, South Lake, WA 6164</span>
              </li>
              <li>
                <span className="material-symbols-outlined">call</span>
                <span>08 6256 0068</span>
              </li>
              <li>
                <span className="material-symbols-outlined">mail</span>
                <span>info@lakesmedical.com.au</span>
              </li>
            </ul>
          </div>
          
          <div className="footer-hours">
            <h3>Opening Hours</h3>
            <ul>
              <li>Mon-Fri: 8.00am-5.15pm</li>
              <li>Saturday: 7.00am-1.00pm</li>
              <li>Sunday: 7.00am-1.00pm</li>
            </ul>
          </div>

        </div>
        
        <div className="footer-bottom">
          <p>© 2024 Lakes Medical. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
