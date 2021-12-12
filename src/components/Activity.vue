<template>
  <div class="activityContainer" @click="toDetails(activity.id)">
    <img :src="activity.image[0]" :alt="activity.name" class="activityImage" />
    <div class="activityTitleContainer">
      <p class="activityTitle">{{ activity.name }}</p>
      <img v-if="activity.participants === 1" src="./../assets/forOne.svg" />
      <img v-else src="./../assets/forGroup.svg" />
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
  methods: {
    toDetails(id) {
      this.$router.push({ name: "ActivitiesDetails", params: { id: id } });
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@400&display=swap");
.activityContainer {
  display: flex;
  flex-direction: column;
  font-family: Quicksand;
  color: #464646;
  width: 369px;
  margin: 22px 11px;
}
.activityImage {
  height: 240px;
  border-radius: 4px;
}
.activityTitle {
  margin: 14px 0 12px 0;
  font-size: 18px;
  font-weight: 700;
  line-height: 22.5px;
}
.activityTitleContainer {
  display: flex;
  justify-content: space-between;
}
.locationContainer {
  display: flex;
  margin: 0;
}
.location {
  margin: 0;
  color: #000000;
  font-size: 14px;
  line-height: 14px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.locationIcon {
  margin-right: 8.75px;
}
.description {
  margin: 12px 0 0 0;
  text-align: left;
  font-size: 14px;
  min-height: 65px;
  line-height: 14px;
}
.marketPrice {
  font-size: 18px;
  margin: 0;
  text-align: left;
  font-weight: 600;
  line-height: 22.5px;
}
</style>
