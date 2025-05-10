import React from "react";
import "./Footer.css";
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container"> {/* Add this wrapper */}
        <div className="footer-grid">
          <div className="footer-logo">
            <img src="/assets/logo3.png" alt="Little Lemon Logo" />
          </div>

          <div className="footer-column">
            <h4>Navigation</h4>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/menu">Menu</a></li>
              <li><a href="/booking">Reservations</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Contact</h4>
            <ul>
              <li>123 Main St, Chicago</li>
              <li>(312) 555-1234</li>
              <li>info@littlelemon.com</li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Social Media Links</h4>
            <ul className="social-links">
              <li><a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /> Facebook</a></li>
              <li><a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /> Instagram</a></li>
              <li><a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer"><FaTiktok /> TikTok</a></li>
            </ul>
          </div>
        </div>
      </div> {/* Close wrapper */}
    </footer>
  );
};

export default Footer;
