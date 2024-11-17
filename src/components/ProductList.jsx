import React from "react";
import { discoutProducts, products } from "../products"; // Ensure the path to products.js is correct

const ProductList = () => {
  return (
    <div className="container mt-4">
      {/* Big Discount Section */}
      <h1 className="text-center mb-4">Big Discount</h1>
      <div className="row">
        {discoutProducts.map((product) => (
          <div key={product.id} className="col-md-4 col-sm-6 mb-4">
            <div className="card h-100 shadow-sm border-0">
              <div className="position-relative">
                {/* Product Image */}
                <img
                  src={product.imgUrl}
                  className="card-img-top"
                  alt={product.name}
                  style={{ height: "200px", objectFit: "cover" }}
                />
                {/* Discount Badge */}
                <span
                  className="badge bg-primary position-absolute top-0 start-0 m-2"
                  style={{ fontSize: "0.9rem" }}
                >
                  {product.discount}
                </span>
                {/* Wishlist Icon */}
                <i
                  className="bi bi-heart position-absolute top-0 end-0 m-2 text-dark"
                  style={{ fontSize: "1.2rem", cursor: "pointer" }}
                ></i>
              </div>
              <div className="card-body text-center">
                <h5 className="card-title">{product.productName}</h5>
                <div className="mb-2">
                  <span className="text-warning">
                    {"★".repeat(5)} {/* Render 5 filled stars */}
                  </span>
                </div>
                <p className="fw-bold">${product.price}</p>
                <button className="btn btn-outline-primary">+</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* New Arrivals Section */}
      <h1 className="text-center mb-4 mt-5">New Arrivals</h1>
      <div className="row">
        {products.map((product) => (
          <div key={product.id} className="col-md-4 col-sm-6 mb-4">
            <div className="card h-100 shadow-sm border-0">
              <div className="position-relative">
                {/* Product Image */}
                <img
                  src={product.imgUrl}
                  className="card-img-top"
                  alt={product.name}
                  style={{ height: "200px", objectFit: "cover" }}
                />
                {/* New Badge */}
                <span
                  className="badge bg-success position-absolute top-0 start-0 m-2"
                  style={{ fontSize: "0.9rem" }}
                >
                  New
                </span>
                {/* Wishlist Icon */}
                <i
                  className="bi bi-heart position-absolute top-0 end-0 m-2 text-dark"
                  style={{ fontSize: "1.2rem", cursor: "pointer" }}
                ></i>
              </div>
              <div className="card-body text-center">
                <h5 className="card-title">{product.productName}</h5>
                <div className="mb-2">
                  <span className="text-warning">
                    {"★".repeat(product.rating)} {/* Dynamic rating */}
                  </span>
                </div>
                <p className="fw-bold">${product.price}</p>
                <button className="btn btn-outline-primary">+</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
