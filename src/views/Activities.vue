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
export default {
  name: "Activities",
  components: { Activity },
  data() {
    return {
      activities: [],
    };
  },
  mounted() {
    getActivitiesData().then((res) => (this.activities = res));
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
