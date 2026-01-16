import "../style/Hero.css";
import foodImg from "../image/foodimg.png";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="hero">
      {/* Dynamic Background Elements */}
      {/* <div className="bg-blur"></div>
      <span className="bg-icon burger">🍔</span>
      <span className="bg-icon pizza">🍕</span>
      <span className="bg-icon fries">🍟</span>
      <span className="bg-icon drink">🥤</span> */}

      <div className="hero-inner">
        <div className="hero-text">
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
            <button className="primary-btn" onClick={()=>{
              navigate('/signup')
            }}>Get Started</button>
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
