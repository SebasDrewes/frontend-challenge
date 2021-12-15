<template>
  <ul class="pagination">
    <li class="pagination-item">
      <button @click="onClickFirstPage" :disabled="isInFirstPage">First</button>
    </li>

    <li class="pagination-item">
      <button @click="onClickPreviousPage" :disabled="isInFirstPage">
        Previous
      </button>
    </li>

    <li v-for="page in pages" :key="page.name" class="pagination-item">
      <button
        @click="onClickPage(page.name)"
        :disabled="page.isDisabled"
        :class="{ active: isPageActive(page.name) }"
      >
        {{ page.name }}
      </button>
    </li>

    <li class="pagination-item">
      <button @click="onClickNextPage" :disabled="isInLastPage">Next</button>
    </li>

    <li class="pagination-item">
      <button @click="onClickLastPage" :disabled="isInLastPage">Last</button>
    </li>
  </ul>
</template>

<script setup>
import { computed } from "vue";
const props = defineProps([
  "maxVisibleButtons",
  "totalPages",
  "perPage",
  "currentPage",
]);

const { currentPage, totalPages, perPage, maxVisibleButtons } = props;
const emit = defineEmits(["pagechanged"]);
console.log(emit);
const startPage = computed(() => {
  if (currentPage === 1) {
    return 1;
  }
  if (currentPage === totalPages) {
    return totalPages - maxVisibleButtons;
  }
  return currentPage - 1;
});
const pages = computed(() => {
  const range = [];
  for (
    let i = startPage;
    i <= Math.min(startPage + maxVisibleButtons - 1, totalPages);
    i++
  ) {
    range.push({
      name: i,
      isDisabled: i === currentPage,
    });
  }

  return range;
});
const isInFirstPage = computed(() => {
  return currentPage === 1;
});
const isInLastPage = computed(() => {
  return currentPage === totalPages;
});
function onClickFirstPage() {
  emit("pagechanged", 1);
}
function onClickPreviousPage() {
  emit("pagechanged", currentPage - 1);
}
function onClickPage(page) {
  emit("pagechanged", page);
}
function onClickNextPage() {
  emit("pagechanged", currentPage + 1);
}
function onClickLastPage() {
  emit("pagechanged", totalPages);
}
function isPageActive(page) {
  return currentPage === page;
}
</script>
<style scoped>
.pagination {
  list-style-type: none;
}

.pagination-item {
  display: inline-block;
}

.active {
  background-color: #4aae9b;
  color: #ffffff;
}
</style>
