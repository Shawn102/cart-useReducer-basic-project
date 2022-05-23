import React from "react";
import { GiShoppingCart } from "react-icons/gi";
import { useGlobalContext } from "../context";

const Navbar = () => {
    const {amount} = useGlobalContext();
  return (
    <nav>
      <h1 className="nav-text">UseReducer Cart</h1>
      <div className="pos-nav-btn">
        <button className="react-icon-btn">
          <GiShoppingCart />
        </button>
        <button className="btn-amount">{amount}</button>
      </div>
    </nav>
  );
};
export default Navbar;
