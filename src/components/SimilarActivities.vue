<template></template>

<script setup>
import { ref, onMounted } from "vue";
import { similarActivities } from "@/api";
const props = defineProps(["category"]);
//const similarActivites = ref([]);
async function fetchActivityData() {
  console.log(props.category);
  console.log(similarActivities(props.category, 4));
}
onMounted(fetchActivityData());
</script>

<style></style>
