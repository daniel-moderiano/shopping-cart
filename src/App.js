import './styles/App.css';
import Nav from './components/Nav';
import Main from './components/Main';
import { Switch, Route } from 'react-router';
import Home from './components/Home';
import Cart from './components/Cart';
import Shop from './components/Shop';

function App() {
  return (
    <div className="App">
      <Nav />
      <Main>

        {/* Additional shared styling here */}

        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/cart" component={Cart}/>
          <Route path="/shop" component={Shop}/>
        </Switch>
      </Main>
    </div>
  );
}

export default App;
