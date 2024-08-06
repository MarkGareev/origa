<template>
  <svg
    width="50"
    height="50"
    viewBox="0 0 50 50"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M50 25L0 25" stroke="black" />
    <path v-if="type" d="M25 50L25 0" stroke="black" />
  </svg>
</template>

<script setup>
const props = defineProps({
  type: { type: Boolean, require: true },
});
</script>
