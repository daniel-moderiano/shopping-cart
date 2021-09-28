import React, { useState } from 'react';
import CartItem from './CartItem';

const Cart = ({ items, handleChange }) => {

  // TODO: Check for anu quantity fields with 0 input, and show error below these before user is allowed to checkout (checkout will be a success message "Thank you for shopping with")

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
      <div>
      <h1>Cart</h1>
      <h2>Current items in cart</h2>
      {items.map((item) => (
        <CartItem 
          key={item.id}
          item={item}
          handleChange={handleChange}
        />
      ))}
    </div>
    <button onClick={checkInputFieldsAreNotZero}>Checkout</button>
    </div>
  );
}

export default Cart;
