<template>
  <ul>
    <li>
      <button>First</button>
    </li>
    <li>
      <button>Previous</button>
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
</script>
