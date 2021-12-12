<template>
  <div class="activities">
    <Activity
      v-for="activity in activities"
      :key="activity.id"
      :activity="activity"
    />
  </div>
</template>

<script>
import Activity from "../components/Activity.vue";
import getActivitiesData from "@/api";
import { ref, onMounted } from "vue";
export default {
  name: "Activities",
  components: { Activity },
  setup() {
    const activities = ref([]);
    async function fetchActivitiesData() {
      activities.value = await getActivitiesData();
    }
    onMounted(fetchActivitiesData);
    return {
      activities,
    };
  },
};
</script>
<style scoped>
.activities {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 100px 0 100px 0;
}
</style>
