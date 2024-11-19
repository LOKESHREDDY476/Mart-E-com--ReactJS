import React, { useState } from "react";
import { discoutProducts, products } from "../products"; // Ensure the path to products.js is correct
import "bootstrap-icons/font/bootstrap-icons.css"; // Ensure Bootstrap Icons are imported

const ProductList = () => {
  // Wishlist state
  const [wishlist, setWishlist] = useState([]);

  // Handle wishlist click event
  const handleWishlistClick = (productId) => {
    if (!wishlist.includes(productId)) {
      setWishlist([...wishlist, productId]); // Add product to wishlist if not already added
    } else {
      setWishlist(wishlist.filter((id) => id !== productId)); // Remove from wishlist if already added
    }
  };

  // Track hover state for each product
  const [hoveredProduct, setHoveredProduct] = useState(null);

  return (
    <div className="container mt-4">
      {/* Big Discount Section */}
      <h1 className="text-center mb-4">Big Discount</h1>
      <div className="row">
        {discoutProducts.map((product) => (
          <div
            key={product.id}
            className="col-md-4 col-sm-6 mb-4"
            onMouseEnter={() => setHoveredProduct(product.id)} // Show icon on hover
            onMouseLeave={() => setHoveredProduct(null)} // Hide icon on mouse leave
          >
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
                {hoveredProduct === product.id && (
                  <i
                    className={`bi bi-heart-fill position-absolute top-0 end-0 m-2`}
                    style={{
                      fontSize: "1.2rem",
                      cursor: "pointer",
                      color: wishlist.includes(product.id) ? "green" : "gray",
                    }}
                    onClick={() => handleWishlistClick(product.id)}
                  ></i>
                )}
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

      
    </div>
  );
};

export default ProductList;
