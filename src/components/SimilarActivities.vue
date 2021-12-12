<template>
  <div>
    <h1 class="similarActivitiesTitle">Otras actividades similares:</h1>
    <div class="similarActivitiesContainer">
      <ActivityItem
        v-for="activity in similarActivitesData"
        :key="activity.id"
        :activity="activity"
      />
    </div>
  </div>
</template>

<script setup>
import ActivityItem from "./ActivityItem.vue";
import { ref, onMounted } from "vue";
import { randomActivities } from "@/api";
const similarActivitesData = ref([]);
async function fetchActivityData() {
  const activityData = await randomActivities(4);
  similarActivitesData.value = activityData;
}
onMounted(fetchActivityData());
</script>

<style>
.similarActivitiesContainer {
  display: flex;
}
.similarActivitiesTitle {
  font-size: 24px;
  font-weight: 700;
  line-height: 30px;
  letter-spacing: -1px;
  margin: 64px 0 47px;
}
</style>
