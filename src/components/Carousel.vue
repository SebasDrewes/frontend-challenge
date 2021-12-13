<template>
  <vueper-slides fixed-height="371px" class="slide">
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

<style scoped>
.slide {
  width: 563px;
}
</style>
