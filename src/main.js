import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";

import Home from "./pages/Home.vue";
import Products from "./pages/Products.vue";
import About from "./pages/About.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/products",
    component: Products,
  },
  {
    path: "/about",
    component: About,
  },
  {
    path: "/",
    component: Home,
  },
];

const router = createRouter({
  routes: routes,
  history: createWebHistory(),
});

createApp(App).use(router).mount("#app");
