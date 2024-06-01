"use client"

import React, { useState } from "react";
import "./contact.scss";
import Link from "next/link";

const BOT_TOKEN = "7093494475:AAF5UV5ejb1d5Xd1mBREZ_W89OxPNLumluk";
const CHAT_ID = "-1002092124718";
const USER_ID = "5979408323";

let initialState = {
  fname: "",
  email: "",
  text: "",
};

const Contact = () => {
  let [data, setData] = useState(initialState);
  const handleSubmit = (e) => {
    e.preventDefault();

    let text = "Buyurtma %0A%0A";
    text += `F.I.Sh: ${data.fname} %0A`;
    text += `Email pochtasi: ${data.email} %0A`;
    text += `Qo'shimcha habar: ${data.text} %0A`;

    let url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage?chat_id=${USER_ID}&text=${text}&parse_mode=html`;
    let api = new XMLHttpRequest();
    api.open("GET", url, true);
    api.send();
  };

  return (
    <div className="contact">
      <div className="contact__content">
        <div className="contact__nav_block">
          <Link className="contact__nav_link" href={"/"}>
            Home
          </Link>
          <span className="contact__nav_span">/</span>
          <span className="contact__nav_text">Contact Us</span>
        </div>
      </div>
      <div className="contact__sep">
        <div className="contact__sep-ultimate">
          <h2 className="contact__sep-ultimate_title">Get in touch</h2>
          <p className="contact__sep-email">contact@e-comm.ng</p>
          <p className="contact__sep-number">+234 4556 6665 34</p>
          <p className="contact__sep-text">
            20 Prince Hakerem Lekki Phase 1, Lagos.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="contact__sep-along">
          <p className="contact__sep-along_sub-title">Fullname</p>
          <input
            className="contact__sep_input"
            required
            type="text"
            onChange={(e) => setData((p) => ({ ...p, fname: e.target.value }))}
            value={data.fname}
            placeholder="Enter your Fullname"
          />
          <p className="contact__sep-along_sub-title">Email</p>
          <input
            className="contact__sep_input"
            required
            type="text"
            onChange={(e) => setData((p) => ({ ...p, email: e.target.value }))}
            value={data.email}
            placeholder="Enter your Email"
          />
          <p className="contact__sep-along_sub-title">Message</p>
          <textarea
            className="contact__sep_textarea"
            placeholder="Type your message"
            required
            onChange={(e) => setData((p) => ({ ...p, text: e.target.value }))}
            value={data.text}
            name=""
            id=""
            cols="77"
            rows="14"
          ></textarea>
          <div>

        <button className="contact__btn">Send</button>
          </div>
        </form>
      </div>
      <div className="home__search-block">
        <form className="home__search-form">
          <input className="home__search-input" placeholder="Search query..." />
          <button className="home__search-btn">Search</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
