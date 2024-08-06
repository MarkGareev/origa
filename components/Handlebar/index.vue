<template>
  <section class="section handlebar" ref="handlebar">
    <p class="handlebar-caption">Уникальный опыт</p>
    <h2 class="handlebar-title" ref="title">
      Городская езда<br />
      стала проще
    </h2>
    <img
      ref="img"
      class="handlebar-img"
      src="@/assets/imgs/handlebar.png"
      alt="Handlebar"
    />
  </section>
</template>

<script setup>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const title = ref();
const img = ref();
const handlebar = ref();
onMounted(() => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: handlebar.value,
      start: "top top",
      pin: true,
      scrub: true,
    },
  });
  const anim1 = gsap.fromTo(
    img.value,
    {
      scale: 1,
    },
    {
      opacity: 1,
      scale: 6,
      y: 1235,
      duration: 5,
    }
  );
  const anim2 = gsap.fromTo(
    title.value,
    {
      opacity: 0,
      scale: 0,
    },
    {
      opacity: 1,
      scale: 1.5,
      duration: 5,
    }
  );
  tl.add(anim1, 0);
  tl.add(anim2, 0);
});
</script>

<style lang="scss">
@import "./index.scss";
</style>
