import React, { useState } from 'react';
import ShopCard from './ShopCard';
import { nanoid } from 'nanoid';

const Shop = () => {

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

  return (
    <div>
      <h1>Shop</h1>
      <h2>Advanced Yo-Yos</h2>
      {products.map((product) => (
        <ShopCard 
          key={product.id}
          name={product.name} 
          price={product.price} 
        />
      ))}
    </div>
  );
}

export default Shop;
