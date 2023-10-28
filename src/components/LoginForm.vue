<template>
  <div class="form-container">
    <h2 class="form-title">Logowanie</h2>
    <form @submit.prevent="login" class="login-form">
      <div class="form-group">
        <label for="username" class="form-label">Nazwa użytkownika:</label>
        <input type="text" v-model="username" required class="form-input" />
      </div>

      <div class="form-group">
        <label for="password" class="form-label">Hasło:</label>
        <input type="password" v-model="password" required class="form-input" />
      </div>

      <button type="submit" class="form-button">Zaloguj się</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    login() {
      axios
        .post("http://localhost:3000/login", {
          username: this.username,
          password: this.password,
        })
        .then((response) => {
          console.log("Zalogowano pomyślnie:", response.data);
        })
        .catch((error) => {
          console.error("Błąd logowania:", error);
        });
    },
  },
};
</script>

<style scoped>
.form-container {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.form-title {
  font-size: 24px;
  margin-bottom: 10px;
}

.form-group {
  margin-bottom: 15px;
}

.form-label {
  font-weight: bold;
  font-size: 16px;
  color: #333;
}

.form-input {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.form-button {
  background-color: #4caf50;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 5px;
  font-size: 18px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.form-button:hover {
  background-color: #45a049;
}
</style>
