// import React from 'react';
// import { Link } from 'react-router-dom';
// import { useSelector } from "react-redux";
// import achieversITLogo from '../Images/achieversIT.png';

// const Navbar = () => {
//   const cartItems = useSelector((state) => state.cart);

//   return (
//     <header>
//       <nav className="navbar navbar-expand-lg navbar-light bg-light">
//         <div className="container">
//           <Link to="/" className="navbar-brand">
//             <img
//               src={achieversITLogo}
//               alt="AchieversIT Logo"
//               style={{ width: "150px" }}
//             />
//           </Link>
//           <button
//             className="navbar-toggler"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#navbarNav"
//           >
//             <span className="navbar-toggler-icon"></span>
//           </button>
//           <div className="collapse navbar-collapse" id="navbarNav">
//             <ul className="navbar-nav ms-auto">
//               <li className="nav-item">
//                 <Link to="/" className="nav-link">Home</Link>
//               </li>
//               <li className="nav-item">
//                 <Link to="/shop" className="nav-link">Shop</Link>
//               </li>
//               <li className="nav-item">
//                 <Link to="/cart" className="nav-link">Cart</Link>
//               </li>
//             </ul>
//             <div className="d-flex align-items-center">
//               <Link to="/profile" className="me-3">
//                 <i className="fas fa-user user-icon"></i>
//               </Link>
//               <Link to="/cart" className="position-relative">
//                 <i className="fas fa-shopping-cart cart-icon"></i>
//                 {cartItems.length > 0 && (
//                   <span
//                     className="badge bg-danger rounded-pill position-absolute top-0 start-100 translate-middle"
//                   >
//                     {cartItems.length}
//                   </span>
//                 )}
//               </Link>
//             </div>
//           </div>
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default Navbar;
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import achieversITLogo from '../Images/achieversIT.png';


const Navbar = () => {
  const cartItems = useSelector((state) => state.cart); // Access the cart from Redux store

  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <Link to="/" className="navbar-brand">
            <img
              src={achieversITLogo} // Your logo image path
              alt="Logo"
              style={{ width: "150px" }}
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link to="/" className="nav-link">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/shop" className="nav-link">Shop</Link>
              </li>
              <li className="nav-item">
                <Link to="/cart" className="nav-link">Cart</Link>
              </li>
            </ul>
            <div className="d-flex align-items-center">
              <Link to="/profile" className="me-3">
                <i className="fas fa-user user-icon"></i>
              </Link>
              <Link to="/cart" className="position-relative">
                <i className="fas fa-shopping-cart cart-icon"></i>
                {cartItems.length > 0 && (
                  <span className="badge bg-danger rounded-pill position-absolute top-0 start-100 translate-middle">
                    {cartItems.length}
                  </span>
                )}
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
