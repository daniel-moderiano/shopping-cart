import React from 'react';
import CartItem from './CartItem';

const Cart = ({ items, handleChange, removeItem, increaseQuantity, decreaseQuantity }) => {

  const calculateTotal = () => {
    let total = 0;
    items.forEach((item) => total = total + (item.price * item.quantity));
    return total;
  }

  const checkInputFieldsAreNotZero = () => {
    const quantityElements = document.querySelectorAll('.cartItem__quantity');
    const errorMsg = document.createElement('div');
    errorMsg.classList.add('quantity__error');

    quantityElements.forEach((element) => {
      if (element.querySelector('.quantity__input').value === "0") {
        element.parentNode.querySelector('.quantity__error').classList.add('quantity__error--show');
        element.parentNode.querySelector('.quantity__error').classList.remove('quantity__error--hide');
      }
    });
  }

  return (
    <div className="cart">
      <h1 className="cart__title">Cart Summary</h1>
      <div className="cartItems">
        {items.map((item) => (
          <CartItem 
            key={item.id}
            item={item}
            handleChange={handleChange}
            removeItem={removeItem}
            src={item.img}
            increaseQuantity={increaseQuantity}
            decreaseQuantity={decreaseQuantity}
          />
        ))}
      </div>
      <div className="cart__summary">
        <div className="cart__subtotal">
          <div className="subtotal__title">Subtotal</div>
          <div className="subtotal__value">${calculateTotal()}</div>
        </div>
       
        <button 
          className="cart__checkout-btn" 
          onClick={checkInputFieldsAreNotZero}
          disabled={items.length === 0}
        >Proceed to checkout
        </button>
      </div>
    </div>
  );
}

export default Cart;
