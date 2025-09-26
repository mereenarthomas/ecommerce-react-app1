import React, { useState } from 'react';
import './DescriptionBox.css';

const DescriptionBox = () => {
  const [activeTab, setActiveTab] = useState('description');

  return (
    <div className='descriptionbox'>
      <div className="descriptionbox-navigator">
        <div
          className={`descriptionbox-nav-box ${activeTab === 'description' ? 'active' : ''}`}
          onClick={() => setActiveTab('description')}
        >
          Description
        </div>
        <div
          className={`descriptionbox-nav-box ${activeTab === 'reviews' ? 'active' : ''}`}
          onClick={() => setActiveTab('reviews')}
        >
          Reviews (122)
        </div>
      </div>

      <div className="descriptionbox-content">
        {activeTab === 'description' ? (
          <div className="descriptionbox-description">
            <h3>Product Details</h3>
            <p>
              Classic casual style with a comfortable fit, featuring a modern design suitable for everyday wear.
              Functional details include a collar, button placket, and thoughtfully designed pockets. Long sleeves
              and a standard hemline make it versatile for layering or standalone wear.
            </p>

            <h3>Size & Fit</h3>
            <p>Fit: Regular. Designed to suit most body types comfortably.</p>

            <h3>Material & Care</h3>
            <p>Made from high-quality, durable fabric. Easy to maintain; machine washable.</p>

            <h3>Specifications</h3>
            <ul>
              <li>Sleeve Length: Regular</li>
              <li>Collar: Standard</li>
              <li>Fit: Regular</li>
              <li>Hemline: Standard</li>
              <li>Transparency: Opaque</li>
              <li>Surface: Smooth</li>
              <li>Number of Items: 1</li>
            </ul>
          </div>
        ) : (
          <div className="descriptionbox-reviews">
            <h3>Ratings</h3>
            <h4>★★★★☆ 4.2 / 5</h4>
            <h6>122 Verified Buyers</h6>
            
            <div className="review-entry">
              <p><strong>Jane D.</strong> ★★★★☆</p>
              <p>Great product, fits well, and quality is top-notch!</p>
            </div>
            
            <div className="review-entry">
              <p><strong>Mark P.</strong> ★★★★★</p>
              <p>Absolutely love it! Highly recommend.</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DescriptionBox;