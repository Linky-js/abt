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
    viewBox="0 0 167 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink">
    <rect
      id="Rectangle 276"
      width="100.000000"
      height="100.000000"
      :fill="color"
      fill-opacity="1.000000"/>
    <circle
      id="Ellipse 262"
      cx="142.000000"
      cy="25.000000"
      r="25.000000"
      :fill="color"
      fill-opacity="1.000000"/>
  </svg>
</template>

<style scoped>

</style>