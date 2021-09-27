import React, { useState } from 'react';
import ShopCard from './ShopCard';

const Shop = () => {

  const [products, setProducts] = useState([
    {
      product: 'Magic Carpfin',
      price: 40.00,
      img: '',
    },
    {
      product: 'Recess Diplomat',
      price: 48.00,
      img: '',
    },
    {
      product: 'YoYoFactory SuperStar',
      price: 70.00,
      img: '',
    },
    {
      product: 'YoYoFactory Replay',
      price: 15.00,
      img: '',
    },
    {
      product: 'YoYo King Ghost',
      price: 25.00,
      img: '',
    },
    {
      product: 'YoYo King Watcher',
      price: 20.00,
      img: '',
    },
    {
      product: 'YoYoFactory Boss',
      price: 25.00,
      img: '',
    },
    {
      product: 'YoYoFactory Grind Machine',
      price: 40.00,
      img: '',
    },
    {
      product: 'Duncan Barracuda',
      price: 40.00,
      img: '',
    },
    {
      product: 'Magic April',
      price: 40.00,
      img: '',
    },
    {
      product: 'One Drop Burnside',
      price: 95.00,
      img: '',
    },
    {
      product: 'Vosun Galsang',
      price: 65.00,
      img: '',
    },

  ]);

  return (
    <div>
      <h1>Shop</h1>
      <h2>Advanced Yo-Yos</h2>
      <ShopCard />
      <ShopCard />
      <ShopCard />
      <ShopCard />
    </div>
  );
}

export default Shop;
