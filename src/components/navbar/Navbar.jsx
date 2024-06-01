"use client";

import React from "react";
import "./Navbar.scss";
import Image from "next/image";
import Link from "next/link";
import ProfileIcon from "@/assets/profile.svg";
import LikeIcon from "@/assets/like.svg";
import CartIcon from "@/assets/cart.svg";
import SearchIcon from "@/assets/search-icon.svg";
import NavbarLogo from "@/assets/navbar-logo.svg";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__content">
        <div className="navbar__select-block">
          <select className="navbar__selected" name="En" id="">
            <option className="navbar__option" value="">
              EN
            </option>
            <option className="navbar__option" value="">
              RU
            </option>
            <option className="navbar__option" value="">
              UZ
            </option>
          </select>
          <select className="navbar__selected" name="En" id="">
            <option className="navbar__option" value="">
              USD
            </option>
            <option className="navbar__option" value="">
              RBL
            </option>
            <option className="navbar__option" value="">
              SUM
            </option>
          </select>
        </div>
        <div className="navbar__icon-block">
          <Link className="navbar__link" href={"/admin"}>
            <Image className="navbar__image" src={ProfileIcon} />
          </Link>
          <Link className="navbar__link" href={"/wishlist"}>
            <Image className="navbar__image" src={LikeIcon} />
          </Link>
          <Link className="navbar__link" href={"/cart"}>
            <Image className="navbar__image" src={CartIcon} />
          </Link>
          <span className="navbar__items">Items</span>
          <span className="navbar__price">$0.00</span>
          <div className="navbar__div">
            <button className="navbar__search-btn">
              <Image className="navbar__search" src={SearchIcon} />
            </button>
          </div>
        </div>
      </div>
      <div className="navbar__special">
        <Image className="navbar__logo" src={NavbarLogo}/>
        <div className="navbar__list">
          <Link className="navbar__link" href={"/"}>
            <span className="navbar__items">HOME</span>
          </Link>
          <Link className="navbar__link" href={"/"}>
            <span className="navbar__items">BAGS</span>
          </Link>
          <Link className="navbar__link" href={"/"}>
            <span className="navbar__items">SNEAKER</span>
          </Link>
          <Link className="navbar__link" href={"/"}>
            <span className="navbar__items">BELT</span>
          </Link>
          <Link className="navbar__link" href={"/contact"}>
            <span className="navbar__items">CONTACT</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
