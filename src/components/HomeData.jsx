import React, { useState } from "react";
import { products, discoutProducts } from "../products"; // Ensure correct path to products.js
import "bootstrap-icons/font/bootstrap-icons.css"; // Ensure Bootstrap Icons are imported

const HomeData = () => {
  // Combine products and discount products
  const allProducts = [...products, ...discoutProducts];

  // Filter products by category
  const newArrivals = allProducts.filter((product) => product.categories === "New Arrivals");
  const bestSales = allProducts.filter((product) => product.categories === "Best Sales");
  const bigDiscounts = discoutProducts; // Directly use discountProducts for big discounts

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

  // Render Product Section
  const renderProductSection = (title, products, badgeText) => (
    <>
      <h1 className="text-center mb-4 mt-5">{title}</h1>
      <div className="row">
        {products.map((product) => (
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
                {/* Dynamic Badge */}
                {badgeText && (
                  <span
                    className={`badge position-absolute top-0 start-0 m-2 ${
                      badgeText === "New" ? "bg-success" : badgeText === "Best Sales" ? "bg-warning" : "bg-primary"
                    }`}
                    style={{ fontSize: "0.9rem" }}
                  >
                    {badgeText}
                  </span>
                )}
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
                    {"★".repeat(Math.round(product.avgRating))} {/* Dynamic rating */}
                  </span>
                </div>
                <p className="fw-bold">${product.price}</p>
                <button className="btn btn-outline-primary">+</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );

  return (
    <div className="container mt-4">
      {/* Render Sections */}
      {renderProductSection("Big Discounts", bigDiscounts, "Discount")}
      {renderProductSection("New Arrivals", newArrivals, "New")}
      {renderProductSection("Best Sales", bestSales, "Best Sales")}
    </div>
  );
};

export default HomeData;
