<template>
  <ul>
    <li>
      <button @click="onClickFirstPage" :disabled="isInFirstPage">First</button>
    </li>

    <li>
      <button @click="onClickPreviousPage" :disabled="isInFirstPage">
        Previous
      </button>
    </li>

    <li v-for="page in pages" :key="page.name">
      <button @click="onClickPage(page.name)" :disabled="page.isDisabled">
        {{ page.name }}
      </button>
    </li>

    <li>
      <button @click="onClickNextPage" :disabled="isInLastPage">Next</button>
    </li>

    <li>
      <button @click="onClickLastPage" :disabled="isInLastPage">Last</button>
    </li>
  </ul>
</template>

<script setup>
import { computed, defineEmit } from "vue";
const props = defineProps([
  "maxVisibleButtons",
  "totalPages",
  "perPage",
  "currentPage",
]);

const { currentPage, totalPages, perPage, maxVisibleButtons } = props;
const emit = defineEmit(["pagechanged"]);
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
  defineEmit("pagechanged", 1);
}
function onClickPreviousPage() {
  defineEmit("pagechanged", currentPage - 1);
}
function onClickPage(page) {
  defineEmit("pagechanged", page);
}
function onClickNextPage() {
  defineEmit("pagechanged", currentPage + 1);
}
function onClickLastPage() {
  defineEmit("pagechanged", totalPages);
}
</script>
