<template>
  <div class="includesContainer">
    <h3 class="includesTitle">¿Qué incluye?</h3>
    <div class="orangeLine"></div>
    <div class="greyLine"></div>
  </div>
</template>

<script setup>
const props = defineProps(["activity"]);
</script>

<style scoped>
.includesContainer {
  display: flex;
  flex-direction: column;
  margin-left: 100px;
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
</style>
