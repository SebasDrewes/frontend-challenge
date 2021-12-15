<template>
  <div class="activities">
    <ActivityItem
      v-for="activity in activities"
      :key="activity.id"
      :activity="activity"
      :medium="true"
    />
    <v-pagination
      v-model="currentPage"
      :pages="24"
      :range-size="2"
      active-color="#DCEDFF"
      @update:modelValue="getDataOfPage($event)"
    />
  </div>
  <p>{{ firstPage }}-{{ totalPages }} de {{ totalResults }}</p>
</template>

<script setup>
import ActivityItem from "@/components/ActivityItem.vue";
import paginationData from "@/helpers/paginationData.js";
import VPagination from "@hennge/vue3-pagination";
import "@hennge/vue3-pagination/dist/vue3-pagination.css";
import { getActivitiesData } from "@/api";
import { ref, onMounted, watch } from "vue";
const activities = ref([]);
const paginationInfo = paginationData();
const amountOfActivities = paginationInfo.first._limit;
const totalPages = 24;
const firstPage = Number(paginationInfo.first._page);
const lastPage = paginationInfo.last._page;
const totalResults = amountOfActivities * totalPages;

async function fetchActivitiesData() {
  activities.value = await getActivitiesData(
    currentPage.value,
    amountOfActivities
  );
}
const currentPage = ref(firstPage);
watch(
  () => currentPage.value,
  () => {
    fetchActivitiesData();
  }
);

onMounted(fetchActivitiesData());

function getDataOfPage(numberOfPage) {
  currentPage.value = numberOfPage;
}
function getPreviousPage() {
  if (currentPage.value > 1) {
    currentPage.value = currentPage.value - 1;
  }
}
function getNextPage() {
  if (currentPage.value < totalPages) {
    currentPage.value = currentPage.value + 1;
  }
}
</script>
<style scoped>
.activities {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 100px 0 100px 0;
}
.pagination {
  display: flex;
}
.pageItem {
  list-style-type: none;
  margin: 10px;
}
</style>
