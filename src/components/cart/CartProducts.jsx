"use client";

import Image from "next/image";
import React from "react";
import { useSelector } from "react-redux";
import "./Cart.scss"
import Link from "next/link";
import X from "@/assets/x.svg"
import Count from "@/assets/count.svg";
import { removeFromCart } from "@/context/cartSlice";

const CartProducts = () => {
  const cart = useSelector((s) => s.cart.value);
  return (
    <div className="cart__main">
      {cart?.map((el) => (
        <div className="cart__card">
          <Image className="cart__x" src={X}/>
          <Image className="cart__image" width={60} height={60} alt={el.title} src={el.image} />
          <p className="cart__title">{el.title}</p>
          <p className="cart__price">{el.price}</p>
          <Image className="cart__count" src={Count}/>
          <span className="cart__unit_price">$499</span>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default CartProducts;
