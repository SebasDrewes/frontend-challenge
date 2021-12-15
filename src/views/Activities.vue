<template>
  <div class="activities">
    <ActivityItem
      v-for="activity in activities"
      :key="activity.id"
      :activity="activity"
      :medium="true"
    />
  </div>
  <ul class="pagination">
    <li v-on:click="getPreviousPage()" class="pageItem">
      <a href="#"> PREVIOUS PAGE</a>
    </li>
    <li
      v-for="pageNumber in totalPages"
      :key="pageNumber"
      v-on:click="getDataOfPage(pageNumber)"
      class="pageItem"
    >
      <a href="#">{{ pageNumber }}</a>
    </li>
    <li v-on:click="getNextPage()" class="pageItem">
      <a href="#"> NEXT PAGE </a>
    </li>
  </ul>
  <p>{{ firstPage }}-{{ totalPages }} de {{ totalResults }}</p>
</template>

<script setup>
import ActivityItem from "@/components/ActivityItem.vue";
import pagination from "@/helpers/pagination.js";
import { getActivitiesData } from "@/api";
import { ref, onMounted, watch } from "vue";
const activities = ref([]);
const paginationInfo = pagination();
const amountOfActivities = paginationInfo.first._limit;
const totalPages = 24;
const firstPage = paginationInfo.first._page;
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
