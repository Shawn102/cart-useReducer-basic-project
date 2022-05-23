import React from "react";
import CartArticle from "./CartArticle";
import Footer from "./Footer";
import { useGlobalContext } from "../context";
import shotEmpty from "../shotEmpty.gif";

const Product = () => {
  const { carts, FetchingData } = useGlobalContext();

  if (carts.length === 0) {
    return (
      <>
        <header>
          <h1>Your phones</h1>
          <div className="underline"></div>
        </header>
        <main className="empty-list-style">
          <h3>list is empty...</h3>
          <img src={shotEmpty} alt="empty" className="proload-gif-image" />
          <button onClick={FetchingData}  className="btn-clear-cart reload-btn">Reload</button>
        </main>
      </>
    );
  }
  return (
    <>
      <header>
        <h1>Your phones</h1>
        <div className="underline"></div>
      </header>
      <section className="section-cart">
        <main>
          {carts.map((cart) => {
            const { id } = cart;
            return <CartArticle key={id} {...cart} />;
          })}
        </main>
        <Footer />
      </section>
    </>
  );
};
export default Product;
