import { createRouter, createWebHistory } from "vue-router";
import Activities from "../views/Activities.vue";

const routes = [
  {
    path: "/",
    name: "Activities",
    component: Activities,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
