import React, { useState } from 'react';
import ShopCard from './ShopCard';

const Shop = ({ products, addToCart }) => {

  const handleClick = (product) => {
    addToCart(product);
  }

  return (
    <div className="shop">
      <h1 className="shop__title">Advanced Yo-Yo Collection</h1>
      <div className="products">
        {products.map((product) => (
          <ShopCard 
            key={product.id}
            name={product.name} 
            price={product.price}
            handleClick={handleClick}
            product={product}
            src={product.img}
          />
        ))}
      </div>  
    </div>
  );
}

export default Shop;
