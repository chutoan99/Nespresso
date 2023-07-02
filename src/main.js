import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index.js";
console.log(router, "router");
const app = createApp(App);
app.use(router);
app.mount("#app");
