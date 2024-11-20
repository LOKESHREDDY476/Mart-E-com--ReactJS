import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import { filterProducts, setCategories } from "../redux/productSlice";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const ProductPage = () => {
  const dispatch = useDispatch();
  const { filteredProducts, categories, selectedCategory, searchText } =
    useSelector((state) => state.products);

  useEffect(() => {
    dispatch(setCategories());
  }, [dispatch]);

  const handleCategoryChange = (category) => {
    dispatch(filterProducts({ category, searchText }));
  };

  const handleSearchChange = (e) => {
    dispatch(filterProducts({ category: selectedCategory, searchText: e.target.value }));
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="d-flex justify-content-between align-items-center mt-4">
          <div className="dropdown">
            <button className="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown">
              Filter By Category
            </button>
            <ul className="dropdown-menu">
              {categories.map((category) => (
                <li key={category}>
                  <button
                    className={`dropdown-item ${selectedCategory === category ? "active" : ""}`}
                    onClick={() => handleCategoryChange(category)}
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
            placeholder="Search products..."
            value={searchText}
            onChange={handleSearchChange}
          />
          <Link to="/cart" className="btn btn-primary">
            View Cart
          </Link>
        </div>
        <div className="row mt-4">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div key={product.id} className="col-md-4 col-sm-6 mb-4">
                <div className="card h-100 shadow-sm border-0">
                  <img
                    src={product.imgUrl}
                    className="card-img-top"
                    alt={product.productName}
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                  <div className="card-body text-center">
                    <h5 className="card-title">{product.productName}</h5>
                    <p className="fw-bold">${product.price}</p>
                    <button
                      className="btn btn-primary"
                      onClick={() => dispatch(addToCart(product))}
                    >
                      +
                    </button>
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
