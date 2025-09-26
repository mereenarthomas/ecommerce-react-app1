import React, { useContext } from 'react'
import { Link } from "react-router-dom";
import './Navbar.css'

import logo from "../assets/logo.png"
import wordmark from "../assets/wordmark.png"
import search_icon from "../assets/search_icon.png"; 
import cart_icon from "../assets/cart_icon.png"
import login_icon from "../assets/login.png"

import { ShopContext } from "../../context/ShopContext";

const Navbar = () => {
  const { cartItems } = useContext(ShopContext);

  const getCartCount = () => {
    let total = 0;
    for (let productId in cartItems) {
      for (let size in cartItems[productId]) {
        total += cartItems[productId][size];
      }
    }
    return total;
  };

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="logo" />
        <img src={wordmark} alt="wordmark" className="wordmark" />
      </div>

      <ul className="nav-menu">
        <li><Link to="/">Shop</Link></li>
        <li><Link to="/mens">Men</Link></li>
        <li><Link to="/womens">Women</Link></li>
        <li><Link to="/kid">Kids</Link></li>
      </ul>

      <div className="nav-search">
        <form onSubmit={(e) => { e.preventDefault(); }}>
          <img src={search_icon} alt="search" className="search-icon" />
          <input type="text" placeholder="Search products, brands and more" />
        </form>
      </div>

      <div className="nav-cart">
        <Link to="/login">
          <img src={login_icon} alt="login" className="login-icon"/>
        </Link>
        <Link to="/cart">
          <img src={cart_icon} alt="cart" className="cart-icon"/>
          <div className="nav-cart-count">{getCartCount()}</div>
        </Link>
      </div>
    </div>
  )
}

export default Navbar
