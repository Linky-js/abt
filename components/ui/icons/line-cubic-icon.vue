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
    viewBox="0 0 150.333 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink">
    <line
      id="Line 32"
      x1="0.000000"
      y1="15.877686"
      x2="150.332733"
      y2="15.877686"
      :stroke="color"
      stroke-opacity="1.000000"
      stroke-width="1.000000"/>
    <rect
      id="Rectangle 288"
      x="48.771484"
      width="30.000000"
      height="30.000000"
      :fill="color"
      fill-opacity="1.000000"/>
  </svg>

</template>

<style scoped>

</style>