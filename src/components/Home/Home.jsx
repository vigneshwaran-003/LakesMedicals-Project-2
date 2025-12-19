import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaClock, FaPhoneAlt as PhoneIcon } from "react-icons/fa";
import "./Home.css";

const Home = () => {
  return (
    <main>

      {/* ================= HERO SECTION ================= */}
      <section className="hero">
        <div className="hero-container">

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
                <PhoneIcon />
                +91 9876543210
              </button>
            </div>
          </div>

          <div className="hero-image-wrapper">
            <img
              src="https://storage.googleapis.com/uxpilot-auth.appspot.com/60e8cf70ce-b67862b057878cc17372.png"
              alt="Doctors consultation"
            />
          </div>

        </div>
      </section>

      {/* ================= CONTACT SECTION ================= */}
      <section className="contact-section">
        <div className="contact-item">
          <FaMapMarkerAlt className="contact-icon" />
          <div className="contact-text">
            <h4>Address</h4>
            <p>123 Main Street, City, Country</p>
          </div>
        </div>

        <div className="contact-item">
          <FaPhoneAlt className="contact-icon" />
          <div className="contact-text">
            <h4>Phone</h4>
            <p>+1 (555) 123-4567</p>
          </div>
        </div>

        <div className="contact-item">
          <FaClock className="contact-icon" />
          <div className="contact-text">
            <h4>Working Hours</h4>
            <p>Mon - Fri: 9:00 AM - 6:00 PM</p>
          </div>
        </div>
      </section>

      {/* ================= ABOUT SECTION ================= */}
      <section className="about-section">
        <div className="about-container">

          <div className="about-image">
            <img
              src="https://images.unsplash.com/photo-1580281657521-8d9c47a4c61b"
              alt="Medical team"
            />
          </div>

          <div className="about-content">
            <h2>About Our Clinic</h2>
            <p>
              We are committed to delivering patient-focused healthcare with
              compassion, professionalism, and integrity.
            </p>

            <button className="btn-primary">
              Learn More
            </button>
          </div>

        </div>
      </section>

    </main>
  );
};

export default Home;
