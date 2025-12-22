import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about">
      {/* Header */}
      <header className="header">
        <div className="logo">
          <div className="logo-icon">
            <svg
              width="32"
              height="32"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M24 4H42V17.3333V30.6667H24V44H6V30.6667V17.3333H24V4Z"
                fill="#408c9e"
              />
            </svg>
          </div>
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
              Our GPs maintain a holistic view of your health needs. Lakes Medical
              Centre improves health by providing exceptional patient and
              family-centered care in an environment of education and innovation.
            </p>
            <button className="btn">Meet the Team</button>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section">
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

   <section className="section vision-section">
  <div className="vision-wrapper">
    {/* Vision Text */}
    <div className="vision-content">
      <h2>Our Vision</h2>
      <p>
        Our vision is to meet the health needs of the people of Perth by providing high quality, comprehensive care to all.
      </p>
      <ul>
        <li>
          <span className="material-symbols-outlined">check_circle</span>
          <span>Expanding its range of clinical services and enhance service excellence.</span>
        </li>
        <li>
          <span className="material-symbols-outlined">check_circle</span>
          <span>Increasing its services and training programs.</span>
        </li>
        <li>
          <span className="material-symbols-outlined">check_circle</span>
          <span>Strengthening its commitment to the ongoing health of the people.</span>
        </li>
      </ul>
      <button className="btn">View Clinical Services</button>
    </div>

    {/* Vision Image */}
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
