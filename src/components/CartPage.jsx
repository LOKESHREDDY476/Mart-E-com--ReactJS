import React from "react";
import { useCart } from "../context/CartContext";
import Footer from "./Footer";
import Navbar from "./Navbar";

const CartPage = () => {
  const { cart, removeFromCart } = useCart();

  return (
      <>
      <Navbar />
    <div className="container">
      <h1 className="text-center my-4">Your Cart</h1>
      {cart.length > 0 ? (
        <div className="row">
          {cart.map((item) => (
            <div key={item.id} className="col-md-6 col-lg-4 mb-4">
              <div className="card h-100 shadow-sm">
                <img src={item.imgUrl} className="card-img-top" alt={item.name} />
                <div className="card-body">
                  <h5 className="card-title">{item.productName}</h5>
                  <div className="d-flex justify-content-between align-items-center">
                    <span className="fw-bold">${item.price}</span>
                    <button
                      className="btn btn-danger"
                      onClick={() => removeFromCart(item.id)}
                      >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center">Your cart is empty.</p>
      )}
    </div>
    <Footer />
    </>
  );
};

export default CartPage;
