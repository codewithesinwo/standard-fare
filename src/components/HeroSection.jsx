import React from "react";
import "../style/HeroSection.css";
import phone from "../image/phone.png";
import { FaMapLocation } from "react-icons/fa6";
import { GiMeal } from "react-icons/gi";
import { FaTruck } from "react-icons/fa";





const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-section-left">
        <h1 className="hero-section-title">
          Crave It! Order It! <span>Enjoy It!</span>
        </h1>

        <div className="feature">
          <div className="icon">
            <FaMapLocation />
          </div>
          <div>
            <h4>Your city, your choices</h4>
            <p>
              Explore a wide variety of restaurants and flexible menus. Order
              your favorites or discover new spots nearby!
            </p>
          </div>
        </div>

        <div className="feature">
          <div className="icon">
            <GiMeal />
          </div>
          <div>
            <h4>Every meal you crave</h4>
            <p>
              From Jollof Rice and chicken to Pounded Yam and Egusi, enjoy your
              favorite meals delivered right to your door.
            </p>
          </div>
        </div>

        <div className="feature">
          <div className="icon"><FaTruck/></div>
          <div>
            <h4>Fast delivery</h4>
            <p>
              Quick as a flash! Get meals from your favorite local restaurants
              delivered to your doorstep in minutes.
            </p>
          </div>
        </div>

        <button className="cta-btn">Get Started</button>
      </div>

      <div className="hero-section-right">
        <img
          src={phone}
          alt="Food App Preview"
          className="hero-section-image"
        />
      </div>
    </section>
  );
};

export default HeroSection;