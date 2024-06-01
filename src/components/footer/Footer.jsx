import React from "react";
import "./Footer.scss";
import FooterLogo from "@/assets/navbar-logo.svg";
import Facebook from "@/assets/facebook.svg";
import Twitter from "@/assets/twitter.svg";
import WasternUnion from "@/assets/wasternUnion.svg";
import MasterCard from "@/assets/MasterCard.svg";
import PayPal from "@/assets/Paypal.svg";
import Visa from "@/assets/Visa.svg";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__primary">
          <div className="footer__social">
            <Image src={FooterLogo} />
            <p className="footer__logo-text">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever.Since the 1500s, when an unknown printer.
            </p>
          </div>
          <div className="footer__social-2">
            <h3 className="footer__social-2_title">Follow Us</h3>
            <p className="footer__social-2_text">
              Since the 1500s, when an unknown printer took a galley of type and
              scrambled.
            </p>
            <div className="footer__social-2_link-block">
              <Link href={"https://facebook.com"}>
                <Image className="footer__facebook" src={Facebook} />
              </Link>
              <Link href={"https://twitter.com"}>
                <Image className="footer__twitter" src={Twitter} />
              </Link>
            </div>
          </div>
          <div className="footer__social-3">
            <h3 className="footer__social-3_title">Contact Us</h3>
            <p className="footer__social-3_text">
              E-Comm , 4578 Marmora Road, Glasgow D04 89GR
            </p>
          </div>
        </div>
        <div className="footer__secondary">
          <ul className="footer__list">
            <li className="footer__item">
              <h2 className="footer__sub-title">Information</h2>
              <Link className="footer__link" href={"/"}>
                About Us
              </Link>
            </li>
            <li className="footer__item">
              <Link className="footer__link" href={"/"}>
                Information
              </Link>
            </li>
            <li className="footer__item">
              <Link className="footer__link" href={"/"}>
                Privacy Policy
              </Link>
            </li>
            <li className="footer__item">
              <Link className="footer__link" href={"/"}>
                Terms & Conditions
              </Link>
            </li>
          </ul>
          <ul className="footer__list">
            <li className="footer__item">
              <h2 className="footer__sub-title">Service</h2>
              <Link className="footer__link" href={"/"}>
                About Us
              </Link>
            </li>
            <li className="footer__item">
              <Link className="footer__link" href={"/"}>
                Information
              </Link>
            </li>
            <li className="footer__item">
              <Link className="footer__link" href={"/"}>
                Privacy Policy
              </Link>
            </li>
            <li className="footer__item">
              <Link className="footer__link" href={"/"}>
                Terms & Conditions
              </Link>
            </li>
          </ul>
          <ul className="footer__list">
            <li className="footer__item">
              <h2 className="footer__sub-title">My Account</h2>
              <Link className="footer__link" href={"/"}>
                About Us
              </Link>
            </li>
            <li className="footer__item">
              <Link className="footer__link" href={"/"}>
                Information
              </Link>
            </li>
            <li className="footer__item">
              <Link className="footer__link" href={"/"}>
                Privacy Policy
              </Link>
            </li>
            <li className="footer__item">
              <Link className="footer__link" href={"/"}>
                Terms & Conditions
              </Link>
            </li>
          </ul>
          <ul className="footer__list">
            <li className="footer__item">
              <h2 className="footer__sub-title">Our Offers</h2>
              <Link className="footer__link" href={"/"}>
                About Us
              </Link>
            </li>
            <li className="footer__item">
              <Link className="footer__link" href={"/"}>
                Information
              </Link>
            </li>
            <li className="footer__item">
              <Link className="footer__link" href={"/"}>
                Privacy Policy
              </Link>
            </li>
            <li className="footer__item">
              <Link className="footer__link" href={"/"}>
                Terms & Conditions
              </Link>
            </li>
          </ul>
        </div>
        <hr className="footer__hr" />
        <div className="footer__card_block">
          <h3 className="footer__card-title">Payment Methods</h3>
          <div className="footer__card-img-block">
            <Link href={"/"} className="footer__card-link">
              <Image className="footer__card-img" src={WasternUnion} />
            </Link>
            <Link href={"/"} className="footer__card-link">
              <Image className="footer__card-img" src={MasterCard} />
            </Link>
            <Link href={"/"} className="footer__card-link">
              <Image className="footer__card-img" src={PayPal} />
            </Link>
            <Link href={"/"} className="footer__card-link">
              <Image className="footer__card-img" src={Visa} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
