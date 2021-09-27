import React, { useState } from 'react';
import CartItem from './CartItem';

const Cart = ({ items }) => {

  return (
    <div>
      <div>
      <h1>Cart</h1>
      <h2>Current items in cart</h2>
      {items.map((item) => (
        <CartItem 
          key={item.id}
          item={item}
        />
      ))}
    </div>
    </div>
  );
}

export default Cart;
