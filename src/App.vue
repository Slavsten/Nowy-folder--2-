<template>
  <div id="app">
    <TopBar />

    <router-view></router-view>
  </div>
</template>

<script setup>
import { RouterView } from "vue-router";
import TopBar from "./components/menu/TopBar.vue";
</script>

<style scoped>
/* Stylizacja komponentów, jeśli jest wymagana */
</style>
