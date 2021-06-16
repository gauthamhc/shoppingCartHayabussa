import React, { useContext } from "react";
import "./CartContainer.css";
import { GlobalContext } from "../GlobalContext/GlobalContext";

const Product = ({ id, title, img, amount, price }) => {
  const { increaseItem, removeItem, decreaseItem } = useContext(GlobalContext);
  return (
    <div className="product_indivi">
      <div className="product__description">
        <h4>{title}</h4>
        <p>${price}</p>
        <small onClick={() => removeItem(id)}>remove</small>
      </div>
      <div className="product__image">
        <img src={img} alt="" />
      </div>
      <div className="product_numbers">
        <button onClick={() => increaseItem(id)}>
          <i class="fas fa-arrow-up"></i>
        </button>
        <p>{amount}</p>
        <button onClick={() => decreaseItem(id)}>
          <i class="fas fa-arrow-down"></i>
        </button>
      </div>
    </div>
  );
};

export default Product;
