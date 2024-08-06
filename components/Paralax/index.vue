<template>
  <section class="full">
    <img
      ref="img"
      class="full-img"
      src="@/assets/imgs/back.jpg"
      alt="Back bicycle"
    />
  </section>
</template>

<script setup>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const img = ref();
// onMounted(() => {
//   const tl = gsap.timeline({
//     scrollTrigger: {
//       trigger: geometry.value,
//       start: "top top",
//       pin: true,
//       scrub: true,
//     },
//   });
// });
</script>
