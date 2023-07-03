import { createRouter, createWebHistory } from "vue-router";

// Import your components for each route
import pageNotFoundPage from "../pages/pageNotFound.vue";
import AboutUsPage from "../pages/about-us.vue";
import AccountPage from "../pages/account.vue";
import StoreLocationPage from "../pages/store-location.vue";
import VerificationPage from "../pages/verification.vue";

const routes = [
  { path: "/pageNotFound", component: pageNotFoundPage },
  { path: "/about_us", component: AboutUsPage },
  { path: "/account", component: AccountPage },
  { path: "/store-location", component: StoreLocationPage },
  { path: "/verification", component: VerificationPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes, // Verify that the routes array is correctly passed
});
export default router;
