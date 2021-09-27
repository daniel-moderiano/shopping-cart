import React from 'react';

const CartItem = ({ item }) => {
  return (
    <div className="cartItem">
      <img className="cartItem__img" src="" alt="" />
      <h3 className="cartItem__name">{item.name}</h3>
      <div className="cartItem__price">${item.price} AUD</div>
      <div className="cartItem__quantity">{item.quantity}</div>
      <button className="cartItem__remove">Remove</button>
    </div>
  );
}

export default CartItem;
