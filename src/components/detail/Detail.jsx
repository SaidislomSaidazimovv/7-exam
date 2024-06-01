"use client";

import React from "react";
import Image from "next/image";
import "./Detail.scss";
import Link from "next/link";
import Rate from "@/assets/rate.svg";
import Colors from "@/assets/color.svg";
import Count from "@/assets/count.svg";
import Third from "@/assets/third.svg";
import Fifth from "@/assets/fifth.svg";

const Detail = ({ data }) => {
  return (
    <div className="single">
      <div className="single__content">
        <div className="single__first">
          <Image
            className="single__image"
            src={data.image}
            width={100}
            height={100}
            alt={data.title}
          />
          <div className="single__first-in">
            <Image
              className="single__first_image"
              src={data.image}
              width={100}
              height={100}
              alt={data.title}
            />
            <Image
              className="single__first_image"
              src={data.image}
              width={100}
              height={100}
              alt={data.title}
            />
            <Image
              className="single__first_image"
              src={data.image}
              width={100}
              height={100}
              alt={data.title}
            />
            <Image
              className="single__first_image"
              src={data.image}
              width={100}
              height={100}
              alt={data.title}
            />
          </div>
        </div>
        <div className="single__second">
          <h2 className="single__second_title">
            Mens Casual Premium Slim Fit T-Shirts
          </h2>
          <div className="single__second_special">
            <Image className="single__second_image" src={Rate} />
            <span className="single__second_span">0 reviews</span>
            <a className="single__second_link" href="#">
              Submit a review
            </a>
            <div className="single__second_social">
              <span className="single__second_span-1">$299,43</span>
              <span className="single__second_span-2">$534,33</span>
              <span className="single__second_span-3">24% Off</span>
            </div>
          </div>
          <table>
            <tr>
              <td className="single__second_td">Availability:</td>
              <td className="single__second_td">In Stock</td>
            </tr>
            <tr>
              <td className="single__second_td">Category:</td>
              <td className="single__second_td">M</td>
            </tr>
            <tr>
              <td className="single__second_td">Free Shipping</td>
            </tr>
            <tr>
              <td className="single__second_td">Select Color:</td>
              <div className="single__second_td_sp">
                <Image className="single__second_colors" src={Colors} />
              </div>
            </tr>
            <tr className="single__second_tr">
              <td className="single__second_td">Size:</td>
              <select className="single__second_select" name="" id="">
                <option className="single__second_option">XS</option>
                <option className="single__second_option">M</option>
                <option className="single__second_option">XXL</option>
              </select>
            </tr>
          </table>
          <tr className="single__count-hf">
            <Image className="single__second_count" src={Count} />
            <div className="sngl">
              <button className="single__second__btn">Add To Cart</button>
              <button className="single__second__btn-like"></button>
            </div>
          </tr>
        </div>
        <div className="third__img-block">
          <Image src={Third} />
        </div>
      </div>
      <div className="fourth__img-block">
        <button className="fourth__fc-btn">Share on Facebook</button>
        <button className="fourth__twt-btn">Share on Twitter</button>
      </div>
      <div className="fifth__img-block">
        <Image className="fifth__img" src={Fifth} />
      </div>
      <h2 className="fifth__title">Related Products</h2>
    </div>
  );
};

export default Detail;
