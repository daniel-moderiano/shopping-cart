import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Nav = ({ numItems }) => {

  useEffect(() => {
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav__list");

    hamburger.addEventListener("click", mobileMenu);

    function mobileMenu() {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
    }

    // const navLink = document.querySelectorAll(".nav-link");

    // navLink.forEach(n => n.addEventListener("click", closeMenu));

    // function closeMenu() {
    //     hamburger.classList.remove("active");
    //     navMenu.classList.remove("active");
    // }
  }, []);
  
  return (
    <nav className="nav">
      <div className="nav__logo">Throw</div>
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
