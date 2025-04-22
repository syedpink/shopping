import React, { useState } from 'react';
import './App.css';
import ProductCard from './compononts/ProductCard';
import Cart from './compononts/Card';
import sht from './assets/sht.jpg';
import shoe from './assets/shoe.jpg';
import backpack from './assets/backpack.jpg';
import pant from './assets/pant.jpg';
import shh from './assets/shh.jpg';
import maxi from './assets/maxi.jpg';
import sandals from './assets/sandals.jpg';
import travelbag from './assets/travelbag.jpg'
import frock from './assets/frock.jpg'
import nighty from './assets/nighty.jpg'
import kwear from './assets/kwear.webp'
import kids from './assets/kids.webp'

const products = [
  {
    id: 1,
    name: 'Sandal',
    price: 69.99,
    image: sandals
  },
  
  {
    id: 2,
    name: 'Running Shoes',
    price: 49.99,
    image: shoe
  },
  {
    id: 3,
    name: 'Stylish Backpack',
    price: 39.99,
    image: backpack
  },
  {
    id: 4,
    name: 'Party Wear',
    price: 49.99,
    image: nighty
  },
  {
    id: 5,
    name: 'kids Wear',
    price: 79.89,
    image: kids
  },{
    id: 6,
    name: 'kids suit',
    price: 29.99,
    image: kwear
  },
  {
    id: 7,
    name: 'Travel Bag',
    price: 99.99,
    image: travelbag
  },
  {
    id: 8,
    name: 'Pant',
    price: 89.99,
    image: pant
  },
  {
    id: 9,
    name: 'Maxi',
    price: 89.99,
    image: maxi
  },
  {
    id: 10,
    name: 'Classic T-Shirt',
    price: 19.99,
    image: sht
  },
    {
      id: 11,
      name: 'Shirt',
      price: 69.99,
      image: shh
    },
    {
      id: 12,
      name: 'Frock',
      price: 79.99,
      image: frock
    },
];
function App() {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
  };
  



  return (
    <div className="App">
      <h1>JAMILU.IN</h1>
      
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} onAddToCart={handleAddToCart} />
        ))}
      </div>
      <Cart cart={cart} />
    </div>
  );
}

export default App;
