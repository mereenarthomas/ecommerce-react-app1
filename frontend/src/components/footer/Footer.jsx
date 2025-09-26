import React from 'react';
import './Footer.css';
import footer_logo from '../assets/logo.png';
import footer_wordmark from '../assets/wordmark.png';
import instagram_icon from '../assets/instagram_icon.png';
import pinterest_icon from '../assets/pinterest_icon.png';
import whatsapp_icon from '../assets/whatsapp_icon.png';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-logo'>
        <img src={footer_logo} alt='Logo' />
        <img src={footer_wordmark} alt='Wordmark' />
      </div>

      <ul className='footer-links'>
        <li><a href="#company">Company</a></li>
        <li><a href="#products">Products</a></li>
        <li><a href="#offices">Offices</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className='footer-social-icon'>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className='footer-icons-container'>
          <img src={instagram_icon} alt='Instagram' />
        </a>
        <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" className='footer-icons-container'>
          <img src={pinterest_icon} alt='Pinterest' />
        </a>
        <a href="https://wa.me" target="_blank" rel="noopener noreferrer" className='footer-icons-container'>
          <img src={whatsapp_icon} alt='WhatsApp' />
        </a>
      </div>

      <div className="footer-copyright">
        <hr />
        <p>© LookScape 2025 - All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;