<template>
  <div class="activities"></div>
</template>

<script>
import getActivitiesData from "@/api";

export default {
  name: "Activities",
  data() {
    return {
      activities: [],
    };
  },
  mounted() {
    this.activities = getActivitiesData();
    console.log(this.activities);
  },
};
</script>
