import React from 'react'
import "./Offer.css"
import exclusive from "../../assets/exclu.webp"
export const Offer = () => {
  return (
      <div className='offers'>
          <div className="offer-left">
              <h1>Exclusive</h1>
              <h1>Offers for You</h1>
              <p>Only On Bect Sellers Products</p>
              <button>
                  Check Now
              </button>

          </div>
          <div className="offer-right">
              <img src={exclusive} />
          </div>
    </div>
  )
}
