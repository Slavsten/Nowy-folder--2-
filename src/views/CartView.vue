<template>
  <Wrapper>
    <h1>Koszyk</h1>
    <ul>
      <li v-for="item in cart.items" :key="item.id">
        {{ item.title }} - {{ item.quantity }} szt. za
        {{ item.price * item.quantity }} zł
        <button @click="handleRemoveFromCart(item)">Usuń</button>
      </li>
    </ul>
    <p>Łącznie: {{ cart.total }} zł</p>
  </Wrapper>
</template>

<script setup>
import { onMounted } from "vue";
import { cart, removeFromCart as cartRemoveFromCart } from "@/stores/cart";

onMounted(() => {
  console.log(cart.items);
});

function handleRemoveFromCart(item) {
  cartRemoveFromCart(item);
}
</script>

<style scoped></style>
