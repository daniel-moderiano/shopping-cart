import React from 'react';

const ShopCard = () => {
  return (
    <div className="product">
      <img className="product__img" src="" alt="" />
      <h3 className="product__name">Product name</h3>
      <div className="product__price">$49.99 AUD</div>
      <div className="product__overlay">
        <button className="product__add-btn">Add to Cart</button>
      </div>
    </div>
  );
}

export default ShopCard;
