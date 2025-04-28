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
    viewBox="0 0 19.6962 19.3969"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink">
    <defs/>
    <path
      id="Star 1"
      d="M9.84 0L8.54 6.41L3.42 2.33L6.54 8.09L0 8.26L6.08 10.66L1.18 15L7.39 12.92L6.42 19.39L9.84 13.81L13.26 19.39L12.3 12.92L18.5 15L13.6 10.66L19.69 8.26L13.15 8.09L16.27 2.33L11.15 6.41L9.84 0Z"
      :fill="color"
      fill-opacity="1.000000"
      fill-rule="evenodd"/>
  </svg>
</template>

<style scoped>

</style>