import './styles/App.css';
import './styles/reset.css';
import * as React from 'react';
import Nav from './components/Nav';
import { Switch, Route } from 'react-router';
import Home from './components/Home';
import Cart from './components/Cart';
import Shop from './components/Shop';
import { nanoid } from 'nanoid';

import april from './images/april.jpg';
import barracuda from './images/barracuda.jpg';
import boss from './images/boss.jpg';
import burnside from './images/burnside.jpg';
import carpfin from './images/carpfin.jpg';
import diplomat from './images/diplomat.jpg';
import ghost from './images/ghost.jpg';
import grind from './images/grind-machine.jpg';
import replay from './images/replay.jpg';
import superstar from './images/superstar.jpg';
import watcher from './images/watcher.jpg';
import galsang from './images/galsang.jpg';

export interface Product {
  name: string;
  price: number;
  id: string;
  quantity: number;
  img: string;
};

function App() {
  // The base array of products sold on the store. These product objects can be passed to the cart array to allow re-use of the properties
  const [products] = React.useState<Product[]>([
    {
      name: 'Magic Carpfin',
      price: 40.0,
      id: nanoid(),
      quantity: 1,
      img: carpfin,
    },
    {
      name: 'Recess Diplomat',
      price: 48.0,
      id: nanoid(),
      quantity: 1,
      img: diplomat,
    },
    {
      name: 'YYF SuperStar',
      price: 70.0,
      id: nanoid(),
      quantity: 1,
      img: superstar,
    },
    {
      name: 'YYF Replay',
      price: 15.0,
      id: nanoid(),
      quantity: 1,
      img: replay,
    },
    {
      name: 'YoYo King Ghost',
      price: 25.0,
      id: nanoid(),
      quantity: 1,
      img: ghost,
    },
    {
      name: 'YoYo King Watcher',
      price: 20.0,
      id: nanoid(),
      quantity: 1,
      img: watcher,
    },
    {
      name: 'YYF Boss',
      price: 25.0,
      id: nanoid(),
      quantity: 1,
      img: boss,
    },
    {
      name: 'YYF Grind Machine',
      price: 40.0,
      id: nanoid(),
      quantity: 1,
      img: grind,
    },
    {
      name: 'Duncan Barracuda',
      price: 40.0,
      id: nanoid(),
      quantity: 1,
      img: barracuda,
    },
    {
      name: 'Magic April',
      price: 40.0,
      id: nanoid(),
      quantity: 1,
      img: april,
    },
    {
      name: 'One Drop Burnside',
      price: 95.0,
      id: nanoid(),
      quantity: 1,
      img: burnside,
    },
    {
      name: 'Vosun Galsang',
      price: 65.0,
      id: nanoid(),
      quantity: 1,
      img: galsang,
    },
  ]);

  // When a user clicks 'add to cart' on a product in the shop screen, that product will be pushed to this items array, where the quantity may be modified in the cart screen
  const [cartItems, setCartItems] = React.useState<Product[]>([]);

  const isItemInCart = (productId: string) => {
    return cartItems.some((item) => item.id === productId);
  };

  const increaseQuantity = (productId: string) => {
    // Find only the cart item that macthes the product ID given, and increment quantity for that item only
    const newCartItems = cartItems.map((item) => {
      if (item.id === productId) {
        item.quantity++;
      }
      return item;
    });

    setCartItems(newCartItems);
  };

  const decreaseQuantity = (productId: string) => {
    // Find only the cart item that macthes the product ID given, and decrement quantity for that item only
    const newCartItems = cartItems.map((item) => {
      if (item.id === productId) {
        item.quantity--;
      }
      return item;
    });

    setCartItems(newCartItems);
  };

  const setQuantity = (cartItemId: string, desiredQuantity: number) => {
    const newCartItems = cartItems.map((item) => {
      if (item.id === cartItemId) {
        item.quantity = desiredQuantity;
      }
      return item;
    });
    setCartItems(newCartItems);
  };

  const handleQuantityChange = (event: React.ChangeEvent<HTMLInputElement>, cartItem: Product) => {
    const desiredQuantity = parseInt(event.target.value);
    setQuantity(cartItem.id, desiredQuantity);
  };

  const addProductToCart = (product: Product) => {
    // Establish whether the item exists in the cart
    if (!isItemInCart(product.id)) {
      // Add item to cart
      setCartItems([...cartItems, product]);
    } else {
      // Check that the quantity will not exceed maximum
      if (product.quantity < 9) {
        increaseQuantity(product.id);
      }
    }
  };

  const removeProductFromCart = (product: Product) => {
    const newCartItems = cartItems.filter((item) => item.id !== product.id);
    setCartItems(newCartItems);
  };

  return (
    <div className="App">
      <header className="header">
        <Nav numItems={cartItems.length} />
      </header>
      <main className="main">
        {/* Additional shared styling here */}

        <Switch>
          <Route exact path="/" render={() => <Home />} />
          <Route
            exact
            path="/cart"
            render={() => (
              <Cart
                items={cartItems}
                handleChange={handleQuantityChange}
                removeItem={removeProductFromCart}
                increaseQuantity={increaseQuantity}
                decreaseQuantity={decreaseQuantity}
              />
            )}
          />
          <Route
            exact
            path="/shop"
            render={() => <Shop products={products} addToCart={addProductToCart} />}
          />
        </Switch>
      </main>
    </div>
  );
}

export default App;
