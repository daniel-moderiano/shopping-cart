import React, { useState } from 'react';
import ShopCard from './ShopCard';

const Shop = ({ products, addToCart }) => {

  const handleClick = (product) => {
    addToCart(product);
  }

  return (
    <div>
      <h1>Shop</h1>
      <h2>Advanced Yo-Yos</h2>
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
  );
}

export default Shop;
