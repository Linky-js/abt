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
    viewBox="0 0 18 13"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink">
    <line
      id="Line 27"
      x1="0.000000"
      y1="0.500000"
      x2="18.000000"
      y2="0.500000"
      :stroke="color"
      stroke-opacity="1.000000"
      stroke-width="1.000000"/>
    <line
      id="Line 28"
      x1="0.000000"
      y1="6.500000"
      x2="18.000000"
      y2="6.500000"
      :stroke="color"
      stroke-opacity="1.000000"
      stroke-width="1.000000"/>
    <line
      id="Line 29"
      x1="0.000000"
      y1="12.500000"
      x2="18.000000"
      y2="12.500000"
      :stroke="color"
      stroke-opacity="1.000000"
      stroke-width="1.000000"/>
  </svg>
</template>

<style scoped>

</style>