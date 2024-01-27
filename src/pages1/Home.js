// pages/Home.js

import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavBar = styled.nav`
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
`;

const Home = () => {
  // Define the list of categories
  const categories = [
    { id: 1, name: 'Category 1' },
    { id: 2, name: 'Category 2' },
    // Add other categories as needed
  ];

  return (
    <div>
      <h1>Home Page</h1>
      <NavBar>
        {categories.map((category) => (
          <Link key={category.id} to={`/category/${category.id}`}>
            <div>
              <img src={`/images/category${category.id}.jpg`} alt={category.name} />
              <p>{category.name}</p>
            </div>
          </Link>
        ))}
      </NavBar>
    </div>
  );
};

export default Home;


