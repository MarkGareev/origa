<template>
  <section class="section geometry">
    <div class="geometry-caption">Геометрия</div>
    <div class="geometry-track">
      <div class="geometry-track-title">Дизайнерский взгляд</div>
      <div class="geometry-track-text">
        Форм-фактор и дизайн — одни из самых важных характеристик байка.
      </div>
    </div>
    <div class="geometry-slider" ref="geometry">
      <div class="geometry-container">
        <img
          src="@/assets/imgs/geometry.jpg"
          alt="Geometry"
          class="geometry-container-video"
        />
        <!-- <video
          class="geometry-container-video"
          preload="auto"
          playsinline=""
          loop="loop"
          muted="muted"
          autoplay="autoplay"
        >
          <source src="@/assets/videos/geometry.mp4" type="video/mp4" />
        </video> -->
        <p class="geometry-container-text">
          Велосипед обладает идеальным балансом, что облегчает управление и
          обеспечивает устойчивость во время движения.
        </p>
      </div>
      <div class="geometry-container">
        <img
          class="geometry-container-img"
          src="@/assets/imgs/frame.jpg"
          alt="Frame"
        />
        <p class="geometry-container-text geometry-container-text-big">
          Велорама для всех
        </p>
      </div>
      <div class="geometry-container">
        <video
          class="geometry-container-video"
          preload="auto"
          playsinline=""
          loop="loop"
          muted="muted"
          autoplay="autoplay"
        >
          <source src="@/assets/videos/geometry2.mp4" type="video/mp4" />
        </video>
        <p class="geometry-container-text">
          Удобное седло анатомической формы поддерживает вашу тазовую кость в
          тонусе во время езды.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const geometry = ref();
function VwToPx(px) {
  return Math.round((window.innerWidth * px) / 100);
}
onMounted(() => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: geometry.value,
      start: `top ${VwToPx(1.56)}px`,
      pin: true,
      scrub: true,
    },
  });
  tl.fromTo(
    geometry.value,
    {
      x: 0,
    },
    {
      x: VwToPx(-218.177),
    }
  );
});
</script>

<style lang="scss">
@import "./index.scss";
</style>
