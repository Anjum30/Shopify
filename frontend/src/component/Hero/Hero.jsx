import React from 'react'
import "./Hero.css"
import handIcon from"../../assets/hand_icon.png"
import arrow_icon from "../../assets/arrow_icon.png"
import p8 from "../../assets/p8.webp"
export const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2>Best Deal! Best Price!</h2>

        <div className="hero-hand-icon">
            <p>new</p>
          <img src={handIcon} alt="" height="50px" />
        </div>
        <p> Collections</p>
        <p>For Everyones</p>
          <div className="hero-latest-btn">
              <div>Latest Collection</div>
              <img src={arrow_icon} height="30px"/>
          </div>
          </div>
          <div className="hero-right">
              <img src={p8} alt=""  height="500px"/>
      </div>
    </div>
  );
}
