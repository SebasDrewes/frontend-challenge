<template>
  <ul>
    <li>
      <button>First</button>
    </li>

    <li>
      <button>Previous</button>
    </li>

    <li v-for="page in pages" :key="page.name">
      <button :disabled="page.isDisabled">
        {{ page.name }}
      </button>
    </li>

    <li>
      <button>Next</button>
    </li>

    <li>
      <button>Last</button>
    </li>
  </ul>
</template>

<script setup>
const props = defineProps([
  "maxVisibleButtons",
  "totalPages",
  "perPage",
  "currentPage",
]);

const { currentPage, totalPages, perPage, maxVisibleButtons } = props;

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
</script>
