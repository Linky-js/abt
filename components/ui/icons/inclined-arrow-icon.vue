<script setup lang="ts">
defineProps<{
  color?: string
  size: {w: string, h: string}
  rotate?: number
}>()
</script>

<template>
  <svg
    :style="`transform: rotate(${rotate}deg)`"
    :width="size.w"
    :height="size.h"
    viewBox="0 0 12.8278 14.6102"
    :fill="color"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink">
    <path
      id="Arrow 1"
      d="M2.71 3.52L1.99 9.06C1.91 9.61 1.42 9.99 0.87 9.92C0.31 9.85 -0.07 9.35 0 8.8L1.04 0.87C1.11 0.31 1.6 -0.07 2.16 0L10.09 1.04C10.65 1.11 11.03 1.6 10.95 2.16C10.88 2.71 10.39 3.09 9.83 3.02L4.29 2.3L12.82 13.39L11.24 14.61L2.71 3.52Z"
      :fill="color"
      fill-opacity="1.000000"
      fill-rule="evenodd"/>
  </svg>
</template>

<style scoped>

</style>