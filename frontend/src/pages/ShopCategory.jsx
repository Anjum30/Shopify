import { useContext, useState } from "react";
import React from 'react'
import "../Css/ShopCategory.css";
import { ShopContext } from '../context/ShopContext';
import { Item } from "../component/Item/Item";
import dropdown_icon from "../assets/dropdown_icon.png"
export const ShopCategory = (props) => {
  const {all_product}=useContext(ShopContext)
  return (
    <div className='shop-category'>
      <img className="shopCategory-banner" src={props.banner} />
      <div className="ShopCategory-indexSort">
        <p>
          <span>Showing 1-12</span>out of 36 products
        </p>
        <div className="shopCategory-sort">
          Sort by <img src={dropdown_icon} height="30px"
          />
        </div>
      </div>
      <div className="shopCategory-product">{all_product.map((item, i) => {
        if (props.category === item.category) {
          return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
        } else {
          return null;
        }
      })}</div>
      <div className="shopCategory-loadmore">
        Explore more
      </div>
    </div>
  )
}
