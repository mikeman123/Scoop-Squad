import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Add CSS for styling

function Navbar() {
  return (
    <header className="navbar">
      <div className="logo">
        <Link to="/">
          <img src="/images/Scoop_Squad_Logo.png" alt="Scoop Squad Logo" />
        </Link>
      </div>
      <nav className="mininav">
        <ul className="menu">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
        </ul>
      </nav>
      <div className="header-right">
        <Link to="/login" className="login">Client Login</Link>
        <Link to="/quote" className="cta-button">Free Quote</Link>
      </div>
    </header>
  );
}

export default Navbar;
