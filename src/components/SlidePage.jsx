import React from "react";
import "../style/SlidePage.css";
import afang from "../image/afang.png";
import cassava from "../image/cassavafood.png";
import eba from "../image/eba.png";


const foodImages = [
  { id: 1, name: "afang", img: afang },
  { id: 2, name: "cassava", img: cassava },
  { id: 3, name: "eba", img: eba },

];

const SlidePage = () => {
  return (
        <div className="slidepage">
            <h2>Delicious Foods</h2>
            <div className="food-gallery">
            {foodImages.map((food) => (
                <div key={food.id} className="food-item">
                <img src={food.img} />
                </div>
                ))}
            </div>
        </div>
  );
};

export default SlidePage;