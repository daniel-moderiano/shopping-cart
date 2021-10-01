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
      <table className="items__table">
        <thead className="table__head">
          <tr>
            <th>&nbsp;</th>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Subtotal</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody className="table__body">
          {items.map((item) => (
            <CartItem 
              key={item.id}
              item={item}
              handleChange={handleChange}
              removeItem={removeItem}
              src={item.img}
            />
          ))}
        </tbody>
      </table>
    </div>
    <button onClick={checkInputFieldsAreNotZero}>Checkout</button>
    </div>
  );
}

export default Cart;
