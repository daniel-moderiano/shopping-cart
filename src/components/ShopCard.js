import React from 'react';

const ShopCard = ({ name, price, id, handleClick, product, src }) => {
  return (
    <div className="product">
      <div className="product__img-container">
        <img className="product__img" src={src} alt="Yo-Yo" />
      </div>
      <h3 className="product__name">{name}</h3>
      <div className="product__price">$ {price}</div>
      {/* Add a page alert on click to indicate the button has been pressed */}
      <button onClick={() => handleClick(product)} className="product__add-btn">Add to Cart</button>
    </div>
  );
}

export default ShopCard;
