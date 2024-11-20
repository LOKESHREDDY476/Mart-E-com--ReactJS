import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../redux/cartSlice";
import Navbar from "./Navbar";
import Footer from "./Footer";

const CartPage = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

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
                  {/* Product Image */}
                  <img
                    src={item.imgUrl}
                    className="card-img-top"
                    alt={item.name}
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                  <div className="card-body">
                    {/* Product Details */}
                    <h5 className="card-title">{item.productName}</h5>
                    {/* <p className="card-text">{item.description}</p> */}
                    <div className="d-flex justify-content-between align-items-center">
                      <span className="fw-bold">${item.price}</span>
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => dispatch(removeFromCart(item.id))}
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
          <p className="text-center mt-4">Your cart is empty.</p>
        )}
      </div>
      <Footer />
    </>
  );
};

export default CartPage;
