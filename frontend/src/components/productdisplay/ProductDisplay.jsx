import React, { useContext, useState, useEffect } from 'react';
import './ProductDisplay.css';
import star_icon from '../assets/star_icon.png';
import star_dull_icon from '../assets/star_dull_icon.png';
import { ShopContext } from '../../context/ShopContext';
import { useNavigate } from 'react-router-dom';

const ProductDisplay = ({ product }) => {
  const { addToCart, cartItems, getTotalQuantity } = useContext(ShopContext);
  const [selectedSize, setSelectedSize] = useState("");
  const [sizeWarning, setSizeWarning] = useState(false);
  const [added, setAdded] = useState(false);
  const navigate = useNavigate();

  const sizes = ["XS", "S", "M", "L", "XL", "XXL"];

  useEffect(() => {
    if (getTotalQuantity(product.id) > 0) {
      setAdded(true);
    } else {
      setAdded(false);
    }
  }, [cartItems, product.id, getTotalQuantity]);

  const handleAddToCart = () => {
    if (!selectedSize) {
      setSizeWarning(true);
      return;
    }
    setSizeWarning(false);
    addToCart(product.id, selectedSize);
    setAdded(true);
  };

  return (
    <div className='productdisplay'>
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          {[...Array(4)].map((_, i) => (
            <img key={i} src={product.image} alt={product.name} />
          ))}
        </div>
        <div className="productdisplay-img">
          <img className='productdisplay-main-img' src={product.image} alt={product.name} />
        </div>
      </div>

      <div className="productdisplay-right">
        <h1>{product.name}</h1>

        <div className="productdisplay-right-star">
          {[...Array(4)].map((_, i) => (
            <img key={i} src={star_icon} alt="star" />
          ))}
          <img src={star_dull_icon} alt="star dull" />
          <p>(122)</p>
        </div>

        <div className="productdisplay-prices">
          <div className="new-price">₹{product.new_price}</div>
          <div className="old-price">₹{product.old_price}</div>
        </div>

        <div className="productdisplay-description">
          A versatile and high-quality product made for everyday use.
        </div>

        <div className="productdisplay-size">
          <h2>Select Size</h2>
          <div className="size-options">
            {sizes.map((size) => (
              <div
                key={size}
                className={selectedSize === size ? "selected" : ""}
                onClick={() => setSelectedSize(size)}
              >
                {size}
              </div>
            ))}
          </div>
        </div>

        {sizeWarning && <p className="size-warning">Please select a size first.</p>}

        <button
          onClick={added ? () => navigate('/cart') : handleAddToCart}
          className={added ? "go-cart-btn" : ""}
        >
          {added ? "Go to Cart" : "Add to Cart"}
        </button>

        <p className='productdisplay-category'>
          <span>Category :</span> Apparel, Casual Wear
        </p>
        <p className='productdisplay-tags'>
          <span>Tags :</span> Comfortable, Everyday, Trendy
        </p>
      </div>
    </div>
  );
};

export default ProductDisplay;
