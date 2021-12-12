<template>
  <div class="activityContainer">
    <img :src="activity.image[0]" :alt="activity.name" class="activityImage" />
    <div class="activityTitleContainer">
      <p class="activityTitle">{{ activity.name }}</p>
      <img src="./../assets/forOne.svg" />
    </div>
    <div class="locationContainer">
      <img src="./../assets/location.svg" class="locationIcon" />
      <p class="location">
        {{ activity.locations[0].address }},
        {{ activity.locations[0].province }}
      </p>
    </div>
    <p class="description">
      {{ activity.description }}
    </p>
    <h3 class="marketPrice">{{ activity.market_price }} puntos</h3>
  </div>
</template>

<script>
export default {
  props: ["activity"],
};
</script>

<style scoped></style>
