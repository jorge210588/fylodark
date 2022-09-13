import React from "react";
import "./FooterSection.scss";
import logoIcon from "../../images/logo.svg";
import locationIcon from "../../images/icon-location.svg";
import phoneIcon from "../../images/icon-phone.svg";
import emailIcon from "../../images/icon-email.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

const FooterSection = () => {
  return (
    <footer className="grid-container">
      <div className="footer-header">
        <img src={logoIcon} alt="Fylo" />
      </div>
      <div className="location">
        <img src={locationIcon} alt="location" className="icon-text" />
        <p>
          Lorem ipsum dolor sit amet, consecteur adipscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua
        </p>
      </div>
      <div className="contact">
        <div className="flex-footer-item">
          <img src={phoneIcon} alt="contact" className="icon-contact" />
          <p>+1-543-123-4567</p>
        </div>
        <div className="flex-footer-item">
          <img src={emailIcon} alt="email" className="icon-contact" />
          <p>example@fylo.com</p>
        </div>
      </div>
      <div className="menu1">
        <a href="#">About Us</a>
        <a href="#">Jobs</a>
        <a href="#">Press</a>
        <a href="#">Blog</a>
      </div>
      <div className="menu2">
        <a href="#">Contact Us</a>
        <a href="#">Terms</a>
        <a href="#">Privacy</a>
      </div>
      <div className="social">
        <div className="social-icon-border">
          <FontAwesomeIcon icon={faFacebookF} className="social-icon" />
        </div>
        <div className="social-icon-border">
          <FontAwesomeIcon icon={faTwitter} className="social-icon"/>
        </div>
        <div className="social-icon-border">
          <FontAwesomeIcon icon={faInstagram} className="social-icon"/>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
