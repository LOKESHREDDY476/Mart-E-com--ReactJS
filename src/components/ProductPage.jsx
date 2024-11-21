import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { filterProducts, setCategories } from "../redux/productSlice";
import { useCart } from "../context/CartContext";
import Navbar from "./Navbar";
import Footer from "./Footer";

const ProductPage = () => {
  const dispatch = useDispatch();
  const { addToCart } = useCart();

  const { filteredProducts, categories, selectedCategory, searchText } =
    useSelector((state) => state.products);

  // Fetch categories when component mounts
  useEffect(() => {
    dispatch(setCategories());
  }, [dispatch]);

  // Handle category change
  const handleCategoryChange = (category) => {
    dispatch(filterProducts({ category, searchText })); // Dispatch action to filter products
  };

  // Handle search text change
  const handleSearchChange = (e) => {
    dispatch(
      filterProducts({ category: selectedCategory, searchText: e.target.value })
    );
  };

  return (
    <>
      <Navbar />
      <div className="container my-4">
        {/* Filter and Search Bar */}
        <div className="d-flex justify-content-between align-items-center mb-4">
          <div className="dropdown">
            <select
              className="btn btn-primary dropdown-toggle"
              onChange={(e) => handleCategoryChange(e.target.value)}
              value={selectedCategory || ""}
            >
              <option value="">Filter By Category</option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
          <input
            type="text"
            className="form-control w-50"
            placeholder="Search products..."
            value={searchText}
            onChange={handleSearchChange}
          />
        </div>

        {/* Product List */}
        <div className="row">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div key={product.id} className="col-md-4 col-sm-6 mb-4">
                <div className="card h-100 shadow-sm">
                  <img
                    src={product.imgUrl}
                    className="card-img-top"
                    alt={product.productName}
                  />
                  <div className="card-body text-center">
                    <h5 className="card-title">{product.productName}</h5>
                    <p className="fw-bold">${product.price.toFixed(2)}</p>
                    <button
                      className="btn btn-primary"
                      onClick={() => addToCart(product)}
                    >
                      Add to Cart
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
