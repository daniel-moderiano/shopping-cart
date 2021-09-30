import './styles/App.css';
import './styles/reset.css';

import Nav from './components/Nav';
import { Switch, Route } from 'react-router';
import Home from './components/Home';
import Cart from './components/Cart';
import Shop from './components/Shop';
import { nanoid } from 'nanoid';
import { useState } from 'react';

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

function App() {

  // The base array of products sold on the store. These product objects can be passed to the cart array to allow re-use of the properties
  const [products, setProducts] = useState([
    {
      name: 'Magic Carpfin',
      price: 40.00,
      img: '',
      id: nanoid(),
      quantity: 1,
      img: carpfin,
    },
    {
      name: 'Recess Diplomat',
      price: 48.00,
      img: '',
      id: nanoid(),
      quantity: 1,
      img: diplomat,
    },
    {
      name: 'YoYoFactory SuperStar',
      price: 70.00,
      img: '',
      id: nanoid(),
      quantity: 1,
      img: superstar,
    },
    {
      name: 'YoYoFactory Replay',
      price: 15.00,
      img: '',
      id: nanoid(),
      quantity: 1,
      img: replay,
    },
    {
      name: 'YoYo King Ghost',
      price: 25.00,
      img: '',
      id: nanoid(),
      quantity: 1,
      img: ghost,
    },
    {
      name: 'YoYo King Watcher',
      price: 20.00,
      img: '',
      id: nanoid(),
      quantity: 1,
      img: watcher,
    },
    {
      name: 'YoYoFactory Boss',
      price: 25.00,
      img: '',
      id: nanoid(),
      quantity: 1,
      img: boss,
    },
    {
      name: 'YoYoFactory Grind Machine',
      price: 40.00,
      img: '',
      id: nanoid(),
      quantity: 1,
      img: grind,
    },
    {
      name: 'Duncan Barracuda',
      price: 40.00,
      img: '',
      id: nanoid(),
      quantity: 1,
      img: barracuda,
    },
    {
      name: 'Magic April',
      price: 40.00,
      img: '',
      id: nanoid(),
      quantity: 1,
      img: april,
    },
    {
      name: 'One Drop Burnside',
      price: 95.00,
      img: '',
      id: nanoid(),
      quantity: 1,
      img: burnside,
    },
    {
      name: 'Vosun Galsang',
      price: 65.00,
      img: '',
      id: nanoid(),
      quantity: 1,
      img: galsang,
    },
  ]);

  // When a user clicks 'add to cart' on a product in the shop screen, that product will be pushed to this items array, where the quantity may be modified in the cart screen
  const [cartItems, setCartItems] = useState([]);

  const isItemInCart = (productId) => {
    return cartItems.some((item) => item.id === productId);
  };

  const increaseQuantity = (productId) => {

    // Find only the cart item that macthes the product ID given, and increment quantity for that item only
    const newCartItems = cartItems.map((item) => {
      if (item.id === productId) {
        item.quantity++;
      }
      return item;
    });
    
    setCartItems(newCartItems);
  }

  const decreaseQuantity = (productId) => {
    // Find only the cart item that macthes the product ID given, and decrement quantity for that item only
    const newCartItems = cartItems.map((item) => {
      if (item.id === productId) {
        item.quantity--;
      }
      return item;
    });
    
    setCartItems(newCartItems);
  };

  const setQuantity = (cartItemId, desiredQuantity) => {
    const newCartItems = cartItems.map((item) => {
      if (item.id === cartItemId) {
        item.quantity = desiredQuantity;
      }
      return item;
    });
    setCartItems(newCartItems);
  }

  const handleQuantityChange = (event, cartItem) => {
    const desiredQuantity = parseInt(event.target.value);
    setQuantity(cartItem.id, desiredQuantity);
  };

  const addProductToCart = (product) => {
    // Establish whether the item exists in the cart
    if (!isItemInCart(product.id)) {
      // Add item to cart
      setCartItems([ ...cartItems,  product]);
    } else {
      increaseQuantity(product.id);
    }
  };

  const removeProductFromCart = (product) => {
    const newCartItems = cartItems.filter((item) => item.id !== product.id);
    setCartItems(newCartItems);
  };


  return (
    <div className="App">
      <header className="header">
        <div className="logo">Logo</div>
        <Nav numItems={cartItems.length}/>
        <div className="hamburger">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </header>
      <main className="main">

        {/* Additional shared styling here */}

        <Switch>
          <Route path="/" exact render={() => <Home />}/>
          <Route path="/cart" render={() => <Cart items={cartItems} handleChange={handleQuantityChange} removeItem={removeProductFromCart}/>}/>
          <Route path="/shop" render={() => <Shop products={products} addToCart={addProductToCart}/>}/>
        </Switch>
      </main>
        
    </div>
  );
}

export default App;
