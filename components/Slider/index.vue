<template>
  <Splide :options="splideOptions" :extensions="extensions">
    <SplideSlide v-for="(slide, index) in list" :key="index">
      <img class="splide__slide-img" :src="slide" />
    </SplideSlide>
  </Splide>
</template>
<script setup>
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/vue-splide/css/core";

const props = defineProps({
  list: { type: Array, required: true },
});
const extensions = { AutoScroll };

const splideOptions = {
  type: "loop",
  autoWidth: true,
  autoHeight: true,
  arrows: false,
  pagination: false,
  drag: true,
  autoScroll: {
    speed: 2,
    pauseOnHover: false,
    pauseOnFocus: false,
    rewind: false,
  },
};
</script>
<style lang="scss">
@import "./index.scss";
</style>
