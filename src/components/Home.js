import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <h1>We Scoop, You Relax!</h1>
        <p>Your trusted partner in pet waste removal services.</p>
        <a href="/services" className="cta-button">View Services</a>
      </section>

      {/* About Section */}
      <section className="about">
        <h2>Why Choose Scoop Squad?</h2>
        <p>We make pet ownership easier with professional and eco-friendly waste removal services. Spend more time with your pets and less time cleaning your yard!</p>
      </section>

      {/* Services Section */}
      <section className="services">
        <h2>Our Services</h2>
        <div className="service-card">
          <h3>Weekly Cleanup</h3>
          <p>Keep your yard spotless with our reliable weekly service.</p>
        </div>
        <div className="service-card">
          <h3>One-Time Cleanup</h3>
          <p>Perfect for events or seasonal cleaning.</p>
        </div>
        <a href="/services" className="cta-button">See All Services</a>
      </section>

      {/* Contact Section */}
      <section className="contact">
        <h2>Get in Touch</h2>
        <p>Have questions? Reach out to us!</p>
        <a href="/contact" className="cta-button">Contact Us</a>
      </section>
    </div>
  );
};

export default Home;
