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
.image-container {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.text-container {
  margin-left: 20%;
}

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
</style>
