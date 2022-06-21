import { types, getParent, destroy } from 'mobx-state-tree';

export const WishListItem = types
.model({
    name: types.string,
    price: types.number,
    image: ''
})
.actions(self => ({
    changeName(newName) {
        self.name = newName
    },
    changePrice(newPrice) {
        self.price = newPrice
    },
    changeImage(newImage) {
        self.image = newImage
    },
    remove() {
        getParent(self, 2).remove(self) // 2번 위에 있는 parent
    }
}))

export const WishList = types
.model({
    items: types.optional(types.array(WishListItem), [])
})
.actions(self => ({
    add(item) {
        self.items.push(item)
    },
    remove(item) {
        destroy(item)
    }
}))
.views(self => ({
    get totalPrice() {
        return self.items.reduce((pre, cur) => pre + cur.price, 0)
    }
}))