<template>
  <div class="activityDetail">
    <ActivityMainInfo :activity="activity" />
    <ActivityIncludesInfo :activity="activity" />
    <ActivityRules :activity="activity" />
    <SimilarActivities :category="activity.category" />
  </div>
</template>

<script setup>
import ActivityMainInfo from "@/components/ActivityMainInfo.vue";
import ActivityIncludesInfo from "@/components/ActivityIncludesInfo.vue";
import ActivityRules from "@/components/ActivityRules.vue";
import SimilarActivities from "@/components/SimilarActivities.vue";
import { getActivity } from "@/api";
import { ref, onMounted } from "vue";

const props = defineProps(["id"]);
const activity = ref({});

async function fetchActivityData(id) {
  activity.value = await getActivity(id);
}

onMounted(fetchActivityData(props.id));
</script>

<style scoped>
.activityDetail {
  margin-top: 111px;
  margin-left: 100px;
  margin-bottom: 119px;
  margin-right: 104px;
}
</style>
