import React, { useContext } from "react";
import "./CartItem.css";
import { ShopContext } from "../../context/ShopContext";
import remove_icon from "../../assets/remove.webp";

export const CartItem = () => {
  const {getTotalCartAmount, all_product, cartItems, removeFromCart } = useContext(ShopContext);

  return (
    <div className="cartItem">
      <div className="cartitems-formate-main">
        <p>Product</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_product.map((e) => {
        if (cartItems[e.id] > 0) {
          return (
            <div key={e.id}>
              <div className="cartitems-formate cartitems-formate-main">
                <img src={e.image} alt={e.name} height="100px" />
                <p>{e.name}</p>
                <p>${e.new_price}</p>
                <button className="cartitems-quantity">
                  {cartItems[e.id]}
                </button>
                <p>${(e.new_price * cartItems[e.id]).toFixed(2)}</p>
                <img
                  src={remove_icon}
                  height="20px"
                  alt="remove"
                  style={{ cursor: "pointer" }}
                  onClick={() => removeFromCart(e.id)}
                />
              </div>
              <hr />
            </div>
          );
        }
        return null;
      })}
      <div className="cartitems-down">
        <div className="cartitems-total">
          <h1>Cart Total</h1>
          <div>
            <div className="cartitems-total-items">
              <p>SubTotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cartitems-total-items">
              <p>Shipping fee</p>
              <p>free</p>
            </div>
            <hr />
            <div className="cartitems-total-items">
              <p>Total</p>
              <p>${getTotalCartAmount()}</p>
            </div>
          </div>
          <button>Proceed To CheckOut</button>
        </div>
        <div className="cartitems-promocode">
          <p>If you have a promo code,enter it here</p>
          <div className="cartitems-promobox">
            <input type="text" placeholder="promo code" />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

