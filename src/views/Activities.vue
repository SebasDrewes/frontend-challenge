<template>
  <div class="activitiesContainer">
    <div class="activities" v-if="isLoading">
      <SkeletonItem v-for="skeleton in 9" :key="skeleton" />
    </div>
    <div v-else class="activities">
      <ActivityItem
        v-for="activity in activities"
        :key="activity.id"
        :activity="activity"
        :medium="true"
      />
    </div>
    <div class="paginationContainer">
      <v-pagination
        v-model="currentPage"
        :pages="totalPages"
        :range-size="rangeSize"
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
import SkeletonItem from "@/components/SkeletonItem.vue";
import paginationData from "@/helpers/paginationData.js";
import VPagination from "@hennge/vue3-pagination";
import "@hennge/vue3-pagination/dist/vue3-pagination.css";
import { getActivitiesData } from "@/api";
import { ref, onMounted, onUnmounted, watch } from "vue";
const activities = ref([]);
const isLoading = ref(true);
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
  isLoading.value = false;
}

const rangeSize = ref(window.innerWidth > 600 ? 2 : 0);
function handleResize() {
  rangeSize.value = window.innerWidth > 600 ? 2 : 0;
}
window.addEventListener("resize", handleResize);
onUnmounted(() => window.removeEventListener("resize", handleResize));

const currentPage = ref(firstPage);
onMounted(fetchActivitiesData());
function getDataOfPage(numberOfPage) {
  isLoading.value = true;
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
.activitiesContainer {
  margin: 110px 100px 100px 100px;
}
.activities {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-column-gap: 21px;
  grid-row-gap: 44px;
}
.paginationContainer {
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.resultsText {
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  color: #bdbdbd;
  margin-top: 25px;
  margin-left: 25%;
}
.Page {
  font-size: 18px;
  color: #000000;
  padding: 0;
  margin-left: 7px;
  margin-right: 7px;
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
  border: none;
}
.DotsHolder {
  font-size: 16px;
  width: 32px;
  height: 32px;
}
.PaginationControl {
  width: 34px;
  height: 34px;
  border-radius: 32px;
  background-color: #ff6c5e;
  color: white;
  margin-left: 14px;
  margin-right: 14px;
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
@media (max-width: 1300px) {
  .activitiesContainer {
    margin: 100px 20px 100px 20px;
  }
}
@media (max-width: 1180px) {
  .activities {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(5, 1fr);
    justify-items: center;
  }
  .activitiesContainer {
    margin: 100px 50px 100px 50px;
  }
}
@media (max-width: 875px) {
  .activities {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    justify-items: center;
  }
  .activitiesContainer {
    margin: 50px 0 50px 0;
  }
}
</style>
