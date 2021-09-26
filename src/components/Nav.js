import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
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
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
