import React from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaClock,
  FaPhoneAlt as PhoneIcon,
  FaRegUserCircle, 
  FaBaby, 
  FaClinicMedical, 
  FaRunning, 
  FaNotesMedical, 
  FaIdCard, 
  FaVenusMars, 
  FaUsers,
  FaApple,
  FaGooglePlay 
} from "react-icons/fa";
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
            <div class="hero-buttons">
  <a href="#book" class="btn btn-primary">
    <span class="material-symbols-outlined">calendar_month</span>
    <span>Book Appointment</span>
  </a>

  <a href="tel:0862560068" class="btn btn-outline">
    <span class="material-symbols-outlined">call</span>
    <span>08 6256 0068</span>
  </a>
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
      <section id="about" className="about-section">
        <div className="about-container">
          <div className="about-image-wrapper">
            <img
              src="https://storage.googleapis.com/uxpilot-auth.appspot.com/cc9be99b92-f72982c7f2f841909c71.png"
              alt="Medical practice building"
              className="about-image"
            />
          </div>
          <div className="about-content">
            <h2>About Us</h2>
            <p>
              From humble beginnings in South Lake, Perth GP has evolved to
              employ close to 500 staff. At its core, its values remain, with
              the group still owned and managed by doctors. We recognise what a
              privilege it is to be part of our patients’ lives and at the heart
              of the community.
            </p>
            <p>
              Lakes Medical is our flagship practice and is cherished by the
              residents of South Lake and its surrounds.
            </p>
            <p>
              The practice continually strives to deliver high-quality care
              that is accessible to all. It is through this hard work and
              dedication that the practice was awarded WA Practice of the Year
              2018 by the Royal Australian College of General Practitioners.
            </p>
            <p className="font-semibold text-secondary">
              All visits on Sundays and Public Holidays are privately billed.
              The charge applies even for patients under the age of 16 and
              patients who hold a valid Pension Card, Concession Card, Healthcare
              Card or DVA Card.
            </p>
            <p className="font-semibold text-secondary">
              Please note that some procedures — Iron Infusion, Ear Syringing and
              Skin Lesions and Removal — are privately billed.
            </p>
            <p>
              The practice has a treasured history of teaching and training and
              we are proud to support General Practice training as well as
              Medical and Nursing Student training.
            </p>
            <p>
              Lakes Medical prides itself on our team philosophy and we
              appreciate the importance that a diversity of skills, cultural
              awareness and interests can have for a patient.
            </p>
            <p className="font-semibold text-primary text-lg">
              At Lakes Medical, you can rest assured that you are being looked
              after by a caring, skilled and dedicated team…
            </p>
          </div>
        </div>
      </section>

  {/* ================= SERVICES SECTION ================= */}
<section id="services" className="services-section">
  <div className="services-container">
    <h2 className="services-title">
      We Offer Different Services to Improve Your Health
    </h2>
    <div className="services-divider"></div>

    <div className="services-grid">
      <div className="service-card">
        <FaRegUserCircle className="service-icon" />
        <h3>Skin Checks & Mole Scanning</h3>
      </div>

      <div className="service-card">
        <FaBaby className="service-icon" />
        <h3>Pregnancy Testing & Antenatal Care</h3>
      </div>

      <div className="service-card">
        <FaNotesMedical className="service-icon" />
        <h3>Cervical Screening Test / Pap Smears</h3>
      </div>

      <div className="service-card">
        <FaRunning className="service-icon" />
        <h3>Sports Medicine</h3>
      </div>

      <div className="service-card">
        <FaClinicMedical className="service-icon" />
        <h3>Diabetic Checks</h3>
      </div>

      <div className="service-card">
        <FaIdCard className="service-icon" />
        <h3>Driving License Medical</h3>
      </div>

      <div className="service-card">
        <FaVenusMars className="service-icon" />
        <h3>Women's / Men's Health Services</h3>
      </div>

      <div className="service-card">
        <FaUsers className="service-icon" />
        <h3>Family Planning & Shared Obstetric Care</h3>
      </div>
    </div>
  </div>
</section>

 {/* ================= AFTER HOURS SECTION ================= */}
