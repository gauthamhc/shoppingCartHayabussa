import React, { useContext } from "react";
import "./Header.css";
import { GlobalContext } from "../GlobalContext/GlobalContext";

const Header = () => {
  const { amount } = useContext(GlobalContext);
  return (
    <div className="header">
      <h2>Hayabussa</h2>
      <ul className="header__ul">
        <li>Products</li>
        <li>Services</li>
        <li>
          <i class="fas fa-shopping-cart"></i>
          {amount}
        </li>
      </ul>
    </div>
  );
};

export default Header;
