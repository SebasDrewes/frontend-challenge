import { createRouter, createWebHistory } from "vue-router";
import Activities from "@/views/Activities.vue";
import ActivityDetails from "@/views/ActivityDetails.vue";

const routes = [
  {
    path: "/actividades",
    name: "Activities",
    component: Activities,
  },
  {
    path: "/actividades/:id",
    name: "ActivityDetails",
    component: ActivityDetails,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
