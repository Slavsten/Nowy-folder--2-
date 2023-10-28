<script setup>
import { ref } from "vue";
import Wrapper from "@/components/content/wrapper/Wrapper.vue";
import Image from "@/components/content/homepage/Image.vue";

const data = ref([]);

data.value = [
  {
    id: 1,
    title: "Meduza",
    price: "250zł/doba",
    img: "https://triverna.pl/uploads/album_1440/bc2cc816ef1d5bc14a07bbbb9103df3e07617b91.jpg",
  },
  {
    id: 2,
    title: "Hilton",
    price: "25000/doba",
    img: "https://triverna.pl/uploads/album_1440/bc2cc816ef1d5bc14a07bbbb9103df3e07617b91.jpg",
  },

  {
    id: 3,
    title: "Hilton",
    price: "25000/doba",
    img: "https://triverna.pl/uploads/album_1440/bc2cc816ef1d5bc14a07bbbb9103df3e07617b91.jpg",
  },

  {
    id: 4,
    title: "Hilton",
    price: "25000/doba",
    img: "https://triverna.pl/uploads/album_1440/bc2cc816ef1d5bc14a07bbbb9103df3e07617b91.jpg",
  },

  {
    id: 5,
    title: "Hilton",
    price: "25000/doba",
    img: "https://triverna.pl/uploads/album_1440/bc2cc816ef1d5bc14a07bbbb9103df3e07617b91.jpg",
  },

  {
    id: 6,
    title: "Hilton",
    price: "25000/doba",
    img: "https://triverna.pl/uploads/album_1440/bc2cc816ef1d5bc14a07bbbb9103df3e07617b91.jpg",
  },
];
data.value.forEach((item) => {
  item.isDisplayed = false;
});
</script>

<template>
  <wrapper>
    <div class="image-container" v-for="(item, index) in data" :key="index">
      <Image :img-link="item.img" :title="item.title" :price="item.price" />
    </div>
  </wrapper>
</template>

<script setup>
import { ref } from "vue";
import Wrapper from "@/components/content/wrapper/Wrapper.vue";
import Image from "@/components/content/homepage/Image.vue";

const data = ref([
  /* Twoje dane */
]);

data.value.forEach((item) => {
  item.isDisplayed = false;
});
</script>

<style scoped>
/* Dodaj tutaj style z komponentu Image.vue */
.image-container {
  display: flex;
  align-items: margin-left;
  margin-bottom: 20px;
}

.text-container {
  margin-left: 20px; /* Odległość między obrazem a tekstem */
}

/* Dodatkowe style dla nagłówka i tekstu, jeśli są wymagane */
.text-container h2 {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 5px;
}

.text-container p {
  font-size: 14px;
  color: gray;
}
</style>
