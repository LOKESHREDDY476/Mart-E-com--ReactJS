import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { products } from "../products"; // Import product data
import Navbar from "./Navbar";
import Footer from "./Footer";

const ProductPage = () => {
  const [searchText, setSearchText] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Sofas", "Chairs", "Phones", "Wireless"];

  const filteredProducts = products.filter((product) => {
    // Check if product.name exists and is a string before calling toLowerCase
    const matchesCategory =
      selectedCategory === "All" || product.category === selectedCategory;
    const matchesSearch =
      product.name &&
      typeof product.name === "string" &&
      product.name.toLowerCase().includes(searchText.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <Navbar />
      <div className="container">
        {/* Header Section */}
        <div
          className="header d-flex justify-content-center align-items-center"
          style={{
            background:
              "url('https://via.placeholder.com/1200x400?text=Banner') no-repeat center center / cover",
            height: "200px",
          }}
        >
          <h1 className="text-white bg-primary px-4 py-2 rounded">Product</h1>
        </div>

        {/* Filter and Search Section */}
        <div className="d-flex justify-content-between align-items-center mt-4">
          <div className="dropdown">
            <button
              className="btn btn-primary dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
            >
              Filter By Category
            </button>
            <ul className="dropdown-menu">
              {categories.map((category) => (
                <li key={category}>
                  <button
                    className="dropdown-item"
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <input
            type="text"
            className="form-control w-50"
            placeholder="Search..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
        </div>

        {/* Product Grid */}
        <div className="row mt-4">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div key={product.id} className="col-md-3 col-sm-6 mb-4">
                <div className="card h-100 shadow-sm border-0">
                  <img
                    src={product.image}
                    className="card-img-top"
                    alt={product.name}
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                  <div className="card-body text-center">
                    <h5 className="card-title">{product.name}</h5>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-12 text-center">
              <p>No products found.</p>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductPage;
