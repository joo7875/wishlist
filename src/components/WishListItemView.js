import React, { useState } from 'react';
import { observer } from 'mobx-react';
import { clone } from 'mobx-state-tree';

import WishListItemEdit from './WishListItemEdit';

const WishListItemView = ({ item }) => {

    let [edit, setEdit] = useState(true);

    const onToggleEdit = () => setEdit(false);
    const onCancelEdit = () => setEdit(true);

    const renderEditable = () => {
        return (
            <li className='item'>
                <WishListItemEdit item={item} />
                <button onClick={onCancelEdit}>Cancel</button>
            </li>
        );
    }

    return (
        edit ? <li className='item'>
            {item.image && <img alt={item.image} src={item.image} />}
            <h3>{item.name}</h3>
            <span>{item.price}</span>
            <button onClick={onToggleEdit}>Edit</button>
            <button onClick={item.remove}>Delete</button>
        </li>
        : renderEditable()
    );

}

export default observer(WishListItemView);