import React, { useState } from 'react';
import CartItem from './CartItem';

const Cart = ({ items, handleChange, removeItem }) => {

  const checkInputFieldsAreNotZero = () => {
    const quantityElements = document.querySelectorAll('.cartItem__quantity');
    const errorMsg = document.createElement('div');
    errorMsg.classList.add('quantity__error');

    quantityElements.forEach((element) => {
      
      if (element.querySelector('.quantity__input').value === "0") {
        element.querySelector('.quantity__error').classList.add('quantity__error--show');
        element.querySelector('.quantity__error').classList.remove('quantity__error--hide');
      }
    });
  }

  return (
    <div>
      <div className="cart">
      <h1 className="cart__title">Cart</h1>
      <h2 className="cart__subtitle">Current items in cart</h2>
      {items.map((item) => (
        <CartItem 
          key={item.id}
          item={item}
          handleChange={handleChange}
          removeItem={removeItem}
        />
      ))}
    </div>
    <button onClick={checkInputFieldsAreNotZero}>Checkout</button>
    </div>
  );
}

export default Cart;
