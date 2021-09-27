import React from 'react';

const ShopCard = ({ name, price, id, handleClick, product, src }) => {
  return (
    <div className="product">
      <img className="product__img" src={src} alt="Yo-Yo" />
      <h3 className="product__name">{name}</h3>
      <div className="product__price">${price} AUD</div>
      <div className="product__overlay">
        <button onClick={() => handleClick(product)} className="product__add-btn">Add to Cart</button>
      </div>
    </div>
  );
}

export default ShopCard;
