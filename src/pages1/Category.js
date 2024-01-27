// pages/Category.js

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';

const Category = ({ categories }) => {
  const { categoryId } = useParams();
  const { cart, dispatch } = useCart();
  const [products, setProducts] = useState([]);
  const [showDelivery, setShowDelivery] = useState(false);

  // Fetch products based on categoryId and display them
  useEffect(() => {
    // Replace this with your actual API call or data fetching logic
    const fetchData = async () => {
      try {
        // Mock API call to fetch products based on categoryId
        const response = await fetch(`/api/products?categoryId=${categoryId}`);
        const data = await response.json();
        setProducts(data.products);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchData();
  }, [categoryId]);

  const addToCart = (product) => {
    dispatch({ type: 'ADD_TO_CART', payload: product });
  };

  const handleFilterChange = () => {
    setShowDelivery(!showDelivery);
  };

  // Apply filter based on checkbox state
  const filteredProducts = showDelivery
    ? products.filter((product) => product.delivery)
    : products;

  return (
    <div>
      <h1>Category Page</h1>
      <label>
        <input type="checkbox" checked={showDelivery} onChange={handleFilterChange} />
        Show Delivery Only
      </label>
      <div>
        {/* Display products */}
        {filteredProducts.map((product) => (
          <div key={product.id}>
            <h3>{product.name}</h3>
            <p>${product.price}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
