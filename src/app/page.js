import React from "react";
import "./styles.scss";
import Image from "next/image";
import Products from "@/components/products/Products";
import HomeBgImage from "@/assets/home-bg.svg";
import SocialCard1 from "@/assets/social-card-1.jpg";
import SocialCard2 from "@/assets/social-card-2.png";
import SocialCard3 from "@/assets/social-card-3.png";
import HomeBg2 from "@/assets/home-bg2.svg";
import Link from "next/link";
import Shipping from "@/assets/shipping.svg";
import Dollar from "@/assets/dollar.svg";
import Operator from "@/assets/operator.svg";
import Nike from "@/assets/Nike.svg";
import Figma from "@/assets/Figma.svg";
import Kronos from "@/assets/Kronos.svg";
import { getData } from "@/fetch";
import Vector from "@/assets/vector.svg";
import Rate from "@/assets/rate.svg";

const Home = async () => {
  let data = await getData("products");

  return (
    <main className="home">
      <div className="home__content">
        <div className="home__bgImg-block">
          <Image className="home__bg-image" src={HomeBgImage} />
        </div>
        <div className="home__social-block">
          <div className="home__social-card">
            <h3 className="home__social-card__title">
              FS - QUILTED MAXI CROSS BAG
            </h3>
            <Image className="home__social-card_img-1" src={SocialCard1} />
            <div className="home__social-card-spc">
              <span className="home__social-card__price">$534,33</span>
              <span className="home__social-card__discount-price">24% Off</span>
            </div>
            <p className="home__social-card__dollar">$299,43</p>
          </div>
          <div className="home__social-card">
            <h3 className="home__social-card__title">
              FS - Nike Air Max 270 React...
            </h3>
            <Image className="home__social-card_img-1" src={SocialCard2} />
            <div className="home__social-card-spc">
              <span className="home__social-card__price">$534,33</span>
              <span className="home__social-card__discount-price">24% Off</span>
            </div>
            <p className="home__social-card__dollar">$299,43</p>
          </div>
          <div className="home__social-card">
            <h3 className="home__social-card__title">
              FS - Nike Air Max 270 React...
            </h3>
            <Image className="home__social-card_img-1" src={SocialCard3} />
            <div className="home__social-card-spc">
              <span className="home__social-card__price">$534,33</span>
              <span className="home__social-card__discount-price">24% Off</span>
            </div>
            <p className="home__social-card__dollar">$299,43</p>
          </div>
        </div>
        <div className="home__primary-block">
          <h2 className="home__primary-title">BEST SELLER</h2>
          <div className="home__primary_nav-block">
            <Link className="home__primary-link" href={"/"}>
              <span className="home__primary-span-2">All</span>
            </Link>
            <Link className="home__primary-link" href={"/"}>
              <span className="home__primary-span">Bags</span>
            </Link>
            <Link className="home__primary-link" href={"/"}>
              <span className="home__primary-span">Sneakers</span>
            </Link>
            <Link className="home__primary-link" href={"/"}>
              <span className="home__primary-span">Belt</span>
            </Link>
            <Link className="home__primary-link" href={"/"}>
              <span className="home__primary-span">Sunglasses</span>
            </Link>
          </div>
        </div>
        <Products data={data} />
        <button className="load_more">Load more</button>
        <div className="home__bgImg-block-2">
          <div className="home__bg_img-special">
            <h2 className="home__bg_img-title">Adidas Men Running Sneakers</h2>
            <p className="home__bg_img-text">
              Performance and design. Taken right to the edge.
            </p>
            <button className="home__bg_img-btn">SHOP NOW</button>
          </div>
          <div className="home__bg_img-block">
            <Image className="home__bg-image-2" src={HomeBg2} />
          </div>
        </div>
        <div className="home__secondary">
          <div className="home__secondary-card">
            <Image className="home__secondary-img1" src={Shipping} />
            <h3 className="home__secondary_sub-title">Free Shipping</h3>
            <p className="home__secondary-text">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
          <div className="home__secondary-card">
            <Image className="home__secondary-img2" src={Dollar} />
            <h3 className="home__secondary_sub-title">100% REFUND</h3>
            <p className="home__secondary-text">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
          <div className="home__secondary-card">
            <Image className="home__secondary-img3" src={Operator} />
            <h3 className="home__secondary_sub-title">SUPPORT 24/7</h3>
            <p className="home__secondary-text">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
        </div>
        <h2 className="home__h2">LATEST NEWS</h2>
        <div className="home__thirdly">
          <div className="home__thirdly-card">
            <div className="home__thirdly_img-block">
              <Image className="home__thirdly_img" src={Nike} />
            </div>
            <div className="home__thirdly_content-block">
              <span className="home__thirdly_span">01 Jan, 2015</span>
              <h3 className="home__thirdly_sub-title">Fashion Industry</h3>
              <p className="home__thirdly_text">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
          </div>
          <div className="home__thirdly-card">
            <div className="home__thirdly_img-block">
              <Image className="home__thirdly_img" src={Figma} />
            </div>
            <div className="home__thirdly_content-block">
              <span className="home__thirdly_span">01 Jan, 2015</span>
              <h3 className="home__thirdly_sub-title">Fashion Industry</h3>
              <p className="home__thirdly_text">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
          </div>
          <div className="home__thirdly-card">
            <div className="home__thirdly_img-block">
              <Image className="home__thirdly_img" src={Kronos} />
            </div>
            <div className="home__thirdly_content-block">
              <span className="home__thirdly_span">01 Jan, 2015</span>
              <h3 className="home__thirdly_sub-title">Fashion Industry</h3>
              <p className="home__thirdly_text">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
          </div>
        </div>
        <h2 className="home__h2-2">FEATURED PRODUCTS</h2>
        <div className="home__spots">
          <div className="home__spots-card">
            <Image className="home__spots-img" src={Vector} />
            <div  className="home__spots-aha">
              <h3 className="home__spots-title">Blue Swade Nike Sneakers</h3>
              <Image className="home__spots-image" src={Rate} />
              <div className="home__spots-span">
                <span className="home__spots-span-br">$499</span>
                <span className="home__spots-span-dr">$599</span>
              </div>
            </div>
          </div>
          <div className="home__spots-card">
            <Image className="home__spots-img" src={Vector} />
            <div  className="home__spots-aha">
              <h3 className="home__spots-title">Blue Swade Nike Sneakers</h3>
              <Image className="home__spots-image" src={Rate} />
              <div className="home__spots-span">
                <span className="home__spots-span-br">$499</span>
                <span className="home__spots-span-dr">$599</span>
              </div>
            </div>
          </div>
          <div className="home__spots-card">
            <Image className="home__spots-img" src={Vector} />
            <div  className="home__spots-aha">
              <h3 className="home__spots-title">Blue Swade Nike Sneakers</h3>
              <Image className="home__spots-image" src={Rate} />
              <div className="home__spots-span">
                <span className="home__spots-span-br">$499</span>
                <span className="home__spots-span-dr">$599</span>
              </div>
            </div>
          </div>
        </div>
        <div className="home__search-block">
          <form className="home__search-form">
            <input
              className="home__search-input"
              placeholder="Search query..."
            />
            <button className="home__search-btn">Search</button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Home;
