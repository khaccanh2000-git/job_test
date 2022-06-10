import React from "react";
import { FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";
import "./footer.scss";
const Footer = () => {
  return (
    <div className="footer">
      <div className="left_footer">
        <ul>
          <li>Contact</li>
          <li>motiontrend@test.com</li>
        </ul>
      </div>
      <div className="right_footer">
        <ul>
          <li>@ Motiontrend. All rights reserved</li>
          <li>
            <FaInstagram />
          </li>
          <li>
            <FaFacebook />
          </li>
          <li>
            <FaYoutube />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
