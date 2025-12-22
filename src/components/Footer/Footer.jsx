import React from "react";
import {
  FaHospital,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope
} from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer id="footer" className="footer">
      <div className="footer-container">

        <div className="footer-grid">

          {/* Brand */}
          <div className="footer-brand">
            <div className="footer-logo">
              <FaHospital className="footer-logo-icon" />
              <span>Lakes Medical</span>
            </div>
            <p>
              Your trusted local GP practice, dedicated to providing
              high-quality healthcare.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#doctors">Doctors</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3>Contact Info</h3>
            <ul className="contact-list">
              <li>
                <FaMapMarkerAlt />
                <span>1 South Lake Drive, South Lake, WA 6164</span>
              </li>
              <li>
                <FaPhoneAlt />
                <span>08 6256 0068</span>
              </li>
              <li>
                <FaEnvelope />
                <span>info@lakesmedical.com.au</span>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h3>Opening Hours</h3>
            <ul>
              <li>Mon–Fri: 8.00am – 5.15pm</li>
              <li>Saturday: 7.00am – 1.00pm</li>
              <li>Sunday: 7.00am – 1.00pm</li>
            </ul>
          </div>

        </div>

        {/* Bottom */}
        <div className="footer-bottom">
          © 2024 Lakes Medical. All rights reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;
