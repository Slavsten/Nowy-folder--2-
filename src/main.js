import "./assets/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import { cart } from "./stores/cart";
import router from "./router";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.config.globalProperties.$cart = cart;

app.mount("#app");
