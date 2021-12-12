import { createRouter, createWebHistory } from "vue-router";
import Activities from "@/views/Activities.vue";

const routes = [
  {
    path: "/actividades",
    name: "Activities",
    component: Activities,
  },
  {
    path: "/actividades/:id",
    name: "ActivityDetails",
    component: () => import("@/views/ActivityDetails.vue"),
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
