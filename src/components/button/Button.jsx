import React from "react";
import "./button.scss"
const Button = (props) => {
  const { style, value, onClick } = props;
  return <button style={style} value={value} onClick={onClick}></button>;
};

export default Button;
