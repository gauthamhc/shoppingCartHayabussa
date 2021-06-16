import React, { useContext } from "react";
import "./CartContainer.css";
import Product from "./Product";
import { GlobalContext } from "../GlobalContext/GlobalContext";

const CartContainer = () => {
  const { cart, clearItem, total } = useContext(GlobalContext);
  if (cart.length === 0) {
    return (
      <div className="cartEmpty">
        <h2>Your Cart is empty</h2>
      </div>
    );
  }
  return (
    <div className="cartContainer">
      <div className="product">
        {cart.map((cartItem) => {
          return <Product {...cartItem} key={cartItem.id} />;
        })}
      </div>

      {cart.length && (
        <div className="total">
          <p>Total</p>
          <p>{total}</p>
        </div>
      )}

      <div className="clearall">
        <button onClick={clearItem}>Clear all</button>
      </div>
    </div>
  );
};

export default CartContainer;
