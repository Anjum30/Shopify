import React from "react";
import arrow_icon from "../../assets/arrow_icon.png";
import "./BredCrums.css";

export const BredCrums = (props) => {
  const { product } = props;

  if (!product) return null; 

  return (
    <div className="bredcrums">
      Home
      <img src={arrow_icon} alt="" height="30px" />
      Shop
      <img src={arrow_icon} alt="" height="30px" />
      {product.category}
      <img src={arrow_icon} alt="" height="30px" />
      {product.name}
    </div>
  );
};
