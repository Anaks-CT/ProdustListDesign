import React from "react";

export const SingleProduct = ({ product }) => {
  return (
    <div className="singleProduct">
      <div id="productRatingContainer">{product.rating} <span id="star">&#9733;</span> </div>
      <img id="image" width={200} height={250} src={product?.images[0]} alt="" />
      <div className="productDetails">
        <h4>{product?.title}</h4>
        <span id="description">{product?.description}</span>
        <div id="priceContainer">
          <h5>Rs. {product?.price} <span id="oldAmount">Rs. {product ? Math.floor(product.price / (1 - product.discountPercentage / 100)) : ""}</span></h5>
          <span id="ProductOff">({product.discountPercentage}% OFF)</span>
        </div>
      </div>
    </div>
  );
};
