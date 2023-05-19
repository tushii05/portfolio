import React from "react";
import "./Footer.css";
import { FaGithub } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { IoLogoTwitter } from "react-icons/io";
import { BsLinkedin } from "react-icons/bs";
// import { ReactSVG } from "react-svg";
// import logo from "../../assets/logo_name.svg";

const Footer = () => {
  return (
    <footer>
      {/* <a href="#home" className="footer__logo">
        <ReactSVG src={logo} className="footer__svg-container" />
      </a> */}

      <ul className="permalinks">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        {/* <li>
          <a href="#testimonials">Testimonials</a>
        </li> */}
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a
          href="https://github.com/tushii05"
          className="github"
          target="_blank"
          rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/tushii05/"
          className="linkedin"
          target="_blank"
          rel="noopener noreferrer">
          <BsLinkedin />
        </a>
        <a
          href="https://www.instagram.com/itzz_tushiii"
          className="instagram"
          target="_blank"
          rel="noopener noreferrer">
          <FiInstagram />
        </a>
        <a
          href="https://twitter.com/Tushar_D_05"
          className="twitter"
          target="_blank"
          rel="noopener noreferrer">
          <IoLogoTwitter />
        </a>
      </div>
      <div className="footer__copyright">
        <small>&copy; Tushar Deshmukh 2023 . All rights reserved</small>
      </div>
      <div className="footer__author">
        <small>Designed & Developed by Tushar Deshmukh</small>
      </div>
    </footer>
  );
};

export default Footer;
