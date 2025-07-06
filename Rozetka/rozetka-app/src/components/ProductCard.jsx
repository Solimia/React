import React, { useState } from "react";
import Rating from "./Rating";
import "../App.css";

const ProductCard = ({ product }) => {
  const [liked, setLiked] = useState(false);
  const [inCart, setInCart] = useState(false);

  return (
    <div className="card">
      <div className="discount">{product.discount ? <span>{product.discount}</span> : null}</div>
      <img src={product.image} alt={product.title} className="card-image" />
      <div className="text">{product.title} </div>
      <h4 className="card-title">{product.title}</h4>

      <Rating rating={product.rating} />
      <p className="review-text">
        {product.reviews ? `${product.reviews} відгуків` : "Залишити відгук"}
      </p>

      <p className="stock">{product.inStock ? "Є в наявності" : "Немає в наявності"}</p>

      <p className="price">
        {product.oldPrice && <span className="old-price">{product.oldPrice} ₴</span>}
        <strong>{product.price} ₴</strong>
      </p>

      <div className="card-buttons">
        <button onClick={() => setLiked(!liked)} className="icon-button">
          {liked ? "💛" : "🤍"}
        </button>
        <button onClick={() => setInCart(!inCart)} className="icon-button">
          {inCart ? "🛒✓" : "🛒"}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
