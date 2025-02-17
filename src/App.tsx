import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

function App() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    console.log('Starting to fetch data...');
    // Change this line:
    axios.get<Product[]>('https://simple-shop-backend-production.up.railway.app/api/products')  //ANY instance of your frontend (local or Vercel) to get data from Railway.
      .then(response => {
        console.log('Data received:', response.data);
        setProducts(response.data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []);

  return (
    <div>
      <h1>Simple Shop</h1>
      <div>
        {products.map(product => (
          <div key={product.id} style={{ margin: '10px', padding: '10px', border: '1px solid #ddd' }}>
            <h3>{product.name}</h3>
            <p>Price: ${product.price}</p>
            <p>{product.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;