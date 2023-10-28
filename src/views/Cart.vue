<template>
  <div class="cart">
    <h2>Koszyk</h2>
    <div v-for="(item, index) in data" :key="index" v-if="item.inCart">
      {{ item.title }} - {{ item.quantity }} szt. za
      {{ item.price * item.quantity }} zł
    </div>
    <div>
      <strong>Całkowita cena: {{ cartTotal }} zł</strong>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";

const data = ref([
  // ... (twoje dane)
]);

const cartTotal = computed(() => {
  return data.value.reduce((acc, item) => {
    if (item.inCart) {
      acc += parseFloat(item.price) * item.quantity;
    }
    return acc;
  }, 0);
});
</script>

<style scoped>
/* ... (style) */
</style>
