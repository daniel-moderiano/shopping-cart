import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home">
      <h1 className="home__title">Home</h1>
      <Link to="/shop">Shop now</Link>
    </div>
  )
}

export default Home;
