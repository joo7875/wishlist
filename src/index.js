import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';

import { onSnapshot } from 'mobx-state-tree';

import { WishList } from './models/WishList';

let initialState = {
  items: [
    {
        name: "LEGO Mindstorms EV3",
        price: 349.95,
        image: "https://images-na.ssl-images-amazon.com/images/I/71CpQw%2BufNL._SL1000_.jpg"
    },
    {
        name: "Miracles - C.S. Lewis",
        price: 12.91,
        image:
            "https://images-na.ssl-images-amazon.com/images/I/51a7xaMpneL._SX329_BO1,204,203,200_.jpg"
    }
  ]
}

if (localStorage.getItem('wishlist')) {
  const json = JSON.parse(localStorage.getItem('wishlist'))
  if (WishList.is(json)) initialState = json
}

const list = WishList.create(initialState)

// localstorage
onSnapshot(list, snapshot => {
  localStorage.setItem('wishlist', JSON.stringify(snapshot))
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App wishlist={list} />
  </React.StrictMode>
);

setInterval(() => {
  list.items[0].changePrice(list.items[0].price + 1)
}, 1000)