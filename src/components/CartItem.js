import React from 'react';

const CartItem = ({ item, handleChange, removeItem, src, increaseQuantity, decreaseQuantity }) => {

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

  // Prevent the user from entering a quantity > 9
  const limitQuantity = (event) => {
    if (parseInt(event.target.value) > 9) {
      event.target.value = "9";
    }
  };

  const toggleErrorClass = (event) => {
    if (event.target.value === "0") {
      event.target.classList.add('quantity__input--error');
      
    } else {
      event.target.classList.remove('quantity__input--error');
      (event.target.parentNode.parentNode).querySelector('.quantity__error').classList.remove('quantity__error--show');
      (event.target.parentNode.parentNode).querySelector('.quantity__error').classList.add('quantity__error--hide');
      
    }
  }

  const toggleErrorClassQuantityBtn = (event) => {
    if (event.target.value === "0") {
      event.target.parentNode.querySelector('#quantity').classList.add('quantity__input--error');
      
    } else {
      event.target.parentNode.querySelector('#quantity').classList.remove('quantity__input--error');
      (event.target.parentNode.parentNode).querySelector('.quantity__error').classList.remove('quantity__error--show');
      (event.target.parentNode.parentNode).querySelector('.quantity__error').classList.add('quantity__error--hide');
      
    }
  }



  const incrementQuantityValue = (item) => {
    if (item.quantity < 5) {
      increaseQuantity(item.id);
    }
  }

  const decrementQuantityValue = (item) => {
    if (item.quantity > 1) {
      decreaseQuantity(item.id);
    }
  }

  return (
    <div className="cartItem">
      <div className="cartItem__img-container">
        <img className="cartItem__img" src={src} alt="Yo-Yo" />
      </div>
      <div className="cartItem__name">{item.name}</div>
      <div className="cartItem__price">
          ${item.price * item.quantity} AUD
      </div>

      <div className="cartItem__quantity">
        <button className="quantity__decrement" onClick={() => decrementQuantityValue(item)}>−</button>
        <label htmlFor="quantity" className="visuallyhidden">Quantity</label>
        <input 
          type="number" 
          name="quantity" 
          id="quantity" 
          min="1"
          max="9"
          value={item.quantity} 
          className="quantity__input"
          onChange={(event) => {
            avoidBlankQuantityInput(event);
            avoidNegativeQuantityInput(event);
            removeLeadingZeroes(event);
            limitQuantity(event);
            toggleErrorClass(event);
            handleChange(event, item);
          }}
        />
        {/* TODO: trigger input validation checks when changing quantity via btns */}
        <button className="quantity__increment" onClick={(event) => {
          incrementQuantityValue(item)
          toggleErrorClassQuantityBtn(event);
        }}>+</button>
        
      </div>

      <button className="cartItem__remove-btn" onClick={() => removeItem(item)}>Remove</button>
      <div className="quantity__error quantity__error--hide">Quantity cannot be zero!</div>     
    </div>
  );
}

export default CartItem;