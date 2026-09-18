import React, { useContext } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.webp";
import cartIcon from "../../assets/cart_icon.png";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../../context/ShopContext";
export const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const {getTotalCartItems}=useContext(ShopContext)
  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="" height="50px" />
        <p>Shopify</p>
      </div>
      <ul className="nav-menu">
        <li onClick={() => setMenu("home")}>
          <Link style={{textDecoration:"none", color: "#626262"}} to="/">Home</Link>
          {menu === "home" ? <hr /> : null}
        </li>
        <li onClick={() => setMenu("men")}>
          <Link style={{textDecoration:"none", color: "#626262"}} to="/men">Men</Link>
          {menu === "men" ? <hr /> : null}
        </li>
        <li onClick={() => setMenu("women")}>
          <Link style={{textDecoration:"none", color: "#626262"}} to="/women">Women</Link>
          {menu === "women" ? <hr /> : null}
        </li>
        <li onClick={() => setMenu("kids")}>
          <Link style={{textDecoration:"none", color: "#626262"}} to="/kids">Kids</Link>
          {menu === "kids" ? <hr /> : null}
        </li>
      </ul>
      <div className="nav-login-cart">
        <Link to="/login">
          <button>Login</button>
        </Link>
        <Link to="/cart">
          <img src={cartIcon} alt="" height="50px" />
        </Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  );
};
