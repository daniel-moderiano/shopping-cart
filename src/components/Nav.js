import React from 'react';
import { Link } from 'react-router-dom';

const Nav = ({ numItems }) => {
  return (
    <nav className="nav">
      <div className="logo">Logo</div>
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
      <div className="hamburger">
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </nav>
  );
}

export default Nav;
