<template>
  <div v-if="isLoading">
    <p>Loading...</p>
  </div>
  <div v-else class="activityDetail">
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
const isLoading = ref(true);

async function fetchActivityData(id) {
  activity.value = await getActivity(id);
  isLoading.value = false;
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
