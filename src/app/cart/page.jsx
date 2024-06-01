import React from "react";
import "./cart.scss";
import CartProducts from "@/components/cart/CartProducts";
import Link from "next/link";

const Cart = () => {
  return (
    <>
      <div className="single__nav_link">
        <Link className="single__nav_link" href={"/"}>
          Home
        </Link>
        <span className="single__nav_span">/</span>
        <Link className="single__nav_link" href={"/"}>
          Hot Deal
        </Link>
        <span className="single__nav_span">/</span>
        <span className="single__nav_text">Nike Airmax 270 React</span>
      </div>
      <div className="cart__text-content">
        <p className="cart__text-first">PRODUCT</p>
        <p className="cart__text">PRICE</p>
        <p className="cart__text">QTY</p>
        <p className="cart__text">UNIT PRICE</p>
      </div>
      <CartProducts />
    </>
  );
};

export default Cart;
