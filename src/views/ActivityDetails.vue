<template>
  <ActivityMainInfo :activity="activity" />
</template>

<script setup>
import ActivityMainInfo from "@/components/ActivityMainInfo.vue";
import { getActivity } from "@/api";
import { ref, onMounted } from "vue";
const props = defineProps(["id"]);
const activity = ref({});
async function fetchActivityData(id) {
  activity.value = await getActivity(id);
}
onMounted(fetchActivityData(props.id));
</script>

<style scoped></style>
