import React from 'react';
import achieversITLogo from '../Images/achieversIT.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';



const Navbar = () => {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <a className="navbar-brand" href="#">
                    <img 
                        src={achieversITLogo} 
                        alt="AchieversIT Logo" 
                        style={{ width: "150px" }} 
                    />
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item ms-2">
                                <a className="nav-link" href="#">Home</a>
                            </li>
                            <li className="nav-item ms-2">
                                <a className="nav-link" href="#">Shop</a>
                            </li>
                            <li className="nav-item ms-2">
                                <a className="nav-link" href="#">Cart</a>
                            </li>
                        </ul>
                        <div className="d-flex align-items-center">
                            <a href="#" className="me-3 ms-2">
                                <i className="fas fa-user user-icon"></i>
                            </a>
                            <a href="#" className="position-relative ms-2">
                                <i className="fas fa-shopping-cart cart-icon"></i>
                                <span 
                                    className="badge bg-danger rounded-pill position-absolute top-0 start-100 translate-middle">
                                    0
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
