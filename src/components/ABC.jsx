import React from "react";
import {products} from "../products"; // Import your products.js file

const ProductGrid = () => {
  const newArrivals = products.filter((product) => product.category === "New Arrivals");
  const bestSales = products.filter((product) => product.category === "Best Sales");

  const renderProducts = (items) =>
    items.map((product) => (
      <div key={product.id} className="col-md-3 mb-4">
        <div className="card h-100">
          <img src={product.image} className="card-img-top" alt={product.name} />
          <div className="card-body text-center">
            <h5 className="card-title">{product.name}</h5>
            <p className="card-text text-primary fw-bold">${product.price}</p>
            <p className="card-text text-warning">⭐ {product.rating}</p>
          </div>
        </div>
      </div>
    ));

  return (
    <div className="container my-5">
      {/* New Arrivals Section */}
      <section>
        <h2 className="mb-4">New Arrivals</h2>
        <div className="row">{renderProducts(newArrivals)}</div>
      </section>

      {/* Best Sales Section */}
      <section className="mt-5">
        <h2 className="mb-4">Best Sales</h2>
        <div className="row">{renderProducts(bestSales)}</div>
      </section>
    </div>
  );
};

export default ProductGrid;
