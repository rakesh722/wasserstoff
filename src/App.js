// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { CartProvider } from './contexts/CartContext';
import Home from './pages/Home';
import Category from './pages/Category';
import Checkout from './pages/Checkout';

function App() {
  // Define the list of categories
  const categories = [
    { id: 1, name: 'Category 1' },
    { id: 2, name: 'Category 2' },
    // Add other categories as needed
  ];

  return (
    <Router>
      <CartProvider>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route
            path="/category/:categoryId"
            component={(props) => <Category {...props} categories={categories} />}
          />
          <Route path="/checkout" component={Checkout} />
        </Switch>
      </CartProvider>
    </Router>
  );
}

export default App;


