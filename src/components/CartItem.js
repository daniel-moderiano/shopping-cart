import React from 'react';

const CartItem = ({ item }) => {
  return (
    <div className="cartItem">
      <img className="cartItem__img" src="" alt="" />
      <h3 className="cartItem__name">{item.name}</h3>
      <div className="cartItem__price">${item.price} AUD</div>
      {/* TODO: switch the quantity to an input field, and use state to have it update quantity values on user typing or button click */}
      <label htmlFor="quantity">Quantity</label>
      <input type="text" name="quantity" id="quantity" value={item.quantity}/>
      <button className="cartItem__increment">+</button>
      <button className="cartItem__deccrement">-</button>
      <button className="cartItem__remove">Remove</button>
    </div>
  );
}

export default CartItem;
