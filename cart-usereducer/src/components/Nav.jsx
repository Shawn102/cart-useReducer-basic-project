import React from "react";
import { MdAddShoppingCart } from "react-icons/md";
import { MyGlobalContext } from "../Context";

const Nav = () => {
  const { amount } = MyGlobalContext();
  return (
    <nav>
      <div className="nav-text">
        <h1>UseReducer</h1>
      </div>
      <div className="pos-nav-btn">
        <button className="react-icon-btn">
          <MdAddShoppingCart />
        </button>
        <button className="btn-amount">{amount}</button>
      </div>
    </nav>
  );
};
export default Nav;
