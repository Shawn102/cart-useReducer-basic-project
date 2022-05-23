import React from "react";
import Cart from "./Cart";
import { MyGlobalContext } from "../Context";

const CartContainer = () => {
  const { cart, FetchingData } = MyGlobalContext();

  if (cart.length === 0) {
    return (
      <>
        <header>
          <h1>Your Phone</h1>
          <div className="underline"></div>
        </header>
        <h4 className="empty-list-style">current list is empty...</h4>
        <div className="btn-clr">
          <button onClick={FetchingData} className="btn-clear-cart reload-btn">Reload</button>
        </div>
      </>
    );
  }

  return (
    <div>
      <header>
        <h1>Your Phone</h1>
        <div className="underline"></div>
      </header>
      <Cart />
    </div>
  );
};
export default CartContainer;
