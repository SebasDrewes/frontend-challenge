<template>
  <div>
    <h1 class="similarActivitiesTitle">Otras actividades similares:</h1>
    <div class="similarActivitiesContainer">
      <ActivityItem
        v-for="activity in similarActivitesData"
        :key="activity.id"
        :activity="activity"
        :small="true"
      />
    </div>
  </div>
</template>

<script setup>
import ActivityItem from "./ActivityItem.vue";
import { useRoute } from "vue-router";
import { ref, onMounted, watch } from "vue";
import { randomActivities } from "@/api";
const route = useRoute();
const similarActivitesData = ref([]);
async function fetchActivityData() {
  const activityData = await randomActivities(4);
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
  margin: 64px 0 40px;
}
</style>
