import { types, flow } from 'mobx-state-tree'

import { WishList } from './WishList'

const User = types
.model({
    id: types.string,
    name: types.string,
    // gender: types.union(types.literal('m'), types.literal('f'))
    gender: types.enumeration('gender', ['m', 'f']),
    wishlist: types.optional(WishList, {})
})
.actions(self => ({
    // life cycle hook
    afterCreate() {},
    beforeDestroy() {},

    // async function "flow"
    getSuggestions: flow(function*() {
        const res = yield window.fetch('url')
        const suggestions = yield res.json();
        self.wishlist.items.push(...suggestions)
    })
}))

export const Group = types.modal({
    users: types.map(User)
})