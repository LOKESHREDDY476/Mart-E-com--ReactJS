import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { filterProducts, setCategories } from "../redux/productSlice";
import { useCart } from "../context/CartContext";
import Navbar from "./Navbar";
import Footer from "./Footer";
import tableImage from "../Images/table.jpg";

const ProductPage = () => {
  const dispatch = useDispatch();
  const { addToCart } = useCart();

  const { filteredProducts, categories, selectedCategory, searchText } =
    useSelector((state) => state.products);

  useEffect(() => {
    dispatch(setCategories());
  }, [dispatch]);

  const handleCategoryChange = (category) => {
    dispatch(filterProducts({ category, searchText }));
  };

  const handleSearchChange = (e) => {
    dispatch(
      filterProducts({ category: selectedCategory, searchText: e.target.value })
    );
  };

  return (
    <>
      <Navbar />
      <div className="container my-4">
        <div
          className="banner text-black text-center py-5"
          style={{
            backgroundImage: `url(${tableImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <h1 className="display-4 fw-bold">Products</h1>
        </div>

        <div className="d-flex justify-content-between align-items-center mb-4">
          {/* Category Dropdown */}
          <div className="dropdown">
            <select
              className="btn btn-primary dropdown-toggle"
              onChange={(e) => handleCategoryChange(e.target.value)}
              value={selectedCategory || ""}
              aria-label="Filter products by category"
            >
              <option value="">Filter By Category</option>
              {categories?.length > 0 ? (
                categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))
              ) : (
                <option disabled>No categories available</option>
              )}
            </select>
          </div>

          {/* Search Bar */}
          <input
            type="text"
            className="form-control w-50 mt-3"
            placeholder="Search products..."
            value={searchText}
            onChange={handleSearchChange}
            aria-label="Search products"
          />
        </div>

        {/* Product Grid */}
        <div className="row">
          {filteredProducts?.length > 0 ? (
            filteredProducts.map((product) => (
              <div key={product.id} className="col-md-4 col-sm-6 mb-4">
                <div className="card h-100 shadow-sm">
                  {/* Link to Product Details */}
                  <Link to={`/product/${product.id}`}>
                    <img
                      src={product.imgUrl || "placeholder-image-url.jpg"}
                      className="card-img-top"
                      alt={product.productName}
                      onError={(e) =>
                        (e.target.src = "placeholder-image-url.jpg")
                      }
                    />
                  </Link>
                  <div className="card-body text-center">
                    <h5 className="card-title">{product.productName}</h5>

                    {/* Star Ratings */}
                    <div className="d-flex justify-content-center align-items-center mb-2">
                      {Array.from({ length: 5 }, (_, index) => (
                        <i
                          key={index}
                          className={`bi ${
                            index < product.rating
                              ? "bi-star-fill"
                              : "bi bi-star-fill"
                          }`}
                          style={{
                            fontSize: "1.2rem",
                            color: index < product.rating ? "gray" : "gold",
                          }}
                        ></i>
                      ))}
                    </div>

                    <p className="fw-bold">${product.price.toFixed(2)}</p>
                    <button
                      className="btn btn-primary"
                      onClick={() => addToCart(product)}
                      aria-label={`Add ${product.productName} to cart`}
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
