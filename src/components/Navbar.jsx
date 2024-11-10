import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './Navbar.css';

const Navbar = () => {
    return (
        <header className="navbar">
            <div className="logo">
                <img src="./public/Logo.png" alt="AchieversITLogo" /> 
            </div>
            <nav>
                <ul className="nav-links">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Shop</a></li>
                    <li><a href="#">Cart</a></li>
                <div className="icons">
                    <a href="#"><i className="fas fa-user user-icon"></i></a>
                    <a href="#"><i className="fas fa-shopping-cart cart-icon"></i><span className="cart-count">0</span></a>
                </div>
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;
