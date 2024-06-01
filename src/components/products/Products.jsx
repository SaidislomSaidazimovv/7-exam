"use client";

import React, { useEffect } from "react";
import "./Products.scss";
import Image from "next/image";
import Link from "next/link";
import CardLike from "@/assets/card-like.svg";
import CardCart from "@/assets/card-cart.svg";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "@/context/cartSlice";
import { toggleLike } from "@/context/wishlistSlice";

const Products = ({ data }) => {
  let cart = useSelector((state) => state.cart.value);
  let wishlist = useSelector((state) => state.wishlist.value);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(addToCart(JSON.parse(localStorage.getItem("wishlist")) || []));
    dispatch(toggleLike(JSON.parse(localStorage.getItem("cart")) || []))
  }, []);

  const handleCart = (product) => {
    let index = cart.findIndex((el) => el.id === product.id);
    let result = cart;
    if (index < 0) {
      result = [...cart, { ...product, quantity: 1 }];
    }
    dispatch(addToCart(result));
    localStorage.setItem("cart", JSON.stringify(result));
  };

  const handleLike = (product) => {
    let indexx = wishlist.findIndex((el) => el.id === product.id);
    let result = wishlist;
    if (indexx < 0) {
      result = [...wishlist, { ...product, quantity: 1 }];
    }
    dispatch(toggleLike(result));
    localStorage.setItem("wishlist", JSON.stringify(result));
  }

  let productsItems = data?.map((el) => (
    <div className="products__main" key={el.id}>
      <Link href={`/product/${el.id}`}>
        <Image
          className="products__image"
          width={100}
          height={100}
          src={el.image}
        />
      </Link>
      <h3 className="products__title">{el.title}</h3>
      <p className="products__category">{el.category}</p>
      {/* <p>{el.rate}</p> */}
      <div className="product__spc">
        <span className="product__dollar">$299,43</span>
        <span className="product__price">$534,33</span>
        <span className="product__discount-price">24% Off</span>
      </div>
      <div className="products__primary">
        <button onclick={() => handleLike(el)} className="products__btn-lk">
          <Image className="products__btn-image" src={CardLike} />
        </button>

        <button className="products__btn" onClick={() => handleCart(el)}>
          <Image className="products__btn-image" src={CardCart} />
        </button>
      </div>
    </div>
  ));

  return <div className="products-menu">{productsItems}</div>;
};

export default Products;
