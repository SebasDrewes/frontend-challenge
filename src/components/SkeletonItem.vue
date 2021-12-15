<template>
  <div class="skeletonItem">
    <div class="skeletonImage"></div>
    <div class="skeletonTextSmall"></div>
    <div class="skeletonTextMedium"></div>
    <div class="skeletonTextSmall"></div>
  </div>
</template>

<script></script>

<style scoped>
.skeletonItem {
  width: 369px;
  cursor: progress;
}
.skeletonImage {
  height: 240px;
  border-radius: 4px;
  background-color: #eee;
}
.skeletonTextSmall {
  margin-top: 10px;
  height: 35px;
  border-radius: 4px;
  background-color: #eee;
}
.skeletonTextMedium {
  margin-top: 10px;
  height: 60px;
  border-radius: 4px;
  background-color: #eee;
}
</style>