<section id="after-hours" className="after-hours-section">
  <div className="after-hours-wrapper">

    <h2 className="after-hours-title">
      After Hours Clinic & Appointments
    </h2>
    <div className="after-hours-divider"></div>

    <div className="after-hours-card">

      {/* LEFT CONTENT */}
      <div className="after-hours-content">
        <div className="after-hours-box">
          <h3>
            Scan QR Code to Request a Doctor’s Appointment for TODAY
          </h3>

          <p>
            Or call{" "}
            <a href="tel:1800238837" className="after-hours-link">
              1800 238 837
            </a>
          </p>

          <p>
            Available from 6pm week nights, 12 noon Saturday, all day Sunday
            and Public Holidays.
          </p>

          <p>
            Send us your details. You will be contacted by our friendly
            triage staff during opening hours to arrange an appointment.
          </p>

          <div className="after-hours-note">
            <p>
              PLEASE NOTE: YOUR APPOINTMENT WILL ONLY BE PROCESSED AFTER YOU
              HAVE RECEIVED A CALL FROM OUR TRIAGE STAFF MEMBER.
            </p>
          </div>
        </div>
      </div>

      {/* RIGHT QR */}
      <div className="after-hours-qr">
        <div className="qr-card">
          <img
            src="https://storage.googleapis.com/uxpilot-auth.appspot.com/3889a32307-92dc56aeef0a2e5d5b33.png"
            alt="QR code for appointment booking"
          />
          <p>Scan to Book</p>
        </div>
      </div>

    </div>
  </div>
</section>


{/* ================= GALLERY SECTION ================= */}
<section id="gallery" className="gallery-section">
  <div className="gallery-wrapper">
    <h2 className="gallery-title">Our Practice Activities</h2>
    <div className="gallery-divider"></div>

    <div className="gallery-grid">
      <div className="gallery-card">
        <img
          src="https://storage.googleapis.com/uxpilot-auth.appspot.com/a954db6259-038d5c6bee92f42b8402.png"
          alt="Medical staff team meeting"
        />
      </div>

      <div className="gallery-card">
        <img
          src="https://storage.googleapis.com/uxpilot-auth.appspot.com/7081cc0eed-5b93126d2c8ce8eda7b4.png"
          alt="Doctor consulting patient"
        />
      </div>

      <div className="gallery-card">
        <img
          src="https://storage.googleapis.com/uxpilot-auth.appspot.com/e3133f80db-6ebc120b3ff6c20da93b.png"
          alt="Clinic waiting room"
        />
      </div>

      <div className="gallery-card">
        <img
          src="https://storage.googleapis.com/uxpilot-auth.appspot.com/62964e07ec-78113ebf2b1d44e438fb.png"
          alt="Elderly patient care"
        />
      </div>

      <div className="gallery-card">
        <img
          src="https://storage.googleapis.com/uxpilot-auth.appspot.com/1a223045c9-e85be704a2a3cef61fa4.png"
          alt="Reception desk"
        />
      </div>

      <div className="gallery-card">
        <img
          src="https://storage.googleapis.com/uxpilot-auth.appspot.com/1a555debcb-12a87bf8865ac022e85b.png"
          alt="Community health event"
        />
      </div>
    </div>
  </div>
</section>


     

{/* ================= MOBILE APP SECTION ================= */}
<section id="mobile-app" className="mobile-app-section">
  <div className="mobile-app-wrapper">
    <div className="mobile-app-card">
      <div className="mobile-app-grid">

        {/* LEFT CONTENT */}
        <div className="mobile-app-content">
          <h2>Book Appointments on the Go</h2>
          <p>
            Download our mobile app for easy appointment booking, medical
            records access, and health reminders.
          </p>

          <div className="mobile-app-buttons">
  <a href="#" className="store-btn">
    <FaApple className="store-icon" />
    <div className="store-text">
      <span className="small-text">Download on the</span>
      <span className="bold-text">App Store</span>
    </div>
  </a>

  <a href="#" className="store-btn">
    <FaGooglePlay className="store-icon" />
    <div className="store-text">
      <span className="small-text">Get it on</span>
      <span className="bold-text">Google Play</span>
    </div>
  </a>
</div>

        </div>

        {/* RIGHT IMAGE */}
        <div className="mobile-app-image">
          <img
            src="https://storage.googleapis.com/uxpilot-auth.appspot.com/fe0fdd56db-721e9092a706a4ab1c49.png"
            alt="Medical appointment booking mobile app"
          />
        </div>

      </div>
    </div>
  </div>
</section>


    </main>
  );
};

export default Home;
