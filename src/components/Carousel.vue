<template>
  <vueper-slides
    disable-arrows-on-edges
    fade
    autoplay
    fixed-height="371px"
    class="slide"
  >
    <template #arrow-left>
      <img src="@/assets/leftArrow.svg" />
    </template>
    <template #arrow-right>
      <img src="@/assets/rightArrow.svg" />
    </template>
    <vueper-slide
      v-for="(image, i) in activity.image"
      :key="i"
      :image="image"
      :style="`border-radius: 4px`"
    />
  </vueper-slides>
</template>

<script setup>
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";
const props = defineProps(["activity"]);
console.log(props.activity);
</script>

<style>
.slide {
  width: 563px;
}
.vueperslides__bullet .default {
  background-color: #c4c4c4;
  border: none;
  box-shadow: none;
  transition: 0.3s;
  width: 9px;
  height: 9px;
}

.vueperslides__bullet--active .default {
  background-color: #ff6c5e;
}
</style>
