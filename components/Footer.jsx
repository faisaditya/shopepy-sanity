import React from "react";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillTwitterCircle,
} from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footer-container">
      <p>@2022 FAIS ADITYA All Right Reserved</p>
      <p className="icons">
        <AiFillGithub />
        <AiFillTwitterCircle />
        <AiFillInstagram />
      </p>
    </div>
  );
};

export default Footer;
