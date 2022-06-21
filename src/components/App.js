import React from 'react';
import './App.css';
import WishListView from './WishListView';

const App = ({ wishlist }) => {
  return (
    <WishListView wishlist={wishlist} /> 
  );
}

export default App;