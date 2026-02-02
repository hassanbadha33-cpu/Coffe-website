import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-socials">
        {/* These classes create the actual icons from the picture */}
        <a href="https://web.facebook.com/mohadefantastic.powy/?_rdc=1&_rdr#" className="social-icon"><i className="fab fa-facebook-f"></i></a>
        <a href="#" className="social-icon"><i className="fab fa-twitter"></i></a>
        <a href="https://www.instagram.com/mohamed_ahmd_officiall/" className="social-icon"><i className="fab fa-instagram"></i></a>
        <a href="#" className="social-icon"><i className="fab fa-linkedin"></i></a>
        <a href="#" className="social-icon"><i className="fab fa-pinterest"></i></a>
      </div>

      <div className="footer-links">
        <a href="#Home">Home</a>
        <a href="#About">About</a>
        <a href="#Products">Products</a>
        <a href="#Reviews">Reviews</a>
        <a href="#Contact">Contact</a>
        <a href="#Blogs">Blogs</a>
      </div>

      <div className="footer-credit">
        <p>Created By <span>Mohamed Ahmed</span> | All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;