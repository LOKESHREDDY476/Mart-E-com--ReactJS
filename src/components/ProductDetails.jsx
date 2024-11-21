import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Navbar from "./Navbar";
import Footer from "./Footer";

const ProductDetails = () => {
  const { id } = useParams(); // Get the product ID from the URL
  const product = useSelector((state) =>
    state.products.allProducts.find((item) => item.id === parseInt(id))
  );

  if (!product) {
    return (
      <div>
        <Navbar />
        <div className="container text-center my-5">
          <h2>Product not found</h2>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <div className="container my-5">
        <div className="row">
          <div className="col-md-6">
            <img
              src={product.imgUrl}
              className="img-fluid"
              alt={product.productName}
            />
          </div>
          <div className="col-md-6">
            <h1>{product.productName}</h1>
            <p className="text-muted">Category: {product.category}</p>
            <p className="fw-bold">${product.price.toFixed(2)}</p>
            <p>{product.description}</p>
            <button className="btn btn-primary">Add To Cart</button>
          </div>
        </div>

        <h3 className="mt-5">You might also like</h3>
        <div className="row">
          {product.similarProducts.map((similarProduct) => (
            <div
              key={similarProduct.id}
              className="col-md-3 col-sm-6 mb-4 text-center"
            >
              <img
                src={similarProduct.imgUrl}
                alt={similarProduct.productName}
                className="img-fluid"
              />
              <p>{similarProduct.productName}</p>
              <p className="fw-bold">${similarProduct.price.toFixed(2)}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductDetails;
