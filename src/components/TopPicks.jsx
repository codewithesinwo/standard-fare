import React from "react";
import "../style/TopPicks.css";

import halaga from "../images/halaga.png";
import olourunwa from "../images/olourunwa.png";
import kanko from "../images/kanko.png";
import theplace from "../images/theplace.png";
import hrs24 from "../images/24hrs.png";
import chickenRepublic from "../images/chickenrepublic.png";
import wokcity from "../images/wokcity.png";
import sweetSensation from "../images/sweet-sensation.png";

const restaurants = [
  {
    name: "Halaga",
    tag: "Modern Buka",
    logo: halaga,
  },
  {
    name: "Olourunwa Kitchen",
    tag: "Food",
    logo: olourunwa,
  },
  {
    name: "Kanko",
    tag: "Buka",
    logo: kanko,
  },
  {
    name: "The Place",
    tag: "Restaurant",
    logo: theplace,
  },
  {
    name: "24 hours Restaurant",
    tag: "Local",
    logo: hrs24,
  },
  {
    name: "Chicken Republic",
    tag: "Restaurant",
    logo: chickenRepublic,
  },
  {
    name: "Wokcity",
    tag: "Fastfood",
    logo: wokcity,
  },
  {
    name: "Sweet Sensation",
    tag: "Restaurant",
    logo: sweetSensation,
  },
];

const TopPicks = () => {
  return (
    <section className="top-picks-container">
      <div className="header">
        <span className="badge">Restaurants</span>
        <h1>Top picks for you</h1>
        <p>Discover top-rated meals from the best restaurants</p>
      </div>

      <div className="restaurant-grid">
        {restaurants.map((item, index) => (
          <div className="restaurant-card" key={index}>
            <img src={item.logo} alt={item.name} className="logo" />
            <div className="info">
              <span className="name">{item.name}</span>
              <span className="tag">{item.tag}</span>
            </div>
          </div>
        ))}
      </div>

      <div>
        <button className="view-all-button">See More</button>
      </div>
    </section>
  );
};

export default TopPicks;
