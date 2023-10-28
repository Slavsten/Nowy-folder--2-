import { createStore } from "vuex";

export default createStore({
  state: {
    cart: {
      items: [],
      total: 0,
    },
  },
  mutations: {
    addToCart(state, item) {
      const existingItem = state.cart.items.find(
        (cartItem) => cartItem.id === item.id
      );

      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.cart.items.push({ ...item, quantity: 1 });
      }

      state.cart.total += item.price;
    },
    removeFromCart(state, item) {
      const index = state.cart.items.findIndex(
        (cartItem) => cartItem.id === item.id
      );

      if (index !== -1) {
        const removedItem = state.cart.items.splice(index, 1)[0];
        state.cart.total -= removedItem.price * removedItem.quantity;
      }
    },
  },
  actions: {},
  modules: {},
});
