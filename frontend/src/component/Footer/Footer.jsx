import React from 'react'
import "./Footer.css"
import logo from "../../assets/logo.webp"
import instagram_icon from "../../assets/instagram.png"
import Facebook_icon from "../../assets/facebook.png";
import Whatsapp_icon from "../../assets/whatsapp.png";
export const Footer = () => {
  return (
    <div className="Footer">
      <div className="footer-logo">
        <img src={logo} alt="" height="60px" />
        <p>Shopify</p>
      </div>
      <ul className="footer-link">
        <li>About</li>
        <li>Products</li>
        <li>Office</li>
        <li>Company</li>
        <li>Contact</li>
      </ul>
      <div className="footer-social-link">
        <div className="footer-icon-contaioner">
          <img src={instagram_icon} alt="" height="30px" />
        </div>
        <div className="footer-icon-contaioner">
          <img src={Facebook_icon} alt="" height="30px" />
        </div>
        <div className="footer-icon-contaioner">
          <img src={Whatsapp_icon} alt="" height="30px" />
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>Copyright @ 2026 - All Right Reserved</p>
      </div>
    </div>
  );
}
