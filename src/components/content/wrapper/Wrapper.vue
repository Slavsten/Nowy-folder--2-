<script setup></script>

<template>
  <div class="wrapper">
    <slot></slot>
  </div>
</template>

<style scoped>
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
