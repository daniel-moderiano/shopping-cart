import React from 'react';

const CartItem = ({ item, handleChange }) => {

  const avoidBlankQuantityInput = (event) => {
    if (event.target.value === "") {
      event.target.value = 0;
    }
  };

  const removeLeadingZeroes = (event) => {
    
    if ((event.target.value).length > 1 && event.target.value[0] === "0") {
      console.log('running');
      event.target.value = (event.target.value).slice(1);
    }
  }

  return (
    <div className="cartItem">
      <img className="cartItem__img" src="" alt="" />
      <h3 className="cartItem__name">{item.name}</h3>
      <div className="cartItem__price">${item.price} AUD</div>
      <label htmlFor="quantity">Quantity</label>
      <input 
        type="number" 
        name="quantity" 
        id="quantity" 
        value={item.quantity} 
        onChange={(event) => {
          avoidBlankQuantityInput(event);
          removeLeadingZeroes(event);
          handleChange(event, item);
        }}
      />
      <button className="cartItem__increment">+</button>
      <button className="cartItem__deccrement">-</button>
      <button className="cartItem__remove">Remove</button>
    </div>
  );
}

export default CartItem;
