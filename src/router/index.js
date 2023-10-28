import { createRouter, createWebHistory } from "vue-router";
import StartView from "../views/StartView.vue";
import ContactView from "../views/ContactView.vue";
import AboutView from "../views/AboutView.vue";
import CartView from "../views/CartView.vue";

const routes = [
  {
    path: "/home",
    name: "home",
    component: StartView,
  },
  {
    path: "/contact",
    name: "contact",
    component: ContactView,
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
  },
  {
    path: "/cart",
    name: "cart",
    component: CartView,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
