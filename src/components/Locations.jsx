import React from "react";
import "../style/Locations.css";

const locations = [
  "Lagos",
  "Abuja (FCT)",
  "Oyo",
  "Ogun",
  "Osun",
  "Ondo",
  "Ekiti",
  "Kwara",
  "Akwa Ibom",
  "Cross River",
  "Rivers",
  "Delta",
  "Edo",
  "Bayelsa",
  "Imo",
  "Anambra",
  "Enugu",
  "Abia",
  "Ebonyi",
  "Benue",
  "Kogi",
  "Kaduna",
  "Kano",
];

const Locations = () => {
  return (
      <section className="locations">
        <div className="locations-header">
          <span className="badge">Locations</span>
          <h2>
            Discover the Best of Standard Fare in <br /> Your City
          </h2>
          <p>
            Savor the taste, aroma, and joy from your neighborhood's finest
            eateries, all in one place.
          </p>
        </div>

        <div className="locations-grid">
          {locations.map((state, index) => (
            <button className="location-card" key={index}>
              {state}
            </button>
          ))}
        </div>

        <button className="explore-btn">
          <h4>Explore More Locations</h4>
        </button>
      </section>
  );
};

export default Locations;
