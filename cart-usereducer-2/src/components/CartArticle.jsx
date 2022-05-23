import React from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { useGlobalContext } from "../context";

const CartArticle = ({ id, img, title, price, amount }) => {
    const { Remove, Toggle } = useGlobalContext();
  return (
    <article className="article">
      <div className="img-flex">
        <img src={img} alt={title} className="img-cart" />
        <div className="img-text-flex">
          <h4>{title}</h4>
          <h5 className="price">{`$${price}`}</h5>
          <button onClick={() => Remove(id)} className="remove-btn">remove</button>
        </div>
      </div>
      <div className="button-container">
        <button onClick={() => Toggle(id, 'inc')} className="btn-add-remove">
          <FaPlus />
        </button>
        <p>{amount}</p>
        <button onClick={() => Toggle(id, 'dec')} className="btn-add-remove">
          <FaMinus />
        </button>
      </div>
    </article>
  );
};
export default CartArticle;
