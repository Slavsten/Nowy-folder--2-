<template>
  <div id="app">
    <TopBar />
    <router-link to="/login">Logowanie</router-link>
    <router-link to="/register">Rejestracja</router-link>

    <router-view></router-view>
  </div>
</template>

<script setup>
import { RouterView } from "vue-router";
import TopBar from "@/components/menu/TopBar.vue";
</script>

<style scoped></style>
