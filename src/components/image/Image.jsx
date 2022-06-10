import React from "react";

const Image = ({ src, width, alt }) => {
  return <img src={src} alt={alt} width={width} />;
};

export default Image;
