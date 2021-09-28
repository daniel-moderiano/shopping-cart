import React from 'react';

const CartItem = ({ item, handleChange }) => {

  // If the user presses the backspace key to manually enter an input, this will avoid leaving the field blank, tripping an NaN error. Instead, set the value to zero
  const avoidBlankQuantityInput = (event) => {
    if (event.target.value === "") {
      event.target.value = "0";
    }
  };

  // Prevent the user from entering a negative quantity number
  const avoidNegativeQuantityInput = (event) => {
    if (parseInt(event.target.value) < 0) {
      event.target.value = "0";
    }
  };

  // When the user enters a number on the input field set to zero (after a backspace), ensure the resutling value becomes the number entered, instead of 01 or 02 etc.
  const removeLeadingZeroes = (event) => {
    if ((event.target.value).length > 1 && event.target.value[0] === "0") {
      event.target.value = (event.target.value).slice(1);
    }
  }

  const toggleErrorClass = (event) => {
    if (event.target.value === "0") {
      event.target.classList.add('error');
    } else {
      event.target.classList.remove('error');
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
          avoidNegativeQuantityInput(event);
          removeLeadingZeroes(event);
          toggleErrorClass(event);
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
