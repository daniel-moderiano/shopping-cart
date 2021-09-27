import './styles/App.css';
import Nav from './components/Nav';
import Main from './components/Main';
import { Switch, Route } from 'react-router';
import Home from './components/Home';
import Cart from './components/Cart';
import Shop from './components/Shop';
import { nanoid } from 'nanoid';
import { useState } from 'react';

function App() {

  // The base array of products sold on the store. These product objects can be passed to the cart array to allow re-use of the properties
  const [products, setProducts] = useState([
    {
      name: 'Magic Carpfin',
      price: 40.00,
      img: '',
      id: nanoid(),
    },
    {
      name: 'Recess Diplomat',
      price: 48.00,
      img: '',
      id: nanoid(),
    },
    {
      name: 'YoYoFactory SuperStar',
      price: 70.00,
      img: '',
      id: nanoid(),
    },
    {
      name: 'YoYoFactory Replay',
      price: 15.00,
      img: '',
      id: nanoid(),
    },
    {
      name: 'YoYo King Ghost',
      price: 25.00,
      img: '',
      id: nanoid(),
    },
    {
      name: 'YoYo King Watcher',
      price: 20.00,
      img: '',
      id: nanoid(),
    },
    {
      name: 'YoYoFactory Boss',
      price: 25.00,
      img: '',
      id: nanoid(),
    },
    {
      name: 'YoYoFactory Grind Machine',
      price: 40.00,
      img: '',
      id: nanoid(),
    },
    {
      name: 'Duncan Barracuda',
      price: 40.00,
      img: '',
      id: nanoid(),
    },
    {
      name: 'Magic April',
      price: 40.00,
      img: '',
      id: nanoid(),
    },
    {
      name: 'One Drop Burnside',
      price: 95.00,
      img: '',
      id: nanoid(),
    },
    {
      name: 'Vosun Galsang',
      price: 65.00,
      img: '',
      id: nanoid(),
    },
  ]);

  // When a user clicks 'add to cart' on a product in the shop screen, that product will be pushed to this items array, where the quantity may be modified in the cart screen
  const [cartItems, setCartItems] = useState([]);

  const addProductToCart = (product) => {
    setCartItems([ ...cartItems,  product]);
  }


  return (
    <div className="App">
      <Nav />
      <Main>

        {/* Additional shared styling here */}

        <Switch>
          <Route path="/" exact render={() => <Home />}/>
          <Route path="/cart" render={() => <Cart items={cartItems}/>}/>
          <Route path="/shop" render={() => <Shop products={products} addToCart={addProductToCart}/>}/>
        </Switch>
      </Main>
    </div>
  );
}

export default App;
