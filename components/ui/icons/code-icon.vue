<script setup lang="ts">
defineProps<{
  size: { w: string, h: string }
  rotate?: number
}>()
</script>

<template>
  <svg :style="`transform: rotate(${rotate}deg)`" :width="size.w" :height="size.h" viewBox="0 0 16.8539 9.36002"
    :fill="color" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <path id="&lt;/&gt;"
      d="M10.16 1.14e-5L9.18 1.14e-5L6.68 9.36L7.66 9.36L10.16 1.14e-5ZM-7.28e-6 5.26L3.04 8.31L3.65 7.71L1.17 5.26L3.65 2.81L3.04 2.21L-7.28e-6 5.26ZM13.19 7.71L13.79 8.31L16.85 5.26L13.79 2.21L13.19 2.81L15.67 5.26L13.19 7.71Z"
      fill="currentColor" fill-opacity="1.000000" fill-rule="evenodd" />
  </svg>
</template>

<style scoped></style>