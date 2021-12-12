<template>
  <div class="mainActivityDescription">
    <img :src="activity.image[0]" :alt="activity.name" class="activityImage" />
    <div class="activityDescriptionContainer">
      <h1 class="activityName">{{ activity.name }}</h1>
      <p class="activityDescription">{{ activity.description }}</p>
      <div class="activityParticipants" v-if="activity.participants === 1">
        <img src="@/assets/forOne.svg" />
        <p class="participantsAmount">
          Para {{ activity.participants }} persona
        </p>
      </div>
      <div class="activityParticipants" v-else>
        <img src="@/assets/forGroup.svg" />
        <p class="participantsAmount">
          Para {{ activity.participants }} personas
        </p>
      </div>
      <div class="activityLocation">
        <img src="@/assets/greyLocation.svg" />
        <p class="activityProvince">{{ activity.locations[0].province }}</p>
      </div>
      <h3 class="activityPoints">{{ activity.market_price }} puntos</h3>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["activity"]);
console.log(props);
</script>

<style scoped>
.mainActivityDescription {
  display: flex;
  height: 371px;
  margin: 97px;
}
.activityImage {
  width: 563px;
  border-radius: 4px;
}
.activityDescriptionContainer {
  margin-left: 33px;
}
.activityName {
  font-weight: 700;
  font-size: 30px;
  line-height: 37.5px;
  color: #464646;
  margin: 0;
}
.activityDescription {
  font-weight: 400;
  font-size: 18px;
  line-height: 22.5px;
  color: #4f4f4f;
  margin: 20px 0 25px;
}
.activityParticipants {
  display: flex;
}
.participantsAmount {
  margin: 0 0 0 8px;
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  color: #464646;
}
.activityLocation {
  display: flex;
  align-items: center;
  margin: 25px 0 78px;
}
.activityProvince {
  font-size: 16px;
  margin: 0 0 0 13px;
  font-weight: 400;
  line-height: 20px;
  color: #464646;
}
.activityPoints {
  color: #464646;
  font-size: 24px;
  font-weight: 400;
  line-height: 30px;
  margin: 0;
}
</style>
