import React from 'react';
import { Link } from 'react-router-dom';

const Nav = ({ numItems }) => {
  return (
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__list-item">
          <Link className="nav__link" to="/">Home</Link>
        </li>
        <li className="nav__list-item">
          <Link className="nav__link" to="/shop">Shop</Link>
        </li>
        <li className="nav__list-item">
          <Link className="nav__link" to="/cart">Cart</Link>
          <div className="nav__num-items">{numItems}</div>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
