import React from "react";
import "./Product.css";

function Product() {
  return (
    <div className="product">
      <div className="product__info">
        <p>Title</p>
        <p className="product__price">$30</p>
        <div className="product__rating">⭐⭐</div>
      </div>
      <img
        src="https://m.media-amazon.com/images/I/61gQAQDA9yL._AC_SX679_.jpg"
        alt="product-img"
      />
      <button>Add to Basket</button>
    </div>
  );
}

export default Product;
