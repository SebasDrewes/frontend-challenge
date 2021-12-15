<template>
  <div class="activities">
    <ActivityItem
      v-for="activity in activities"
      :key="activity.id"
      :activity="activity"
      :medium="true"
    />
  </div>
</template>

<script setup>
import ActivityItem from "@/components/ActivityItem.vue";
import { getActivitiesData } from "@/api";
import { ref, onMounted } from "vue";
const activities = ref([]);
async function fetchActivitiesData() {
  activities.value = await getActivitiesData();
}
onMounted(fetchActivitiesData);
console.log(activities.value);
</script>
<style scoped>
.activities {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 100px 0 100px 0;
}
</style>
