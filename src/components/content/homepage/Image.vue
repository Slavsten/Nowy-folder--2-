<script setup>
defineProps({
  title: {
    type: String,
    default: () => "",
  },
  price: {
    type: String,
    default: () => "",
  },
  imgLink: {
    type: String,
    default: () => "",
  },
});
</script>

<template>
  <div class="image-container">
    <div class="homepage-img">
      <img :src="imgLink" />
    </div>
    <div class="text-container">
      <h2>{{ title }}</h2>
      <p>Cena: {{ price }}</p>
    </div>
  </div>
</template>

<style scoped>
.homepage-img {
  width: 10dvh;
}

img {
  width: 16vh;
  height: auto;
  border-radius: 5%;
  border-style: solid;
}

span {
  color: black;
  font-weight: bold;
}
</style>
