import React from 'react';
import CartItem from './CartItem';
import { Product } from '../App';

interface CartProps {
  items: Product[];
  handleChange: (event: React.ChangeEvent<HTMLInputElement>, cartItem: Product) => void;
  removeItem: (product: Product) => void;
  increaseQuantity: (productId: string) => void;
  decreaseQuantity: (productId: string) => void;
}

const Cart = ({ items, handleChange, removeItem, increaseQuantity, decreaseQuantity }: CartProps) => {

  const calculateTotal = () => {
    let total = 0;
    items.forEach((item) => total = total + (item.price * item.quantity));
    return total;
  }

  const changeCheckoutBtn = (event: React.MouseEvent<HTMLButtonElement>, pass: boolean) => {
    const checkoutBtn = event.target as HTMLButtonElement;

    if (pass) {
      checkoutBtn.classList.add('cart__checkout-btn--complete');
      checkoutBtn.textContent = 'Thanks for shopping!';
      setTimeout(() => {
        checkoutBtn.classList.remove('cart__checkout-btn--complete');
        checkoutBtn.textContent = 'Proceed to checkout!';
      }, 1000)
    }
  };

  const checkInputFieldsAreNotZero = () => {
    let checkoutPass = true;
    const quantityElements = document.querySelectorAll('.cartItem__quantity') as NodeListOf<HTMLDivElement>;
    const errorMsg = document.createElement('div');
    errorMsg.classList.add('quantity__error');

    quantityElements.forEach((element) => {
      const quantityInput = element.querySelector('.quantity__input') as HTMLInputElement;
      const quantityInputError = element.parentNode!.querySelector('.quantity__error') as HTMLDivElement;
      if (quantityInput.value === "0") {
        quantityInputError.classList.add('quantity__error--show');
        quantityInputError.classList.remove('quantity__error--hide');
        checkoutPass = false;
      }
    });
    return checkoutPass;
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
          <div className="subtotal__value">$ {calculateTotal()} AUD</div>
        </div>

        <button
          className="cart__checkout-btn"
          onClick={(event) => {
            const test = checkInputFieldsAreNotZero();
            changeCheckoutBtn(event, test);
          }}
          disabled={items.length === 0}
        >Proceed to checkout
        </button>

      </div>
    </div>
  );
}

export default Cart;
