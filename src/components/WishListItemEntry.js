import React, { useState } from 'react';
import { observer } from 'mobx-react';

import WishListItemEdit from './WishListItemEdit';
import { WishListItem } from '../models/WishList';

const WishListItemEntry = ({ wishlist }) => {
    const [entry, setEntry] = useState(WishListItem.create({
        name: '',
        price: 0
    }))

    const onAdd = () => {
        wishlist.add(entry);
        setEntry(WishListItem.create({ name: '', price: 0 }));
    }

    return (
        <div>
            <WishListItemEdit item={entry} />
            <button onClick={onAdd}>Add</button>
        </div>
    )
}

export default WishListItemEntry;