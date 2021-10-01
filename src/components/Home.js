import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home">
      <h1 className="home__subtitle">Welcome to</h1>
      <h2 className="home__title">Throw</h2>

      <Link to="/shop" className="home__link">Shop now</Link>
    </div>
  )
}

export default Home;
