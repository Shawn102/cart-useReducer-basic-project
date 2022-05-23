import React from "react";
import Data from "../Data";
import { FaPlus, FaMinus } from "react-icons/fa";
import { MyGlobalContext } from "../Context";

const Cart = () => {
    const {cart, ClearList, Remove, Increase, Decrease, total} = MyGlobalContext(); 
  return (
    <section className="section-cart">
      <main>
        {cart.map((product) => {
          const { id, title, price, img, amount } = product;
          return (
            <article key={id} className="article">
              <div className="img-flex">
                <img
                  src={img}
                  alt={title}
                  className="img-cart"
                />
                <div className="img-text-flex">
                  <h4>{title}</h4>
                  <h6 className="price">${price}</h6>
                  <button onClick={() => Remove(id)} className="remove-btn">remove</button>
                </div>
              </div>
              <div className="button-container">
                <button onClick={() => Increase(id)} className="btn-add-remove">
                  <FaPlus />
                </button>
                <p>{amount}</p>
                <button onClick={() => Decrease(id)} className="btn-add-remove">
                  <FaMinus />
                </button>
              </div>
            </article>
          );
        })}
      </main>
      <footer>
        <hr />
        <div className="total-footer">
          <h4>Total Price:</h4>
          <h4>${total}</h4>
        </div>
        <div className="btn-clr">
          <button onClick={ClearList} className="btn-clear-cart">Clear cart</button>
        </div>
      </footer>
    </section>
  );
};
export default Cart;
