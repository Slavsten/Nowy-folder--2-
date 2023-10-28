<script setup>
import { ref } from "vue";
import Wrapper from "@/components/content/wrapper/Wrapper.vue";
import Image from "@/components/content/homepage/Image.vue";

const data = ref([]);

data.value = [
  {
    id: 1,
    title: "APARAT NIKON",
    price: "2500zł/doba",
    img: "https://th.bing.com/th/id/R.602a52eb551a04f920023f6ff8eb58b0?rik=23HcK9W6WlopNQ&pid=ImgRaw&r=0",
  },
  {
    id: 2,
    title: "APARAT LUMIX",
    price: "2500/doba",
    img: "https://th.bing.com/th/id/OIP.IoJz4IsNPOvPT37-QBU7qwHaFw?w=246&h=191&c=7&r=0&o=5&pid=1.7",
  },

  {
    id: 3,
    title: "APARAT CANON",
    price: "2500/doba",
    img: "https://fotografiadlaciekawych.pl/wp-content/uploads/2019/08/uzywany-aparat-fotograficzny-eos7dmark2-190803_5889_1000px.jpg",
  },

  {
    id: 4,
    title: "APARAT MEDION",
    price: "2500/doba",
    img: "https://a.allegroimg.com/s1024/0ce913/de5df1dd4362922e189fe3dc71d7",
  },

  {
    id: 5,
    title: "APARAT OLYMPUS",
    price: "2500/doba",
    img: "https://th.bing.com/th/id/OPE.orEeTsbJ90aDZw300C300?pid=21.1&w=160&h=150",
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

<style scoped></style>
