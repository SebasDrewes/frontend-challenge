<template>
  <div class="rulesContainer">
    <div class="rulesTitleContainer">
      <img src="@/assets/rules.svg" />
      <h1 class="rulesTitle">Reglas:</h1>
    </div>
    <p class="rules">{{ activity.small_print }}</p>
  </div>
</template>

<script setup>
const props = defineProps(["activity"]);
</script>

<style scoped>
.rulesContainer {
  width: 50%;
}
.rulesTitleContainer {
  display: flex;
  align-items: center;
  margin-top: 51px;
  margin-bottom: 27px;
}
.rulesTitle {
  font-size: 22px;
  font-weight: 700;
  line-height: 28px;
  letter-spacing: -1px;
  margin-left: 19px;
  color: #464646;
}
.rules {
  font-size: 18px;
  font-weight: 300;
  line-height: 23px;
  letter-spacing: 0px;
  color: #4f4f4f;
}
@media (max-width: 1100px) {
  .rulesContainer {
    width: 100%;
  }
}
</style>
