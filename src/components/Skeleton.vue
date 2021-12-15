<template>
  <div v-if="medium">
    <div class="skeletonImage"></div>
    <div class="skeletonTextSmall"></div>
    <div class="skeletonTextMedium"></div>
    <div class="skeletonTextSmall"></div>
  </div>
  <div class="skeletonDetail" v-else-if="big">
    <div class="skeletonDetailImage" />
    <div class="skeletonDetailTextContainer">
      <div class="skeletonDetailTextMedium"></div>
      <div class="skeletonDetailTextBig"></div>
      <div class="skeletonDetailTextBig"></div>
      <div class="skeletonDetailTextSmall"></div>
    </div>
  </div>
  <div v-else>
    <h1>Loading...</h1>
  </div>
</template>

<script setup>
const props = defineProps(["big", "medium"]);
</script>

<style scoped>
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
.skeletonDetail {
  display: flex;
  width: 90vw;
}
.skeletonDetailImage {
  width: 563px;
  height: 371px;
  border-radius: 4px;
  background-color: #eee;
}
.skeletonDetailTextContainer {
  margin-left: 30px;
}
.skeletonDetailTextSmall {
  height: 35px;
  width: 10vw;
  margin-top: 100px;
  border-radius: 4px;
  background-color: #eee;
}
.skeletonDetailTextMedium {
  height: 35px;
  width: 40vw;
  border-radius: 4px;
  background-color: #eee;
}
.skeletonDetailTextBig {
  margin-top: 10px;
  height: 60px;
  border-radius: 4px;
  background-color: #eee;
}
@media (max-width: 1100px) {
  .skeletonDetail {
    flex-direction: column;
    height: auto;
    align-items: center;
  }
  .skeletonDetailTextContainer {
    margin: 20px 0 0 0;
    width: 650px;
  }
}
</style>
