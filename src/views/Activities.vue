<template>
  <div class="activities">
    <ActivityItem
      v-for="activity in activities"
      :key="activity.id"
      :activity="activity"
      :medium="true"
    />
    <div class="paginationContainer">
      <v-pagination
        v-model="currentPage"
        :pages="totalPages"
        :range-size="2"
        active-color="#FF6C5E"
        @update:modelValue="getDataOfPage($event)"
        hideFirstButton
        hideLastButton
      />

      <p class="resultsText">
        {{ firstPage }}-{{ totalPages }} de {{ totalResults }} resultados
      </p>
    </div>
  </div>
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
const totalResults = paginationInfo.last._page;
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
.paginationContainer {
  margin-top: 70px;
}
.resultsText {
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0px;
  color: #bdbdbd;
  text-align: right;
}
.Page {
  font-size: 18px;
  color: #000000;
  margin-left: 10px;
  margin-right: 10px;
  font-family: Quicksand;
  font-size: 18px;
  font-weight: 600;
  line-height: 23px;
  width: 32px;
  height: 32px;
  border-radius: 32px;
}

.Page-active {
  color: white;
  border: none;
}
.DotsHolder {
  font-size: 16px;
  width: 32px;
  height: 32px;
}
.PaginationControl {
  width: 32px;
  height: 32px;
  border-radius: 32px;
  background-color: #ff6c5e;
  color: white;
  margin-left: 24px;
  margin-right: 24px;
}
.Control {
  width: 32px;
  height: 32px;
  border-radius: 32px;
  background-color: #ff6c5e;
  fill: #ffffff;
}
.Control-active {
  width: 32px;
  height: 32px;
  border-radius: 32px;
  background-color: #ff6c5e;
  fill: #ffffff;
}
</style>
