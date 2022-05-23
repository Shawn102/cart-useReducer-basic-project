import React from "react";
import { useGlobalContext } from "../context";

const Footer = () => {
    const { ClearList, total } = useGlobalContext();
  return (
    <footer>
      <hr />
      <div className="total-footer">
        <p>Total</p>
        <p>${total}</p>
      </div>
      <div className="btn-clr">
        <button onClick={ClearList} className="btn-clear-cart">Clear</button>
      </div>
    </footer>
  );
};
export default Footer;
