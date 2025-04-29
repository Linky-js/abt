<script setup lang="ts">
defineProps<{
  size: { w: string, h: string }
  rotate?: number
}>()
</script>

<template>
  <svg :style="`transform: rotate(${rotate}deg)`" :width="size.w" :height="size.h" viewBox="0 0 18 18" fill="none"
    xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <circle id="Ellipse 249" cx="9.000000" cy="9.000000" r="3.750000" stroke="currentColor" stroke-opacity="1.000000"
      stroke-width="0.500000" />
    <circle id="Ellipse 250" cx="9.000000" cy="9.000000" r="8.700000" stroke="currentColor" stroke-opacity="1.000000"
      stroke-width="0.600000" />
  </svg>
</template>

<style scoped></style>