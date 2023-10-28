<template>
  <div class="form-container">
    <h2 class="form-title">Rejestracja</h2>
    <form @submit.prevent="register" class="registration-form">
      <div class="form-group">
        <label for="newUsername" class="form-label"
          >Nowa nazwa użytkownika:</label
        >
        <input type="text" v-model="newUsername" required class="form-input" />
      </div>

      <div class="form-group">
        <label for="newPassword" class="form-label">Nowe hasło:</label>
        <input
          type="password"
          v-model="newPassword"
          required
          class="form-input"
        />
      </div>

      <button type="submit" class="form-button">Zarejestruj się</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      newUsername: "",
      newPassword: "",
    };
  },
  methods: {
    register() {
      // Wysyłanie żądania rejestracji do json-server
      axios
        .post("http://localhost:3000/register", {
          username: this.newUsername,
          password: this.newPassword,
        })
        .then((response) => {
          // Obsługa poprawnej odpowiedzi - np. przekierowanie do strony logowania
          console.log("Zarejestrowano pomyślnie:", response.data);
        })
        .catch((error) => {
          // Obsługa błędów - np. wyświetlenie komunikatu o błędzie rejestracji
          console.error("Błąd rejestracji:", error);
        });
    },
  },
};
</script>

<style scoped>
/* Stylizacja formularza rejestracji */
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
