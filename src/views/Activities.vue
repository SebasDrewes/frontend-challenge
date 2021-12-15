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
      v-for="pages in totalPages"
      :key="pages"
      v-on:click="getDataOfPage(pages)"
      class="pageItem"
    >
      <a href="#">{{ pages }}</a>
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
  activities.value = await getActivitiesData(page.value, amountOfActivities);
}
const page = ref(firstPage);
watch(
  () => page.value,
  () => {
    fetchActivitiesData();
  }
);

onMounted(fetchActivitiesData());

function getDataOfPage(numberOfPage) {
  page.value = numberOfPage;
}
function getPreviousPage() {
  if (page.value > 1) {
    page.value = page.value - 1;
  }
}
function getNextPage() {
  if (page.value < totalPages) {
    page.value = page.value + 1;
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
