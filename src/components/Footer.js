import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-links">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
        </ul>
      </div>
      <p>&copy; 2024 Scoop Squad. All rights reserved.</p>
    </footer>
  );
}

export default Footer;