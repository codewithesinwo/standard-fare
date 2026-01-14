import React from 'react'
import "../style/Partnerwithus.css";
import Ride from "../assets/ride.png";
import PartnerWithUs from "../assets/partnerwithus.png";
import EatWithUs from "../assets/eatwithus.png";
import WorkWithUs from "../assets/workwithus.png";

export default function Partnerwithus() {
  return (
    <section className="partner-container">
      <div className="partner-header">
        <span className="badge">Partner with Us</span>
        <h2>Unlocking happiness for everyone</h2>
        <p>
          Become part of an inclusive fast-food supply chain that leaves
          everyone smiling.
        </p>
      </div>

      <div className="partner-grid">
        <div className="partner-item">
          <img src={Ride} alt="Restaurant Partner" />
          <h3>Ride with Us</h3>
          <p>
            Join as a delivery rider and earn by delivering meals. Enjoy
            flexibility, freedom, and benefits while being part of a supportive
            community.
          </p>
          <button className="partner-btn">Get Stated</button>
        </div>

        <div className="partner-item">
          <img src={PartnerWithUs} alt="Restaurant Partner" />
          <h3>Partner with Us</h3>
          <p>
            Grow your food business with EatUp. Reach more customers and boost
            sales. We handle delivery.
          </p>
          <button className="partner-btn">Get Stated</button>
        </div>

        <div className="partner-item">
          <img src={EatWithUs} alt="Restaurant Partner" />
          <h3>Eat with Us</h3>
          <p>
            From team lunches to meal allowances, we've got your meal delivery
            needs covered.
          </p>
          <button className="partner-btn">Get Stated</button>
        </div>

        <div className="partner-item">
          <img src={WorkWithUs} alt="Restaurant Partner" />
          <h3>Work with Us</h3>
          <p>
            Join our fast-growing team. If you’re ambitious and love teamwork,
            we want you!
          </p>

          <button className="partner-btn">Get Stated</button>
        </div>
      </div>
    </section>
  );
}
