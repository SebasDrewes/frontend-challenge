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
    getActivitiesData().then((res) => (this.activities = res));
  },
};
</script>
