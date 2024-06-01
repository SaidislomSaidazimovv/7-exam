"use client";

import React from "react";
import Image from "next/image";
import { useSelector } from "react-redux";
import "./Wishlist.scss";

const WishlistProduct = () => {
  const wishlist = useSelector((s) => s.wishlist.value);
  return (
    <div>
      {wishlist?.map((el) => (
        <div>
          <Image width={100} height={100} alt={el.title} src={el.image} />
          <p>{el.title}</p>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default WishlistProduct;
