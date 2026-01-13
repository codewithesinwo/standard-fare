import "../style/Hero.css";
import foodImg from "../image/foodimg.png";
import { SiIfood } from "react-icons/si";

const Hero = () => {
  return (
    <section className="hero">
      {/* Dynamic Background Elements */}
      <div className="bg-blur"></div>
      <span className="bg-icon burger">🍔</span>
      <span className="bg-icon pizza">🍕</span>
      <span className="bg-icon fries">🍟</span>
      <span className="bg-icon drink">🥤</span>

      <nav className="navbar">
        <div className="logo">
          <span className="logo-icon">
            <SiIfood />
          </span>
          <span className="logo-text">Standard Fare</span>
        </div>
        <div className="nav-actions">
          <span className="live-status">● 120+ Restaurants Open</span>
          <button className="login-btn">Login</button>
        </div>
      </nav>

      <div className="hero-inner">
        <div className="hero-text">
          {/* <div className="badge">🔥 Hot & Fresh Delivery</div> */}
          <h1>
            Eat better. <br />
            <span>Anytime. Anywhere.</span>
          </h1>

          <p className="subtitle">
            From everyday standard fare to premium local favorites.
          </p>

          <p className="description">
            Burgers, pizzas, rice dishes, and desserts delivered fast, fresh,
            and delicious straight to your door.
          </p>

          <div className="hero-actions">
            <button className="primary-btn">Get Started</button>
            <button className="secondary-btn">Order as Guest</button>
          </div>
        </div>

        <div className="hero-image">
          <div className="image-blob"></div>
          <img src={foodImg} alt="Delicious food" />
        </div>
      </div>
    </section>
  );
};
export default Hero;
