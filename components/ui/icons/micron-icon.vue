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
    viewBox="0 0 28 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink">
    <line
      id="Line 30"
      x1="13.750000"
      y1="13.055176"
      x2="13.750000"
      y2="3.999786"
      :stroke="color"
      stroke-opacity="1.000000"
      stroke-width="0.500000"/>
    <rect
      id="Rectangle 252"
      x="7.000000"
      y="11.000000"
      width="13.000000"
      height="7.000000"
      :fill="color"
      fill-opacity="1.000000"/>
    <rect
      id="Rectangle 253"
      width="9.000000"
      height="7.000000"
      :fill="color"
      fill-opacity="1.000000"/>
    <rect
      id="Rectangle 254"
      x="19.000000"
      width="9.000000"
      height="7.000000"
      :fill="color"
      fill-opacity="1.000000"/>
  </svg>

</template>

<style scoped>

</style>