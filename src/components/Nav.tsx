import { useEffect } from 'react';
import { Link } from 'react-router-dom';

interface NavProps {
  numItems: number;
}

const Nav = ({ numItems }: NavProps) => {

  useEffect(() => {
    const hamburger = document.querySelector(".hamburger") as HTMLDivElement;
    const navMenu = document.querySelector(".nav__list") as HTMLSpanElement;

    hamburger.addEventListener("click", mobileMenu);

    function mobileMenu() {
      hamburger.classList.toggle("active");
      navMenu.classList.toggle("active");
    }

    const navLink = document.querySelectorAll(".nav__link");

    navLink.forEach(n => n.addEventListener("click", closeMenu));

    function closeMenu() {
      hamburger.classList.remove("active");
      navMenu.classList.remove("active");
    }
  }, []);

  return (
    <nav className="nav">
      <Link to="/" className="nav__title" onClick={() => window.scrollTo(0, 0)}>Throw</Link>
      <ul className="nav__list">
        <li className="nav__list-item">
          <Link className="nav__link" to="/" onClick={() => window.scrollTo(0, 0)}>Home</Link>
        </li>
        <li className="nav__list-item">
          <Link className="nav__link" to="/shop" onClick={() => window.scrollTo(0, 0)}>Shop</Link>
        </li>
        <li className="nav__list-item nav__cart">
          <Link className="nav__link" to="/cart" onClick={() => window.scrollTo(0, 0)}>Cart</Link>
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
