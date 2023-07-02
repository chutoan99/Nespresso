import { createRouter, createWebHistory } from "vue-router";

// Import your components for each route
import HomePage from "../pages/home.vue";
import LoginPage from "../pages/login.vue";
import IndexPage from "../pages/index.vue";

const routes = [
  { path: "/", component: IndexPage },
  { path: "/home", component: HomePage },
  { path: "/login", component: LoginPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes, // Verify that the routes array is correctly passed
});
export default router;
