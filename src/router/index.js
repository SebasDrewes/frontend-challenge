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
  {
    path: "/:catchAll(.*)",
    name: "actividades",
    component: Activities,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior() {
    return { left: 0, top: 0, behavior: "smooth" };
  },
});

export default router;
