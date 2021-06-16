import React, { useContext } from "react";
import "./CartContainer.css";
import Product from "./Product";
import { GlobalContext } from "../GlobalContext/GlobalContext";

const CartContainer = () => {
  const { cart, clearItem, total } = useContext(GlobalContext);
  return (
    <div className="cartContainer">
      {!cart.length && (
        <div className="cartEmpty">
          <h2>Your Cart is empty</h2>
        </div>
      )}

      <div className="product">
        {cart.map((cartItem) => {
          return <Product {...cartItem} key={cartItem.id} />;
        })}
      </div>
      <div className="total">
        <p>Total</p>
        <p>{total}</p>
      </div>
      <div className="clearall">
        {cart.length && <button onClick={clearItem}>Clear all</button>}
      </div>
    </div>
  );
};

export default CartContainer;
