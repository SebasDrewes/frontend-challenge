<template>
  <div>
    <h1 class="similarActivitiesTitle">Otras actividades similares:</h1>
    <vueper-slides
      class="similarActivitiesCarousel no-shadow"
      fade
      :visible-slides="4"
      fixed-height="400px"
      :bullets="false"
      slide-multiple
      arrowsOutside
      disable-arrows-on-edges
      :breakpoints="carouselBreakpoints"
    >
      <template #arrow-left>
        <img src="@/assets/blackLeftArrow.svg" />
      </template>
      <template #arrow-right>
        <img src="@/assets/blackRightArrow.svg" />
      </template>
      <vueper-slide v-for="activity in similarActivitesData" :key="activity.id">
        <template v-slot:content>
          <ActivityItem :activity="activity" :small="true" />
        </template>
      </vueper-slide>
    </vueper-slides>
  </div>
</template>

<script setup>
import ActivityItem from "./ActivityItem.vue";
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";
import { useRoute } from "vue-router";
import { ref, onMounted, watch } from "vue";
import { randomActivities } from "@/api";
const route = useRoute();
const similarActivitesData = ref([]);
const carouselBreakpoints = {
  1200: {
    visibleSlides: 3,
  },
  1000: {
    visibleSlides: 2,
  },
  780: {
    visibleSlides: 1,
  },
};
async function fetchActivityData() {
  const activityData = await randomActivities(8);
  similarActivitesData.value = activityData;
}
onMounted(fetchActivityData());
watch(
  () => route.params.id,
  () => {
    fetchActivityData();
  }
);
</script>

<style>
.similarActivitiesContainer {
  display: flex;
  justify-content: space-evenly;
}
.similarActivitiesTitle {
  font-size: 24px;
  font-weight: 700;
  line-height: 30px;
  letter-spacing: -1px;
  margin: 64px 0 30px;
}
@media (max-width: 1100px) {
  .similarActivitiesCarousel {
    max-width: 80%;
    margin-left: 10%;
  }
}
@media (max-width: 780px) {
  .similarActivitiesCarousel {
    max-width: 40%;
    margin-left: 22%;
  }
}
</style>
