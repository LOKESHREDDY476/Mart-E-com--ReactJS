import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h2 className="footer-title">
          <i className="fas fa-shopping-bag"></i> Mart
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor libero
          id et, in gravida. Sit diam duis mauris nulla cursus. Erat et lectus
          vel ut sollicitudin elit at amet.
        </p>
      </div>

      <div className="footer-section">
        <h3>About Us</h3>
        <ul>
          <li><a href="#">Careers</a></li>
          <li><a href="#">Our Stores</a></li>
          <li><a href="#">Our Cares</a></li>
          <li><a href="#">Terms & Conditions</a></li>
          <li><a href="#">Privacy Policy</a></li>
        </ul>
      </div>

      <div className="footer-section">
        <h3>Customer Care</h3>
        <ul>
          <li><a href="#">Help Center</a></li>
          <li><a href="#">How to Buy</a></li>
          <li><a href="#">Track Your Order</a></li>
          <li><a href="#">Corporate & Bulk Purchasing</a></li>
          <li><a href="#">Returns & Refunds</a></li>
        </ul>
      </div>

      <div className="footer-section">
        <h3>Contact Us</h3>
        <address>
          70 Washington Square South, New York, NY 10012, United States<br />
          Email: <a href="mailto:example@gmail.com">example@gmail.com</a><br />
          Phone: <a href="tel:+1123456780">+1 1123 456 780</a>
        </address>
      </div>
    </footer>
  );
};

export default Footer;
