import React, { useContext } from 'react';
import './CartItems.css';
import { ShopContext } from '../../context/ShopContext';
import remove_icon from '../assets/cart_cross_icon.png';

const CartItems = () => {
  const { all_product, cartItems, addToCart, removeFromCart, removeItem } = useContext(ShopContext);

  const cartProducts = all_product.filter(product => cartItems[product.id]?.quantity > 0);

  if (cartProducts.length === 0)
    return (
      <div className="cartitems">
        <h2>Your Cart is Empty</h2>
        <p>Add items to your cart to see them here.</p>
      </div>
    );

  return (
    <div className="cartitems">
      <h2>Your Cart</h2>
      <div className="cartitems-list">
        {cartProducts.map(product => {
          const { quantity, size } = cartItems[product.id];
          const total = quantity * product.new_price;

          return (
            <div key={product.id} className="cartitem">
              <div className="cart-product">
                <img src={product.image} alt={product.name} />
                <div className="cart-product-info">
                  <h3>{product.name}</h3>
                  <p>Size: {size}</p>
                  <p className="price">₹{product.new_price}</p>
                </div>
              </div>

              <div className="cart-product-quantity">
                <button onClick={() => removeFromCart(product.id)}>-</button>
                <span className="count">{quantity}</span>
                <button onClick={() => addToCart(product.id, size)}>+</button>
              </div>

              <div className="cart-product-total">
                <p>₹{total}</p>
              </div>

              <button className="cart-product-remove" onClick={() => removeItem(product.id)}>
                <img src={remove_icon} alt="Remove" />
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CartItems;
