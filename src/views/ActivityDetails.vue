<template>
  <div v-if="isLoading">
    <p>Loading...</p>
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
    <SimilarActivities :category="activity.category" />
  </div>
</template>

<script setup>
import ActivityMainInfo from "@/components/ActivityMainInfo.vue";
import ActivityIncludesInfo from "@/components/ActivityIncludesInfo.vue";
import ActivityRules from "@/components/ActivityRules.vue";
import SimilarActivities from "@/components/SimilarActivities.vue";
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
    fetchActivityData(route.params.id);
  }
);
onMounted(fetchActivityData(props.id));
</script>

<style scoped>
.activityDetail {
  margin-top: 65px;
  margin-left: 100px;
  margin-bottom: 119px;
  margin-right: 104px;
}
.backArrow {
  margin-bottom: 20px;
  cursor: pointer;
}
</style>
