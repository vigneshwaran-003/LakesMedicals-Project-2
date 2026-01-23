import React from "react";
import "./Contact.css";

import img1 from "../../Assets/Images/Screenshot 2026-01-23 115109.png";
import img2 from "../../Assets/Images/Screenshot 2026-01-23 115118.png";
import img3 from "../../Assets/Images/Screenshot 2026-01-23 115125.png";
import img4 from "../../Assets/Images/Screenshot 2026-01-23 115135.png";



const Contact = () => {
  return (
    <>
      <h2 className="contact-main-title">
        WE WANT TO SHARE OUR LOCATION TO FIND US EASILY.
      </h2>
      <section className="contact-section">
        {/* Top Contact Cards */}
        <div className="contact-grid">
          <div className="contact-cards">
          <div className="contact-card">
            <div className="icon-box">
              <i className="fas fa-map-marker-alt"></i>
            </div>
            <h3>Our Address</h3>
            <p>
              1 South Lake Drive,
              <br />
              South Lake, WA 6164
            </p>
          </div>

          <div className="contact-card">
            <div className="icon-box">
              <i className="fas fa-phone-alt"></i>
            </div>
            <h3>Our Phone</h3>
            <p>(08) 6256 0068</p>
          </div>

          <div className="contact-card">
            <div className="icon-box">
              <i className="fas fa-envelope"></i>
            </div>
            <h3>Our Fax</h3>
            <p>(08) 6102 3765</p>
          </div>
        </div>
        </div>

        {/* Map + Info Section */}
        <div className="contact-container">
          <div className="contact-wrapper">
            <div className="map-box">
              <iframe
                title="Lakes Medical Location"
                src="https://www.google.com/maps?q=Lakes+Medical,+1+S+Lake+Dr,+South+Lake+WA+6164&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            <div className="contact-info">
              <h3>Lakes Medical</h3>
              <p>
                <strong>Address:</strong>
                <br />
                1 S Lake Dr, South Lake WA 6164, Australia
              </p>

              <p>
                <strong>Phone:</strong>
                <br />
                (08) 6256 0068
              </p>

              <p>
                <strong>Email:</strong>
                <br />
                info@lakesmedical.com.au
              </p>

              <p>
                <strong>Opening Hours:</strong>
                <br />
                Mon–Fri: 8:00am – 5:15pm
                <br />
                Sat: 7:00am – 1:00pm
                <br />
                Sun: 7:00am – 1:00pm
              </p>

              <a
                href="https://www.google.com/maps/dir/?api=1&destination=Lakes+Medical,+South+Lake+WA+6164"
                target="_blank"
                rel="noopener noreferrer"
                className="direction-btn"
              >
                Get Directions
              </a>
            </div>
          </div>
        </div>
        <div className="care-images">
          <div><img src={img1} alt="care-first" /></div>
          <div><img src={img2} alt="care-second" /></div>
          <div><img src={img3} alt="care-third" /></div>
          <div><img src={img4} alt="care-fourth" /></div>
        </div>

      </section>
    </>
  );
};

export default Contact;
