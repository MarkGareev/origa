<template>
  <a class="btn" :href="link">
    <span class="btn-background"></span>
    <p class="btn-text">
      {{ text }}
    </p>
  </a>
</template>

<script setup>
const props = defineProps({
  text: { type: String, require: true },
  link: { type: String, default: "" },

  bg: { type: String, default: "black" },
});
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>
