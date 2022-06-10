import React from "react";
import Logo from "../../images/logo.png";
import Input from "../../components/input/Input";
import { FaSearch } from "react-icons/fa";
import "./header.scss";
function Header() {
  return (
    <div className="header">
      <div className="logo_header">
        <img src={Logo} alt="logo" />
      </div>
      <div className="items_header">
        <ul className="ul_start">
          <li>Discover</li>
          <li>Job</li>
        </ul>
        <Input placeholder="Search for motion trend......" type="search" />
        <ul className="ul_end">
          <li>
            <FaSearch />
          </li>
          <li>Login</li>
          <li>Sign up</li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
