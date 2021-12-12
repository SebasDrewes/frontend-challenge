<template>
  <div class="similarActivitiesContainer">
    <ActivityItem
      v-for="activity in similarActivities"
      :key="activity.id"
      :activity="activity"
    />
  </div>
</template>

<script setup>
import ActivityItem from "./ActivityItem.vue";
import { ref, onMounted } from "vue";
import { similarActivities } from "@/api";
const props = defineProps(["category"]);
const similarActivitesData = ref([]);
async function fetchActivityData() {
  const activityData = await similarActivities(props.category, 4);
  similarActivitesData.value = activityData;
  console.log(activityData);
}
onMounted(fetchActivityData());
</script>

<style>
.similarActivitiesContainer {
  display: flex;
}
</style>
