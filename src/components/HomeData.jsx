import React, { useState } from "react";
import { products, discoutProducts } from "../products";
import { useCart } from "../context/CartContext";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const HomeData = () => {
  const { addToCart } = useCart();

  const allProducts = [...products, ...discoutProducts];
  const newArrivals = allProducts.filter((product) => product.categories === "New Arrivals");
  const bestSales = allProducts.filter((product) => product.categories === "Best Sales");
  const bigDiscounts = discoutProducts;

  const [wishlist, setWishlist] = useState([]);
  const [hoveredProduct, setHoveredProduct] = useState(null);

  const handleWishlistClick = (productId) => {
    if (!wishlist.includes(productId)) {
      setWishlist([...wishlist, productId]);
    } else {
      setWishlist(wishlist.filter((id) => id !== productId));
    }
  };

  const renderProductSection = (title, products, badgeText) => (
    <>
      <h2 className="text-center mb-4 mt-5">{title}</h2>
      <div className="row">
        {products.map((product) => (
          <div
            key={product.id}
            className="col-md-4 col-sm-6 mb-4"
            onMouseEnter={() => setHoveredProduct(product.id)}
            onMouseLeave={() => setHoveredProduct(null)}
          >
            <div className="card h-100 shadow-sm">
              <div className="position-relative">
                <img
                  src={product.imgUrl}
                  className="card-img-top"
                  alt={product.productName}
                  style={{ height: "200px", objectFit: "cover" }}
                />
                {badgeText && (
                  <span className={`badge position-absolute top-0 start-0 m-2 bg-primary`}>
                    {badgeText}
                  </span>
                )}
                {hoveredProduct === product.id && (
                  <i
                    className={`bi bi-heart-fill position-absolute top-0 end-0 m-2`}
                    style={{
                      fontSize: "1.2rem",
                      cursor: "pointer",
                      color: wishlist.includes(product.id) ? "red" : "gray",
                    }}
                    onClick={() => handleWishlistClick(product.id)}
                  ></i>
                )}
              </div>
              <div className="card-body text-center">
                <h5 className="card-title">{product.productName}</h5>
                <p className="fw-bold">${product.price}</p>
                <button
                  className="btn btn-outline-primary"
                  onClick={() => addToCart(product)}
                >
                  +
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );

  return (
    <div className="container mt-4">
      {renderProductSection("Big Discounts", bigDiscounts, "Discount")}
      {renderProductSection("New Arrivals", newArrivals, "New")}
      {renderProductSection("Best Sales", bestSales, "Best Sales")}
    </div>
  );
};

export default HomeData;
