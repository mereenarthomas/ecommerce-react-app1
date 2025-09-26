import React from 'react';
import './Hero.css';
import spark_icon from '../assets/spark_icon.png';
import arrow_icon from '../assets/arrow.png';
import hero_image from '../assets/hero_image.png';

const Hero = () => {
  return (
    <div className='hero'>
      <div className='hero-left'>
        <h2>WHAT’S NEW THIS SEASON?</h2>

        <div>
          <div className='spark-icon'>
            <p className="hero-subtitle">your next obsession</p>
            <img src={spark_icon} alt='Spark Icon' />
          </div>
          <p className="hero-tagline"><i>made to move with you</i></p>
        </div>

        <div className='hero-latest-btn'>
          <div>Shop the Drop</div>
          <img src={arrow_icon} alt='Arrow' />
        </div>
      </div>

      <div className='hero-right'>
        <img src={hero_image} alt='Hero' />
      </div>
    </div>
  );
}

export default Hero;