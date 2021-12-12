<template>
  <div class="includesContainer">
    <div class="includesTitleContainer">
      <h3 class="includesTitle">¿Qué incluye?</h3>
      <div class="orangeLine" />
      <div class="greyLine" />
    </div>
    <div class="activityBenefits" v-html="activity.benefits"></div>
  </div>
</template>

<script setup>
const props = defineProps(["activity"]);
</script>

<style scoped>
.includesContainer {
  display: flex;
  flex-direction: column;
  width: 50%;
}
.includesTitle {
  color: #464646;
  font-size: 22px;
  font-weight: 600;
  line-height: 28px;
  letter-spacing: -1px;
  text-align: left;
  margin: 13px;
  margin-bottom: 7px;
  margin-top: 120px;
}
.orangeLine {
  border: 1.5px solid #ff6c5f;
  background: #ff6c5f;
  position: relative;
  bottom: -1px;
  width: 156px;
}

.greyLine {
  width: 503px;
  border: 0.5px solid #eaeaea;
  background: #eaeaea;
}
.includesTitleContainer {
  margin-bottom: 25px;
}
.activityBenefits {
  color: #4f4f4f;
  font-size: 18px;
  font-weight: 300;
  line-height: 22.5px;
  margin: 0;
}
.activityBenefits >>> li {
  margin-bottom: 20px;
}
</style>
