import React from 'react';
import './Breadcrumb.css';
import arrow_icon from '../assets/breadcrum_arrow.png';

const Breadcrumb = ({ product }) => {
  if (!product) {
    return null;
  }

  return (
    <div className="breadcrumb">
      <span>HOME</span> <img src={arrow_icon} alt="arrow" /> 
      <span>SHOP</span> <img src={arrow_icon} alt="arrow" /> 
      <span>{product.category}</span> <img src={arrow_icon} alt="arrow" /> 
      <span>{product.name}</span>
    </div>
  );
};

export default Breadcrumb;
