<template>
  <div class="cart-view">
    <h2>Twój koszyk</h2>
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
import { ref } from "vue";
import { data } from "@/data"; // Zaimportuj dane z odpowiedniego pliku lub API

const cartItems = ref(data.value.filter((item) => item.inCart));

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
.cart-view {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
}

.cart-view h2 {
  font-size: 24px;
  margin-bottom: 20px;
}

.cart-view div {
  margin-bottom: 10px;
}

.cart-view button {
  background-color: #ff4500;
  color: white;
  border: none;
  padding: 8px 16px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.cart-view button:hover {
  background-color: #ff5722;
}
.homepage-img {
  width: 10dvh;
}
.image-container {
  display: flex;
  align-items: center; /* Ustawienie obrazu i tekstu na środku w pionie */
  margin-bottom: 20px;
}

.text-container {
  margin-left: 20%; /* Odległość między obrazem a tekstem */
}

/* Dodatkowe style dla nagłówka i tekstu, jeśli są wymagane */
.text-container h2 {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 5px;
}

.text-container p {
  font-size: 14px;
  color: rgb(0, 0, 0);
}

img {
  width: 16vh;
  height: auto;
  border-radius: 5%;
  border-style: solid;
  border-color: black;
}

span {
  color: black;
  font-weight: bold;
}
.wrapper {
  background: linear-gradient(
    60deg,
    rgba(255, 255, 255, 0.3),
    rgba(255, 255, 255, 0.5)
  );
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  list-style-type: none;
  padding: 15vh;
  box-shadow: 0 0 43px 2px rgba(0, 0, 0, 0.8);
  box-sizing: border-box;
}
</style>
