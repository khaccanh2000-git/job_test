import React from "react";
import "./input.scss";
const Input = ({ placeholder, type }) => {
  return (
    <div className="input">
      <input type={type} placeholder={placeholder} />
    </div>
  );
};

export default Input;
