import { createRouter, createWebHistory } from "vue-router";
import LoanDetails from "../views/LoanDetails.vue";
import LoanList from "../views/LoanList.vue";

const routes = [
  { path: "/", component: LoanList },
  { path: "/loan/:id", name: "loan-details", component: LoanDetails },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
