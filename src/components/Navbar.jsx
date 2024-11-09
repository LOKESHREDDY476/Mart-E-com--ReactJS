
import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <header className="navbar">
            <div className="logo">
                <img src="../public/images/achieversIT.png" alt="AchieversIT Logo" /> 
            </div>
            <nav>
                <ul className="nav-links">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Shop</a></li>
                    <li><a href="#">Cart</a></li>
                </ul>
                <div className="icons">
                    <a href="#"><i className="user-icon">👤</i></a>
                    <a href="#"><i className="cart-icon">🛒</i><span className="cart-count">0</span></a>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
