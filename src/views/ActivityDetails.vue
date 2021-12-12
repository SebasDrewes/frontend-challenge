<template>
  <p>{{ id }}</p>
</template>

<script>
import { getActivity } from "@/api";
import { ref, onMounted } from "vue";
export default {
  props: ["id"],
  setup(props) {
    const activity = ref({});
    async function fetchActivityData(id) {
      activity.value = await getActivity(id);
    }
    onMounted(fetchActivityData(props.id));
    return {
      activity,
    };
  },
};
</script>

<style></style>
