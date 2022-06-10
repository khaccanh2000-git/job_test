import React from "react";
import { FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";
import logo_footer from "../../images/black-logo.png";
import "./footer.scss";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_up">
        <div className="left_footer_up">
          <ul>
            <li style={{ opacity: 1 }}>Contact</li>
            <li style={{ fontSize: "12px",paddingTop:"2px" }}>motiontrend@test.com</li>
          </ul>
        </div>
        <div className="right_footer_up">
          <ul>
            <li>@ Motiontrend. All rights reserved</li>
            <li className="icon">
              <FaInstagram />
            </li>
            <li className="icon">
              <FaFacebook />
            </li>
            <li className="icon">
              <FaYoutube />
            </li>
          </ul>
        </div>
      </div>
      <div className="footer_down">
        <div className="left_footer_down">
          <ul>
            <li>Introduction</li>
            <li>Terms of Service</li>
            <li>
              <select>
                <option>Language</option>
                <option>English</option>
                <option>Vietnamese</option>
              </select>
            </li>
            <li>Customer Service</li>
          </ul>
        </div>
        <div className="right_footer_down">
          <img src={logo_footer} alt="logo" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
