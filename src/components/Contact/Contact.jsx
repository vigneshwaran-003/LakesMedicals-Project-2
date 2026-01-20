import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <div className="contact-page">
      {/* Top Info Bar */}
      <div className="top-header">
        <p className="opening-hours">
          Opening hours: Mon–Fri: 8.00am–5.15pm | Sat: 7.00am–1.00pm | Sun:
          7.00am–1.00pm
        </p>
        <div className="top-actions">
          <a href="tel:0862560068" className="phone">
            📞 (08) 6256 0068
          </a>
          <a href="https://www.lakesmedical.com.au/apt" className="book-btn">
            Book an Appointment
          </a>
        </div>
      </div>

      {/* Hero / Banner */}
      <section className="contact-hero">
        <img
          src="/assets/images/Contact-us.webp"
          alt="Contact Us"
          className="hero-img"
        />
        <div className="breadcrumb">
          <a href="/">Home</a> <span>•</span> <span>Contact Us</span>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="contact-info">
        <h2>We want to share our location to find us easily.</h2>
        <div className="contact-cards">
          <div className="contact-card">
            <div className="icon">📍</div>
            <h3>Our Address</h3>
            <p>
              1 South Lake Drive,
              <br />
              South Lake, WA 6164
            </p>
          </div>

          <div className="contact-card">
            <div className="icon">📞</div>
            <h3>Our Phone</h3>
            <p>(08) 6256 0068</p>
          </div>

          <div className="contact-card">
            <div className="icon">📠</div>
            <h3>Our Fax</h3>
            <p>(08) 6102 3765</p>
          </div>
        </div>
      </section>

      {/* Google Map */}
      <section className="map-section">
        <iframe
          title="Lakes Medical Location"
          src="https://www.google.com/maps?q=Lakes%20Medical%20Centre%20WA&output=embed"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>

      {/* Opening Hours & Location */}
      <section className="opening-location">
        <div className="box">
          <h3>OPENING HOURS</h3>
          <p>Monday to Friday : 8.00am - 5.15pm</p>
          <p>Saturday : 7.00am - 1.00pm</p>
          <p>Sunday : 7.00am - 1.00pm</p>

          <h3>LOCATION</h3>
          <p>1 South Lake Drive, South Lake, WA 6164</p>
        </div>

        <div className="box">
          <h3>DOWNLOAD OUR APP</h3>
          <p>
            Booking an appointment has never been easier! You can now book your
            appointment from your phone.
          </p>
          <a
            href="https://apps.apple.com/us/app/lakes-medical-centre/id1491124972"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="/assets/images/App-store-badge.png"
              alt="Download on App Store"
            />
          </a>
        </div>
      </section>
    </div>
  );
};

export default Contact;
