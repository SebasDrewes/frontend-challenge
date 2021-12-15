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
      :pages="totalPages"
      :range-size="2"
      active-color="#FF6C5E"
      @update:modelValue="getDataOfPage($event)"
      hideFirstButton
      hideLastButton
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

async function fetchActivitiesData() {
  activities.value = await getActivitiesData(
    currentPage.value,
    amountOfActivities
  );
}
const currentPage = ref(firstPage);
onMounted(fetchActivitiesData());
function getDataOfPage(numberOfPage) {
  currentPage.value = numberOfPage;
}
watch(
  () => currentPage.value,
  () => {
    fetchActivitiesData();
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }
);
</script>
<style>
.activities {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 100px 0 100px 0;
}
.pagination {
  display: flex;
}
.Page {
  font-size: 18px;
  margin-left: 16px;
  margin-right: 16px;
  font-family: Quicksand;
  font-size: 18px;
  font-weight: 500;
  line-height: 23px;
  width: 32px;
  height: 32px;
  border-radius: 32px;
}
.Page-active {
  color: white;
}
.DotsHolder {
  font-size: 16px;
}
</style>
