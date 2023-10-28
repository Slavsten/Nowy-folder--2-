import { reactive } from "vue";

export const cart = reactive({
  items: [],
  total: 0,
});

export function addToCart(item) {
  const existingItem = cart.items.find((cartItem) => cartItem.id === item.id);

  if (existingItem) {
    existingItem.quantity++;
  } else {
    cart.items.push({ ...item, quantity: 1 });
  }

  cart.total += item.price;
}

export function removeFromCart(item) {
  const index = cart.items.findIndex((cartItem) => cartItem.id === item.id);

  if (index !== -1) {
    const removedItem = cart.items.splice(index, 1)[0];
    cart.total -= removedItem.price * removedItem.quantity;
  }
}

export function increaseQuantity(item) {
  const existingItem = cart.items.find((cartItem) => cartItem.id === item.id);

  if (existingItem) {
    existingItem.quantity++;
    cart.total += existingItem.price;
  }
}

export function decreaseQuantity(item) {
  const existingItem = cart.items.find((cartItem) => cartItem.id === item.id);

  if (existingItem && existingItem.quantity > 1) {
    existingItem.quantity--;
    cart.total -= existingItem.price;
  }
}
