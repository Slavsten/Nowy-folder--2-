<template>
  <div class="cart">
    <h2>Koszyk</h2>
    <div v-for="(item, index) in cartItems" :key="index">
      {{ item.title }} - {{ item.quantity }} szt. za
      {{ item.price * item.quantity }} zł
      <button @click="removeFromCart(item)">Usuń</button>
    </div>
    <div v-if="cartItems.length === 0">Koszyk jest pusty.</div>
    <div v-else>
      <strong>Całkowita cena: {{ cartTotal }} zł</strong>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";

const cartTotal = computed(() => {
  return cartItems.value.reduce((acc, item) => {
    acc += parseFloat(item.price) * item.quantity;
    return acc;
  }, 0);
});

const removeFromCart = (item) => {
  const index = cartItems.value.findIndex(
    (cartItem) => cartItem.id === item.id
  );
  if (index !== -1) {
    cartItems.value.splice(index, 1);
  }
};
</script>

<style scoped>
/* ... (style) */
</style>
