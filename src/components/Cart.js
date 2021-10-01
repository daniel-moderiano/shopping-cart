import React from 'react';
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
    <div className="cart">
      <h1 className="cart__title">Cart</h1>
        {items.map((item) => (
          <CartItem 
            key={item.id}
            item={item}
            handleChange={handleChange}
            removeItem={removeItem}
            src={item.img}
          />
        ))}
      <div className="cart__summary">
        <div className="cart__summary-title">Cart Total</div>
        <div className="cart__total">Price</div>
        <button className="cart__checkout-btn" onClick={checkInputFieldsAreNotZero}>Checkout</button>
      </div>
    </div>
  );
}

export default Cart;
