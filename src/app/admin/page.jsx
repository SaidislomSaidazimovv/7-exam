import React from "react";
import "./admin.scss";
import Link from "next/link"

const page = () => {
  return (
    <div className="admin">
      <div className="contact__nav_block">
          <Link className="contact__nav_link" href={"/"}>
            Home
          </Link>
          <span className="contact__nav_span">/</span>
          <span className="contact__nav_text">Contact Us</span>
        </div>
      <h2 className="admin__title">Admin Panel</h2>
      <p className="admin__text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
        cupiditate inventore, deserunt magnam provident dolores blanditiis ullam
        iusto! Assumenda dolor quis itaque commodi tempore laudantium quam
        deleniti id consequatur. Minus delectus officia unde quam nulla ut. Odit
        quibusdam quis aut enim delectus blanditiis, quisquam quidem maiores
        suscipit. Dignissimos, ut repudiandae!
      </p>
      <p className="admin__text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
        cupiditate inventore, deserunt magnam provident dolores blanditiis ullam
        iusto! Assumenda dolor quis itaque commodi tempore laudantium quam
        deleniti id consequatur. Minus delectus officia unde quam nulla ut. Odit
        quibusdam quis aut enim delectus blanditiis, quisquam quidem maiores
        suscipit. Dignissimos, ut repudiandae!
      </p>
      <p className="admin__text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
        cupiditate inventore, deserunt magnam provident dolores blanditiis ullam
        iusto! Assumenda dolor quis itaque commodi tempore laudantium quam
        deleniti id consequatur. Minus delectus officia unde quam nulla ut. Odit
        quibusdam quis aut enim delectus blanditiis, quisquam quidem maiores
        suscipit. Dignissimos, ut repudiandae!
      </p>
      <button className="admin__btn">Log out</button>
    </div>
  );
};

export default page;
