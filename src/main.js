import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";
import "./style.css";
import './registerServiceWorker'

createApp(App).use(router).use(store).mount("#app");
