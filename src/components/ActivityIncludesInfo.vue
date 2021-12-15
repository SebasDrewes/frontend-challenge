<template>
  <div class="includesContainer">
    <div class="includesTitleContainer">
      <h3 class="includesTitle">¿Qué incluye?</h3>
      <hr class="orangeLine" />
      <hr class="greyLine" />
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
  margin: 100px 13px 7px 13px;
}
.orangeLine {
  border: 1.5px solid #ff6c5f;
  background: #ff6c5f;
  position: relative;
  bottom: -1px;
  width: 156px;
  margin: 0;
}

.greyLine {
  width: 503px;
  border: 0.5px solid #eaeaea;
  background: #eaeaea;
  margin: 0;
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
@media (max-width: 1100px) {
  .includesContainer {
    width: 100%;
  }
}
</style>
