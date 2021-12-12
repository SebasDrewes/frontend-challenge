<template>
  <div class="activityDescription">
    <div class="mainActivityDescription">
      <img :src="activity.image[0]" :alt="activity.name" />
      <div class="activityDescriptionContainer">
        <h1>{{ activity.name }}</h1>
        <p>{{ activity.description }}</p>
        <div class="activityParticipants" v-if="activity.participants === 1">
          <img src="@/assets/forOne.svg" />
          <p>Para {{ activity.participants }} persona</p>
        </div>
        <div class="activityParticipants" v-else>
          <img src="@/assets/forGroup.svg" />
          <p>Para {{ activity.participants }} personas</p>
        </div>
        <div class="activityLocation">
          <img src="@/assets/location.svg" />
          <p>{{ activity.locations[0].province }}</p>
        </div>
        <h3>{{ activity.market_price }} puntos</h3>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["activity"]);
console.log(props);
</script>

<style scoped></style>
