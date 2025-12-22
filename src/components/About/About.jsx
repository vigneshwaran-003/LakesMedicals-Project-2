import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about">
      {/* Header */}
      <header className="header">
        <div className="logo">
          <div className="logo-icon">+</div>
          <h2>Lakes Medical Centre</h2>
        </div>
        <nav className="nav">
          <a href="/">Home</a>
          <a href="/">Services</a>
          <a className="active" href="/">About Us</a>
          <a href="/">Contact</a>
          <button className="btn">Book Appointment</button>
        </nav>
      </header>

      {/* About Section */}
      <section className="section about-section">
        <div className="about-wrapper">
          <div className="about-img"></div>
          <div className="about-content">
            <h1>About Lakes Medical Centre</h1>
            <p>
              Our GPs maintain a holistic view of your health needs. Lakes Medical Centre improves health by providing exceptional patient and family-centered care in an environment of education and innovation.
            </p>
            <button className="btn">Meet the Team</button>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section values-section">
        <div className="values-glass">
          <div className="section-header">
            <h2>Our Values</h2>
            <p>We are guided by a commitment to excellence and care in everything we do.</p>
          </div>
          <div className="values-grid">
            <div className="value-card">
              <div className="icon">
                <span className="material-symbols-outlined">handshake</span>
              </div>
              <h3>Respect</h3>
              <p>Respect is crucial for teamwork and maintaining patient confidentiality.</p>
            </div>
            <div className="value-card">
              <div className="icon">
                <span className="material-symbols-outlined">medical_services</span>
              </div>
              <h3>Services</h3>
              <p>We consistently meet the needs of patients, staff, and the community.</p>
            </div>
            <div className="value-card">
              <div className="icon">
                <span className="material-symbols-outlined">verified_user</span>
              </div>
              <h3>Accountability</h3>
              <p>Taking responsibility for our actions and outcomes every day.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="section vision-section">
        <div className="vision-wrapper">
          <div className="vision-content">
            <h2>Our Vision</h2>
            <p>Our vision is to meet the health needs of the people by providing high quality, comprehensive and accessible care.</p>
            <ul>
              <li>Expanding clinical services</li>
              <li>Increasing training programs</li>
              <li>Strengthening community health</li>
            </ul>
            <button className="btn">View Clinical Services</button>
          </div>
          <div className="vision-img"></div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2023 Lakes Medical Centre. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default About;
