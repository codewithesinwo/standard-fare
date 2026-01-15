import React from "react";
import { NavLink } from "react-router-dom";
import { SiIfood } from "react-icons/si";
import "../style/Footer.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-column-container">
        <div className="footer-column">
          <div className="footer-logo">
            <span className="footer-logo-icon">
              <SiIfood />
            </span>
            <span className="logo-text">Standard Fare</span>
          </div>
          <p className="footer-desc">
            Fast, reliable food delivery connecting vendors, riders, and
            customers.
          </p>
        </div>

        <div className="footer-column">
          <h4>Standard Fare</h4>
          <ul>
            <li>
              <NavLink to="/about">About us</NavLink>
            </li>
            <li>
              <NavLink to="/vendors">Vendors</NavLink>
            </li>
            <li>
              <NavLink to="/riders">Riders</NavLink>
            </li>
            <li>
              <NavLink to="/careers">Careers</NavLink>
            </li>
            <li>
              <NavLink to="/blogs">Blogs</NavLink>
            </li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Help</h4>
          <ul>
            <li>
              <NavLink to="/support">Support</NavLink>
            </li>
            <li>
              <NavLink to="/faqs">FAQs</NavLink>
            </li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Legal</h4>
          <ul>
            <li>
              <NavLink to="/privacy">Privacy</NavLink>
            </li>
            <li>
              <NavLink to="/terms">Terms & Conditions</NavLink>
            </li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Contact us</h4>
          <ul>
            <li>
              <a href="mailto:hello@standardfare.com">hello@standardfare.com</a>
            </li>
            <li>
              <NavLink to="/instagram">Instagram</NavLink>
            </li>
            <li>
              <NavLink to="/twitter">Twitter</NavLink>
            </li>
            <li>
              <NavLink to="/tiktok">TikTok</NavLink>
            </li>
            <li>
              <NavLink to="/linkedin">LinkedIn</NavLink>
            </li>
            <li>
              <NavLink to="/facebook">Facebook</NavLink>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {year} Standard Fare. All Rights Reserved.</p>
        <button
          className="back-to-top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          ↑ Back to top
        </button>
      </div>
    </footer>
  );
}
