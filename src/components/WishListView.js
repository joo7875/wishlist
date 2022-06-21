import React from 'react';
import { observer } from 'mobx-react';

import WishListItemView from './WishListItemView';
import WishListItemEntry from './WishListItemEntry';

const WishListView = ({ wishlist }) => (
    <div className='list'>
        <ul>{wishlist.items.map((item, idx) => <WishListItemView key={idx} item={item} />)}</ul>
        <div>Total: {wishlist.totalPrice}</div>
        <WishListItemEntry wishlist={wishlist} />
    </div>
)

export default observer(WishListView);