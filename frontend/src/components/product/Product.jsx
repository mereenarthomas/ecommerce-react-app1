import React from 'react'
import './Product.css'

const Product = ({ id, name, image, new_price, old_price }) => {
  return (
    <div className="product-card">
      <img src={image} alt={name} className="product-img" />
      <p className="product-name">{name}</p>
      <div className="product-prices">
        <span className="new-price">${new_price}</span>
        <span className="old-price">${old_price}</span>
      </div>
    </div>
  )
}

export default Product