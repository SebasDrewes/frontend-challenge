<template>
  <div v-if="isLoading" class="activityDetail">
    <img
      class="backArrow"
      src="@/assets/backArrow.svg"
      @click="goToActividades"
    />
    <Skeleton :big="true" />
  </div>
  <div v-else class="activityDetail">
    <img
      class="backArrow"
      src="@/assets/backArrow.svg"
      @click="goToActividades"
    />
    <ActivityMainInfo :activity="activity" />
    <ActivityIncludesInfo :activity="activity" />
    <ActivityRules :activity="activity" />
    <SimilarActivities />
  </div>
</template>

<script setup>
import ActivityMainInfo from "@/components/ActivityMainInfo.vue";
import ActivityIncludesInfo from "@/components/ActivityIncludesInfo.vue";
import ActivityRules from "@/components/ActivityRules.vue";
import SimilarActivities from "@/components/SimilarActivities.vue";
import Skeleton from "@/components/Skeleton.vue";
import { getActivity } from "@/api";
import { ref, onMounted, watch } from "vue";
import { useRoute, useRouter } from "vue-router";

const props = defineProps(["id"]);
const activity = ref({});
const isLoading = ref(true);
const router = useRouter();
const route = useRoute();
function goToActividades() {
  router.push("/actividades");
}

async function fetchActivityData(id) {
  activity.value = await getActivity(id);
  isLoading.value = false;
}
watch(
  () => route.params.id,
  () => {
    if (route.params.id) fetchActivityData(route.params.id);
  }
);
onMounted(fetchActivityData(props.id));
</script>

<style scoped>
.activityDetail {
  margin: 65px 104px 119px 100px;
}
.backArrow {
  margin-bottom: 20px;
  cursor: pointer;
}
@media (max-width: 1100px) {
  .activityDetail {
    margin: 6px 10px 11px 10px;
  }
}
</style>
