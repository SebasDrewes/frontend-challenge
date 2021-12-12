import { createRouter, createWebHistory } from "vue-router";
import Activities from "@/views/Activities.vue";
import ActivitiesDetails from "@/views/ActivitiesDetails.vue";

const routes = [
  {
    path: "/actividades",
    name: "Activities",
    component: Activities,
  },
  {
    path: "/actividades/:id",
    name: "ActivitiesDetails",
    component: ActivitiesDetails,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
