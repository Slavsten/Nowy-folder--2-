<template>
  <header>
    <div class="wrapper top-bar">
      <nav>
        <RouterLink to="/home" class="nav-link">Home</RouterLink>
        <RouterLink to="/about" class="nav-link">O nas</RouterLink>
        <RouterLink to="/contact" class="nav-link">Kontakt</RouterLink>
        <RouterLink to="/Cart" class="nav-link">Koszyk</RouterLink>
        <router-link to="/login" class="nav-link">Logowanie</router-link>
        <router-link to="/register" class="nav-link">Rejestracja</router-link>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { RouterLink } from "vue-router";
</script>

<style scoped>
header {
  padding: 10px;
  display: flex;
  justify-content: space-between;
  box-shadow: 0 0 60px -24px rgba(66, 68, 90, 1);
}
.top-bar {
  display: inherit;
  justify-content: center;
  width: 100%;
}

.nav-link {
  color: white;
  text-decoration: none;
  margin: 0 10px;
  font-weight: bolder;
}

.nav-link:hover {
  background-color: white;
  color: rgb(0, 0, 0);
  font-weight: bolder;
  padding: 5px 10px;
  border-radius: 5px;
}
</style>
